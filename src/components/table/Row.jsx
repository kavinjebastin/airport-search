import PropTypes from "prop-types";
/**
 * @param {Object} this
 * @param {}
 */
const Row = ({
  index,
  airport: {
    airportName,
    airportCode,
    cityName,
    stateName,
    countryName,
    airportSize,
  },
  search,
}) => (
  <tr className={search === airportCode.toLowerCase() ? "table-active" : ""}>
    <td>{index + 1}</td>
    <td className="danger-text">{airportCode}</td>
    <td>{airportName}</td>
    <td>{cityName}</td>
    <td>{stateName}</td>
    <td>{countryName}</td>
    <td>{airportSize.replace("_", " ")}</td>
  </tr>
);

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
  search: PropTypes.string,
};

export default Row;
