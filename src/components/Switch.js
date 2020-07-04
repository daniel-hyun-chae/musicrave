import React from "react";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__checkbox" />
      <div className="switch__slider switch__slider--round"></div>
    </label>
  );
};

export default Switch;
