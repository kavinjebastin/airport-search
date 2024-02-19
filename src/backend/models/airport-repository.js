"use strict";
import "reflect-metadata";
import { table, connection } from "../utils/config.js";

class AirportSearch {
  dbName = "airport";
  constructor(connection) {
    this.connection = connection;
  }

  getAllAirports() {
    const sql = `
    SELECT ${table.name}
    FROM ${this.dbName}
    `;
    return this.executeQuery(sql);
  }
  getAllCities() {
    const sql = `
      SELECT ${table.city}
      FROM  ${this.dbName}`;
    return this.executeQuery(sql);
  }

  getAllState() {
    const sql = `
      SELECT ${table.state}
      FROM  ${this.dbName}
    `;
    return this.executeQuery(sql);
  }

  getAllCountry() {
    const sql = `
      SELECT ${table.country}
      FROM ${this.dbName}`;
    return this.executeQuery(sql);
  }

  getByCode(code) {
    const sql = `
        SELECT *
        FROM ${this.dbName}
        WHERE code = ${code}
    `;
    return this.executeQuery(sql);
  }

  executeQuery(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
}

export default new AirportSearch(connection);
