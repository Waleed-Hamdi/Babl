import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />

    </Fragment>
  );
}

export default RootLayout;
