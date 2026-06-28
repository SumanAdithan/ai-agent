import { Router } from "express";
import { SearchInputSchema } from "../utils/schemas";
import { runSearch } from "../search_tool/search-chain";

export const searchRouter = Router();

searchRouter.post("/", async (req, res) => {
  try {
    const input = SearchInputSchema.parse(req.body);
    const result = await runSearch(input);
    res.status(200).json(result);
  } catch (err) {
    const msg = (err as Error)?.message ?? "unknown error occured";
    res.status(400).json({ error: msg });
  }
});
