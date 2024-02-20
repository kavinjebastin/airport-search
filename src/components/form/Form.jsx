import React from "react";
import InputField from "./InputField";

export const Form = () => {
  return (
    <div className="form-wrapper vw-100 vh-100 d-flex align-items-center justify-content-center">
      <form className="">
        <InputField
          id="search"
          label="Search"
          name="search"
          type="text"
          description="Enter the Airport Code or Airport here"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};
export default Form;
