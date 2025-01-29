import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  NamespaceInput,
  FileInput,
  formSchema,
  type FormType,
} from "@/src/entities/sideBar";
import { Form } from "@/src/shared/ui/form";
import { Button } from "@/src/shared/ui/button";
import { saveTranslation } from "./action";
import LanguageInput from "@/src/entities/sideBar/LanguageInput";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setShouldOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export default function NamespaceForm({ setShouldOpenDialog }: Props) {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namespace: "",
    },
  });

  async function onSubmit(values: FormType) {
    const formData = new FormData();
    formData.append("namespace", values.namespace);
    formData.append("file", values.file);
    formData.append("language", values.language);

    await saveTranslation(formData);

    setShouldOpenDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <NamespaceInput control={form.control} />
        <LanguageInput control={form.control} />
        <FileInput control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
