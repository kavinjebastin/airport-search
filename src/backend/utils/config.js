"use strict";
import mysql from "mysql2";

export const getLimit = 50;
export const table = {
  tableName: "airport_with_rank",

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
//todo make this into a pool
export const connection = mysql.createPool({
  user: "root",
  password: "admin@123",
  host: "localhost",
  database: "airport",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const serverPort = 5000;
export const serverURL = `http://localhost:${serverPort}/`;
// process.hrtime
