import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.string().default("5000"),
  ALLOWED_ORIGIN: z.url().default("http://localhost:3000"),
  MODEL_PROVIDER: z.enum(["openai", "gemini", "groq"]).default("gemini"),
  OPENAI_API_KEY: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  GROQ_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().default("gpt-5-mini"),
  GEMINI_MODEL: z.string().default("gemini-2.5-flash-lite"),
  GROQ_MODEL: z.string().default("llama-3.3-70b-versatile"),
  SEARCH_PROVIDER: z.string().default("tavily"),
  TAVILY_API_KEY: z.string().optional(),
});

export const env = EnvSchema.parse(process.env);
