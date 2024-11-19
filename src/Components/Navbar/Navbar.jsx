import React from "react";
import "./navbar.scss";
import logo from "../../assets/img/Logo(1).png";
import eng from "../../assets/img/eng.png";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__logo">
            <NavLink to={"/home"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="navbar__links">
            <li className="navbar__li">
              <NavLink to="/home" id="active">
                Home
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink to={"/programs"}>
                Programs <FaChevronDown />
              </NavLink>
            </li>
            <li className="navbar__li">
              <NavLink to={"/tools"}>Finance tools</NavLink>
            </li>
            <li className="navbar__li">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </div>
          <div className="navbar__devices">
            <div className="navbar__languages">
              <img src={eng} alt="English" /> ENG <FaChevronDown />
            </div>
            <div className="navbar__line"></div>
            <NavLink to={"/login"}>
              <button className="navbar__btn">Log in</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
