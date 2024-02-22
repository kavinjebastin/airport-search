import React from "react";
import PropTypes from "prop-types";
const Row = ({ index, airport }) => {
  const {
    airportName,
    airportCode,
    cityName,
    stateName,
    countryName,
    airportSize,
  } = airport;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{airportCode}</td>
      <td>{airportName}</td>
      <td>{cityName}</td>
      <td>{stateName}</td>
      <td>{countryName}</td>
      <td>{airportSize.replace("_", " ")}</td>
    </tr>
  );
};
Row.propTypes = {
  index: PropTypes.number.isRequired,
  airport: PropTypes.shape({
    airportName: PropTypes.string.isRequired,
    airportCode: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    stateName: PropTypes.string,
    countryName: PropTypes.string,
    airportSize: PropTypes.string,
  }),
};

export default Row;
