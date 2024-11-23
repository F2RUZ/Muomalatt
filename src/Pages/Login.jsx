import React, { useState } from "react";
import "../styles/signin.scss";
import "../styles/login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chol from "../assets/img/chol1.png";
import logo from "../assets/img/Logo(1).png";
import illustration from "../assets/img/illustration.png";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const validateForm = () => {
    const { name, email, country } = formData;
    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Valid email is required");
      return false;
    }
    if (!country.trim()) {
      toast.error("Country is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("tokenjon", "bahodirnurmatov");
      localStorage.setItem("token", "bahodir12345");
      setTimeout(() => {
        toast.success("Logged in successfully!");
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
        <form className="sign__form" id="loginform" onSubmit={handleSubmit}>
          <span>
            Already have an account?
            <NavLink className="sign__link" to="/signin">
              Sign in
            </NavLink>
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
          <button type="submit" className="sign__btn">
            Log in
          </button>
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

export default Login;
