import Row from "./Row";
import PropTypes from "prop-types";
function Table({ airports }) {
  return (
    <div>
      <table className="table table-success">
        <thead>
          <tr>
            <th>Serial No </th>
            <th>Airport Code</th>
            <th>Airport Name</th>
            <th>City Name</th>
            <th>State Name</th>
            <th>Country Name</th>
            <th>Airport Size</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {airports.map((airport, index, array) => {
            airport.serialNo = index + 1;
            return <Row key={airport?.code} props={airport} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  airports: PropTypes.any,
};

export default Table;
