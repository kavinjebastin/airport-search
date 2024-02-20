"use strict";
import express from "express";
import { serverPort } from "../utils/config.js";
import { handleSearch } from "../service/airport-service.js";
const app = express();
import "./utility-controller.js";

app.use(express.json());

app.get("/search", handleSearch);

app.listen(serverPort, () => console.log(`express is listening on http://localhost:${serverPort}/`));

export default app;
