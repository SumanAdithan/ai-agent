import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

type Provider = "openai" | "gemini" | "groq";

type HelloOutput = {
  ok: true;
  provider: Provider;
  model: string;
  message: string;
};

async function helloGemini(): Promise<HelloOutput> {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error("Google api key is not present!");

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY!,
  });

  const model = "gemini-2.5-flash-lite";

  const response = await ai.models.generateContent({
    model,
    contents: "Say a short hello",
  });

  return {
    ok: true,
    provider: "gemini",
    model,
    message: response.text ?? "",
  };
}

async function helloOpenAI(): Promise<HelloOutput> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI api key is not present!");
  }

  const model = "gpt-5-mini";

  const client = new OpenAI({
    apiKey,
  });

  const response = await client.responses.create({
    model,
    input: "Say a short hello",
  });

  return {
    ok: true,
    provider: "openai",
    model,
    message: response.output_text,
  };
}

async function helloGroq(): Promise<HelloOutput> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Groq api key is not present!");
  }

  const model = "llama-3.3-70b-versatile";

  const client = new OpenAI({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const response = await client.responses.create({
    model,
    input: "Say a short hello",
  });

  return {
    ok: true,
    provider: "groq",
    model,
    message: response.output_text,
  };
}

export async function selectAndHello(): Promise<HelloOutput> {
  const forced = (process.env.PROVIDER || "").toLocaleLowerCase();

  if (forced === "gemini") return helloGemini();
  if (forced === "groq") return helloGroq();
  if (forced === "openai") return helloOpenAI();

  if (forced)
    throw new Error(
      `Unsupported PROVIDER=${forced}. use openai | groq | gemini`,
    );

  if (process.env.GOOGLE_API_KEY) {
    try {
      return await helloGemini();
    } catch {}
  }

  if (process.env.OPENAI_API_KEY) {
    try {
      return await helloOpenAI();
    } catch {}
  }

  if (process.env.GROQ_API_KEY) {
    try {
      return await helloGroq();
    } catch {}
  }

  throw new Error("No provider configured");
}
