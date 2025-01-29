"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/shared/ui/dialog";
import { Button } from "@/src/shared/ui/button";
import { NewVersionForm } from "@/src/features/newVersion";

export default function NewVersion() {
  const [shouldOpenDialog, setShouldOpenDialog] = useState<boolean>(false);

  return (
    <Dialog open={shouldOpenDialog} onOpenChange={setShouldOpenDialog}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={"lg"} className="font-semibold">
          Create new version
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[700px] min-h-[700px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create new version</DialogTitle>
        </DialogHeader>
        <NewVersionForm openDialog={setShouldOpenDialog} />
      </DialogContent>
    </Dialog>
  );
}
