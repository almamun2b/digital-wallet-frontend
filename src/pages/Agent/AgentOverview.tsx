import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  useAgentTransactionsQuery,
  useMyTransactionsQuery,
} from "@/redux/features/transaction/transactions.api";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import type { TransactionStatus, TransactionType } from "@/types";
import { ArrowDownLeft, ArrowUpLeft, Banknote, Send } from "lucide-react";
import { Link } from "react-router";

export default function AgentOverview() {
  const { data: user, isLoading: isUserLoading } = useUserInfoQuery();
  const { data: wallet, isLoading: isWalletLoading } = useMyWalletQuery();
  const { data: agentTransactions, isLoading: isAgentTransactionsLoading } =
    useAgentTransactionsQuery();

  const transactionQuery = {
    limit: 4,
    page: 1,
    sort: "-createdAt",
  };
  const { data: transactions, isLoading: isTransactionsLoading } =
    useMyTransactionsQuery(transactionQuery);

  const recentTransactions = transactions?.data;

  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case "DEPOSIT":
      case "CASH_IN":
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
      case "WITHDRAW":
      case "CASH_OUT":
        return <ArrowUpLeft className="h-4 w-4 text-red-600" />;
      case "TRANSFER":
        return <Send className="h-4 w-4 text-blue-600" />;
      default:
        return <Banknote className="h-4 w-4" />;
    }
  };

  const formatTransactionType = (type: TransactionType) => {
    return type
      .replace("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getTransactionColor = (
    type: TransactionType,
    currentUserId?: string,
    senderId?: string
  ) => {
    if (type === "DEPOSIT" || type === "CASH_IN") {
      return "text-green-600";
    }
    if (type === "WITHDRAW" || type === "CASH_OUT") {
      return "text-red-600";
    }
    if (currentUserId === senderId) {
      return "text-red-600";
    }
    return "text-green-600";
  };

  const getTransactionSign = (
    type: TransactionType,
    currentUserId?: string,
    senderId?: string
  ) => {
    if (type === "DEPOSIT" || type === "CASH_IN") {
      return "+";
    }
    if (type === "WITHDRAW" || type === "CASH_OUT") {
      return "-";
    }
    if (currentUserId === senderId) {
      return "-";
    }
    return "+";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-600";
      case "PENDING":
        return "text-yellow-600";
      case "FAILED":
      case "CANCELLED":
        return "text-red-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <main className="bg-background min-h-screen py-10">
      <div className="mx-auto container px-4 lg:px-8 space-y-8">
        {/* Overview Header */}
        <h1 className="text-3xl font-bold">Overview</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
            </CardHeader>
            <CardContent>
              {isWalletLoading ? (
                <Skeleton className="h-10 w-20 rounded-md" />
              ) : (
                <p className="text-4xl font-bold text-primary">
                  ৳ {wallet?.data?.balance.toLocaleString()}
                </p>
              )}
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Wallet Status</CardTitle>
            </CardHeader>
            <CardContent>
              {isWalletLoading ? (
                <Skeleton className="h-10 w-20 rounded-md" />
              ) : (
                <p className="text-4xl font-bold text-primary">
                  {wallet?.data?.status}
                </p>
              )}
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="sr-only">
              <CardTitle>Wallet Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {isWalletLoading || isUserLoading ? (
                <Skeleton className="h-20 w-full rounded-md" />
              ) : (
                <>
                  <p className="text-base text-foreground">
                    Email: {user?.data?.email}
                  </p>
                  <p className="text-base text-foreground">
                    Phone: {user?.data?.phone || "N/A"}
                  </p>
                  <p className="text-base text-foreground">
                    Wallet: {wallet?.data?.walletNumber}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Agent Transactions Overview */}
        <section>
          {isAgentTransactionsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="py-4">
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : agentTransactions?.data ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Cash In Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-green-600">
                      {agentTransactions.data.cashIn.totalCount}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total: ৳
                      {agentTransactions.data.cashIn.totalAmount.toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Cash Out Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-red-600">
                      {agentTransactions.data.cashOut.totalCount}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total: ৳
                      {agentTransactions.data.cashOut.totalAmount.toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Commission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">
                      ৳{agentTransactions.data.totalCommission.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Earned from transactions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Commission Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-blue-600">
                      {agentTransactions.data.commissionRate}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Per transaction
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  No agent transaction data available
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Recent Transactions */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            {recentTransactions && recentTransactions?.length > 0 && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  to={
                    user?.data?.role === "AGENT"
                      ? "/agent/transaction-history"
                      : "/user/transaction-history"
                  }
                >
                  View All
                </Link>
              </Button>
            )}
          </div>

          {isTransactionsLoading ? (
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="py-4">
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : recentTransactions && recentTransactions.length === 0 ? (
            <Card className="shadow-sm">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No transactions found</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Your recent transactions will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {recentTransactions &&
                recentTransactions.map((tx) => (
                  <Card key={tx._id} className="shadow-sm">
                    <CardContent className="flex justify-between items-center py-4">
                      <div className="flex items-center gap-3">
                        {getTransactionIcon(tx.type)}
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">
                              {formatTransactionType(tx.type)}
                            </p>
                            {tx.reference && (
                              <span className="text-xs text-muted-foreground">
                                #{tx.reference}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(tx.createdAt)}
                          </p>
                          {tx.type === "TRANSFER" && (
                            <p className="text-xs text-muted-foreground">
                              {user?.data?._id === tx.sender._id
                                ? `To: ${tx.receiver.name}`
                                : `From: ${tx.sender.name}`}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${getTransactionColor(
                            tx.type,
                            user?.data?._id,
                            tx.sender._id
                          )}`}
                        >
                          {getTransactionSign(
                            tx.type,
                            user?.data?._id,
                            tx.sender._id
                          )}{" "}
                          ৳{tx.amount.toLocaleString()}
                        </p>
                        <p className={`text-xs ${getStatusColor(tx.status)}`}>
                          {tx.status
                            .toLowerCase()
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </p>
                        {tx.fee > 0 && (
                          <p className="text-xs text-muted-foreground">
                            Fee: ৳{tx.fee.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
