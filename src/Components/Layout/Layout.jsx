import React, { useEffect } from "react";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signin from "../../Pages/Signin";

const Layout = () => {
  const token = localStorage.getItem("token");
  const tokenjon = localStorage.getItem("tokenjon");

  const navigate = useNavigate();

  useEffect(() => {
    if (
      token?.includes("bahodir12345") &&
      tokenjon?.includes("bahodirnurmatov")
    ) {
      navigate("/home");
    } else if (tokenjon?.includes("bahodirnurmatov")) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [token]);

  const location = () => {
    if (
      token?.includes("bahodir12345") &&
      tokenjon?.includes("bahodirnurmatov")
    ) {
      return (
        <>
          <div className="second__container">
            <ToastContainer />
            <Navbar />
            <div className="router">
              <Router />
            </div>
            <Footer />
          </div>
        </>
      );
    } else if (tokenjon?.includes("bahodirnurmatov")) {
      return (
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      );
    } else {
      return (
        <>
          <div className="second__container">
            <ToastContainer />
            <Navbar />
            <div className="router">
              <Router />
            </div>
            <Footer />
          </div>
        </>
      );
    }
  };
  return (
    <>
      {location()}
      {/* <div className="second__container">
        <ToastContainer />
        <Navbar />
        <div className="router">
          <Router />
        </div>
        <Footer />
      </div> */}
    </>
  );
};

export default Layout;
