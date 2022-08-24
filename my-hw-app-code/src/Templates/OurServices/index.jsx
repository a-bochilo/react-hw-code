import React, { useState, useEffect } from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import SectionTitle from "../../Components/SectionTitle";
import Service from "../../Components/Service";

import { OUR_SERVICES_DATA } from "./constants";

import "./styles.scss";

const OurServices = () => {
  const [focusedService, setFocusedService] = useState(null);
  const [bluredService, setBluredService] = useState(null);

  useEffect(() => {
    const toggleFocusClass = () => {
      if (bluredService)
        bluredService.childNodes.forEach((item) => {
          item.classList.remove("focus");
        });
      if (focusedService)
        focusedService.childNodes.forEach((item) => {
          item.classList.add("focus");
        });
    };
    toggleFocusClass();
  }, [focusedService, bluredService]);

  return (
    <section className="our-services-section">
      <div className="our-services-section__container">
        <SectionTitle
          title={OUR_SERVICES_DATA.sectionTitle.title}
          subtitle={OUR_SERVICES_DATA.sectionTitle.subtitle}
          titleClass={OUR_SERVICES_DATA.sectionTitle.titleClass}
        />
        <div
          className="our-services-section__services-holder"
          onMouseOver={(e) => setFocusedService(e.target.closest(".service"))}
          onMouseOut={() => setBluredService(focusedService)}
          onBlur={() => setBluredService(focusedService)}
        >
          {OUR_SERVICES_DATA.serviceInfo.map(
            ({ id, title, subtitle, iconImg, btnLabel, btnClass }) => (
              <Service
                key={id}
                title={title}
                subtitle={subtitle}
                iconImg={iconImg}
                btnLabel={btnLabel}
                btnClass={btnClass}
              />
            )
          )}
        </div>
        <ButtonComponent
          btnLabel={OUR_SERVICES_DATA.btn.btnLabel}
          btnClass={OUR_SERVICES_DATA.btn.btnClass}
        />
      </div>
    </section>
  );
};

export default OurServices;
