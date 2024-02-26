import { createClient } from "redis";
import dao from "../models/airport-repository.js";
const redisClient = createClient();
await redisClient.connect();

const autoSetLatLongDataOnRedis = () => {
  redisClient
    .ZCOUNT("airport:code:latlong", 0, "inf")
    .then(async (data) => {
      if (data) {
        return console.log(
          "Lat-Long data present in redis, No need for update"
        );
      }
      const sql = `
        SELECT airport_code, hotel_latitude, hotel_longitude  
        FROM airport.airport_with_rank 
        WHERE hotel_latitude IS NOT NULL AND hotel_longitude IS NOT NULL`;
      const result = await dao.executeQuery(sql);
      result.forEach(setLatLong);
      return console.log("Lat-long data added to redis successfully");
    })
    .catch(console.error);
};
autoSetLatLongDataOnRedis();
/**
 * @param {Object} this
 * @param {string} this.airport_code - Three digit airport code,
 * @param {string} this.hotel_latitude - airport latitude in decimal format
 * @param {string} this.hotel_longitude -airport longitude in decimal format
 */
function setLatLong({
  airport_code: airportCode,
  hotel_latitude: latitude,
  hotel_longitude: longitude,
}) {
  redisClient.GEOADD("airport:code:latlong", {
    longitude,
    latitude,
    member: airportCode,
  });
}
