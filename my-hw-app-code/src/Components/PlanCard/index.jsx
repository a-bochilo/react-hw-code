import React from "react";
import ButtonComponent from "../ButtonComponent";

import "./styles.scss";

const PlanCard = ({
  cardTitle,
  price,
  freeTrial,
  freeProjects,
  enabledTech,
  support,
  btnLabel,
  btnClass,
}) => {
  return (
    <div className="plan">
      <div className="plan__header">
        <h3> {cardTitle} </h3>
        <p>
          <span className="plan__currency">$</span>
          {price}<span className="plan__period"> per month</span>
        </p>
      </div>
      <div className="plan__body">
        <div className="plan__included-options">
          <p>{freeTrial}</p>
          <p>{freeProjects}</p>
          <p>{enabledTech}</p>
          <p>{support}</p>
        </div>
        <ButtonComponent btnLabel={btnLabel} btnClass={btnClass} />
      </div>
    </div>
  );
};

export default PlanCard;
