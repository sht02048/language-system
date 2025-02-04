import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import {
  type NewVersionFormType,
  VersionFileInput,
  VersionInput,
  newVersionFormSchema,
} from "@/src/entities/newVersion";
import { Form } from "@/src/shared/ui/form";
import { Button } from "@/src/shared/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { saveVersion } from "./action";

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

  async function onSubmit(values: NewVersionFormType) {
    await saveVersion(values);

    openDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <VersionInput control={form.control} />
        <VersionFileInput control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
