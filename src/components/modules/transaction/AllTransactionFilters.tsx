"use client";

import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  ITransactionQuery,
  TransactionStatus,
  TransactionType,
} from "@/types/transaction.type";
import { useState } from "react";

interface Props {
  onFilter: (filters: Partial<ITransactionQuery>) => void;
  onReset: () => void;
}

export function AllTransactionFilters({ onFilter, onReset }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [amount, setAmount] = useState<number | undefined>();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleApply = () => {
    onFilter({
      searchTerm,
      type: type as TransactionType,
      status: status as TransactionStatus,
      amount,
      startDate: startDate ? startDate.toISOString() : undefined,
      endDate: endDate ? endDate.toISOString() : undefined,
    });
  };

  const handleReset = () => {
    setSearchTerm("");
    setType(undefined);
    setStatus(undefined);
    setAmount(undefined);
    setStartDate(undefined);
    setEndDate(undefined);
    onReset();
  };

  return (
    <div className="flex flex-wrap gap-4 items-end p-4 border rounded-md">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Search</label>
        <Input
          placeholder="Transaction ID / Reference"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-56"
        />
      </div>

      <div>
        <label className="mb-1 text-sm font-medium">Type</label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DEPOSIT">Deposit</SelectItem>
            <SelectItem value="WITHDRAW">Withdraw</SelectItem>
            <SelectItem value="TRANSFER">Transfer</SelectItem>
            <SelectItem value="CASH_IN">Cash In</SelectItem>
            <SelectItem value="CASH_OUT">Cash Out</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-1 text-sm font-medium">Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="COMPLETED">Completed</SelectItem>
            <SelectItem value="FAILED">Failed</SelectItem>
            <SelectItem value="CANCELLED">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-1 text-sm font-medium">Amount</label>
        <Input
          type="number"
          placeholder="Amount"
          value={amount ?? ""}
          onChange={(e) =>
            setAmount(e.target.value ? Number(e.target.value) : undefined)
          }
          className="w-32"
        />
      </div>

      <DatePicker date={startDate} setDate={setStartDate} label="Start Date" />
      <DatePicker date={endDate} setDate={setEndDate} label="End Date" />

      <div className="flex gap-2">
        <Button onClick={handleApply}>Apply</Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
