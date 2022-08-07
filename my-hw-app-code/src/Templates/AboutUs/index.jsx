import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import CardInfo from "../../Components/CardInfo";
import { ABOUT_US_DATA } from "./constants";

import "./styles.scss";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <SectionTitle data={ABOUT_US_DATA.sectionTitle} />
      <div className="about-us-section__card-holder">
        {ABOUT_US_DATA.cardInfo.map(({ iconImg, title, subtitle }) => (
          <CardInfo iconImg={iconImg} title={title} subtitle={subtitle} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
