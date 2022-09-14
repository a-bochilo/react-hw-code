import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { formDataAC } from "../../Store/ActionCreators";
import { useNavigate } from "react-router-dom";

import { CONTACT_DATA } from "./constants";

import "./styles.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendFormData = () => {
    const formData = {
      name,
      email,
      phone,
      message,
    };

    dispatch(formDataAC(formData));
    navigate("/react-hw/secret-page");
  };

  const validationInput = (currentValue) => {
    if (currentValue !== "admin" && currentValue !== "user") {
      document.getElementById("validation").classList.remove("d-none");
      document.getElementById("send-btn").classList.add("disabled");
    } else {
      document.getElementById("send-btn").classList.remove("disabled");
    }
  };

  return (
    <section className="contact-section pt-5">
      <div className="contact-section__container">
        <SectionTitle
          title={CONTACT_DATA.sectionTitle.title}
          subtitle={CONTACT_DATA.sectionTitle.subtitle}
          titleClass={CONTACT_DATA.sectionTitle.titleClass}
        />
        <div className="contact-section__contact-holder col-12 pt-5 pb-5 row">
          {CONTACT_DATA.contacts &&
            CONTACT_DATA.contacts.map(({ icon, data, link }, i) => (
              <div key={i} className="col-12 col-sm-4 p-2 text-center">
                <img src={icon} alt="icon" className="col-4 p-4" />
                {data &&
                  data.map((item, i) => (
                    <p
                      key={i}
                      role="button"
                      className="col-12 p-0 m-0"
                      onClick={() => {
                        if (link === "mailto:") {
                          window.open(`${link} ${item}`);
                        } else if (link === "tel:") {
                          window.open(`${link} ${item}`);
                        } else {
                          window.open(link, "_blank");
                        }
                      }}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            ))}
        </div>
        <div className="col-12">
          <Form>
            <div className="row col-12">
              <div className="col-12 col-sm-6 p-4">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="YOUR NAME"
                  className="m-4 p-3"
                  onBlur={(e) => {
                    const currentValue = e.target.value.trim().toLowerCase();
                    setName(currentValue);
                    validationInput(currentValue);
                  }}
                  onFocus={(e) => {
                    document
                      .getElementById("validation")
                      .classList.add("d-none");
                  }}
                />
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="m-4 p-3"
                  onBlur={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                  size="lg"
                  type="tel"
                  placeholder="YOUR PHONE"
                  className="m-4 p-3"
                  onBlur={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-12 col-sm-6 p-4">
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={7}
                  placeholder="WRITE MESSAGE"
                  className="m-4 p-3"
                  onBlur={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center ">
              <p
                className="col-12 col-sm-12 contact-section__validation d-none"
                id="validation"
              >
                Wrong name
              </p>
              <Button
                id="send-btn"
                variant="primary"
                type="primary"
                className="col-12 col-sm-2 p-4 contact-section__btn"
                onClick={sendFormData}
              >
                SEND
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
