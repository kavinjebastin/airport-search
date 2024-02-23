"use strict";
import "reflect-metadata";
import { table as airport, connection, getLimit } from "../utils/config.js";
import AirportUtils from "./airport-repository-helper.js";

class AirportSearch extends AirportUtils {
  #limit = getLimit;
  #selectFrom = `
    SELECT *
    FROM ${this.tableName}
  `;
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
  getAirportsBasedOnLetter(search) {
    switch (search.length) {
      case 1:
        return this.getAirportsBasedOnFirstLetter(search);
      case 2:
        return this.getAirportsBasedOnTwoLetters(search);
      case 3:
        return this.getAirportsBasedOnThreeLetters(search);
      default:
        return this.getAirports(search);
    }
  }
  getAirportsBasedOnFirstLetter(letter) {
    const sql = `
      ${this.#selectFrom}
      WHERE ${airport.name} LIKE '${letter}%' AND 
            ${airport.city} LIKE '${letter}%' AND
            ${airport.state} LIKE 
    `;
    return this.executeQuery(sql);
  }

  getByCountry(country) {
    const sql = `
      ${this.#selectFrom}
      WHERE ${airport.concatCountry} like '${country}%'
      ORDER BY ${airport.country}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }

  getByState(state) {
    const sql = `
      ${this.#selectFrom}
      WHERE ${airport.concatState} LIKE '${state}%'
      ORDER BY ${airport.state}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }

  getByCity(city) {
    const sql = `
      ${this.#selectFrom}
      WHERE ${airport.concatCity} LIKE '${city}%'
      ORDER BY ${airport.city}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }

  getByCode(code) {
    const sql = `
        ${this.#selectFrom}
        WHERE ${airport.code} LIKE '${code}%'
        ORDER BY ${airport.code}
        LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
  getByName(name) {
    const sql = `
      ${this.#selectFrom}
      WHERE ${airport.concatName} LIKE '${name}%'
      ORDER BY ${airport.name}
      LIMIT ${this.#limit}
    `;
    return this.executeQuery(sql);
  }
}

export default new AirportSearch(connection, airport.tableName);
