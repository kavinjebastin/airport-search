"use strict";
import express from "express";
import { serverPort } from "../utils/config.js";
import { handleSearch } from "../service/airport-service.js";
import utilityController from "./utility-controller.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
// todo fix this route
app.use("/util", utilityController);
app.get("/search/:search", handleSearch);

app.listen(serverPort, () =>
  console.log(`express is listening on http://localhost:${serverPort}/`)
);

export default app;
