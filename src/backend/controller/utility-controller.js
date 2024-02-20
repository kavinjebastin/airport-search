"use strict"
import app  from "./flight-controller.js";
import {table as airport} from '../utils/config.js'
import { getAllAirports, getAllCountries,  } from "../service/utility-airport-service.js";
const path = {
    airports: `${airport.name}/`,
    city: `${airport.city}/`
}

app.get(path.city, getAllCountries)

app.get(path.airports, getAllAirports)