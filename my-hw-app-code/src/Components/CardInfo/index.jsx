import React from "react";

import "./styles.scss";

const CardInfo = (props) => {
  const { title, subtitle, iconImg } = props;

  return (
    <div className="card">
      <img src={iconImg} alt="icon" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default CardInfo;
