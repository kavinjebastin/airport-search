"use strict";
import "reflect-metadata";
import { table as airport, connection } from "../utils/config.js";
import AirportUtils from "./airport-repository-helper.js";

class AirportSearch extends AirportUtils {
  #limit = 50;
  // todo this
  #columns = [airport.name, ].join(',');
  constructor(connection) {
    super(connection, airport.tableName);
    this.connection = connection;
  }

  getByCode(code) {
    const sql = `
        SELECT *
        FROM ${this.tableName}
        WHERE ${airport.code} LIKE '${code}%'
        LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
  getByName(name) {
    const sql = `
      SELECT * 
      FROM ${this.tableName}
      WHERE ${airport.concatName} LIKE '${name}%'
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
}

export default new AirportSearch(connection);
