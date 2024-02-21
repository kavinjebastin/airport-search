"use strict";
import dao from "../models/airport-repository.js";
import { StatusCodes } from "http-status-codes";
import dto from "../utils/DTO/airline-dto-mapper.js";

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */
export function handleSearch(request, response) {
  const searchValue = request.query?.search;
  if (searchValue.length <= 2) {
    prioritySearch(searchValue)
      .then((data) => {
        response.status(StatusCodes.OK).json(dto(data));
      })
      .catch((error) => {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).statusMessage =
          error?.message;
      })
      .finally(() => response.end());
  } else {
  }
}

function prioritySearch(searchString) {
  const code = dao.getByCode(searchString).then((data) => {
    handleEmptyArray(data.length);
    return data;
  });
  const city = dao.getByName(searchString);
  return Promise.any([code, city]);
}

function handleEmptyArray(length) {
  if (length === 0) {
    throw new Error("Empty Resultset");
  }
}
