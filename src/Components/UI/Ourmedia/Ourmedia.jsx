import React, { useState } from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ourmedia.scss";
import jamoa from "../../../assets/img/jamoa.png";
import jamoa2 from "../../../assets/img/jamoa2.png";
import kitobxon from "../../../assets/img/kitobxon.png";

const mediaData = [
  { image: jamoa, title: "Why Islamic finance?" },
  { image: jamoa2, title: "What makes Islamic finance unique?" },
  { image: kitobxon, title: "How is risk managed in Islamic finance?" },
  { image: jamoa, title: "Why Islamic finance?" },
  { image: jamoa2, title: "What makes Islamic finance unique?" },
  { image: kitobxon, title: "How is risk managed in Islamic finance?" },
];

const Ourmedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < mediaData.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const visibleCards = [
    mediaData[currentIndex],
    mediaData[currentIndex + 1],
    mediaData[currentIndex + 2],
  ];

  return (
    <div className="ourmedia">
      <div className="container">
        <div className="ourmedia__container">
          <h1 className="ourmedia__title">Our Media</h1>
          <div className="ourmedia__slider">
            <div className="ourmedia__flex">
              <h3 className="ourmedia__slider__title">Our media showcase</h3>
              <div className="ourmedia__controls">
                <button
                  className={`ourmedia__control left ${
                    currentIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className={`ourmedia__control right ${
                    currentIndex >= mediaData.length - 3 ? "disabled" : ""
                  }`}
                  onClick={handleNext}
                  disabled={currentIndex >= mediaData.length - 3}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="ourmedia__cards">
              {visibleCards.map((item, index) => (
                <div className="ourmedia__card" key={index}>
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
