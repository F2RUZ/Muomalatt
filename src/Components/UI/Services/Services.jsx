import React from "react";
import "./services.scss";
import islamic from "../../../assets/islamic.png";
import cooperation from "../../../assets/cooperation.png";
import education from "../../../assets/edu.png";
import market from "../../../assets/market.png";

const Services = () => {
  const cards = [
    {
      title: "Islamic Fund Management",
      text: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      img: islamic,
    },
    {
      title: "International Relations",
      text: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      img: cooperation,
    },
    {
      title: "Education and Training",
      text: "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      img: education,
    },
    {
      title: "For Islamic Banks",
      text: "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
      img: market,
    },
    {
      title: "Islamic Capital Market",
      text: "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      img: market,
    },
    {
      title: "Shariah Compliance Audit",
      text: "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      img: islamic,
    },
  ];

  return (
    <div className="services">
      <div className="container">
        <div className="services__container">
          <div className="services__top">
            <h1 className="services__title">Our Services</h1>
            <p className="services__text">
              Expert guidance for managing funds in alignment with Islamic
              principles, helping you make informed, halal investment decisions.
            </p>
          </div>
          <div className="services__cards">
            {cards.map((elem, index) => (
              <div className="services__card" key={index}>
                <div className="services__card__top">
                  <img
                    src={elem.img}
                    alt={elem.title}
                    className="services__card__img"
                  />
                  <h3 className="services__card__title">{elem.title}</h3>
                </div>
                <div className="services__card__text">{elem.text}</div>
                <button className="services__card__btn">Learn more</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
