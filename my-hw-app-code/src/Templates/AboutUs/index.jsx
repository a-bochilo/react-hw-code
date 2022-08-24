import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import CardInfo from "../../Components/CardInfo";
import { ABOUT_US_DATA } from "./constants";

import "./styles.scss";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <SectionTitle
        title={ABOUT_US_DATA.sectionTitle.title}
        subtitle={ABOUT_US_DATA.sectionTitle.subtitle}
        titleClass={ABOUT_US_DATA.sectionTitle.titleClass}
      />
      <div className="about-us-section__card-holder">
        {ABOUT_US_DATA.cardInfo.map(({ id, iconImg, title, subtitle }) => (
          <CardInfo
            key={id}
            iconImg={iconImg}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
