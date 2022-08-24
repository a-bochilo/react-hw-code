import React from "react";

import "./styles.scss";

const CardInfo = ({ title, subtitle, iconImg }) => {
  return (
    <div className="card-info">
      <img src={iconImg} alt="icon" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default CardInfo;
