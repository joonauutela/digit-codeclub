import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./router";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = 3001;

// Connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/employee-db")
  .then((c) =>
    console.log(`MongoDB connection established: ${c.connection.host}`)
  )
  .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
