import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./router";
import { apikeyMiddleware } from "./middleware";
import { getContextPath } from "./util";
import { initializeDB } from "./data/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const contextPath = getContextPath();

app.use(express.json());
app.use(apikeyMiddleware);
app.use(contextPath, router);
initializeDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
