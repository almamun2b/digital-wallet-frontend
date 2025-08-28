"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { IUser } from "@/types";

interface UserViewModalProps {
  user: IUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserViewModal({
  user,
  open,
  onOpenChange,
}: UserViewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>
            Full details of the selected user.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Status:</strong> {user.isActive}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Agent Status:</strong> {user.agent?.status}
          </p>
          <p>
            <strong>Address:</strong> {user?.address}
          </p>

          <p>
            <strong>Created At:</strong>{" "}
            {new Date(user?.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(user?.updatedAt).toLocaleString()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
