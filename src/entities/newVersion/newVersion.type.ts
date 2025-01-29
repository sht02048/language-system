import { z } from "zod";

export const newVersionFormSchema = z.object({
  version: z
    .string()
    .regex(/^\d+\.\d+\.\d+$/, "version format should be x.x.x"),
});

export type NewVersionFormType = z.infer<typeof newVersionFormSchema>;
