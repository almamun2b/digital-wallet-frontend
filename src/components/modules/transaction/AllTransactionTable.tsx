"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ITransaction } from "@/types/transaction.type";

interface Props {
  data: ITransaction[];
  isLoading: boolean;
}

export function AllTransactionTable({ data, isLoading }: Props) {
  if (isLoading) {
    return <p className="p-4">Loading transactions...</p>;
  }

  if (!data.length) {
    return <p className="p-4">No transactions found.</p>;
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((txn) => (
            <TableRow key={txn._id}>
              <TableCell>{txn.transactionId}</TableCell>
              <TableCell>{txn.type}</TableCell>
              <TableCell>{txn.status}</TableCell>
              <TableCell>${txn.amount}</TableCell>
              <TableCell>{txn.sender?.name}</TableCell>
              <TableCell>{txn.receiver?.name}</TableCell>
              <TableCell>
                {new Date(txn.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
