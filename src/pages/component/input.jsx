import React from "react";

const Input = ({ label, name, handleOnChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      <input
        type="email"
        className="form-control"
        id={name}
        name={name}
        onChange={handleOnChange}
        placeholder={value}
      />
    </div>
  );
};

export default Input;
