"use strict";
import express from "express";
import { table as airport } from "../utils/config.js";
import {
  getAllAirports,
  getAllCountries,
} from "../service/utility-airport-service.js";
const app = express();
const path = {
  airports: `${airport.name}/`,
  city: `${airport.city}/`,
};

app.get(path.city, getAllCountries);

app.get(path.airports, getAllAirports);

export default app;
