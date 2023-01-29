import { rest } from "msw";
import { categoryTypes } from "src/types";
import { categoryData } from "../data";

const getCategory = rest.get<categoryTypes.getCategoryResProps[]>(
  `${API_DOMAIN}/api/category`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        statusCode: 200,
        message: "success",
        data: categoryData.getCategoryRes,
      })
    );
  }
);

export const categoryHandler = [getCategory];
