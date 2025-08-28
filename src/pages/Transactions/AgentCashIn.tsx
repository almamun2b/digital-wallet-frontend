import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { DynamicFormField } from "@/components/DynamicFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import Password from "@/components/ui/Password";
import { useCashInMoneyMutation } from "@/redux/features/transaction/transactions.api";
import { useAllUserQuery } from "@/redux/features/user/user.api";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import type { IAllUserParams } from "@/types/user.type";

const cashInMoneySchema = z.object({
  customerWalletId: z.string().min(10, "Receiver wallet number is required"),
  amount: z.number().positive("Amount must be greater than 0"),
  pin: z
    .string()
    .length(4, "PIN must be exactly 4 digits")
    .regex(/^\d{4}$/, "PIN must be numeric 4 digits"),
  reference: z.string().optional(),
});

type CashInMoneyFormValues = z.infer<typeof cashInMoneySchema>;

export default function CashInMoneyPage() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const form = useForm<CashInMoneyFormValues>({
    resolver: zodResolver(cashInMoneySchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      customerWalletId: "",
      amount: 0,
      pin: "",
      reference: "",
    },
  });

  // search params
  const [userParams, setUserParams] = useState<IAllUserParams>({
    searchTerm: "",
    limit: 1000,
    role: "USER",
  });

  const { data: users, isLoading: isUsersLoading } =
    useAllUserQuery(userParams);

  const { data: wallet } = useMyWalletQuery();
  const [cashInMoney, { isLoading: isSendingMoney }] = useCashInMoneyMutation();

  const onSubmit = async (values: CashInMoneyFormValues) => {
    try {
      const body = {
        agentWalletId: wallet?.data._id || "",
        customerWalletId: values.customerWalletId,
        amount: values.amount,
        pin: values.pin,
        reference: values.reference,
      };

      const res = await cashInMoney(body).unwrap();
      if (res.success) {
        toast.success(res.message || "Cash in successfully!");
        form.reset();
      }
    } catch (err) {
      toast.error("Failed to cash in money");
    }
  };

  return (
    <main className="bg-background h-full flex items-center justify-center p-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Cash In Money</CardTitle>

          {/* Search bar */}
          <div className="mt-4 relative">
            <Label className="mb-2">Search User</Label>
            <Input
              placeholder="Search Agent by phone, email, or name"
              value={userParams.searchTerm}
              onChange={(e) => {
                setUserParams((prev) => ({
                  ...prev,
                  searchTerm: e.target.value,
                }));
                setIsOpenSearch(true);
              }}
            />

            {/* Results */}
            {userParams.searchTerm && isOpenSearch && (
              <Card className="border rounded-md mt-2 max-h-40 overflow-y-auto shadow absolute top-full w-full">
                {isUsersLoading ? (
                  <div className="p-2 text-sm">Searching...</div>
                ) : users?.data?.length ? (
                  users.data.map((u: any) => (
                    <div
                      key={u._id}
                      onClick={() => {
                        if (u.wallet) {
                          form.setValue("customerWalletId", u.wallet, {
                            shouldValidate: true,
                          });
                          setUserParams((prev) => ({
                            ...prev,
                            searchTerm: "",
                          }));
                          toast.success(`Selected ${u.name}'s wallet`);
                          setIsOpenSearch(false);
                        }
                      }}
                      className="p-2 text-sm cursor-pointer"
                    >
                      <div className="font-medium">{u.name}</div>
                      <div className="text-xs text-gray-500">{u.email}</div>
                      <div className="text-xs text-gray-600">
                        {u.wallet ?? "No Wallet"}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-sm text-gray-500">
                    No users found
                  </div>
                )}
              </Card>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Receiver Wallet ID (manual or from search) */}
              <DynamicFormField
                name="customerWalletId"
                label="Customer Wallet ID *"
                children={(field) => (
                  <Input
                    {...field}
                    placeholder="Enter wallet number manually"
                  />
                )}
              />

              {/* Amount */}
              <DynamicFormField
                name="amount"
                label="Amount *"
                children={(field) => (
                  <Input
                    {...field}
                    type="number"
                    min={1}
                    placeholder="Enter amount"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />

              {/* PIN */}
              <DynamicFormField
                name="pin"
                label="Wallet PIN *"
                children={(field) => <Password {...field} />}
              />

              {/* Reference */}
              <DynamicFormField
                name="reference"
                label="Reference"
                children={(field) => (
                  <Input {...field} placeholder="Reference (e.g. Mamun)" />
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={
                  !form.formState.isValid ||
                  form.formState.isSubmitting ||
                  isSendingMoney
                }
              >
                {form.formState.isSubmitting ? "Cash In..." : "Cash In"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
