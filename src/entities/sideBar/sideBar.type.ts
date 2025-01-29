import { LANGUAGES } from "@/src/shared/constants";
import { z } from "zod";

export const formSchema = z.object({
  namespace: z.string().min(2, {
    message: "Namespace must be at least 2 characters.",
  }),
  file: z.string().refine(
    (data) => {
      try {
        JSON.parse(data);
        return true;
      } catch {
        return false;
      }
    },
    {
      message: "Invalid JSON content.",
    },
  ),
  language: z.enum(LANGUAGES),
});

export type FormType = z.infer<typeof formSchema>;
