import React from 'react';

const Switch = ({ switchState, setSwitchState }) => {
  const onChangeEvent = (e) => {
    setSwitchState(!switchState);
  };
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__checkbox"
        onChange={onChangeEvent}
        checked={switchState}
      />
      <div className="switch__slider switch__slider--round"></div>
    </label>
  );
};

export default Switch;
