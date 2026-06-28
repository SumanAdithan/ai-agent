// top 10 engineering colleges in india 2025 ?

// search the web -> using tavily
// visit each and every result page -> using generic node fetch
// summarize -> done by llm
// return candidate -> return final data

// types in ui -> search the web -> visit every result page -> summarize

import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables";
import { webSearch } from "../utils/websearch";
import { openUrl } from "../utils/openUrl";
import { summarize } from "../utils/summarize";
import { Candidate } from "./types";
import { getChatModel } from "../shared/models";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const setTopResults = 5;

export const webSearchStep = RunnableLambda.from(
  async (ctx: { q: string; mode: "web" | "direct" }) => {
    const results = await webSearch(ctx.q); // tavily

    return {
      ...ctx,
      results,
    };
  },
);

export const openAndSummarizeStep = RunnableLambda.from(
  async (ctx: { q: string; mode: "web" | "direct"; results: any[] }) => {
    if (!Array.isArray(ctx.results) || ctx.results.length === 0) {
      return {
        ...ctx,
        pageSummaries: [],
        fallback: "no-results" as const,
      };
    }

    const extractTopResults = ctx.results.slice(0, setTopResults);

    const settledResults = await Promise.allSettled(
      extractTopResults.map(async (result: any) => {
        const opened = await openUrl(result.url);
        const summarizeContent = await summarize(opened.content);

        return {
          url: opened.url,
          summary: summarizeContent.summary,
        };
      }),
    );

    // status -> fulfilled
    const settledResultPageSummaries = settledResults
      .filter((settledResult) => settledResult.status === "fulfilled")
      .map((s) => s.value);

    // edge case: all settled every case fails
    if (settledResultPageSummaries.length === 0) {
      const fallbackSnippetSummaries = extractTopResults
        .map((result: any) => ({
          url: result.url,
          summary: String(result.snippet || result.title || "").trim(),
        }))
        .filter((x: any) => x.summary.length > 0);

      return {
        ...ctx,
        pageSummaries: fallbackSnippetSummaries,
        fallback: "snippets" as const,
      };
    }

    return {
      ...ctx,
      pageSummaries: settledResultPageSummaries,
      fallback: "none" as const,
    };
  },
);

// compose step
// {q, pageSummaries:[{url, summary}], mode, fallback}
// candidate -> answer, sources, mode

export const composeStep = RunnableLambda.from(
  async (ctx: {
    q: string;
    results: any[];
    pageSummaries: any[];
    fallback: "no-results" | "snippets" | "none";
  }): Promise<Candidate> => {
    const model = getChatModel({ temperature: 0.2 });

    if (!ctx.pageSummaries || ctx.pageSummaries.length === 0) {
      const directResponseFromModel = await model.invoke([
        new SystemMessage(
          [
            "You answer briefly and clearly for beginners",
            "If unsure, say so",
          ].join("\n"),
        ),
        new HumanMessage(ctx.q),
      ]);

      const directAns = (
        typeof directResponseFromModel.content === "string"
          ? directResponseFromModel.content
          : String(directResponseFromModel.content)
      ).trim();

      return {
        answer: directAns,
        sources: [],
        mode: "direct",
      };
    }

    const res = await model.invoke([
      new SystemMessage(
        [
          "You concisely answer questions using provided page summaries",
          "Rules",
          "- Be accurate and neutral",
          "- 5-8 sentences max",
          "- Use only the provided summaries; do not invent new facts",
        ].join("\n"),
      ),
      new HumanMessage(
        [
          `Question: ${ctx.q}`,
          "summaries:",
          JSON.stringify(ctx.pageSummaries, null, 2),
        ].join("\n"),
      ),
    ]);

    const finalAns =
      typeof res.content === "string" ? res.content : String(res.content);

    const extractSources = ctx.pageSummaries.map((x) => x.url);

    return {
      answer: finalAns,
      sources: extractSources,
      mode: "web",
    };
  },
);

// LCEL
// webSearchStep
// openAndSummarizeStep
// composeStep

export const webPath = RunnableSequence.from([
  webSearchStep,
  openAndSummarizeStep,
  composeStep,
]);
