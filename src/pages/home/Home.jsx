import React from "react";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import Header from "../../components/header/Header";
import homeImg from "../../assets/hog2.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImage>
        <img src={homeImg} alt="home" />
      </HomeImage>
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
