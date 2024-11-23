import React, { useState } from "react";
import "../styles/signin.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chol from "../assets/img/chol1.png";
import logo from "../assets/img/Logo(1).png";
import illustration from "../assets/img/illustration.png";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!password.trim() || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("token", "bahodir12345");
      setTimeout(() => {
        toast.success("Signed in successfully!");
      }, 800);
      navigate("/home");
    }
  };

  return (
    <div className="sign">
      <ToastContainer />
      <div className="sign__left">
        <div className="sign__top">
          <div className="sign__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="sign__flex">
            <p>
              Questions? <span>Ask Diyor</span>
            </p>
            <div className="sign__chol__wrapper">
              <img src={chol} alt="Chol" />
            </div>
          </div>
        </div>
        <h1 className="sign__title">Get started</h1>
        <form className="sign__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit" className="sign__btn">
            Sign in
          </button>
          <NavLink className="sign__link" to="/login">
            Create a new account!
          </NavLink>
        </form>
      </div>
      <div className="sign__right">
        <img
          src={illustration}
          alt="Illustration"
          className="sign__right__img"
        />
        <p className="sign__right__text">
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </p>
      </div>
    </div>
  );
};

export default Signin;
