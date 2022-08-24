import React from "react";

import "./styles.scss";

const ButtonComponent = ({ btnLabel, btnClass, onClickFunc }) => {
  return (
    <button className={btnClass} onClick={onClickFunc}>
      {btnLabel}
    </button>
  );
};

export default ButtonComponent;
