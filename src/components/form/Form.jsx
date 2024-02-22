import React, { useEffect, useState } from "react";
import Table from "../table/Table.jsx";
export const Form = () => {
  const [search, setSearch] = useState("");
  const [airports, setAirports] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    const value = event?.target?.value;
    setSearch((oldValue) => value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/search/${search.toUpperCase()}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000/",
      },
    })
      .then((data) => data.json())
      .then(setAirports)
      .catch(console.error);
  }, [search]);

  return (
    <>
      <div className="form-wrapper vw-100 my-4 d-flex flex-column align-items-center justify-content-center">
        <h1 className="">Clarity TTS</h1>
        <form className="">
          <div className="mb-3 form-group">
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
        </form>
      </div>
      {airports.length !== 0 && <Table airports={airports} />}
    </>
  );
};
export default Form;
