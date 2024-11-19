import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__top">
            <NavLink to={"/home"} className="footer__logo__wrapper">
              <img src={logo} alt="" className="footer__logo" />
            </NavLink>
            <div className="footer__links">
              <NavLink to={"/home"} className="footer__links__link">
                Home
              </NavLink>
              <NavLink to={"/about"} className="footer__links__link">
                About
              </NavLink>
              <NavLink to={"/service"} className="footer__links__link">
                Service
              </NavLink>
              <NavLink to={"/contact"} className="footer__links__link">
                Contact
              </NavLink>
            </div>
            <div className="footer__icons">
              <FaYoutube />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <hr />
          <div className="footer__bottom">
            <p className="footer__bottom__text">Copyright Satyam Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
