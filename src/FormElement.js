import React from "react";

const FormElement = ({ name, label, type }) => {
  const inputType = type === "textarea" ? "textarea" : "input";
  const input = React.createElement(inputType, {
    name,
    type,
    className: "form-control"
  });
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>
      {input}
    </div>
  );
};

FormElement.defaultProps = { type: "text" };

export default FormElement;
