import { DynamicFormField } from "@/components/DynamicFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import Password from "@/components/ui/Password";
import {
  useChangePinMutation,
  useMyWalletQuery,
} from "@/redux/features/wallet/wallet.api";
import type { IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Zod schema for validation
const pinSchema = z
  .object({
    oldPin: z
      .string()
      .min(4, "PIN must be 4 digits")
      .max(4, "PIN must be 4 digits")
      .regex(/^\d{4}$/, "PIN must be exactly 4 digits"),
    newPin: z
      .string()
      .min(4, "PIN must be 4 digits")
      .max(4, "PIN must be 4 digits")
      .regex(/^\d{4}$/, "PIN must be exactly 4 digits"),
    confirmPin: z
      .string()
      .min(4, "PIN must be 4 digits")
      .max(4, "PIN must be 4 digits")
      .regex(/^\d{4}$/, "PIN must be exactly 4 digits"),
  })
  .refine((data) => data.newPin === data.confirmPin, {
    path: ["confirmPin"],
    message: "New PIN and Confirm PIN must match",
  });

type PinFormValues = z.infer<typeof pinSchema>;

export default function ChangePin() {
  const form = useForm<PinFormValues>({
    resolver: zodResolver(pinSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      oldPin: "",
      newPin: "",
      confirmPin: "",
    },
  });
  const { data: wallet } = useMyWalletQuery();
  const [changePin] = useChangePinMutation();

  const onSubmit = async (values: PinFormValues) => {
    try {
      const payload = {
        walletId: wallet?.data._id || "",
        body: {
          oldPin: values.oldPin,
          newPin: values.newPin,
        },
      };
      const res = await changePin(payload).unwrap();
      if (res.success) {
        toast.success(res.message || "PIN changed successfully!");
      }

      form.reset();
    } catch (error) {
      toast.error((error as IErrorResponse).message || "Failed to change PIN");
    }
  };

  return (
    <main className="bg-background h-full flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Change PIN</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DynamicFormField
                name="oldPin"
                label="Old PIN *"
                children={(field) => <Password {...field} />}
              />
              <DynamicFormField
                name="newPin"
                label="New PIN *"
                children={(field) => <Password {...field} />}
              />
              <DynamicFormField
                name="confirmPin"
                label="Confirm New PIN *"
                children={(field) => <Password {...field} />}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
              >
                {form.formState.isSubmitting ? "Changing..." : "Change PIN"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
