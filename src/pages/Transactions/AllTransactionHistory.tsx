"use client";

import { useState } from "react";

import { AllPaginationControls } from "@/components/modules/transaction/AllPaginationControls";
import { AllTransactionFilters } from "@/components/modules/transaction/AllTransactionFilters";
import { AllTransactionTable } from "@/components/modules/transaction/AllTransactionTable";
import { useAllTransactionHistoryQuery } from "@/redux/features/transaction/transactions.api";
import type { ITransactionQuery } from "@/types/transaction.type";

export default function AllTransactionsPage() {
  const [filters, setFilters] = useState<ITransactionQuery>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { data, isLoading } = useAllTransactionHistoryQuery({
    ...filters,
    page: currentPage,
    limit,
  });

  const handleFilter = (newFilters: Partial<ITransactionQuery>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters({});
    setCurrentPage(1);
  };

  const totalPage = data?.meta?.totalPage || 1;

  return (
    <main className="p-6 w-full max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">All Transactions</h1>

      <AllTransactionFilters onFilter={handleFilter} onReset={handleReset} />

      <AllTransactionTable data={data?.data || []} isLoading={isLoading} />

      {totalPage > 1 && (
        <AllPaginationControls
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
