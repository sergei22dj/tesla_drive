import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import { footerTitles1, footerTitles2, footerTitles3 } from "../Footer/data";
import ModalTO from "../modalTO";
import { HeaderTitles, phoneNumber } from "./data";
// views
import { Logo, MenuBtn, Phone, Title, TitleWrapper, Wrapper } from "./views";

const Header = () => {
  const [viewBurger, setViewBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handleLang = (e) => {
    if (i18n.language !== e) {
      // v1 - below lines since 'en' is not present in the url as your baseUrl definition

      // v2 - below is the version if language is always present in the url
      let newUrl = window.location.pathname.startsWith(`/${i18n.language}`)
        ? window.location.pathname.replace(`/${i18n.language}`, `/${e}`)
        : window.location.pathname.replace(`/`, `/${e}/`);
      window.location.replace(newUrl);
      localStorage.setItem("i18nextLng", e); // this writes to the localStorage to keep the change
      i18n.changeLanguage(e);
      localStorage.setItem("lang", e);
    }
  };

  const lang = i18n.language === "ua" ? 0 : 1;

  const openModal = () => {
    setOpen(true);
    setViewBurger(false);
  };

  return (
    <>
      <>
        <Wrapper>
          <Phone src="../../images/Phone.svg" />
          <Link to="/">
            <Logo src="../../images/Logo.svg" alt="img" />
          </Link>
          <TitleWrapper>
            {HeaderTitles.map((el) => (
              <Link to={el.link}>
                <Title>{el.label}</Title>
              </Link>
            ))}
          </TitleWrapper>
          <Title style={{ fontFamily: "Gilroy-medium" }}>
            <a href="tel:380689778888">{phoneNumber}</a>
          </Title>
          <Lang
            onClick={() => handleLang(i18n.language === "ua" ? "ru" : "ua")}
          >
            <Globe src="/images/global.png" alt="lang" />
            <div>{t("mainscreen.lang")}</div>
          </Lang>
          <MenuBtn
            src="../../images/Menu_Btn.png"
            alt="asd"
            onClick={() => setViewBurger(true)}
          />
        </Wrapper>
        {viewBurger && (
          <Burger>
            <LangRes
              onClick={() => handleLang(i18n.language === "ua" ? "ru" : "ua")}
            >
              <Globe src="/images/global.png" alt="lang" />
              <div>{t("mainscreen.lang")}</div>
            </LangRes>
            <CloseBtn onClick={() => setViewBurger(false)}></CloseBtn>
            <InfoWrapper>
              <ResColumn>
                {footerTitles1.map((el) => (
                  <Link to={el.link}>
                    <Text
                      style={{ fontFamily: "Gilroy-medium", fontWeight: "600" }}
                    >
                      {el.label}
                    </Text>
                  </Link>
                ))}
              </ResColumn>
              <RessColumn>
                {footerTitles1.map((el) => (
                  <Link to={el.link}>
                    <Text
                      style={{ fontFamily: "Gilroy-medium", fontWeight: "600" }}
                    >
                      {el.label}
                    </Text>
                  </Link>
                ))}
              </RessColumn>
              <Column>
                {footerTitles2[lang].map((el) => (
                  <Link to={el.link}>
                    <Text>{el.label}</Text>
                  </Link>
                ))}
              </Column>

              <Column>
                {footerTitles3[lang].map((el) => (
                  <Link to={el.link}>
                    <Text
                      onClick={() =>
                        el.label === footerTitles3[lang][0].label
                          ? openModal()
                          : null
                      }
                    >
                      {el.label}
                    </Text>
                  </Link>
                ))}
              </Column>
            </InfoWrapper>
          </Burger>
        )}
      </>
      <ModalTO open={open} setOpen={setOpen} />
    </>
  );
};
export default Header;
const Globe = styled.img`
  width: 16px;
  height: 16px;
  @media screen and (max-width: 725px) {
    width: 18px;
    height: 18px;
  }
`;
const Lang = styled.div`
  color: white;
  font-size: 16px;
  display: flex;
  column-gap: 5px;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 725px) {
    display: none;
    margin-right: 0;
    font-size: 18px;
  }
`;
const LangRes = styled.div`
  color: white;
  font-size: 16px;
  display: flex;
  column-gap: 5px;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  position: absolute;
  top: 40px;
  left: 40px;
  display: none;
  @media screen and (max-width: 725px) {
    display: flex;
    top: 25px;
    right: 40px;
    left: auto;
    font-size: 18px;
  }
`;
const Burger = styled.div`
  position: fixed;
  left: auto;
  right: auto;
  width: 100%;
  max-width: 1920px;
  height: 960px;
  background-color: #1c1b22;
  z-index: 99999999;
  margin-top: -150px;
  @media screen and (max-width: 565px) {
    height: 640px;
    margin-top: -127px;
  }
`;
const CloseBtn = styled.div`
  margin-left: auto;
  width: 102px;
  height: 102px;
  background-image: url("/images/Close_Btn.png");
  background-position: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-image: url("/images/Close_Btn_hover.png");
  }
  @media screen and (max-width: 725px) {
    width: 71px;
    height: 71px;
    margin-left: 0;
    margin-right: auto;
  }
`;
const InfoWrapper = styled.div`
  margin-top: 216px;
  display: flex;
  justify-content: space-between;
  background-color: #1c1b22;
  min-height: 376px;
  padding: 0 340px;
  box-sizing: border-box;
  gap: 20px;
  @media screen and (max-width: 1650px) {
    padding: 0 200px;
  }
  @media screen and (max-width: 1350px) {
    padding: 0 120px;
  }
  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
    gap: 50px;
    justify-content: flex-start;

    padding: 40px 40px;
  }
  @media screen and (max-width: 820px) {
    margin-top: 100px;

    padding: 40px 40px;
  }
  @media screen and (max-width: 565px) {
  }
  @media screen and (max-width: 460px) {
    align-items: flex-start;

    column-gap: 50px;
    row-gap: 55px;
    padding: 80px 30px;
    padding-top: 10px;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 44px;
  &:hover {
    font-weight: 600;
  }
  @media screen and (max-width: 835px) {
    row-gap: 20px;
    width: calc(50% - 30px);
  }
`;
export const RessColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-weight: 600;
  font-family: "Gilroy-medium";
  @media screen and (max-width: 835px) {
    display: none;
  }
`;
const Text = styled.div`
  font-weight: 300;
  font-size: 24px;
  color: white;
  text-align: left;
  &:hover {
    font-weight: 600;
  }
  text-transform: uppercase;
  @media screen and (max-width: 1350px) {
    font-size: 18px;
  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
  }
`;
export const ResColumn = styled.div`
  display: none;
  font-family: "Gilroy-medium";
  font-weight: 600;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  @media screen and (max-width: 835px) {
    font-weight: 600;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 19px;
    width: 100%;
  }
`;
