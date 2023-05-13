import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Autopilot = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <InfoWrapper>
          <Block>
            <Title>360°</Title>
            <Text>{t("autopilot.text1")}</Text>
            <TextRes>{t("autopilot.text2")}</TextRes>
          </Block>
          <Block>
            <Title>250 м</Title>
            <Text>{t("autopilot.text3")}</Text>
            <TextRes>{t("autopilot.text4")}</TextRes>
          </Block>
          <Block>
            <Title>0</Title>
            <Text>{t("autopilot.text5")}</Text>
            <TextRes>Tesla Vision</TextRes>
          </Block>
        </InfoWrapper>
      </Wrapper>
      <ImageDesc>
        <LeftBlock>
          <TitleS>{t("autopilot.text6")}</TitleS>
          <TitleB>{t("autopilot.text7")}</TitleB>
        </LeftBlock>
        <RightBlock>{t("autopilot.text8")}</RightBlock>
      </ImageDesc>
    </>
  );
};
export default Autopilot;

const Wrapper = styled.div`
  display: flex;
  background-image: url("/images/autopilot.png");
  background-position: center;
  width: 100%;
  height: 960px;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 870px) {
    height: 600px;
    background-position: bottom 40% left 30%;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
  text-align: left;
  width: 300px;
  padding-left: 40px;
  row-gap: 50px;

  @media screen and (max-width: 870px) {
    text-align: center;
    margin: auto auto 50px;
    flex-direction: row;
    height: auto;
    width: auto;
    column-gap: 50px;
    padding: 0 30px;
  }
  @media screen and (max-width: 600px) {
    column-gap: 20px;
  }
`;
const Block = styled.div`
  display: flex;
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
  font-size: 32px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;
const TextRes = styled.div`
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
  padding-bottom: 100px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
    padding-top: 40px;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 1020px) {
    flex-direction: column;
    row-gap: 50px;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
    padding-top: 40px;
    padding-bottom: 100px;
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
  @media screen and (max-width: 700px) {
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
