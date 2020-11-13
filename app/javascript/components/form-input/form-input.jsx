import React from "react";

const FormInput = ({id, name, placeholder, handleChange}) => {
  return <input className="form-control mb-4" id={id} name={name} placeholder={placeholder} onChange={handleChange}/>;
}

export default FormInput;
