import React from "react";
import CardInfo from "../CardInfo";
import ModalComponent from "../ModalComponent";

import "./styles.scss";

const Service = ({ title, subtitle, iconImg, btnLabel, btnClass }) => {
  return (
    <div className="service">
      <CardInfo iconImg={iconImg} title={title} subtitle={subtitle} />
      <ModalComponent
        modalClass="service__modal-custom"
        btnLabel={btnLabel}
        btnClass={btnClass}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default Service;
