"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminTransactionsQuery } from "@/redux/features/transaction/transactions.api";
import {
  DollarSign,
  Loader2,
  Shield,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
} from "lucide-react";

export default function Overview() {
  const { data, isLoading } = useAdminTransactionsQuery();

  const stats = [
    {
      label: "Total Users",
      value: data?.data.totalUsers ?? 0,
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      label: "Total Agents",
      value: data?.data.totalAgents ?? 0,
      icon: <UserCheck className="h-6 w-6 text-primary" />,
    },
    {
      label: "Total Admins",
      value: data?.data.totalAdmins ?? 0,
      icon: <UserCog className="h-6 w-6 text-primary" />,
    },
    {
      label: "Super Admins",
      value: data?.data.totalSuperAdmins ?? 0,
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      label: "Transactions",
      value: data?.data.totalTransactionCount ?? 0,
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
    {
      label: "Transaction Volume",
      value: `${data?.data.totalTransactionVolume?.toLocaleString() ?? 0} BDT`,
      icon: <DollarSign className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="shadow-md hover:shadow-lg transition"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">
                  {stat.label}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
