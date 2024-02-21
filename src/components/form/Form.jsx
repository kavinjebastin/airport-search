import React, { useEffect, useState } from "react";
import Table from "../table/Table.jsx";
import { serverURL } from "../../config.js";
export const Form = () => {
  const [search, setSearch] = useState("");
  const [airports, setAirports] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    const value = event?.target?.value;
    setSearch((oldValue) => value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/search?search=MAA`, {
      headers: {
        
      }
    })
      .then(setAirports)
      .catch(console.error);
  }, [search]);

  return (
    <>
      <div className="form-wrapper vw-100 vh-100 d-flex align-items-center justify-content-center">
        <form className="" action="/users" method="get">
          <div className="mb-3">
            <label htmlFor="search" className="form-label">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              name="search"
              onChange={handleChange}
              aria-describedby="search-help"
            />
            <div id="search-help" className="form-text">
              Enter the Airport Code or Airport here
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <Table airports={airports} />
    </>
  );
};
export default Form;
