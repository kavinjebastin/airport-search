export default class AirportUtils {
  /**
   * @param {} connection
   */
  constructor(connection, tableName) {
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
      SELECT ${airport.country}
      FROM ${this.tableName}`;
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
