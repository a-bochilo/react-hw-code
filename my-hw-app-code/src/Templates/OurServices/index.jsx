import React, { useState, useEffect, createContext } from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import SectionTitle from "../../Components/SectionTitle";
import Service from "../../Components/Service";

import { OUR_SERVICES_DATA } from "./constants";

import "./styles.scss";

export const ServiceDataAndState = createContext();

const OurServices = () => {
  const [focusedService, setFocusedService] = useState();
  const [data, setData] = useState(null);
  const [servicesCount, setservicesCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${OUR_SERVICES_DATA.url}${servicesCount}`
        );
        const dataFromBack = await response.json();
        setData(dataFromBack);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [servicesCount]);

  return (
    <ServiceDataAndState.Provider
      value={{
        btnLabel: OUR_SERVICES_DATA.btnLabel,
        btnClass: OUR_SERVICES_DATA.btnClass,
        iconImgBlack: OUR_SERVICES_DATA.iconImgBlack,
        iconImgWhite: OUR_SERVICES_DATA.iconImgWhite,
        focusedService,
        setFocusedService,
      }}
    >
      <section className="our-services-section">
        <div className="our-services-section__container">
          <SectionTitle
            title={OUR_SERVICES_DATA.sectionTitle.title}
            subtitle={OUR_SERVICES_DATA.sectionTitle.subtitle}
            titleClass={OUR_SERVICES_DATA.sectionTitle.titleClass}
          />
          <div className="our-services-section__services-holder">
            {data &&
              data.map(({ id, title, description, image }) => (
                <Service
                  key={id}
                  id={id}
                  title={title}
                  subtitle={description}
                  imgLg={image}
                />
              ))}
          </div>
          {servicesCount < 7 && (
            <ButtonComponent
              btnLabel={OUR_SERVICES_DATA.viewAllBtn.btnLabel}
              btnClass={OUR_SERVICES_DATA.viewAllBtn.btnClass}
              onClickFunc={() => {
                setservicesCount(servicesCount + 6);
              }}
            />
          )}
        </div>
      </section>
    </ServiceDataAndState.Provider>
  );
};

export default OurServices;
