import React from "react";
import { useLocation } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  InfoPart,
} from "./Detail.style";

const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle></DetailTitle>
        <DetailImg>
          <img src="" alt="" />
        </DetailImg>
        <Description></Description>
        <InfoPart></InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
