import React, { useEffect, useState } from "react";
import Row from "./Row";

function Table() {
  const [airports, setAirports] = useState([]);

  useEffect(()=> {

  }, [])
  return (
    <div>
      <table>
        <tr>
          <th>Airport Code</th>
          <th>Airport Name</th>
          <th>City Name</th>
          <th>State Name</th>
          <th>Country Name</th>
          <th>Airport Size</th>
        </tr>
        {airports.forEach(airport => <Row />)}
      </table>
    </div>
  );
}

export default Table;
