import React from "react";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="second__container">
        <Navbar />
        <div className="router">
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
