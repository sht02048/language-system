"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/shared/ui/dialog";
import { Button } from "@/src/shared/ui/button";
import NamespaceForm from "./NamespaceForm";
import { useState } from "react";

export default function UploadNamespace() {
  const [shouldOpenDialog, setShouldOpenDialog] = useState<boolean>(false);

  return (
    <Dialog open={shouldOpenDialog} onOpenChange={setShouldOpenDialog}>
      <DialogTrigger asChild>
        <Button>upload Namespace</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[700px] min-h-[700px]">
        <DialogHeader>
          <DialogTitle>Import language data by JSON</DialogTitle>
          <NamespaceForm setShouldOpenDialog={setShouldOpenDialog} />
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
