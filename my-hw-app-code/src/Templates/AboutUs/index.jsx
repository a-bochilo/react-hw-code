import React from "react";
import MainTitle from "../../Components/MainTitle";
import CardInfo from "../../Components/CardInfo";
import { ABOUT_US_DATA } from "./constants";

import "./styles.scss";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <MainTitle data={ABOUT_US_DATA.mainTitle} />
      <div className="about-us-section__card-holder">
        {ABOUT_US_DATA.cardInfo.map((item) => (
          <CardInfo
            iconImg={item.iconImg}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
