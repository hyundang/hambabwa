import { rest } from "msw";

const getHi = rest.get("https://example.com/hi", (req, res, ctx) => {
  return res(ctx.json("hi"));
});

export const handlers = [getHi];
