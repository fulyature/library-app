import React from "react";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import Header from "../../components/header/Header";
import homeImg from "../../assets/hog2.jpg";
import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
  const { myData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {myData.length ? (
        <CardContainer wrap="wrap">
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={homeImg} alt="Home" />
        </HomeImage>
      )}
    </HomeContainer>
  );
};

export default Home;
