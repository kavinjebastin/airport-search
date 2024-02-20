"use strict";
import "reflect-metadata";
import { table as airport, connection } from "../utils/config.js";

class AirportSearch {
  #tableName = "airport_with_rank";
  #connection
  constructor(connection) {
    this.#connection = connection;
  }

  getAllAirports() {
    const sql = `
    SELECT ${airport.name}
    FROM ${this.#tableName}
    `;
    return this.#executeQuery(sql);
  }
  getAllCities() {
    const sql = `
      SELECT ${airport.city}
      FROM  ${this.#tableName}`;
    return this.#executeQuery(sql);
  }

  getAllState() {
    const sql = `
      SELECT ${airport.state}
      FROM  ${this.#tableName}
    `;
    return this.#executeQuery(sql);
  }

  getAllCountry() {
    const sql = `
      SELECT ${airport.country}
      FROM ${this.#tableName}
      `;
    return this.#executeQuery(sql);
  }

  getByCode(code) {
    // [todo] validate the code
    const sql = `
        SELECT *
        FROM ${this.#tableName}
        WHERE ${airport.code} = ${code}
    `;
    return this.#executeQuery(sql);
  }
  getByName (name) {
    const sql = `
      SELECT * 
      FROM ${this.#tableName}
      WHERE ${airport.concatName} = ${name}
    `
  }

  #executeQuery(sql) {
    return new Promise((resolve, reject) => {
      this.#connection.query(sql, (error, data) => {
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
