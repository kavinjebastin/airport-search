"use strict";
import mysql from "mysql2";
export const table = {
  id: "airport_id",
  name: "airport_name",
  code: "airport_code",
  city: "city_name",
  state: "state_name",
  country: "country_name",

  concatName: "concat_airport_name",
  concatCity: "concat_city",
  concatState: "concat_state",
  concatCountry: "concat_country",
};
export const connection = mysql.createConnection({
  user: "root",
  password: "admin@123",
  host: "localhost",
  database: "airport",
});

export const serverPort = 5000;
// process.hrtime