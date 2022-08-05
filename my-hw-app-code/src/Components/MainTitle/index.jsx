import React from "react";

import "./styles.scss";

const MainTitle = (props) => {
  const { data } = props;

  return (
    <div className="main-title">
      <h2> {data.title} </h2>
      <p> {data.subtitle} </p>
    </div>
  );
};

export default MainTitle;
