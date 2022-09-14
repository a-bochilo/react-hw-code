import React from "react";
import "./styles.scss";

const TeamMember = ({ avatar, name, city, phone, email, username, icons }) => {
  return (
    <div className="team-member col-10 col-sm-4 container">
      <div className="row p-4">
        <img src={avatar} alt="avatar" className="col-12 pb-4" />
        <p className="col-12 team-member__name text-center">
          {name.firstname[0].toUpperCase() + name.firstname.slice(1)}{" "}
          {name.lastname[0].toUpperCase() + name.lastname.slice(1)}
        </p>
        <p className="col-12 team-member__city text-center">
          {city[0].toUpperCase() + city.slice(1)}
        </p>
        <div className="col-12 d-flex justify-content-around team-member__links-holder pt-3">
          {icons &&
            icons.map(({ link, icon }, i) => (
              <img
                key={i}
                src={icon}
                alt="icon"
                role="button"
                className="col-2 team-member__link"
                onClick={() => {
                  if ({ link } === "mailto:") {
                    window.open(`${link}${email}`);
                  } else if ({ link } === "tel:") {
                    window.open(`${link}${phone}`);
                  } else {
                    window.open(`${link}${username}`, "_blank");
                  }
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
