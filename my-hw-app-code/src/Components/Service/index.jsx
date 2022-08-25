import React from "react";
import { useContext } from "react";
import { ServiceDataAndState } from "../../Templates/OurServices";
import ModalComponent from "../ModalComponent";

import "./styles.scss";

const Service = ({ id, title, subtitle, imgLg }) => {
  const { focusedService, setFocusedService, iconImgBlack, iconImgWhite } =
    useContext(ServiceDataAndState);
  return (
    <div
      className="service"
      onMouseMove={() => setFocusedService(id)}
      onMouseOut={() => setFocusedService()}
    >
      <div className="service__info">
        <img
          src={focusedService === id ? iconImgWhite : iconImgBlack}
          alt="icon"
        />
        <h3>
          {title.split(" ").length > 5
            ? `${title.split(" ").slice(0, 4).join(" ")}...`
            : title}
        </h3>
        <p>{subtitle.length > 70 ? `${subtitle.slice(0, 70)}...` : subtitle}</p>
      </div>
      <ModalComponent
        modalClass="service__modal-custom"
        id={id}
        title={title}
        subtitle={subtitle}
        imgLg={imgLg}
      />
    </div>
  );
};

export default Service;
