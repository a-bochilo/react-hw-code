import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ButtonComponent from "../ButtonComponent";

import "./styles.scss";

function ModalComponent({ title, subtitle, btnLabel, btnClass, modalClass }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonComponent
        btnLabel={btnLabel}
        btnClass={btnClass}
        onClickFunc={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        dialogClassName={modalClass}
      >
        <h3>{title}</h3>
        <p className="m-4">
          {subtitle}
          {subtitle}
          {subtitle}
          {subtitle}
        </p>

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
