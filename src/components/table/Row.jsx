import React from "react";

function Row({
  airportCode,
  airportName,
  cityName,
  stateName,
  countryName,
  AirportSize,
}) {
  return (
    <tr>
      <td>{airportCode}</td>
      <td>{airportName}</td>
      <td>{cityName}</td>
      <td>{stateName}</td>
      <td>{countryName}</td>
      <td>{AirportSize}</td>
    </tr>
  );
}

export default Row;
