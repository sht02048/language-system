import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import {
  type NewVersionFormType,
  VersionInput,
  newVersionFormSchema,
} from "@/src/entities/newVersion";
import { Form } from "@/src/shared/ui/form";
import { Button } from "@/src/shared/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  openDialog: Dispatch<SetStateAction<boolean>>;
};

export default function NewVersionForm({ openDialog }: Props) {
  const form = useForm<NewVersionFormType>({
    resolver: zodResolver(newVersionFormSchema),
    defaultValues: {
      version: "",
    },
  });

  function onSubmit() {
    openDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <VersionInput control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
