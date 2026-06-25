import z from "zod";

export const AskResultSchema = z.object({
  summary: z.string().min(1).max(1000).describe("short paragraph"),
  confidence: z.number().min(0).max(1).describe("0..1"),
});

export type AskResult = z.infer<typeof AskResultSchema>;
