import { rest } from "msw";
import { menuTypes } from "src/types";
import menuData from "../data/menu";

const getMenuByCategory = rest.get<menuTypes.menuItemProps[]>(
  `${API_DOMAIN}/api/menu/category/:id`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: menuData.getMenuByCategory,
      })
    );
  }
);

export const menuHandler = [getMenuByCategory];
