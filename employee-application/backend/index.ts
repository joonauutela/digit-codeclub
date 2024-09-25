import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./router";
import {
  apikeyMiddleware,
  defaultResponseHeaderMiddleware,
} from "./middleware";
import { getContextPath } from "./util";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const contextPath = getContextPath();

app.use(apikeyMiddleware);
app.use(defaultResponseHeaderMiddleware);
app.use(contextPath, router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
