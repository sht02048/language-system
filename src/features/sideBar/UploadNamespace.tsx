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

export default function UploadNamespace() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>upload Namespace</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[700px] min-h-[700px]">
        <DialogHeader>
          <DialogTitle>Import language data by JSON</DialogTitle>
          <NamespaceForm />
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
