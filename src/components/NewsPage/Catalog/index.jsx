import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useContentful from "../../../contentful";
import i18n from "../../../i18n/i18n";
import { Button, VectorArrow } from "../../MainPage/News/views";
import {
  HeaderTitle,
  LCardWrapper,
  LWrapper,
  NavBar,
  NavTextActive,
  NavTextInActive,
  RCardWrapper,
  RWrapper,
  TextLC,
  TextRC,
  TitleLC,
  TitleRC,
  Wrapper,
  WrapperCardL,
  WrapperCardR,
  WrapperCardRContent,
  WrapperContent,
  WrapperContentRes,
} from "./views";
import ReactMarkdown from "react-markdown";

const Status = () => {
  return <WrapperStatus>Тесла</WrapperStatus>;
};

const LCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <WrapperCardL>
      <Link to={`${data.id}`}>
        <ImageLC img={data.image}>
          <Status />
        </ImageLC>
      </Link>

      <TitleLC>
        <ReactMarkdown>
          {i18n.language === "ua" ? data.title : data.titleru}
        </ReactMarkdown>
      </TitleLC>
      <TextLC>
        <ReactMarkdown>
          {i18n.language === "ua" ? data.text : data.textru}
        </ReactMarkdown>
      </TextLC>
      <Link to={`${data.id}`}>
        <Button>
          {t("mainscreen.news.detalis")} <VectorArrow />
        </Button>
      </Link>
    </WrapperCardL>
  );
};
const RCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <WrapperCardR>
      <Link to={`${data.id}`}>
        <ImageRC img={data.image}>
          <Status />
        </ImageRC>
      </Link>

      <WrapperCardRContent>
        <TitleRC>
          <ReactMarkdown>
            {i18n.language === "ua" ? data.title : data.titleru}
          </ReactMarkdown>
        </TitleRC>
        <TextRC>
          <ReactMarkdown>
            {i18n.language === "ua" ? data.text : data.textru}
          </ReactMarkdown>
        </TextRC>
        <Link to={`${data.id}`}>
          <Button style={{ marginTop: "23px" }}>
            {t("mainscreen.news.detalis")} <VectorArrow />
          </Button>
        </Link>
      </WrapperCardRContent>
    </WrapperCardR>
  );
};

const CatalogNews = () => {
  const [topicsItems, setTopicsItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);

  const [NewsActive, setNewsActive] = useState(true);
  const [TopicsActive, setTopicsActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const { getItemsTopics, getItemsNews } = useContentful();
  useEffect(() => {
    getItemsTopics(setLoading).then((response) => {
      setTopicsItems(response);
    });
  }, []);
  useEffect(() => {
    getItemsNews(setLoading).then((response) => {
      setNewsItems(response);
    });
  }, []);

  const newsActive = () => {
    setNewsActive(true);
    setTopicsActive(false);
  };
  const topicsActive = () => {
    setNewsActive(false);
    setTopicsActive(true);
  };
  const { t } = useTranslation();
  return (
    <>
      <HeaderLink>
        <LinkString>
          <Link to="/">
            <Main>{t("auto.main")}</Main>
          </Link>{" "}
          <Next src="/images/next_gray.svg" alt="asd" />{" "}
          {t("mainscreen.news.title")}
        </LinkString>
      </HeaderLink>

      {newsItems.length && topicsItems.length ? (
        <Wrapper>
          <WrapperContent>
            <LWrapper>
              <HeaderTitle>{t("mainscreen.news.topic")}</HeaderTitle>
              <LCardWrapper>
                {topicsItems.map((el) => (
                  <LCard data={el} />
                ))}
              </LCardWrapper>
            </LWrapper>
            <RWrapper>
              <HeaderTitle>{t("mainscreen.news.news")}</HeaderTitle>
              <RCardWrapper>
                {newsItems.map((el) => (
                  <RCard data={el} />
                ))}
              </RCardWrapper>
            </RWrapper>
          </WrapperContent>
          <WrapperContentRes>
            <HeaderTitle>{t("mainscreen.news.title")}</HeaderTitle>
            <NavBar>
              {NewsActive ? (
                <NavTextActive>{t("mainscreen.news.news")}</NavTextActive>
              ) : (
                <NavTextInActive onClick={newsActive}>
                  {t("mainscreen.news.news")}
                </NavTextInActive>
              )}
              {TopicsActive ? (
                <NavTextActive>Статті</NavTextActive>
              ) : (
                <NavTextInActive onClick={topicsActive}>
                  {t("mainscreen.news.topic")}
                </NavTextInActive>
              )}
            </NavBar>
            {NewsActive ? (
              <RCardWrapper>
                <LCard data={newsItems[0]} />
                <LCard data={newsItems[1]} />
                <LCard data={newsItems[2]} />
              </RCardWrapper>
            ) : (
              <RCardWrapper>
                <LCard data={topicsItems[0]} />
                <LCard data={topicsItems[1]} />
                <LCard data={topicsItems[2]} />
              </RCardWrapper>
            )}
          </WrapperContentRes>{" "}
        </Wrapper>
      ) : null}
    </>
  );
};

export default CatalogNews;
const ImageLC = styled.div`
  height: 341px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1100px) {
    height: 450px;
  }
  @media screen and (max-width: 600px) {
    height: 290px;
  }
  @media screen and (max-width: 465px) {
    height: 240px;
  }
  @media screen and (max-width: 365px) {
    height: 190px;
  }
`;
const ImageRC = styled.div`
  width: 248px;
  height: 145px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
// Status =========
const WrapperStatus = styled.div`
  background-color: #e20531;
  color: white;
  padding: 8px 43px;
  width: fit-content;
`;
// Link String =======
const HeaderLink = styled.div`
  padding: 35px 180px;
  box-sizing: border-box;
  height: 93px;

  @media screen and (max-width: 1650px) {
    padding: 35px 40px;
  }

  @media screen and (max-width: 400px) {
    height: 80px;
    padding: 25px 40px;
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
