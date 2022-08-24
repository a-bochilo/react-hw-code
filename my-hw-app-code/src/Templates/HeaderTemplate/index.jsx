import React from "react";
import LogoComponent from "../../Components/LogoComponent";
import NavBar from "../../Components/NavBar";

import "./styles.scss";

const HeaderTemplate = () => {
  return (
    <header className="header">
      <div className="header__container">
        <LogoComponent />
        <NavBar />
      </div>
    </header>
  );
};

export default HeaderTemplate;
