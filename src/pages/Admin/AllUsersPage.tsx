"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { toast } from "sonner";

import { UserBlockDialog } from "@/components/modules/user/UserBlockDialog";
import { UserViewModal } from "@/components/modules/user/UserViewModal";
import {
  useAllUserQuery,
  useBlockUnblockUserMutation,
  useManageAgentMutation,
} from "@/redux/features/user/user.api";
import type { AGENT_STATUS, IUser } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function AllUsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4);

  const { data, isLoading } = useAllUserQuery({ page: currentPage, limit });
  const [blockUnblockUser] = useBlockUnblockUserMutation();

  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [manageAgent] = useManageAgentMutation();

  const handleBlockUnblock = async (
    userId: string,
    isActive: IUser["isActive"]
  ) => {
    try {
      const res = await blockUnblockUser({
        id: userId,
        body: {
          isActive: isActive === "BLOCKED" ? "ACTIVE" : "BLOCKED",
        },
      }).unwrap();
      if (res.success) {
        // toast.success(res.message);
        toast.success("User updated successfully!");
      }
    } catch {
      toast.error("Action failed");
    }
  };
  const handleManageAgent = async (userId: string, status: AGENT_STATUS) => {
    try {
      const res = await manageAgent({
        id: userId,
        body: {
          status: status,
        },
      }).unwrap();
      if (res.success) {
        toast.success("User updated successfully!");
      }
    } catch {
      toast.error("Action failed");
    }
  };

  const totalPage = data?.meta?.totalPage || 1;

  return (
    <main className="p-6 w-full max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>User Status</TableHead>
              <TableHead>Agent Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isLoading &&
              data?.data?.map((user: IUser) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        user.isActive === "BLOCKED"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.isActive}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        user.agent?.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.agent?.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedUser(user);
                        setIsViewOpen(true);
                      }}
                    >
                      View
                    </Button>
                    <UserBlockDialog
                      user={user}
                      onConfirm={() =>
                        handleBlockUnblock(user._id, user.isActive)
                      }
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Manage Agent
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Set Agent Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleManageAgent(user._id, "NONE")}
                        >
                          None
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleManageAgent(user._id, "PENDING")}
                        >
                          Pending
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleManageAgent(user._id, "APPROVED")
                          }
                        >
                          Approved
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleManageAgent(user._id, "SUSPENDED")
                          }
                        >
                          Suspended
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPage > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    <PaginationLink isActive={currentPage === page}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* View User Modal */}
      {selectedUser && (
        <UserViewModal
          user={selectedUser}
          open={isViewOpen}
          onOpenChange={setIsViewOpen}
        />
      )}
    </main>
  );
}
