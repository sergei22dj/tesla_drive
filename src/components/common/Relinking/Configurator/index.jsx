import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../../i18n/i18n";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Configurator = ({ href }) => {
  const { width } = useWindowDimensions();
  const link = href ? href : "/konfigurator";
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ContentWrapper width={width}>
        <LWrapper>
          <Title>{t("bconfigurator.text1")}</Title>
          <Text>{t("bconfigurator.text2")}</Text>
          <Link to={link}>
            <Button>{t("bconfigurator.text3")}</Button>
          </Link>
        </LWrapper>
        <RWrapper
          bg={
            i18n.language === "ua"
              ? "/images/Config_Bg.png"
              : "/images/Config_Bg_ru.png"
          }
          bgm={
            i18n.language === "ua"
              ? "/images/Config_Bg_mob.png"
              : "/images/Config_Bg_mob_ru.png"
          }
        ></RWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
export default Configurator;
const Wrapper = styled.div`
  padding: 0 180px;
  background-color: #f9f9f9;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
`;
const ContentWrapper = styled.div`
  background-color: #f9f9f9;
  height: 578px;
  display: flex;
  @media screen and (max-width: 1320px) {
    height: 872px;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 872px) {
    height: ${(props) => props.width}px;
  }
  @media screen and (max-width: 550px) {
    height: calc(${(props) => props.width}px + 100px);
  }
`;
const LWrapper = styled.div`
  margin: auto 0;
  padding-left: 60px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  row-gap: 45px;
  flex-direction: column;
  @media screen and (max-width: 1320px) {
    margin-top: 45px;
    padding-left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 550px) {
    row-gap: 25px;
  }
`;
const RWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 578px;
  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 550px) {
    background-image: url(${(p) => p.bgm});
  }
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;
const Text = styled.div`
  width: 259px;
  font-size: 16px;
  color: #939298;
  @media screen and (max-width: 550px) {
    font-size: 12px;
    width: 197px;
  }
`;

const Button = styled.div`
  width: 235px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #e20531;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
    width: 171px;
    height: 33px;
  }
`;
