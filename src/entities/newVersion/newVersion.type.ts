import { z } from "zod";
import { Control } from "react-hook-form";

export const newVersionFormSchema = z.object({
  version: z
    .string()
    .regex(/^\d+\.\d+\.\d+$/, "version format should be x.x.x"),
  versionFile: z.array(
    z.object({
      key: z.string(),
      namespace: z.string(),
      en: z.string(),
      ko: z.string(),
      ja: z.string(),
      zh: z.string(),
      zhHant: z.string(),
    }),
    {
      message: "Invalid JSON content.",
    }
  ),
});

export type NewVersionFormType = z.infer<typeof newVersionFormSchema>;

export type NewVersionProps = {
  control: Control<NewVersionFormType>;
};
