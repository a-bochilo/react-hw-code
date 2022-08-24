import React from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import SectionTitle from "../../Components/SectionTitle";
import Service from "../../Components/Service";
import { OUR_SERVICES_DATA } from "./constants";

import "./styles.scss";

const OurServices = () => {
  function addFocusClass(e) {
    const children = e.target.closest(".service").childNodes;
    children.forEach((item) => {
      item.classList.add("focus");
    });
  }

  function removeFocusClass(e) {
    const children = e.target.closest(".service").childNodes;
    children.forEach((item) => {
      item.classList.remove("focus");
    });
  }

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
          onMouseOver={addFocusClass}
          onMouseOut={removeFocusClass}
          onBlur={removeFocusClass}
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
          onClickFunc={() => console.log("click")}
        />
      </div>
    </section>
  );
};

export default OurServices;
