import { z } from "zod";

export const TableParamsSchema = z.object({
  version: z.string(),
  namespace: z.string(),
});

export type TableParams = z.infer<typeof TableParamsSchema>;
