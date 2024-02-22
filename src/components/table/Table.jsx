import PropTypes from "prop-types";
import Row from "./Row";
function Table({ airports }) {
  return (
    <div className="vw-100">
      <table
        className="table table-primary border-info rounded mx-auto"
        style={{ width: "90%" }}
      >
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Airport Code</th>
            <th>Airport Name</th>
            <th>City Name</th>
            <th>State Name</th>
            <th>Country Name</th>
            <th>Airport Size</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {airports.map((airport, index) => (
            <Row key={airport.airportCode} index={index} airport={airport} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  airports: PropTypes.object,
};

export default Table;
