import React from "react";

import "./styles.scss";

const SectionTitle = (props) => {
  const { data } = props;
  const { title, subtitle, titleClass } = data;

  return (
    <div className={titleClass}>
      <h2> {title} </h2>
      <p> {subtitle} </p>
    </div>
  );
};

export default SectionTitle;
