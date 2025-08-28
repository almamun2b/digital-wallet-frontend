import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  ITransactionQuery,
  TransactionType,
} from "@/types/transaction.type";
import { useState } from "react";

interface TransactionFiltersProps {
  onFilter: (filters: Partial<ITransactionQuery>) => void;
  onReset: () => void;
}

export function TransactionFilters({
  onFilter,
  onReset,
}: TransactionFiltersProps) {
  const [type, setType] = useState<TransactionType | undefined>();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleApply = () => {
    onFilter({
      type,
      startDate: startDate ? startDate.toISOString() : undefined,
      endDate: endDate ? endDate.toISOString() : undefined,
    });
  };

  const handleReset = () => {
    setType(undefined);
    setStartDate(undefined);
    setEndDate(undefined);
    onReset();
  };

  return (
    <div className="flex flex-wrap gap-4 items-end">
      {/* Transaction Type */}
      <div className="w-48">
        <label className="block mb-2">Type</label>
        <Select
          value={type ?? ""}
          onValueChange={(val) => setType(val as TransactionType)}
        >
          <SelectTrigger>
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CASH_IN">Cash In</SelectItem>
            <SelectItem value="CASH_OUT">Cash Out</SelectItem>
            <SelectItem value="DEPOSIT">Deposit</SelectItem>
            <SelectItem value="WITHDRAW">Withdraw</SelectItem>
            <SelectItem value="TRANSFER">Send Money</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Start Date */}
      <DatePicker date={startDate} setDate={setStartDate} label="Start Date" />

      {/* End Date */}
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
