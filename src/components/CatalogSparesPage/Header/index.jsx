import React from "react";
import { Link } from "react-router-dom";
import { HeaderTitles, phoneNumber } from "./data";
// views
import { Logo, MenuBtn, Phone, Title, TitleWrapper, Wrapper } from "./views";

const Header = () => {
  return (
    <Wrapper>
      <Phone src="../../images/Phone.svg" />
      <Link to="/">
        <Logo src="../../images/Logo.svg" alt="img" />
      </Link>
      <TitleWrapper>
        {HeaderTitles.map((el) => (
          <Title>{el}</Title>
        ))}
      </TitleWrapper>
      <Title style={{ fontFamily: "Gilroy-medium" }}>
        <a href="tel:380689778888">{phoneNumber}</a>
      </Title>
      <MenuBtn src="../../images/Menu_Btn.png" alt="asd" />
    </Wrapper>
  );
};
export default Header;
