import { TransactionFilters } from "@/components/modules/transaction/TransactionFilters";
import { TransactionTable } from "@/components/modules/transaction/TransactionTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMyTransactionsQuery } from "@/redux/features/transaction/transactions.api";
import type { ITransactionQuery } from "@/types/transaction.type";
import { useState } from "react";

export default function AgentCommissionHistory() {
  const [query, setQuery] = useState<ITransactionQuery>({
    page: 1,
    limit: 10,
  });

  const { data: transactions, isLoading } = useMyTransactionsQuery(query);

  const handleFilter = (filters: Partial<ITransactionQuery>) => {
    setQuery((prev) => ({ ...prev, page: 1, ...filters }));
  };

  const handleReset = () => {
    setQuery({ page: 1, limit: 10 });
  };

  const totalPage = transactions?.meta?.totalPage || 1;

  return (
    <main className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Commission History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <TransactionFilters onFilter={handleFilter} onReset={handleReset} />

          {/* Table */}
          <TransactionTable
            transactions={transactions?.data || []}
            isLoading={isLoading}
            showCommission
          />

          {/* Pagination (from your AddTourType example) */}
          {totalPage > 1 && (
            <div className="flex justify-end mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setQuery((prev) => ({
                          ...prev,
                          page: Math.max(1, (prev.page || 1) - 1),
                        }))
                      }
                      className={
                        query.page === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                  {Array.from(
                    { length: totalPage },
                    (_, index) => index + 1
                  ).map((page) => (
                    <PaginationItem
                      key={page}
                      onClick={() => setQuery((prev) => ({ ...prev, page }))}
                    >
                      <PaginationLink isActive={query.page === page}>
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setQuery((prev) => ({
                          ...prev,
                          page: Math.min(totalPage, (prev.page || 1) + 1),
                        }))
                      }
                      className={
                        query.page === totalPage
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
