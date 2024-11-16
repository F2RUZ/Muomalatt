import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </Router>
);
