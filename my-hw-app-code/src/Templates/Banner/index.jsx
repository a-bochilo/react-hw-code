import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import Button from "../../Components/Button";
import ScrollDown from "../../Components/ScrollDown";

import { BANNER_DATA } from "./constants";

import "./styles.scss";

const Banner = () => {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [nextSection, setNextSection] = useState(null);

  useEffect(() => {
    const getNextSection = () => {
      setNextSection(
        document.querySelector(".banner-section").nextElementSibling
      );
    };
    getNextSection();
  }, []);

  return (
    <section className="banner-section">
      <SectionTitle titleData={BANNER_DATA.mainTitle} />
      <div className="banner-section__btn-container">
        {BANNER_DATA.btnLabels.map((label, i) => (
          <Button
            btnLabel={label}
            btnClass={
              i === selectedBtn
                ? "banner-section__button button_active"
                : "banner-section__button"
            }
            onClickFunc={() => setSelectedBtn(i)}
          />
        ))}
      </div>
      <ScrollDown nextSection={nextSection} />
    </section>
  );
};

export default Banner;
