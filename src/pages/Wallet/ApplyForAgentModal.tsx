import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useApplyForAgentMutation } from "@/redux/features/wallet/wallet.api";
import type { IErrorResponse } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export function ApplyForAgentModal() {
  const [open, setOpen] = useState(false);
  const [applyForAgent, { isLoading }] = useApplyForAgentMutation();

  const handleApplyForAgent = async () => {
    try {
      const res = await applyForAgent().unwrap();
      if (res.success) {
        toast.success(res.message || "Applied for agent successfully!");
        setOpen(false);
      }
    } catch (error) {
      console.error("Failed to apply for agent:", error);
      toast.error(
        (error as IErrorResponse).message || "Failed to apply for agent"
      );
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Apply for Agent</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apply for Agent</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to apply for agent?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleApplyForAgent} disabled={isLoading}>
            {isLoading ? "Applying..." : "Apply"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
