import React from "react";
import "./consultation.scss";
import Slider from "react-slick";
import { FaAngleDown } from "react-icons/fa";
import eng from "../../../assets/eng.png";

const Consultation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="consultation">
      <div className="container">
        <div className="consultation__container">
          <div className="consultation__left">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="consultation__texts">
                  <h2 className="consultation__texts__title">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="consultation__texts__text">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
                <div className="consultation__texts">
                  <h2 className="consultation__texts__title">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="consultation__texts__text">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
                <div className="consultation__texts">
                  <h2 className="consultation__texts__title">
                    Workshops and Spiritual Development
                  </h2>
                  <p className="consultation__texts__text">
                    Participate in our weekly workshops focused on Islamic
                    studies and spiritual growth. These sessions are designed to
                    help you strengthen your connection with faith and acquire
                    essential skills for daily life
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <form className="consultation__right">
            <div className="form__texts">
              <h2 className="form__title">Free consultation</h2>
              <p className="form__text">
                Leave your phone number, and we will reach out to provide you
                with complete information about our courses.{" "}
              </p>
            </div>
            <div className="form__inputs">
              <input
                type="text"
                placeholder="Name"
                className="form__inputs__name"
              />
              <div className="form__phone form__inputs__name">
                <img src={eng} alt="" />
                <FaAngleDown />
                <input
                  type="number"
                  placeholder="+44"
                  className="form__inputs__number"
                />
              </div>
            </div>
            <div className="form__bottom">
              <div className="form__checkbox">
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement">
                  I agree to the use of my personal information for consultation
                  purposes.
                </label>
              </div>
              <button type="submit" className="form__submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
