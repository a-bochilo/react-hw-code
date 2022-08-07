import React from "react";

import "./styles.scss";

const Button = (props) => {
  const { btnLabel, btnClass, onClickFunc } = props;

  return (
    <button className={btnClass} onClick={onClickFunc}>
      {btnLabel}
    </button>
  );
};

export default Button;
