import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "src/mocks/handlers";

export const server: SetupServerApi = setupServer(...handlers);
