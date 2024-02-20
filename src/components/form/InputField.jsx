import React from "react";
import PropTypes from "prop-types";
function InputField({ id, label, name, type, description }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        aria-describedby={`${id}help`}
      />
      <div id={`${id}help`} className="form-text">
        {description}
      </div>
    </div>
  );
}
InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "number"]),
  description: PropTypes.string,
};

export default InputField;
