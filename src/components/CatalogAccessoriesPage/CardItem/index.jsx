import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import {
  GrayLine,
  Info,
  InfoName,
  InfoValue,
  InfoWrapper,
  Name,
  PriceBar,
  PriceM,
  PriceS,
  RedLine,
  Wrapper,
} from "../../common/CardItem/views";
import { errorImage } from "../../errorImg/data";
const CardItem = ({ data }) => {
  let statusText;
  let BgColor;
  let TextColor;
  const { t } = useTranslation();
  if (data.availability == false) {
    statusText = t("mainscreen.catalog.card.status2");
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (data.availability == true) {
    statusText = t("mainscreen.catalog.card.status1");
    BgColor = "#E20531";
    TextColor = `#F9F9F9`;
  }
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(data.id)}>
      <Image img={data.image[0] || errorImage}>
        <Status col={BgColor} tcol={TextColor}>
          {statusText}
        </Status>
      </Image>
      <Name>{i18n.language === "ua" ? data.name : data.nameru}</Name>
      <PriceBar>
        <PriceM>{data.priceUsd} $</PriceM>
        <PriceS>{data.priceUah} грн</PriceS>
        <PriceS>{data.priceEu} €</PriceS>
      </PriceBar>
      <InfoWrapper>
        <Info>
          <InfoName>{t("mainscreen.catalog.card.avalible")}:</InfoName>
          <InfoValue>
            {data.availability
              ? `${t("mainscreen.catalog.card.status1")}`
              : `${t("mainscreen.catalog.card.status2")}`}{" "}
          </InfoValue>
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
  width: 486;
  height: 289px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
