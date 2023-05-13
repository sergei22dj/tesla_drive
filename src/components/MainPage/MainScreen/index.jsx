import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import Header from "../Header";
import { mainScreenData } from "./data";
import {
  BTitle,
  Button,
  FooterBar,
  IconsBar,
  IconW,
  Info,
  InfoBar,
  NameWbtn,
  NavBar,
  Scroll,
  ScrollWrapper,
  SDTitle,
  Slider,
  SMTitle,
  STitle,
  Text,
  TitleWrapper,
} from "./views";

const MainScreen = () => {
  const [numberScreen, setNumberScreen] = useState(0);

  const changeNumber = (e) => {
    e === 1
      ? setNumberScreen((prev) => (prev < 5 ? prev + 1 : (prev = 0)))
      : setNumberScreen((prev) => (prev > 0 ? prev - 1 : (prev = 5)));
  };
  const links = [
    "/konfigurator/modelS",
    "/konfigurator/model3",
    "/konfigurator/modelX",
    "/konfigurator/modelY",
    "/konfigurator",
    "/konfigurator",
  ];

  const { t } = useTranslation();
  return (
    <Wrapper
      bg={mainScreenData[numberScreen].img}
      mbg={mainScreenData[numberScreen].mimg}
    >
      <Header />
      <Info>
        <NameWbtn>
          <Name number={numberScreen}>
            {mainScreenData[numberScreen].label}
          </Name>
          <Link to={`${links[numberScreen]}`}>
            <Button>{t("mainscreen.howprice")}</Button>
          </Link>
        </NameWbtn>
        <InfoBar>
          <TitleWrapper>
            <BTitle>{mainScreenData[numberScreen].text1}</BTitle>
            <STitle>{t(`mainscreen.items${numberScreen}.title1`)}</STitle>
          </TitleWrapper>
          <TitleWrapper>
            <BTitle>{mainScreenData[numberScreen].text2}</BTitle>
            <SDTitle>{t(`mainscreen.items${numberScreen}.title2`)}</SDTitle>
            <SMTitle>
              {numberScreen !== 4
                ? "вантажний відсік"
                : "максимальна швидкість"}
            </SMTitle>
          </TitleWrapper>
          <TitleWrapper>
            <BTitle>{t(`mainscreen.items${numberScreen}.text3`)}</BTitle>
            <STitle>{t(`mainscreen.items${numberScreen}.title3`)}</STitle>
          </TitleWrapper>
        </InfoBar>
      </Info>
      <FooterBar>
        <IconsBar>
          <IconW>
            <a href="viber://chat?number=%2B380689778888">
              <IconVb />
            </a>
          </IconW>
          <IconW>
            <a href="https://www.facebook.com/profile.php?id=100090376021781">
              <IconFb />
            </a>
          </IconW>
          <IconW>
            <IconTg />
          </IconW>
        </IconsBar>
        <Slider>
          <ScrollWrapper>
            <Scroll />
          </ScrollWrapper>
          <Image
            bg={
              numberScreen !== 5
                ? mainScreenData[numberScreen + 1].img
                : mainScreenData[0].img
            }
          >
            <Text>
              {numberScreen !== 5
                ? mainScreenData[numberScreen + 1].label
                : mainScreenData[0].label}
            </Text>
          </Image>
          <NavBar>
            <NavButtonF onClick={() => changeNumber(1)} />
            <NavButtonP onClick={() => changeNumber(2)} />
          </NavBar>
        </Slider>
      </FooterBar>
    </Wrapper>
  );
};
export default MainScreen;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: right 67% bottom 45%;
  background-repeat: no-repeat;
  width: 100%;
  height: 960px;
  @media screen and (max-width: 566px) {
    height: 640px;
  }
  @media screen and (max-width: 340px) {
    height: 640px;
    background-image: url(${(props) => props.mbg});
  }
`;
const Name = styled.div`
  color: white;
  font-size: 11vw;
  margin-left: -5px;
  @media screen and (max-width: 1195px) {
    margin: 10px 0 10px 0;
  }
  @media screen and (max-width: 764px) {
    font-size: ${(props) => (props.number === 5 ? "82px" : "104px")};
    margin: 10px 0 10px 0;
    margin-left: -5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 64px;
    margin: 10px 0 10px 0;
    margin-left: -5px;
  }
  @media screen and (max-width: 400px) {
    font-size: ${(props) => (props.number === 5 ? "50px" : "64px")};
    margin: 10px 0 10px 0;
    margin-left: -5px;
  }
`;
const Image = styled.div`
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
`;
const IconVb = styled.div`
  width: 37px;
  background-repeat: no-repeat;
  background-position: center;
  height: 37px;
  transition: 0.5s;
  background-image: url("/images/social_icons/Vb.png");
  &:hover {
    background-image: url("/images/social_icons/Vb_hover.png");
  }
`;
const IconFb = styled.div`
  width: 37px;
  background-repeat: no-repeat;
  background-position: center;
  height: 37px;
  transition: 0.5s;
  background-image: url("/images/social_icons/Fb.png");
  &:hover {
    background-image: url("/images/social_icons/Fb_hover.png");
  }
`;
const IconTg = styled.div`
  width: 35px;
  background-repeat: no-repeat;
  background-position: center;
  height: 37px;
  transition: 0.5s;
  background-image: url("/images/social_icons/Tg.png");
  &:hover {
    background-image: url("/images/social_icons/Tg_hover.png");
  }
`;
const NavButtonF = styled.div`
  width: 88px;
  height: 88px;
  cursor: pointer;
  transition: 0.3s;
  background-image: url("/images/Slider_ArrowF.jpg");
  &:hover {
    background-image: url("/images/Slider_ArrowF_hover.png");
  }
`;
const NavButtonP = styled.div`
  width: 88px;
  height: 88px;
  cursor: pointer;
  transition: 0.3s;
  background-image: url("/images/Slider_ArrowP.jpg");
  &:hover {
    background-image: url("/images/Slider_ArrowP_hover.png");
  }
`;
