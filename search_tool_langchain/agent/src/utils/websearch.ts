// Search the internet tool
// u give it a natural language query (the user's query)
// it call the tavily under the hood
// it returns a clean array of search hits -> WebSearchResultSchema

import { tavily } from "@tavily/core";
import { env } from "../shared/env";
import { WebSearchResultSchema, WebSearchResultsSchema } from "./schemas";

export async function webSearch(q: string) {
  const query = (q ?? "").trim();
  if (!query) return [];

  return await searchTavilyUtil(query);
}

async function searchTavilyUtil(query: string) {
  if (!env.TAVILY_API_KEY) {
    throw new Error("TAVILY_API_KEY is missing");
  }

  const tvly = tavily({ apiKey: env.TAVILY_API_KEY });

  try {
    const response = await tvly.search(query, {
      searchDepth: "basic",
      maxResults: 5,
      includeAnswer: false,
      includeImages: false,
    });

    const results = Array.isArray(response.results) ? response.results : [];

    const normalized = results.slice(0, 5).map((r: any) =>
      WebSearchResultSchema.parse({
        title: String(r?.title ?? "").trim() || "Untitled",
        url: String(r?.url ?? "").trim(),
        snippet: String(r?.content ?? "")
          .trim()
          .slice(0, 220),
      }),
    );

    return WebSearchResultsSchema.parse(normalized);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Search failed:", err.message);

      throw new Error(`Tavily search failed: ${err.message}`);
    } else {
      throw new Error("An unknown error occurred during Tavily search");
    }
  }
}
