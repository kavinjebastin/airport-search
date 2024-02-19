import { app } from "./flight-controller.js";
import {table} from '../utils/config.js'
import { getAllCountries,  } from "../service/utility-airport-service.js";
const path = {
    airports: `${table.name}/`,
    city: `${table.city}/`
}


app.get(path.city, getAllCountries)

app.get(path.airports,get)