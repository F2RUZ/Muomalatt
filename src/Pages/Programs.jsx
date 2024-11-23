import React from "react";
import "../styles/programs.scss";
import { FaCheck } from "react-icons/fa";
import Consultation from "../Components/UI/Consultation/Consultation";
import Information from "../Components/UI/Information/Information";
import Education from "../Components/UI/Education/Education";

const Programs = () => {
  return (
    <div className="programs">
      <div className="container">
        <div className="programs__container">
          <div className="programs__flex">
            <h2 className="programs__title">
              International educational programs
            </h2>
            <p className="programs__description">
              Al Muamalat Education's international study programs offer an
              in-depth learning experience at leading Islamic financial
              institutions around the world.
            </p>
          </div>
          <div className="programs__content">
            <div className="programs__box">
              <h3 className="programs__subtitle">What you’ll learn</h3>
              <ul className="programs__list">
                <li>
                  <FaCheck className="programs__icon" />
                  Gain a comprehensive understanding of Islamic finance
                  principles and ethics.
                </li>
                <li>
                  <FaCheck className="programs__icon" />
                  Build a portfolio with 10+ real-world projects in Islamic
                  financial services.
                </li>
                <li>
                  <FaCheck className="programs__icon" />
                  Learn to develop and manage Sharia-compliant financial
                  products.
                </li>
                <li>
                  <FaCheck className="programs__icon" />
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </li>
                <li>
                  <FaCheck className="programs__icon" />
                  Understand the fundamentals of risk management in Islamic
                  finance.
                </li>
                <li>
                  <FaCheck className="programs__icon" />
                  Develop skills to work as an Islamic finance consultant.
                </li>
              </ul>
            </div>
            <div className="programs__box">
              <h3 className="programs__subtitle">
                Why should you study at "AL-MUAMALAT"?
              </h3>
              <ul className="programs__list programs__list--bullet">
                <li>Lifetime access</li>
                <li>Video lessons</li>
                <li>Tests</li>
                <li>Projects</li>
                <li>Downloadable resources</li>
                <li>Access via mobile device</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Information />
      <Education />
      <Consultation />
    </div>
  );
};

export default Programs;
