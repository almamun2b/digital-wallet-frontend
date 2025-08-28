import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ITransaction } from "@/types/transaction.type";

interface TransactionTableProps {
  transactions: ITransaction[];
  isLoading: boolean;
  showCommission?: boolean;
}

export function TransactionTable({
  transactions,
  isLoading,
  showCommission,
}: TransactionTableProps) {
  if (isLoading) {
    return (
      <div className=" flex flex-col gap-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    );
  }

  if (!transactions?.length) {
    return (
      <div className="p-4 text-center text-gray-500">
        No transactions found.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          {showCommission && <TableHead>Commission</TableHead>}
          <TableHead>Status</TableHead>
          <TableHead>Sender</TableHead>
          <TableHead>Receiver</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn._id}>
            <TableCell>{txn.transactionId}</TableCell>
            <TableCell>{txn.type}</TableCell>
            <TableCell>{txn.amount} BDT</TableCell>
            {showCommission && <TableCell>{txn.commission} BDT</TableCell>}
            <TableCell>{txn.status}</TableCell>
            <TableCell>{txn.sender?.name || "-"}</TableCell>
            <TableCell>{txn.receiver?.name || "-"}</TableCell>
            <TableCell>
              {new Date(txn.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
