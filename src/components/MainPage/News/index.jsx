import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useContentful from "../../../contentful";
import i18n from "../../../i18n/i18n";
import ReactMarkdown from "react-markdown";
import {
  Button,
  CardItem,
  CText,
  FText,
  Image,
  ImageS,
  LIWrapper,
  LWrapper,
  Name,
  NavBar,
  NavText,
  NavTextActive,
  NavTextInActive,
  PText,
  RWrapper,
  SButton,
  SCardItem,
  SName,
  SText,
  Text,
  TextWrapper,
  Title,
  VectorArrow,
  Wrapper,
} from "./views";

const LCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <CardItem>
      <Link to={`/statti-ta-novyny/${data.id}`}>
        <Image src={data.image} />
      </Link>

      <Name>{i18n.language === "ua" ? data.title : data.titleru}</Name>
      <Text>
        <ReactMarkdown>
          {i18n.language === "ua" ? data.text : data.textru}
        </ReactMarkdown>
      </Text>

      <Link to={`/statti-ta-novyny/${data.id}`}>
        <Button>
          {t("mainscreen.news.detalis")} <VectorArrow />
        </Button>
      </Link>
    </CardItem>
  );
};

const SCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <SCardItem>
      <Link to={`/statti-ta-novyny/${data.id}`}>
        <ImageS src={data.image} />
      </Link>

      <TextWrapper>
        <SName>{i18n.language === "ua" ? data.title : data.titleru}</SName>
        <SText>
          <ReactMarkdown>
            {i18n.language === "ua" ? data.text : data.textru}
          </ReactMarkdown>
        </SText>
        <Link to={`/statti-ta-novyny/${data.id}`}>
          <SButton>
            {t("mainscreen.news.detalis")} <VectorArrow />
          </SButton>
        </Link>
      </TextWrapper>
    </SCardItem>
  );
};

const News = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <Title>{t("mainscreen.news.title")}</Title>
      {newsItems.length && topicsItems.length ? (
        <>
          <NavBar>
            {NewsActive ? (
              <NavTextActive>{t("mainscreen.news.news")}</NavTextActive>
            ) : (
              <NavTextInActive onClick={newsActive}>
                {t("mainscreen.news.news")}
              </NavTextInActive>
            )}
            {TopicsActive ? (
              <NavTextActive>{t("mainscreen.news.topic")}</NavTextActive>
            ) : (
              <NavTextInActive onClick={topicsActive}>
                {t("mainscreen.news.topic")}
              </NavTextInActive>
            )}
          </NavBar>
          <Wrapper>
            <LWrapper>
              <LCard data={newsItems[0]} />
              <LCard data={newsItems[1]} />
            </LWrapper>
            {NewsActive ? (
              <LIWrapper>
                <LCard data={newsItems[0]} />
                <LCard data={newsItems[1]} />
                <LCard data={newsItems[2]} />
              </LIWrapper>
            ) : (
              <LIWrapper>
                <LCard data={topicsItems[0]} />
                <LCard data={topicsItems[1]} />
                <LCard data={topicsItems[2]} />
              </LIWrapper>
            )}

            <RWrapper>
              <SCard data={topicsItems[0]} />
              <SCard data={topicsItems[1]} />
              <SCard data={topicsItems[2]} />
            </RWrapper>
          </Wrapper>{" "}
        </>
      ) : null}
    </>
  );
};
export default News;
