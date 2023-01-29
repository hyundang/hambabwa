import { authHandler } from "./auth";
import { restaurantHandler } from "./restaurant";
import { categoryHandler } from "./category";
import { menuHandler } from "./menu";
import { userHandler } from "./user";

export const handlers = [
  ...authHandler,
  ...restaurantHandler,
  ...categoryHandler,
  ...menuHandler,
  ...userHandler,
];
