import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4"> {/* Add padding to prevent content overlap */}
        <Outlet /> {/* This will render different pages below Navbar */}
      </div>
    </div>
  );
};

export default Layout;
