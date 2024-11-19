import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/home" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
