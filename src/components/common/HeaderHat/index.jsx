import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderHat = ({ bg, bgMob, name }) => {
  const { t } = useTranslation();
  // prettier-ignore
  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": t("auto.main"),
            "item": "{% url 'pages:homepage' %}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": name,
          "item": "{% url 'pages:homepage' %}"
      }
    ]
};
  return (
    <Wrapper bg={bg} bgMob={bgMob}>
      <NameWrapper>
        <Name>{name}</Name>
        <LinkString>
          <Link to="/">
            <Main>{t("auto.main")}</Main>
          </Link>{" "}
          <Next src="/images/next.svg" alt="asd" /> {name}
        </LinkString>
      </NameWrapper>
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Wrapper>
  );
};
export default HeaderHat;
const Wrapper = styled.div`
  padding: 35px 180px;
  box-sizing: border-box;
  height: 141px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1650px) {
    padding: 35px 40px;
  }
  @media screen and (max-width: 650px) {
    background-image: url(${(props) => props.bgMob});
  }
  @media screen and (max-width: 400px) {
    height: 107px;
    padding: 25px 40px;
  }
`;
const Name = styled.div`
  text-align: left;
  font-size: 36px;
  color: white;
  height: 20px;
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
const LinkString = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  text-align: left;
  color: white;
  font-size: 16px;
  height: 11px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const Main = styled.div`
  color: #ffffff66;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 35px;
  @media screen and (max-width: 400px) {
    row-gap: 25px;
  }
`;
const Next = styled.img``;
