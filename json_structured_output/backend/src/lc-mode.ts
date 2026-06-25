import { ChatOpenAI } from "@langchain/openai";
import { loadEnv } from "./env";
import { ChatGoogle } from "@langchain/google";
import { ChatGroq } from "@langchain/groq";

export type Provider = "openai" | "gemini" | "groq";

export function createChatModel() {
  loadEnv();

  const forced = (process.env.PROVIDER || "").toLowerCase();
  const hasOpenAi = process.env.OPENAI_API_KEY;
  const hasGemini = process.env.GOOGLE_API_KEY;
  const hasGroq = process.env.GROQ_API_KEY;

  const base = {
    temperature: 0,
  };

  if (forced === "openai" || (!forced && hasOpenAi)) {
    return {
      provider: "openai",
      model: new ChatOpenAI({
        ...base,
        model: "gpt-5-mini",
      }),
    };
  }

  if (forced === "gemini" || (!forced && hasGemini)) {
    return {
      provider: "gemini",
      model: new ChatGoogle({
        ...base,
        model: "gemini-2.5-flash-lite",
      }),
    };
  }

  if (forced === "groq" || (!forced && hasGroq)) {
    return {
      provider: "groq",
      model: new ChatGroq({
        ...base,
        model: "llama-3.3-70b-versatile",
      }),
    };
  }

  return {
    provider: "gemini",
    model: new ChatGoogle({
      ...base,
      model: "gemini-2.5-flash-lite",
    }),
  };
}
