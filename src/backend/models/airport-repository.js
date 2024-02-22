"use strict";
import "reflect-metadata";
import { table as airport, connection } from "../utils/config.js";
import AirportUtils from "./airport-repository-helper.js";

class AirportSearch extends AirportUtils {
  #limit = 50;
  /**
   * select * will be replaced with this #columns field when everything is finalized and is set in place
   // todo , fill this with all the columns necessary in the resultset when querying
   *  */
  #columns = [
    airport.name,
    airport.code,
    airport.city,
    airport.state,
    airport.country,
    // ! more will follow here
  ].join(",");
  constructor(connection) {
    super(connection, airport.tableName);
    this.connection = connection;
  }
  getByCountry(country) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE ${airport.concatCountry} like '${country}%'
      ORDER BY ${airport.country}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql)
  }

  getByState(state) {
    const sql = `
      SELECT * 
      FROM ${this.tableName}
      WHERE ${airport.concatState} LIKE '${state}%'
      ORDER BY ${airport.state}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }

  getByCity(city) {
    const sql = `
      SELECT *
      FROM ${this.tableName}
      WHERE ${airport.concatCity} LIKE '${city}%'
      ORDER BY ${airport.city}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }

  getByCode(code) {
    const sql = `
        SELECT *
        FROM ${this.tableName}
        WHERE ${airport.code} LIKE '${code}%'
        ORDER BY ${airport.code}
        LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
  getByName(name) {
    const sql = `
      SELECT * 
      FROM ${this.tableName}
      WHERE ${airport.concatName} LIKE '${name}%'
      ORDER BY ${airport.name}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
}

export default new AirportSearch(connection);
