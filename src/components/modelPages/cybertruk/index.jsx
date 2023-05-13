import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Configurator from "../../common/Relinking/Configurator";
import HelmTags from "../../Helmet";
import MainScreenModel from "../common/mainScreen";
import { modelsData } from "../data";

const Cybertruk = ({ tags }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.cybertruck[0]}
          titleru={tags.cybertruckru[0]}
          desc={tags.cybertruck[1]}
          descru={tags.cybertruckru[1]}
          img={tags.cybertruck[2]}
        />
      ) : null}
      <MainScreenModel
        bg={"/images/bg/Cybertruck_Bg.jpg"}
        mbg={"/images/bg/Cybertruck_Bg_mob.jpg"}
        model={modelsData.cybertruck}
      />
      <Image bg={"/images/cybertruck_2.jpg.jpg"} />
      <Wrapper>
        <ImageSec img={"/images/ct1.png"} />
        <Info>
          <Title>{t("cybertruck.text1")}</Title>
          <Desc>{t("cybertruck.text2")}</Desc>
        </Info>

        <ImageSec img={"/images/ct2.png"} />
        <Info>
          <Title>{t("cybertruck.text3")}</Title>
          <Desc>{t("cybertruck.text4")}</Desc>
        </Info>

        <ImageSec img={"/images/ct3.png"} />
        <Info>
          <Title>{t("cybertruck.text5")}</Title>
          <Desc>{t("cybertruck.text6")}</Desc>
        </Info>
        <video autoPlay muted loop id="myVideo" style={{ width: "100%" }}>
          <source src="/images/ct_video.webm" type="video/webm" />
        </video>
        <Info>
          <Title>{t("cybertruck.text7")}</Title>
          <Desc>{t("cybertruck.text2")}</Desc>
        </Info>
      </Wrapper>
      <Configurator />
      <Footer />
    </>
  );
};
export default Cybertruk;

const Image = styled.div`
  background-image: url(${(props) => props.bg});

  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 16 / 8;
`;
const Wrapper = styled.div`
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
  column-gap: 30px;
  margin: 20px 0 50px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
const Title = styled.div`
  color: white;
  text-align: left;
  font-size: 22px;
  min-width: 340px;
  @media screen and (max-width: 1350px) {
    font-size: 18px;
  }
  @media screen and (max-width: 720px) {
    font-size: 16px;
    min-width: 280px;
  }
`;
const Desc = styled.div`
  color: white;
  text-align: left;
  font-size: 20px;
  @media screen and (max-width: 1350px) {
    font-size: 16px;
  }
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
