import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Configurator from "../../common/Relinking/Configurator";
import HelmTags from "../../Helmet";
import MainScreenModel from "../common/mainScreen";
import { modelsData } from "../data";
import { data } from "./data";

const Roadster = ({ tags }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.roadster[0]}
          titleru={tags.roadsterru[0]}
          desc={tags.roadster[1]}
          descru={tags.roadsterru[1]}
          img={tags.roadster[2]}
        />
      ) : null}
      <MainScreenModel
        bg={"/images/bg/Roadster_Bg.jpg"}
        mbg={"/images/bg/Roadster_Bg_mob.jpg"}
        model={
          i18n.language === "ua" ? modelsData.roadster : modelsData.roadsterru
        }
      />
      <Black>
        <ImageSec img={"/images/road1.png"} />
        <Info>
          <Title>{t("roadster.text1")}</Title>
          <Desc>{t("roadster.text2")}</Desc>
        </Info>
        <ImageB img={"/images/road2.png"}>
          <InfoR>
            <Title>{t("roadster.text3")}</Title>
            <Desc>{t("roadster.text4")}</Desc>
          </InfoR>
        </ImageB>
        <InfoRes>
          <Title>{t("roadster.text3")}</Title>
          <Desc>{t("roadster.text4")}</Desc>
        </InfoRes>
        <Video
          src="https://player.vimeo.com/video/249563752?h=60746b212b"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></Video>
        <Title>{t("roadster.text5")}</Title>
        <Title style={{ marginTop: "60px" }}>Характеристики Roadster</Title>
        <Title
          style={{ marginTop: "60px", marginBottom: "10px", fontSize: "20px" }}
        >
          Drive
        </Title>
        <Grid>
          {data.map((el) => (
            <Block>
              <Descr>{el.title}</Descr>
              <Value>{el.value}</Value>
            </Block>
          ))}
        </Grid>
      </Black>

      <Configurator />
      <Footer />
    </>
  );
};
export default Roadster;
const Black = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 180px;
  padding-top: 40px;
  background-color: black;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
    padding-top: 40px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  padding-bottom: 200px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;
const Block = styled.div`
  color: white;
  text-align: left;
`;
const Descr = styled.div`
  font-size: 14px;
`;
const Value = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;
const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 10;
  border: none;
`;

const ImageB = styled.div`
  background-image: url(${(props) => props.img});
  width: calc(100% + 320px);
  aspect-ratio: 16 / 8;
  margin: 0 -180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 1650px) {
    width: calc(100% + 80px);
    margin: 0 -40px;
  }
  @media screen and (max-width: 550px) {
    width: calc(100% + 60px);
    margin: 0 -30px;
  }
`;
const ImageSec = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  aspect-ratio: 16 / 8;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Info = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  column-gap: 30px;
  margin: 20px 0 50px;
  row-gap: 20px;
`;
const InfoR = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  column-gap: 30px;
  margin: 20px 0 50px;
  row-gap: 20px;
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
const InfoRes = styled.div`
  display: none;
  align-items: start;
  flex-direction: column;
  column-gap: 30px;
  margin: 20px 0 50px;
  row-gap: 20px;
  @media screen and (max-width: 950px) {
    display: flex;
  }
`;
const Title = styled.div`
  color: white;
  text-align: left;
  font-size: 28px;
  min-width: 340px;
  @media screen and (max-width: 1350px) {
    font-size: 24px;
  }
  @media screen and (max-width: 720px) {
    font-size: 18px;
    min-width: 280px;
  }
`;
const Desc = styled.div`
  color: white;
  text-align: left;
  font-size: 24px;
  @media screen and (max-width: 1350px) {
    font-size: 18px;
  }
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
