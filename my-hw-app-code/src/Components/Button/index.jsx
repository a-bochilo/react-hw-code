import React from "react";

import "./styles.scss";

const Button = (props) => {
  const { btnLabel, btnClass, onClickF } = props;

  return (
    <button className={btnClass} onClick={onClickF}>
      {btnLabel}
    </button>
  );
};

export default Button;
