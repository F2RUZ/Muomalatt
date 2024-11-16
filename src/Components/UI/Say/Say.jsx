import React from "react";
import "./say.scss";
import odam7 from "../../../assets/img/odam7.png";
import Slider from "react-slick";

const Say = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  return (
    <div className="say">
      <div className="container">
        <div className="say__container">
          <div className="say__texts">
            <h1 className="say__title">What students say</h1>
            <p className="say__text">
              Our team consists of seasoned professionals with extensive
              experience in Islamic finance and management. Each member brings a
              unique set of skills and expertise.
            </p>
          </div>
          <div className="say__slider">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="say__cards">
                  <p className="say__cards__text">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College.
                  </p>
                  <div className="say__cards__flex">
                    <img src={odam7} alt="" className="say__cards__img" />
                    <div className="say__cards__texts">
                      <h3 className="say__cards__title">Finlay Kirk</h3>
                      <p>Web designer</p>
                    </div>
                  </div>
                </div>
                <div className="say__cards">
                  <p className="say__cards__text">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College.
                  </p>
                  <div className="say__cards__flex">
                    <img src={odam7} alt="" className="say__cards__img" />
                    <div className="say__cards__texts">
                      <h3 className="say__cards__title">Finlay Kirk</h3>
                      <p>Web designer</p>
                    </div>
                  </div>
                </div>
                <div className="say__cards">
                  <p className="say__cards__text">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College.
                  </p>
                  <div className="say__cards__flex">
                    <img src={odam7} alt="" className="say__cards__img" />
                    <div className="say__cards__texts">
                      <h3 className="say__cards__title">Finlay Kirk</h3>
                      <p>Web designer</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Say;
