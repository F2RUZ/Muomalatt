import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Fayl yo'li to'g'ri ekanligiga ishonch hosil qiling.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          {/* Footer Top */}
          <div className="footer__top">
            {/* Logo */}
            <div className="footer__logo__wrapper">
              <img src={logo} alt="Logo" className="footer__logo" />
            </div>

            {/* Navigation Links */}
            <div className="footer__links">
              <NavLink to="/" className="footer__links__link">
                Home
              </NavLink>
              <NavLink to="/about" className="footer__links__link">
                About
              </NavLink>
              <NavLink to="/service" className="footer__links__link">
                Service
              </NavLink>
              <NavLink to="/contact" className="footer__links__link">
                Contact
              </NavLink>
            </div>

            {/* Social Media Icons */}
            <div className="footer__icons">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <hr />

          {/* Footer Bottom */}
          <div className="footer__bottom">
            <p className="footer__bottom__text">
              © 2024 Satyam Studio. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
