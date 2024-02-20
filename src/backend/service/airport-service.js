"use strict";
import { Url } from "url";
import dao from "../models/airport-repository.js";
/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */
export function handleSearch(request, response) {
  const searchValue = request.query?.search;
  console.log(searchValue);
  if (searchValue.length <= 3) {
    //todo 
    priorityQuery(searchValue)
        .then()
  }
}
