import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// views
import {
  Button,
  CardWrapper,
  Hat,
  Image,
  Image1,
  Image2,
  ImageWrapper,
  Name,
  RightWrapper,
  RName,
  SImage1,
  SImage2,
  Wrapper,
} from "./views";

const Spares = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <Name>{t("mainscreen.spares.spares")}</Name>
          <Link to="/katalog-zapchastyny">
            <Button>Перейти в каталог</Button>
          </Link>
          <ImageWrapper>
            <Image1 src="/images/sss.svg" />
            <Image2 src="/images/Akb.svg" />
          </ImageWrapper>
        </CardWrapper>
        <RightWrapper>
          <CardWrapper>
            <RName>{t("mainscreen.spares.acsesories")}</RName>
            <ImageWrapper>
              <SImage1 src="/images/Wheel2.svg" />
              <SImage2 src="/images/Tubus.svg" />
            </ImageWrapper>
            <Link to="/katalog-aksesuary">
              <Button>Перейти в каталог</Button>
            </Link>
          </CardWrapper>

          <CardWrapper>
            <RName>Мерч</RName>
            <Link to="/katalog-merch">
              <Button>Перейти в каталог</Button>
            </Link>
            <ImageWrapper>
              <SImage1 src="/images/Sweeter.svg" />
              <Hat src="/images/Hat.svg" />
            </ImageWrapper>
          </CardWrapper>
        </RightWrapper>
      </Wrapper>
    </>
  );
};
export default Spares;
