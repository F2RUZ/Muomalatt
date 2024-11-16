import React from "react";
import "./intro.scss";
import yigit from "../../../assets/img/yigit.png";
import calendar from "../../../assets/img/calendar.png";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import odam3 from "../../../assets/img/odam3.png";
import odam4 from "../../../assets/img/odam4.png";
import odam5 from "../../../assets/img/odam5.png";
import Slider from "react-slick";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="intro">
          <div className="container">
            <div className="intro__container">
              <div className="intro__left">
                <div className="intro__left__top">
                  <p>Seeking Knowledge is an Obligation in Islam</p>
                </div>
                <h1 className="intro__title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro__left__bottom">
                  <button className="intro__btn">Students’ opnion</button>
                  <div className="intro__comments">
                    <div className="intro__comments__images">
                      <img
                        src={odam3}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam4}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam5}
                        alt=""
                        className="intro__comments__img"
                      />
                    </div>
                    <div className="intro__comments__rare">
                      <div className="intro__comments__rares">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                      </div>
                      <p className="intro__comments__text">( 10k+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro__top">
                <img src={calendar} alt="" />
                <div className="intro__top__texts">
                  <h2 className="intro__top__title">250k</h2>
                  <p className="intro__top__text">Assisted Student</p>
                </div>
              </div>
              <div className="intro__right">
                <img src={yigit} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="container">
            <div className="intro__container">
              <div className="intro__left">
                <div className="intro__left__top">
                  <p>Seeking Knowledge is an Obligation in Islam</p>
                </div>
                <h1 className="intro__title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro__left__bottom">
                  <button className="intro__btn">Students’ opnion</button>
                  <div className="intro__comments">
                    <div className="intro__comments__images">
                      <img
                        src={odam3}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam4}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam5}
                        alt=""
                        className="intro__comments__img"
                      />
                    </div>
                    <div className="intro__comments__rare">
                      <div className="intro__comments__rares">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                      </div>
                      <p className="intro__comments__text">( 10k+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro__top">
                <img src={calendar} alt="" />
                <div className="intro__top__texts">
                  <h2 className="intro__top__title">250k</h2>
                  <p className="intro__top__text">Assisted Student</p>
                </div>
              </div>
              <div className="intro__right">
                <img src={yigit} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="container">
            <div className="intro__container">
              <div className="intro__left">
                <div className="intro__left__top">
                  <p>Seeking Knowledge is an Obligation in Islam</p>
                </div>
                <h1 className="intro__title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro__left__bottom">
                  <button className="intro__btn">Students’ opnion</button>
                  <div className="intro__comments">
                    <div className="intro__comments__images">
                      <img
                        src={odam3}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam4}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam5}
                        alt=""
                        className="intro__comments__img"
                      />
                    </div>
                    <div className="intro__comments__rare">
                      <div className="intro__comments__rares">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                      </div>
                      <p className="intro__comments__text">( 10k+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro__top">
                <img src={calendar} alt="" />
                <div className="intro__top__texts">
                  <h2 className="intro__top__title">250k</h2>
                  <p className="intro__top__text">Assisted Student</p>
                </div>
              </div>
              <div className="intro__right">
                <img src={yigit} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="container">
            <div className="intro__container">
              <div className="intro__left">
                <div className="intro__left__top">
                  <p>Seeking Knowledge is an Obligation in Islam</p>
                </div>
                <h1 className="intro__title">
                  Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                </h1>
                <div className="intro__left__bottom">
                  <button className="intro__btn">Students’ opnion</button>
                  <div className="intro__comments">
                    <div className="intro__comments__images">
                      <img
                        src={odam3}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam4}
                        alt=""
                        className="intro__comments__img"
                      />
                      <img
                        src={odam5}
                        alt=""
                        className="intro__comments__img"
                      />
                    </div>
                    <div className="intro__comments__rare">
                      <div className="intro__comments__rares">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                      </div>
                      <p className="intro__comments__text">( 10k+ Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro__top">
                <img src={calendar} alt="" />
                <div className="intro__top__texts">
                  <h2 className="intro__top__title">250k</h2>
                  <p className="intro__top__text">Assisted Student</p>
                </div>
              </div>
              <div className="intro__right">
                <img src={yigit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Intro;
