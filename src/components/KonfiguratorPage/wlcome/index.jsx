import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import HelmTags from "../../Helmet";

const selectData = [
  {
    href: "modelS",
    img: "/images/konfigurator/tesla-s.png",
    name: "Model S",
  },
  {
    href: "model3",
    img: "/images/konfigurator/tesla-3.png",
    name: "Model 3",
  },
  {
    href: "modelX",
    img: "/images/konfigurator/tesla-x.png",
    name: "Model X",
  },
  {
    href: "modelY",
    img: "/images/konfigurator/tesla-y.png",
    name: "Model Y",
  },
];

const Welcome = ({ setChosenModel, tags }) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const { t } = useTranslation();
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.configselect[0]}
          titleru={tags.configselectru[0]}
          desc={tags.configselect[1]}
          descru={tags.configselectru[1]}
          img={tags.configselectru[2]}
        />
      ) : null}
      <Header />
      <HeaderLink>
        <LinkString>
          <Link to="/">
            <Main>{t("auto.main")}</Main>
          </Link>{" "}
          <Next src="/images/next_gray.svg" alt="asd" /> {t("conf.name")}
        </LinkString>
      </HeaderLink>
      <Title>{t("conf.welcome")}</Title>
      <Wrapper>
        <Link to="modelS">
          <SelectModel
            img={"/images/konfigurator/tesla-s.png"}
            onClick={() => setChosenModel("modelS")}
          >
            <Name>Model S</Name>
          </SelectModel>
        </Link>
        <Link to="model3">
          <SelectModel
            img={"/images/konfigurator/tesla-3.png"}
            onClick={() => setChosenModel("model3")}
          >
            <Name>Model 3</Name>
          </SelectModel>
        </Link>

        <Link to="modelX">
          <SelectModel
            img={"/images/konfigurator/tesla-x.png"}
            onClick={() => setChosenModel("modelX")}
          >
            <Name>Model X</Name>
          </SelectModel>
        </Link>
        <Link to="modelY">
          <SelectModel
            img={"/images/konfigurator/tesla-y.png"}
            onClick={() => setChosenModel("modelY")}
          >
            <Name>Model Y</Name>
          </SelectModel>
        </Link>
      </Wrapper>
      <WrapperRes>
        <ArrowL ref={navigationPrevRef} />
        <ArrowR ref={navigationNextRef} />
        <Swiper
          style={{ width: "100%" }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 51,
              centeredSlides: false,
            },
            1700: {
              slidesPerView: 3,
              spaceBetween: 51,
              centeredSlides: false,
            },
          }}
        >
          {selectData.map((el) => (
            <SwiperSlide style={{ width: "100%" }}>
              <Link to={el.href}>
                <SelectModelRes
                  img={el.img}
                  onClick={() => setChosenModel(el.href)}
                >
                  <Name>{el.name}</Name>
                </SelectModelRes>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </WrapperRes>
      <Footer />
    </>
  );
};
export default Welcome;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 78px;
  padding: 0 180px;
  margin-bottom: 100px;
  margin-top: 40px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
  }
`;
const WrapperRes = styled.div`
  position: relative;
  display: none;
  margin-bottom: 100px;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;
const SelectModel = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 60%;
  height: 274px;
  padding-top: 53px;
  background-origin: content-box;
  background-color: #f9f9f9;
  @media screen and (max-width: 1100px) {
    height: 220px;
    background-size: 70%;
  }
  @media screen and (max-width: 900px) {
    height: 190px;
    background-size: 70%;
  }
`;
const SelectModelRes = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 80%;
  height: 400px;
  padding-top: 53px;
  background-origin: content-box;
  background-color: #f9f9f9;
  @media screen and (max-width: 550px) {
    height: 320px;
  }
  @media screen and (max-width: 450px) {
    height: 260px;
  }
  @media screen and (max-width: 380px) {
    height: 220px;
  }
`;
const Title = styled.div`
  margin-top: 30px;
  font-size: 45px;
  margin-bottom: 30px;
  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;
const Name = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  margin-bottom: 10px;
  color: black;
`;

const ArrowL = styled.div`
  width: 45px;
  height: 45px;
  margin-top: 100px;
  margin: 32px;

  transition: 0.3s;
  background-image: url("/images/Arrow.jpg");
  &:hover {
    background-image: url("/images/ArrowP_hover.png");
  }
  background-position: center;
  cursor: pointer;
  position: absolute;
  height: 45px;
  z-index: 200;
  left: 125px;
  top: 290px;
  @media screen and (max-width: 1650px) {
    left: ${(props) => (props.vidhuky ? "-53px" : "-13px")};
    top: 290px;
  }
  @media screen and (max-width: 540px) {
    left: ${(props) => (props.vidhuky ? "7px" : "47px")};
    bottom: -49px;
    top: auto;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
  }
`;
const ArrowR = styled.div`
  width: 45px;
  transition: 0.3s;
  background-image: url("/images/Arrow_rev.jpg");
  &:hover {
    background-image: url("/images/ArrowF_hover.png");
  }
  background-position: center;
  cursor: pointer;
  margin-top: 100px;
  margin: 32px;
  cursor: pointer;
  position: absolute;
  height: 45px;
  z-index: 200;
  right: 125px;
  top: 290px;
  @media screen and (max-width: 1650px) {
    right: ${(props) => (props.vidhuky ? "-53px" : "-13px")};
    top: 290px;
  }
  @media screen and (max-width: 540px) {
    right: ${(props) => (props.vidhuky ? "7px" : "47px")};
    bottom: -49px;
    top: auto;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
  }
`;
// link str
const HeaderLink = styled.div`
  padding: 25px 180px;
  box-sizing: border-box;
  height: 93px;

  @media screen and (max-width: 1650px) {
    padding: 25px 40px;
  }

  @media screen and (max-width: 400px) {
    height: 80px;
    padding: 25px 40px;
  }
`;
const HeaderLinkRes = styled.div`
  box-sizing: border-box;
  height: 35px;

  @media screen and (max-width: 1650px) {
    padding-top: 15px;
  }

  @media screen and (max-width: 400px) {
    padding-top: 0;
  }
`;
const LinkString = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  text-align: left;
  color: #e2052d;
  font-size: 16px;
  height: 11px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const Main = styled.div`
  color: #939298;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const Next = styled.img``;
