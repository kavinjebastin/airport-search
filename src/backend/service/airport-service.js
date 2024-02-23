"use strict";
import dao from "../models/airport-repository.js";
import { StatusCodes } from "http-status-codes";
import airlineDtoMapper from "../utils/DTO/airline-dto-mapper.js";
import { getLimit } from "../utils/config.js";
/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */
export function handleSearch(request, response) {
  const searchValue = request.params?.search;
  if (searchValue.length === 0) {
    return response.status(StatusCodes.BAD_REQUEST).json([]);
  }
  if (searchValue.length <= 3) {
    prioritySearch(response, searchValue);
  } else {
    ordinarySearch(response, searchValue);
  }
}

function ordinarySearch(response, searchValue) {
  dao
    .getByName(searchValue)
    .then((data) => {
      if (data.length >= getLimit) {
        return responseOK(response, data);
      }
      const firstData = data?.[0];
      // todo look into this regarding regular city name and concat city name
      const { city_name: cityName, state_name: stateName } = firstData;
      dao
        .getByCity(cityName)
        .then((cityData) => {
          if (data.length + cityData.length >= getLimit) {
            return responseOK(response, [...data, ...cityData]);
          }
          if (stateName) {
            dao
              .getByState(stateName)
              .then((stateData) => {
                if (
                  data.length + cityData.length + stateData.length >=
                  getLimit
                ) {
                  return responseOK(response, [
                    ...data,
                    ...cityData,
                    ...stateData,
                  ]);
                }
                // ! continue from here
                dao.getByCountry();
              })
              .catch((error) => responseERROR(response, error));
          }
        })
        .catch((error) => responseERROR(response, error));
    })
    .catch((error) => responseERROR(response, error));
}

function prioritySearch(response, searchValue) {
  dao
    .getByCode(searchValue)
    .then((data) => {
      if (data.length !== 1) {
        return responseOK(response, data);
      }
      const first = data[0];
      const { city_name: city, state_name: state } = first;
      dao
        .getByCity(city)
        .then((cityData) => {
          if (cityData.length + data.length >= getLimit) {
            return responseOK(response, [...data, ...cityData]);
          }
          dao
            .getByState(state)
            .then((stateData) =>
              responseOK(response, [...data, ...cityData, ...stateData])
            )
            .catch((error) => responseERROR(response, error));
        })
        .catch((error) => responseERROR(response, error));
    })
    .catch((error) => responseERROR(response, error));
}

function responseOK(response, data) {
  response.status(StatusCodes.OK).json(airlineDtoMapper(data));
}
function responseERROR(response, error) {
  response.status(StatusCodes.INTERNAL_SERVER_ERROR).statusMessage =
    error?.message;
  response.end();
}
