import React from "react";
import "../styles/home.scss";
import Intro from "../Components/UI/Intro/Intro";
import Services from "../Components/UI/Services/Services";
import Ourteam from "../Components/UI/Ourteam/Ourteam";
import Partners from "../Components/UI/Partners/Partners";
import Ourmedia from "../Components/UI/Ourmedia/Ourmedia";
import Say from "../Components/UI/Say/Say";
import Asked from "../Components/UI/Asked/Asked";
import Consultation from "../Components/UI/Consultation/Consultation";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Services />
      <Ourteam />
      <Partners />
      <Ourmedia />
      <Say />
      <Asked />
      <Consultation />
    </div>
  );
};

export default Home;
