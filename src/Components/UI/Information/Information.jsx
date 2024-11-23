import React from "react";
import "./information.scss";
import { RxTriangleDown } from "react-icons/rx";

const Information = () => {
  return (
    <div className="information">
      <div className="container">
        <div className="information__container">
          <h1 className="information__title">
            Brief information about the course
          </h1>
          <div className="information__content">
            <div className="information__box">
              <div className="information__flex">
                <h2 className="information__subtitle">Videodarslar</h2>
                <RxTriangleDown className="icon" />
              </div>
              <p className="information__description">
                Lessons are posted on the platform in the form of videos, which
                can be viewed anytime and anywhere. Video lessons are updated.
              </p>
            </div>
            <div className="information__box">
              <div className="information__flex">
                <h2 className="information__subtitle">Tasks</h2>
                <RxTriangleDown className="icon" />
              </div>
              <p className="information__description">
                Test tasks are given at the end of the module. Only students who
                successfully pass the test will be able to access the lessons in
                the next module.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
