"use strict";
import express from "express";
import { serverPort } from "../utils/config.js";
import { handleSearch } from "../service/airport-service.js";
import utilityController from "./utility-controller.js";
import cors from "cors";
import { serverURL, frontEndUrl } from "../../config.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", utilityController);
app.get("/search", handleSearch);

app.listen(serverPort, () =>
  console.log(`express is listening on http://localhost:${serverPort}/`)
);

export default app;
