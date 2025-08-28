import { DynamicFormField } from "@/components/DynamicFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import Password from "@/components/ui/Password";
import { useChangePasswordMutation } from "@/redux/features/user/user.api";
import type { IChangePassword, IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Current password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordPage() {
  const [changePassword, { isLoading: isUserLoading }] =
    useChangePasswordMutation();
  const form = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordSchema) => {
    try {
      const payload: IChangePassword = {
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      };
      const res = await changePassword(payload).unwrap();
      if (res.success) {
        toast.success(res.message || "Password updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update password:", error);
      toast.error(
        (error as IErrorResponse).message || "Failed to update password"
      );
    }
  };

  return (
    <main className="bg-background h-full py-12 px-4">
      <div className="mx-auto max-w-md">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Change Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <DynamicFormField
                  name="currentPassword"
                  label="Current Password *"
                  children={(field) => <Password {...field} />}
                />

                <DynamicFormField
                  name="newPassword"
                  label="New Password *"
                  description="At least 6 chars, uppercase, lowercase, number, special char"
                  children={(field) => <Password {...field} />}
                />

                <DynamicFormField
                  name="confirmPassword"
                  label="Confirm Password *"
                  children={(field) => <Password {...field} />}
                />

                <Button
                  disabled={
                    isUserLoading ||
                    !form.formState.isValid ||
                    !form.formState.isDirty
                  }
                  type="submit"
                  className="w-full"
                >
                  {isUserLoading ? "Updating..." : "Update Password"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
