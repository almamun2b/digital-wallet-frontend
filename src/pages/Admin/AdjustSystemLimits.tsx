"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useAdjustFeesCommissionLimitsMutation } from "@/redux/features/wallet/wallet.api";
import type { IAdjustFeesCommissionLimits } from "@/types";

const feesSchema = z.object({
  cashInFeeRate: z
    .number("Must be a number")
    .min(0, "Must be >= 0")
    .max(100, "Max 100%"),
  cashOutFeeRate: z.number().min(0).max(100),
  commissionRate: z.number().min(0).max(100),
  dailyLimit: z.number().min(1, "Daily limit required"),
  monthlyLimit: z.number().min(1, "Monthly limit required"),
  sendMoneyFee: z.number().min(0),
});

export default function AdjustSystemLimits() {
  const [adjustLimits, { isLoading }] = useAdjustFeesCommissionLimitsMutation();

  const form = useForm<IAdjustFeesCommissionLimits>({
    resolver: zodResolver(feesSchema),
    defaultValues: {
      cashInFeeRate: 0,
      cashOutFeeRate: 0,
      commissionRate: 0,
      dailyLimit: 1000,
      monthlyLimit: 5000,
      sendMoneyFee: 0,
    },
  });

  const onSubmit = async (values: IAdjustFeesCommissionLimits) => {
    try {
      const res = await adjustLimits(values).unwrap();
      if (res.success) {
        toast.success("System fees/limits updated successfully!");
      } else {
        toast.error(res.message || "Update failed");
      }
    } catch (err: any) {
      toast.error("Failed to update system settings");
    }
  };

  return (
    <main className="p-6 w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Adjust System Fees & Limits</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 border p-6 rounded-lg shadow-sm"
        >
          {/* Cash In Fee */}
          <FormField
            control={form.control}
            name="cashInFeeRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cash In Fee (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.5"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cash Out Fee */}
          <FormField
            control={form.control}
            name="cashOutFeeRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cash Out Fee (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="1.0"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Commission Rate */}
          <FormField
            control={form.control}
            name="commissionRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commission Rate (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="2.0"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Daily Limit */}
          <FormField
            control={form.control}
            name="dailyLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily Limit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Monthly Limit */}
          <FormField
            control={form.control}
            name="monthlyLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Limit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="5000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Send Money Fee */}
          <FormField
            control={form.control}
            name="sendMoneyFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Send Money Fee</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="5"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
