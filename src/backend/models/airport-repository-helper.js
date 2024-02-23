import { table as airport } from "../utils/config.js";
export default class AirportUtils {
  constructor(connection, tableName) {
    console.log(tableName);
    this.connection = connection;
    this.tableName = tableName;
  }
  getAllAirports() {
    const sql = `
      SELECT ${airport.name}
      FROM ${this.tableName}`;
    return this.executeQuery(sql);
  }
  getAllCities() {
    const sql = `
      SELECT ${airport.city}
      FROM  ${this.tableName}`;
    return this.executeQuery(sql);
  }

  getAllState() {
    const sql = `
      SELECT ${airport.state}
      FROM  ${this.tableName}`;
    return this.executeQuery(sql);
  }

  getAllCountry() {
    const sql = `
      SELECT country_name
      FROM airport_with_rank`;
    return this.executeQuery(sql);
  }

  executeQuery(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  /**
   * @param {string} sqlQuery
   * @param {string[]} args
   */
  executePreparedStatement(sqlQuery, args) {
    return new Promise((resolve, reject) => {
      this.connection.execute(sqlQuery, args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
