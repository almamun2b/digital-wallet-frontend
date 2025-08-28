"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import type { IUser } from "@/types";

interface UserBlockDialogProps {
  user: IUser;
  onConfirm: () => void;
}

export function UserBlockDialog({ user, onConfirm }: UserBlockDialogProps) {
  const isBlocked = user.isActive === "BLOCKED";

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={user.role === "SUPER_ADMIN"}
          variant={isBlocked ? "secondary" : "destructive"}
          size="sm"
        >
          {isBlocked ? "Unblock User" : "Block User"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isBlocked ? "Unblock User" : "Block User"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to {isBlocked ? "unblock" : "block"}{" "}
            <strong>{user.name}</strong>? This action can be reversed later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {isBlocked ? "Unblock" : "Block"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
