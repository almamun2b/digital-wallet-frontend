import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { ApplyForAgentModal } from "./ApplyForAgentModal";

export default function MyWallet() {
  const { data: wallet, isLoading: isWalletLoading } = useMyWalletQuery();
  const { data: user, isLoading: isUserLoading } = useUserInfoQuery();

  if (isWalletLoading || isUserLoading) {
    return (
      <main className="bg-background h-full p-6">
        <div className="mx-auto container px-4 lg:px-8 max-w-4xl space-y-6">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-32 w-full rounded-lg" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
          </div>
        </div>
      </main>
    );
  }

  if (!wallet?.data || !user?.data) {
    return (
      <main className="bg-background h-full flex items-center justify-center">
        <p className="text-muted-foreground">No wallet details found.</p>
      </main>
    );
  }

  const w = wallet.data;

  return (
    <main className="bg-background p-6">
      <div className="mx-auto container px-4 lg:px-8 max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">My Wallet</h1>
          <Badge
            className={cn(
              w.status === "ACTIVE" && "bg-green-500 text-white",
              w.status === "INACTIVE" && "bg-yellow-500 text-white",
              w.status === "BLOCKED" && "bg-red-500 text-white"
            )}
          >
            {w.status}
          </Badge>
        </div>

        {/* Wallet Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Wallet Overview</span>
              {user.data.role === "USER" && <ApplyForAgentModal />}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <span className="font-semibold">User Name:</span>{" "}
              {user?.data?.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user?.data?.email}
            </p>
            <p>
              <span className="font-semibold">Wallet Number:</span>{" "}
              {w.walletNumber}
            </p>
            <p>
              <span className="font-semibold">Balance:</span> {w.balance}{" "}
              {w.currency}
            </p>
            <p>
              <span className="font-semibold">Daily Limit:</span> {w.dailyLimit}{" "}
              {w.currency}
            </p>
            <p>
              <span className="font-semibold">Monthly Limit:</span>{" "}
              {w.monthlyLimit} {w.currency}
            </p>
            <p className="text-sm text-muted-foreground">
              Created: {new Date(w.createdAt).toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: {new Date(w.updatedAt).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Deposited</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.totalDeposited} {w.currency}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Withdrawn</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.totalWithdrawn} {w.currency}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Sent</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.totalSent} {w.currency}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Received</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.totalReceived} {w.currency}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pin Attempts</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.pinAttempts}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pin Status</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {w.pinLockedUntil ? (
                <p>
                  Locked until {new Date(w.pinLockedUntil).toLocaleString()}
                </p>
              ) : (
                <p>Not Locked</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
