import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { ServiceDataAndState } from "../../Templates/OurServices";
import ButtonComponent from "../ButtonComponent";

import "./styles.scss";

function ModalComponent({ id, title, subtitle, modalClass, imgLg }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { btnLabel, btnClass, focusedService } =
    useContext(ServiceDataAndState);

  return (
    <>
      <ButtonComponent
        btnLabel={btnLabel}
        btnClass={id === focusedService ? `${btnClass} focus` : btnClass}
        onClickFunc={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        dialogClassName={modalClass}
      >
        <div className="container p-4">
          <h3>{title}</h3>
          <div className="row">
            <div className="col-lg-4">
              <img src={imgLg} alt="img" />
            </div>
            <div className="col-lg-8">
              <p className="m-4">
                {subtitle}
                {subtitle}
                {subtitle}
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <Modal.Footer>
          <ButtonComponent
            btnLabel="Close"
            btnClass={btnClass}
            onClickFunc={handleClose}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
