import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

import { SECRET_DATA } from "./constants";

import "./styles.scss";

const SecretTeamplate = () => {
  const { name, email, phone, message } = useSelector(
    (state) => state.formDataReducer.formData
  );
  const isAdmin = name === "admin" ? true : false;

  return (
    <section className="secret-section pt-5">
      <div className="secret-section__container">
        <SectionTitle
          title={SECRET_DATA.sectionTitle.title}
          subtitle={SECRET_DATA.sectionTitle.subtitle}
          titleClass={SECRET_DATA.sectionTitle.titleClass}
        />
        <div className="col-12">
          <Form>
            <div className="row col-12">
              <div className="col-12 col-sm-6 p-4">
                <Form.Control
                  readOnly
                  value={isAdmin ? name : "You're not allowed"}
                  size="lg"
                  type="text"
                  className="m-4 p-3"
                />
                <Form.Control
                  readOnly
                  value={isAdmin ? email : "You're not allowed"}
                  size="lg"
                  type="email"
                  className="m-4 p-3"
                />
                <Form.Control
                  readOnly
                  value={isAdmin ? phone : "You're not allowed"}
                  size="lg"
                  type="tel"
                  className="m-4 p-3"
                />
              </div>
              <div className="col-12 col-sm-6 p-4">
                <Form.Control
                  readOnly
                  value={isAdmin ? message : "You're not allowed"}
                  size="lg"
                  as="textarea"
                  rows={7}
                  className="m-4 p-3"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SecretTeamplate;
