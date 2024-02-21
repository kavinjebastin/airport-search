import React from "react";

function Row(prop) {
  const {
    serialNo,
    airportCode,
    airportName,
    cityName,
    stateName,
    countryName,
    AirportSize,
  } = prop;

  return (
    <tr>
      <td>{serialNo}</td>
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
