"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  NamespaceInput,
  FileInput,
  formSchema,
  type FormType,
  VersionInput,
} from "@/src/entities/sideBar";
import { Form } from "@/src/shared/ui/form";
import { Button } from "@/src/shared/ui/button";

export default function NamespaceForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namespace: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
    console.log(123);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <NamespaceInput control={form.control} />
        <VersionInput />
        <FileInput control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
