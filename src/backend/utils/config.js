"use strict";
import mysql from 'mysql2'
export const table = {
  id: "id",
  name: "name",
  code: "code",
  city: "city",
  state: "state",
  country: "country",
};
export const connection = mysql.createConnection({
  user: 'root',
  password: 'admin@123',
  host: 'localhost'
})
