import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs";
import Login from "../Pages/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
