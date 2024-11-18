import React from "react";
import Slider from "react-slick";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTwitterLogo } from "react-icons/pi";
import moylovodam1 from "../../../assets/moylovodam1.png";
import "./ourteam.scss";

const Ourteam = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="our">
      <div className="container">
        <div className="our__container">
          <div className="our__top">
            <h2 className="our__top__title">Our Expert Team</h2>
            <p className="our__top__text">
              Our team consists of seasoned professionals with extensive
              experience in Islamic finance and management. Each member brings a
              unique set of skills and expertise.
            </p>
          </div>
          <div className="our__bottom">
            <div className="slider-container">
              <Slider {...settings}>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="our__bottom__card">
                    <div className="our__bottom__card__img">
                      <img src={moylovodam1} alt={`Team member ${index + 1}`} />
                    </div>
                    <div className="our__bottom__card__texts">
                      <h3 className="our__bottom__title">
                        Dr. Mezbah Uddin Ahmed
                      </h3>
                      <p className="our__bottom__text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters.
                      </p>
                      <div className="our__bottom__icons">
                        <TbBrandTelegram />
                        <FaInstagram />
                        <FiFacebook />
                        <PiTwitterLogo />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
