import { z } from "zod";

export const tableParamsSchema = z.object({
  version: z.string(),
  namespace: z.string(),
});

export type TableParams = z.infer<typeof tableParamsSchema>;
