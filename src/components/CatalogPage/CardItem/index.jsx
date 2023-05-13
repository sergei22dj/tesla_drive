import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GrayLine, RedLine } from "../../common/CardItem/views";
import {
  Info,
  InfoName,
  InfoValue,
  InfoWrapper,
  Name,
  PriceBar,
  PriceM,
  PriceS,
  Wrapper,
} from "./views";

const CardItem = ({ data }) => {
  let statusText;
  let BgColor;
  let TextColor;
  const { t } = useTranslation();
  if (data.status == "a") {
    statusText = t("mainscreen.catalog.card.status1");
    BgColor = `#E20531`;
    TextColor = `white`;
  }
  if (data.status == "b") {
    statusText = t("mainscreen.catalog.card.status2");
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (data.status == "c") {
    statusText = t("mainscreen.catalog.card.status3");
    BgColor = "#F9F9F9";
    TextColor = `#E20531`;
  }
  if (data.sale) {
    statusText = t("mainscreen.catalog.card.status4");
    BgColor = "#fcef37";
    TextColor = `#000000`;
  }

  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(data.id)}>
      <Image img={data.image[0]}>
        <Status col={BgColor} tcol={TextColor}>
          {statusText}
        </Status>
      </Image>
      <Name>{data.name}</Name>
      <PriceBar>
        <PriceM>{data.priceUsd} $</PriceM>
        <PriceS>{data.priceUah} грн</PriceS>
        <PriceS>{data.priceEu} €</PriceS>
      </PriceBar>
      <InfoWrapper>
        <Info>
          <InfoName>{t("mainscreen.catalog.card.reserve")}:</InfoName>
          <InfoValue>{data.powerReserve} км</InfoValue>
        </Info>
        <Info>
          <InfoName>{t("mainscreen.catalog.card.battery")}:</InfoName>
          <InfoValue>{data.batteryCapacity} кВт/ч</InfoValue>
        </Info>
        <Info>
          <InfoName>{t("mainscreen.catalog.card.mile")}:</InfoName>
          <InfoValue>{data.mileage} км</InfoValue>
        </Info>
        <Info>
          <InfoName>{t("mainscreen.catalog.card.year")}:</InfoName>
          <InfoValue>{data.year}</InfoValue>
        </Info>
        <GrayLine />
        <RedLine />
      </InfoWrapper>
    </Wrapper>
  );
};
export default CardItem;

const Image = styled.div`
  position: relative;
  height: 286px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 450px) {
    height: 220px;
  }
  @media screen and (max-width: 320px) {
    height: 180px;
  }
`;
const Status = styled.div`
  position: absolute;
  top: ${(props) => (props.col == "#F9F9F9" ? "-1px" : "0")};
  left: ${(props) => (props.col == "#F9F9F9" ? "-1px" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  font-family: "Gilroy-medium";
  height: 37px;
  color: ${(props) => props.tcol};
  background-color: ${(props) => props.col};
  @media screen and (max-width: 550px) {
    font-size: 12px;

    height: 28px;
  }
`;
