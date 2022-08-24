import React from "react";

import "./styles.scss";

const SectionTitle = ({ title, subtitle, titleClass }) => {
  return (
    <div className={titleClass}>
      <h2> {title} </h2>
      <p> {subtitle} </p>
    </div>
  );
};

export default SectionTitle;
