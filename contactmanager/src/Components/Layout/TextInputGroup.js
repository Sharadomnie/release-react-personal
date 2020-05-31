import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = (props) => {
  const { label, name, type, placeholder, value, onchange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        className={classnames("form-control form-control-l", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text",
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextInputGroup;
