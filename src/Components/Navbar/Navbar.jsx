import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/img/Logo(1).png";
import eng from "../../assets/img/eng.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { toast } from "react-toastify";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/");
      toast.warning("LogOut");
    }, 800);
  };
  
  const tokenxon = localStorage.getItem("token");
  const tokenjon = localStorage.getItem("tokenjon");

  const renderAuthLinks = () => {
    if (tokenxon && tokenjon) {
      return (
        <NavLink className="navbar__link navbar__carticon">
          <button className="navbar__btn" onClick={logout}>
            <LuLogOut />
          </button>
        </NavLink>
      );
    } else {
      return (
        <NavLink to={"/login"}>
          <button className="navbar__btn">Log in</button>
        </NavLink>
      );
    }
  };

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
            <li
              className="navbar__li navbar__dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink>
                Programs <FaChevronDown />
              </NavLink>
              {isDropdownOpen && (
                <ul className="dropdown__menu">
                  <li>
                    <NavLink to={"/programs"}>
                      International educational programs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/specialized-courses"}>
                      Specialized courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/islamic-finance"}>
                      Islamic Finance Literacy Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/certification"}>
                      Certification program
                    </NavLink>
                  </li>
                </ul>
              )}
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
            {renderAuthLinks()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
