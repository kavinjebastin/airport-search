"use strict";
import express from "express";
import {
  getAllAirports,
  getAllCountries,
} from "../service/utility-airport-service.js";
const route = express.Router();

route.get("/countries", getAllCountries);

route.get("/airports", getAllAirports);

export default route;
