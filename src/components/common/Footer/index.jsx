import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import { Logo } from "../Header/views";
import ModalTO from "../modalTO";
import {
  footerTitles1,
  footerTitles2,
  footerTitles3,
  footerTitles4,
  images,
} from "./data";
import {
  Column,
  ColumnResWrapper,
  ColumnWrapper,
  LogosBar,
  LogoW,
  ResColumn,
  RessColumn,
  ResWrapper,
  Title,
  Wrapper,
  WrapWrapper,
} from "./views";

const lang = i18n.language === "ua" ? 0 : 1;

const Footer = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  console.log(footerTitles3[lang][0].label);
  console.log("open:   ", open);
  return (
    <>
      <>
        <Wrapper>
          <Logo src="../../images/Logo.svg" width={154} height={48} />

          <Column style={{ fontFamily: "Gilroy-medium", fontWeight: "600" }}>
            {footerTitles1.map((el) => (
              <Link to={el.link}>
                <Title>{el.label}</Title>
              </Link>
            ))}
          </Column>
          <Column>
            {footerTitles2[lang].map((el) => (
              <Link to={el.link}>
                <Title>{el.label}</Title>
              </Link>
            ))}
          </Column>

          <Column>
            {footerTitles3[lang].map((el) => (
              <Link to={el.link}>
                <Title
                  onClick={() =>
                    el.label === footerTitles3[lang][0].label
                      ? openModal()
                      : null
                  }
                >
                  {el.label}
                </Title>
              </Link>
            ))}
          </Column>
          <Column>
            <LogosBar>
              {images.map((el) => (
                <LogoW>
                  <a href={el.link}>
                    <LogoS img={el.img} hover={el.hover} />
                  </a>
                </LogoW>
              ))}
            </LogosBar>
            <Title style={{ fontSize: "16px" }}>
              <a href="tel:380689778888">+38 068 977 88 88</a>
            </Title>
            <Title>
              <a href="mailto:tesladrive.com.ua@gmail.com">
                tesladrive.com.ua@gmail.com
              </a>
            </Title>
            {footerTitles4[lang].map((el) => (
              <Title>{el}</Title>
            ))}
          </Column>
        </Wrapper>
        <ResWrapper>
          <Logo src="../../images/Logo.svg" width={154} height={48} />
          <WrapWrapper>
            <RessColumn
              style={{ fontFamily: "Gilroy-medium", fontWeight: "600" }}
            >
              {footerTitles1.map((el) => (
                <Link to={el.link}>
                  <Title>{el.label}</Title>
                </Link>
              ))}
            </RessColumn>
            <ResColumn
              style={{ fontFamily: "Gilroy-medium", fontWeight: "600" }}
            >
              {footerTitles1.map((el) => (
                <Link to={el.link}>
                  <Title>{el.label}</Title>
                </Link>
              ))}
            </ResColumn>
            <Column>
              {footerTitles2[lang].map((el) => (
                <Link to={el.link}>
                  <Title>{el.label}</Title>
                </Link>
              ))}
            </Column>

            <Column>
              {footerTitles3[lang].map((el) => (
                <Link to={el.link}>
                  <Title
                    onClick={() =>
                      el.label === footerTitles3[lang][0].label
                        ? openModal()
                        : null
                    }
                  >
                    {el.label}
                  </Title>
                </Link>
              ))}
            </Column>
            <Column style={{ width: "auto" }}>
              <LogosBar>
                {images.map((el) => (
                  <LogoW>
                    <a href={el.link}>
                      <LogoS img={el.img} hover={el.hover} />
                    </a>
                  </LogoW>
                ))}
              </LogosBar>
              <Title style={{ fontSize: "20px", fontFamily: "Gilroy-medium" }}>
                <a href="tel:380689778888">+38 068 977 88 88</a>
              </Title>
              <Title>
                <a href="mailto:tesladrive.com.ua@gmail.com">
                  tesladrive.com.ua@gmail.com
                </a>
              </Title>
              {footerTitles4[lang].map((el) => (
                <Title>{el}</Title>
              ))}
            </Column>
          </WrapWrapper>
        </ResWrapper>
      </>
      <ModalTO open={open} setOpen={setOpen} />
    </>
  );
};
export default Footer;

const LogoS = styled.div`
  width: 37px;
  background-repeat: no-repeat;
  background-position: center;
  height: 37px;
  transition: 0.5s;
  background-image: url(${(props) => props.img});
  &:hover {
    background-image: url(${(props) => props.hover});
  }
`;
