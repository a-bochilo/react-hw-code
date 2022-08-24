import React from "react";
import { LOGO_COMPONENT_DATA } from "./constants";

import "./styles.scss";

const LogoComponent = () => {
  return (
    <div className="logo">
      <img src={LOGO_COMPONENT_DATA.logoImg} alt="logo" />
      <p>{LOGO_COMPONENT_DATA.logoTitle}</p>
    </div>
  );
};

export default LogoComponent;
