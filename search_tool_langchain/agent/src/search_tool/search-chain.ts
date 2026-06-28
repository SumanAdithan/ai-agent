// routerStrategy -> q
// {q, mode -> web | direct}

import { RunnableBranch, RunnableSequence } from "@langchain/core/runnables";
import { webPath } from "./web-pipeline";
import { directPath } from "./direct-pipeline";
import { routerStep } from "./route-strategy";
import { finalValidateAndPolish } from "./final-validate";
import { SearchInput } from "../utils/schemas";

// web -> webPath
// directPath

// final validation
// JSON

const branch = RunnableBranch.from<{ q: string; mode: "web" | "direct" }, any>([
  [(ctx) => ctx.mode === "web", webPath],
  directPath,
]);

export const searchChain = RunnableSequence.from([
  routerStep,
  branch,
  finalValidateAndPolish,
]);

export async function runSearch(ctx: SearchInput) {
  return await searchChain.invoke(ctx);
}
