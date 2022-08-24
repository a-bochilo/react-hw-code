import React from "react";
import { Outlet } from "react-router-dom";
import FooterTemplate from "../../Templates/FooterTemplate";
import HeaderTemplate from "../../Templates/HeaderTemplate";

const Layout = () => {
  return (
    <>
      <HeaderTemplate />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default Layout;
