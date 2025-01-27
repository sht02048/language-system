"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  NamespaceInput,
  FileInput,
  FormSchema,
  type FormType,
} from "@/src/entities/";
import { Form } from "@/src/shared/ui/form";
import { Button } from "@/src/shared/ui/button";

export default function NamespaceForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="space-y-6 mt-4">
        <NamespaceInput control={form.control} />
        <FileInput control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
