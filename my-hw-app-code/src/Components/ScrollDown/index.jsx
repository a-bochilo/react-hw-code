import React from "react";

import "./styles.scss";

const ScrollDown = (props) => {
  const { nextSection } = props;

  return (
    <div
      className="arrow-down"
      onClick={() => nextSection.scrollIntoView(true)}
    ></div>
  );
};

export default ScrollDown;
