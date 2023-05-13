import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import Footer from "../../common/Footer";
import Configurator from "../../common/Relinking/Configurator";
import HelmTags from "../../Helmet";
import Autopilot from "../common/autopilot";
import AVideo from "../common/autopolotVideo";
import MainScreenModel from "../common/mainScreen";
import Skelet from "../common/skelet";
import Specs from "../common/specs";
import { modelS } from "../common/specs/data";
import { modelsData } from "../data";

const ModelS = ({ tags }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.modelS[0]}
          titleru={tags.modelSru[0]}
          desc={tags.modelS[1]}
          descru={tags.modelSru[1]}
          img={tags.modelS[2]}
        />
      ) : null}
      <MainScreenModel
        bg={"/images/bg/ModelS_Bg.jpg"}
        mbg={"/images/bg/ModelS_Bg_mob.jpg"}
        model={i18n.language === "ua" ? modelsData.modelS : modelsData.modelSru}
      />
      <Black>{t("modelS.text1")}</Black>
      <ImageBlock bg={"/images/konfigurator/cars/modelS_white.jpg"} />
      {/* Blok1 */}
      <BlackBlock>
        <BlockImage bg={"/images/pages/modelS_1.png"} />
        <BlockText>
          <TitleText>{t("modelX.text1")}</TitleText>
          {t("modelX.text2")}
        </BlockText>

        <BlockTextRight>
          <TitleText>{t("modelX.text3")}</TitleText>
          {t("modelX.text4")}
        </BlockTextRight>
        <BlockImage bg={"/images/pages/modelS_2.png"} />
        <BlockImage bg={"/images/pages/modelS_3.png"} />
        <BlockText>
          <TitleText>{t("modelS.text2")}</TitleText>
          {t("modelS.text3")}
        </BlockText>
      </BlackBlock>

      <BlockBlockRes>
        <BlockImage bg={"/images/pages/modelS_1.png"} />
        <TitleText>{t("modelX.text1")}</TitleText>
        {t("modelX.text2")}
        <BlockImage bg={"/images/pages/modelS_2.png"} />
        <TitleText>{t("modelX.text3")}</TitleText>
        {t("modelX.text4")}
        <BlockImage bg={"/images/pages/modelS_3.png"} />
        <TitleText>{t("modelS.text2")}</TitleText>
        {t("modelS.text3")}
      </BlockBlockRes>

      <Skelet model={"Model S"} />
      {/*Block 2 */}
      <BlackBlock>
        <BlockTextRight>
          <TitleText>{t("modelX.text5")}</TitleText>
          {t("modelX.text6")}
        </BlockTextRight>

        <BlockImage bg={"/images/pages/modelS_4.png"} />
        <BlockImage bg={"/images/pages/modelS_5.png"} />
        <BlockText>
          <TitleText> {t("modelX.text7")}</TitleText>
          {t("modelX.text8")}
        </BlockText>
        <BlockTextRight>
          <TitleText>{t("modelX.text9")}</TitleText>
          {t("modelX.text10")}
        </BlockTextRight>
        <BlockImage bg={"/images/pages/modelS_6.png"} />
      </BlackBlock>

      <BlockBlockRes>
        <BlockImage bg={"/images/pages/modelS_4.png"} />
        <TitleText>{t("modelX.text5")}</TitleText>
        {t("modelX.text6")}
        <BlockImage bg={"/images/pages/modelS_5.png"} />
        <TitleText> {t("modelX.text7")}</TitleText>
        {t("modelX.text8")}
        <BlockImage bg={"/images/pages/modelS_6.png"} />
        <TitleText>{t("modelX.text9")}</TitleText>
        {t("modelX.text10")}
      </BlockBlockRes>

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
      <AVideo />
      <Specs
        img={"/images/spec_model3.png"}
        name={"Model S"}
        data={modelS}
        var1={"Model S Plaid"}
        var2={"Model S"}
      />
      <Configurator href={"/konfigurator/modelS"} />
      <Footer />
    </>
  );
};
export default ModelS;
const Black = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 36px;
  width: 100%;
  background-color: black;
  color: white;
  box-shadow: 0px 0px 80px 40px black;
  z-index: 10000000000;
  position: relative;
`;
const ImageBlock = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-position: center;
  width: 100%;
  aspect-ratio: 16 / 8;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: 600px;
  }
`;
const BlackBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 100px 180px;
  background-color: black;
  @media screen and (max-width: 1650px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 550px) {
    padding: 100px 30px;
    display: none;
  }
`;
const BlockBlockRes = styled.div`
  display: none;
  background-color: black;
  color: white;
  padding: 100px 180px;
  background-color: black;
  @media screen and (max-width: 1650px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 550px) {
    padding: 100px 30px;
    display: block;
  }
`;
const BlockImage = styled.div`
  display: flex;
  background-image: url(${(props) => props.bg});
  background-position: center;
  width: 100%;

  aspect-ratio: 16 / 8;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 550px) {
    width: calc(100% + 60px);
    margin: 0 -30px;
    margin-top: 30px;
  }
`;
const BlockText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  min-width: calc(50% - 50px);
  padding-left: 100px;
  @media screen and (max-width: 820px) {
    padding-left: 40px;
    min-width: calc(50% - 20px);
    font-size: 14px;
  }
`;
const BlockTextRight = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  min-width: calc(50% - 50px);
  padding-right: 100px;
  @media screen and (max-width: 820px) {
    padding-right: 40px;
    min-width: calc(50% - 20px);
    font-size: 14px;
  }
`;
const TitleText = styled.div`
  font-size: 18px;
  color: white;
  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 30px;
  }
`;

// cascade
const Cascade = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 100px 0;
  @media screen and (max-width: 1200px) {
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
    min-width: 320px;
    background-repeat: no-repeat;
    background-position: bottom 30% left 40%;
  }
  @media screen and (max-width: 470px) {
    width: 100%;
    min-width: auto;
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
  padding-left: 40px;
  @media screen and (max-width: 1200px) {
    padding: 0 40px;
    margin-top: 40px;
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
// =================
