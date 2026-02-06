import React from "react";
import Navbar from "../components/Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
