import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import AboutUs from "./Templates/AboutUs";
import Blog from "./Templates/Blog";
import ContactUs from "./Templates/ContactUs";
import OurServices from "./Templates/OurServices";
import PricingPlan from "./Templates/PricingPlan";
import SecretTeamplate from "./Templates/SecretTemplate";
import Team from "./Templates/Team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-hw/" element={<Layout />}>
          <Route path="/react-hw/" element={<HomePage />} />
          <Route path="/react-hw/about" element={<AboutUs />} />
          <Route path="/react-hw//servicing" element={<OurServices />} />
          <Route path="/react-hw//pricing" element={<PricingPlan />} />
          <Route path="/react-hw//team" element={<Team />} />
          <Route path="/react-hw//blog" element={<Blog />} />
          <Route path="/react-hw/contact-us" element={<ContactUs />} />
          <Route path="/react-hw/secret-page" element={<SecretTeamplate />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
