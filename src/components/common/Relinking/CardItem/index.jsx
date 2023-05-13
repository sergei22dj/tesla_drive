import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../../i18n/i18n";
import {
  Info,
  InfoName,
  InfoValue,
  InfoWrapper,
  Name,
  PriceBar,
  PriceM,
  PriceS,
} from "../../CardItem/views";

const RelCardItem = ({ data, linkUrl, auto }) => {
  let statusText;
  let BgColor;
  let TextColor;
  const { t } = useTranslation();
  if (data.availability == false) {
    statusText = t("mainscreen.catalog.card.status1");
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (data.availability == true) {
    statusText = t("mainscreen.catalog.card.status2");
    BgColor = "#E20531";
    TextColor = `#F9F9F9`;
  }
  if (auto) {
    if (data.status == "a") {
      statusText = t("mainscreen.catalog.card.status2");
      BgColor = `#E20531`;
      TextColor = `white`;
    }
    if (data.status == "b") {
      statusText = t("mainscreen.catalog.card.status1");
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
  }

  return (
    <Link to={linkUrl ? `/${linkUrl}` : null}>
      <Wrapper>
        <Image img={data.image[0]}>
          <Status col={BgColor} tcol={TextColor}>
            {statusText}
          </Status>
        </Image>
        <Name>
          {auto ? (
            <>
              {data.mark} {data.model}
            </>
          ) : i18n.language === "ua" ? (
            data.name
          ) : (
            data.nameru
          )}
        </Name>
        <PriceBar>
          <PriceM>{data.priceUsd} $</PriceM>
          <PriceS>{data.priceUah} грн</PriceS>
          <PriceS>{data.priceEu} €</PriceS>
        </PriceBar>
      </Wrapper>
    </Link>
  );
};
export default RelCardItem;

const Image = styled.div`
  position: relative;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
