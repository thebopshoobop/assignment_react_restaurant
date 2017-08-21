import React from "react";

const FormElement = ({ name, label, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>
      <input name={name} type={type} className="form-control" />
    </div>
  );
};

FormElement.defaultProps = { type: "text" };

export default FormElement;
