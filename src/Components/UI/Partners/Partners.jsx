import React from "react";
import "./partners.scss";
import american from "../../../assets/american.png";
import stripe from "../../../assets/Stripe.png";
import western from "../../../assets/westernunion.png";
import klarna from "../../../assets/klarna.png";
import skrill from "../../../assets/Skrill.png";
import Slider from "react-slick";

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__container">
          <h1 className="partners__title">Our Partners and Clients</h1>
          <div className="partners__slider">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider__img__wrapper">
                  <img src={stripe} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={american} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={western} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={klarna} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={skrill} alt="" className="slider__img" />
                </div>
              </Slider>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider__img__wrapper">
                  <img src={skrill} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={stripe} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={american} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={western} alt="" className="slider__img" />
                </div>
                <div className="slider__img__wrapper">
                  <img src={klarna} alt="" className="slider__img" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
