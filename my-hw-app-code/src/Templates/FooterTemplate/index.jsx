import React from "react";
import NavBar from "../../Components/NavBar";
import { FOOTER_TEMPLATE_DATA } from "./constants";

import "./styles.scss";

const FooterTemplate = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavBar />
        <div className="footer__notice-links-container">
          <p>
            {FOOTER_TEMPLATE_DATA.notice}
            {new Date().getFullYear()}{" "}
          </p>
          <div className="footer__links-container">
            <img src={FOOTER_TEMPLATE_DATA.icons.googlePlus} alt="google" />
            <img src={FOOTER_TEMPLATE_DATA.icons.twitter} alt="twitter" />
            <img src={FOOTER_TEMPLATE_DATA.icons.fb} alt="fb" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTemplate;
