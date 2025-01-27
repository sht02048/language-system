import { z } from "zod";

export const FormSchema = z.object({
  namespace: z.string().min(2, {
    message: "Namespace must be at least 2 characters.",
  }),
  file: z.instanceof(File).refine((file) => file.type === "application/json", {
    message: "Only JSON files are supported.",
  }),
});

export type FormType = z.infer<typeof FormSchema>;
