import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import Footer from "../../common/Footer";
import Configurator from "../../common/Relinking/Configurator";
import HelmTags from "../../Helmet";
import Autopilot from "../common/autopilot";
import MainScreenModel from "../common/mainScreen";
import Specs from "../common/specs";
import { model3 } from "../common/specs/data";
import { modelsData } from "../data";

const Model3 = ({ tags }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.model3[0]}
          titleru={tags.model3ru[0]}
          desc={tags.model3[1]}
          descru={tags.model3ru[1]}
          img={tags.model3[2]}
        />
      ) : null}
      <MainScreenModel
        bg={"/images/bg/Model3_Bg.jpg"}
        mbg={"/images/bg/Model3_Bg_mob.jpg"}
        model={i18n.language === "ua" ? modelsData.model3 : modelsData.model3ru}
      />
      <ImageBlock bg={"/images/konfigurator/cars/modelY_black.jpg"}>
        <DescWrapper>
          <SimpleWrapper>
            <Title>{t("modelY.text1")}</Title>
            <Desc>{t("modelY.text2")}</Desc>
            <DescRes>{t("modelY.text3")}</DescRes>
          </SimpleWrapper>

          <SimpleWrapper>
            <Title>WI-Fi</Title>
            <Desc>{t("modelY.text4")}</Desc>
            <DescRes>{t("modelY.text5")}</DescRes>
          </SimpleWrapper>

          <SimpleWrapper>
            <Title>{t("modelY.text6")}</Title>
            <Desc>{t("modelY.text7")}</Desc>
            <DescRes>{t("modelY.text8")}</DescRes>
          </SimpleWrapper>
        </DescWrapper>
      </ImageBlock>
      <ImageDesc>
        <LeftBlock>
          <TitleS>{t("modelY.text9")}</TitleS>
          <TitleB>{t("modelY.text10")}</TitleB>
        </LeftBlock>
        <RightBlock>{t("modelY.text11")}</RightBlock>
      </ImageDesc>

      <ImageBlockTesla style={{ marginTop: "100px" }}>
        <DescWrapperRes>
          <SimpleWrapperRes>
            <Title>2</Title>
            <Desc>{t("modelY.text12")}</Desc>
            <DescRes>{t("modelY.text13")}</DescRes>
          </SimpleWrapperRes>
          <SimpleWrapperRes>
            <Title>3.5 с</Title>
            <Desc>{t("modelY.text14")}</Desc>
            <DescRes>{t("modelY.text15")}</DescRes>
          </SimpleWrapperRes>
          <SimpleWrapperRes>
            <Title>
              <img src="/images/pages/weather.svg" alt="asd" />
            </Title>
            <Desc>{t("modelY.text16")}</Desc>
            <DescRes>{t("modelY.text17")}</DescRes>
          </SimpleWrapperRes>
        </DescWrapperRes>
      </ImageBlockTesla>

      <ImageDesc>
        <LeftBlock>
          <TitleS>{t("modelY.text18")}</TitleS>
          <TitleB>{t("modelY.text19")}</TitleB>
        </LeftBlock>
        <RightBlock>{t("modelY.text20")}</RightBlock>
      </ImageDesc>
      <Cascade>
        <ImageC bg={"/images/cascade.png"} />
        <TextWrapp>
          <TitleS>{t("cascade.text1")}</TitleS>
          <TitleB style={{ marginTop: "-30px" }}>{t("cascade.text2")}</TitleB>
          <RightBlock>{t("cascade.text3")}</RightBlock>
          <RightBlock>{t("cascade.text4")}</RightBlock>
          <RightBlock>{t("cascade.text5")}</RightBlock>
        </TextWrapp>
      </Cascade>
      <Autopilot />
      <Specs
        img={"/images/spec_model3.png"}
        name={"Model 3"}
        data={model3}
        var1={"Performance"}
        var2={"Long Range AWD"}
        var3={"Rear-Wheel Drive"}
      />
      <Configurator href={"/konfigurator/model3"} />
      <Footer />
    </>
  );
};
export default Model3;
const ImageBlock = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-position: center;
  width: 100%;
  height: 970px;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: 600px;
  }
`;
const ImageBlockTesla = styled.div`
  display: flex;
  background-image: url("/images/pages/model3.jpg");
  background-position: center;
  width: 100%;
  height: 970px;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 800px) {
    background-image: url("/images/pages/model32.jpg");
    height: 600px;
  }
`;
const DescWrapper = styled.div`
  text-align: left;
  width: 280px;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto 0;
  padding-right: 40px;
  margin-left: auto;
  @media screen and (max-width: 870px) {
    text-align: center;
    margin: auto auto 50px;
    flex-direction: row;
    height: auto;
    width: auto;
    column-gap: 50px;
    padding-right: 0;
  }
  @media screen and (max-width: 600px) {
    column-gap: 20px;
  }
`;
const DescWrapperRes = styled.div`
  text-align: center;
  margin: auto 0 50px;
  width: 100%;
  padding: 0 40px;
  justify-content: center;
  display: flex;
  column-gap: 50px;
  @media screen and (max-width: 600px) {
    column-gap: 35px;
    padding: 0 20px;
  }
`;
const SimpleWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  @media screen and (max-width: 870px) {
    width: 100px;
  }
  @media screen and (max-width: 470px) {
    width: 80px;
  }
`;
const SimpleWrapperRes = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  @media screen and (max-width: 1085px) {
    width: 240px;
  }
  @media screen and (max-width: 870px) {
    width: 100px;
  }
  @media screen and (max-width: 550px) {
    width: 70px;
  }
`;
const Title = styled.div`
  color: white;
  font-size: 32px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const Desc = styled.div`
  color: white;

  font-size: 14px;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;
const DescRes = styled.div`
  color: white;
  display: none;
  font-size: 14px;
  @media screen and (max-width: 870px) {
    display: block;
  }
`;
const ImageDesc = styled.div`
  display: flex;
  padding: 0 180px;
  column-gap: 50px;
  padding-top: 40px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 1020px) {
    flex-direction: column;
    row-gap: 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
    padding-top: 40px;
  }
`;
const LeftBlock = styled.div`
  min-width: 550px;
  text-align: left;
  @media screen and (max-width: 1450px) {
    min-width: 470px;
  }
  @media screen and (max-width: 1150px) {
    min-width: 420px;
  }
  @media screen and (max-width: 1020px) {
    min-width: 370px;
  }
  @media screen and (max-width: 1020px) {
    min-width: 200px;
  }
`;
const TitleS = styled.div`
  font-size: 24px;
`;
const TitleB = styled.div`
  font-size: 28px;
`;
const RightBlock = styled.div`
  font-size: 18px;
  text-align: left;
`;
const Cascade = styled.div`
  display: flex;
  margin: 100px 0;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ImageC = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center;
  width: 140%;
  aspect-ratio: 16 / 8;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-position: bottom 30% left 40%;
  }
`;
const TextWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  row-gap: 30px;
  padding-right: 40px;
  @media screen and (max-width: 1000px) {
    padding-left: 40px;
    margin-top: 40px;
  }
`;
