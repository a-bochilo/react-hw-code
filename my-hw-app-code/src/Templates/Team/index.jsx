import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoaderComponent from "../../Components/LoaderComponent";
import SectionTitle from "../../Components/SectionTitle";
import TeamMember from "../../Components/TeamMember";

import { TEAM_DATA } from "./constants";

import "./styles.scss";

const Team = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(TEAM_DATA.url);
        const dataFromBack = await response.json();
        setData(dataFromBack.slice(0, 3));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="team-section pt-5">
      <div className="team-section__container">
        <SectionTitle
          title={TEAM_DATA.sectionTitle.title}
          subtitle={TEAM_DATA.sectionTitle.subtitle}
          titleClass={TEAM_DATA.sectionTitle.titleClass}
        />
        <div className="team-section__team-holder row pt-5">
          {!data && <LoaderComponent />}
          {data &&
            data.map(({ id, name, address, phone, email, username }, i) => (
              <TeamMember
                key={id}
                avatar={TEAM_DATA.photos[i]}
                name={name}
                city={address.city}
                phone={phone}
                email={email}
                username={username}
                icons={TEAM_DATA.icons}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
