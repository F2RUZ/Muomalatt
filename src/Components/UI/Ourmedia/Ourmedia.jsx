import React, { useState } from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ourmedia.scss";
import jamoa from "../../../assets/jamoa.png";
import jamoa2 from "../../../assets/jamoa2.png";
import kitobxon from "../../../assets/kitobxon.png";

const mediaData = [
  { image: jamoa, title: "Why Islamic finance?" },
  { image: jamoa2, title: "What makes Islamic finance unique?" },
  { image: kitobxon, title: "How is risk managed in Islamic finance?" },
];

const Ourmedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="ourmedia">
      <div className="container">
        <div className="ourmedia__container">
          <h1 className="ourmedia__title">Our Media</h1>
          <div className="ourmedia__slider">
            <div className="ourmedia__flex">
              <h3 className="ourmedia__slider__title">Our media showcase</h3>
              <div className="ourmedia__controls">
                <button className="ourmedia__control left" onClick={handlePrev}>
                  <FaArrowLeft />
                </button>
                <button
                  className="ourmedia__control right"
                  onClick={handleNext}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="ourmedia__cards">
              {mediaData.map((item, index) => (
                <div
                  className={`ourmedia__card ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                  key={index}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="ourmedia__card__overlay">
                    <p>{item.title}</p>
                    <button className="ourmedia__playButton">
                      <FaPlay />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmedia;
