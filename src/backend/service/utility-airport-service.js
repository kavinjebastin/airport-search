import dao from "../models/airport-repository.js";
import { StatusCodes } from "http-status-codes";

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
export function getAllAirports(_, response) {
  handleResponse(response, dao.getAllAirports);
}

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
export function getAllCities(_, response) {
  handleResponse(response, dao.getAllCities);
}

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
export function getAllStates(_, response) {
  handleResponse(response, dao.getAllState);
}

/**
 * @param {import('express').Request} request
 * @param {import('express').getAllCitiesResponse} response
 */
export function getAllCountries(_, response) {
  handleResponse(response, dao.getAllCountry);
}

/**
 * @param {import('express').Response} response
 * @param {Function} callback
 * @returns {void}
 */
function handleResponse(response, callback) {
  callback()
    .then((data) => {
      response.status(StatusCodes.OK).write(data);
    })
    .catch((error) => {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR);
      response.statusMessage = error?.message;
    })
    .finally(() => {
      response.end();
    });
}
