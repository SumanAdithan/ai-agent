import { createChatModel } from "./lc-mode";
import { AskResult, AskResultSchema } from "./schema";

export async function askStructure(query: string): Promise<AskResult> {
  const { model } = createChatModel();

  // Keep instructions brief so that schema stays visible to the model
  const system = "You are a concise assistant. Return only the requested JSON.";
  const user = `Summarize for a beginner:\n${query}`;

  const structure = model.withStructuredOutput(AskResultSchema);
  const result = await structure.invoke([
    {
      role: "system",
      content: system,
    },
    {
      role: "human",
      content: user,
    },
  ]);

  return result;
}
