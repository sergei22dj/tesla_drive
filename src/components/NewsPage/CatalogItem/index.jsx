import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useContentful from "../../../contentful";
import i18n from "../../../i18n/i18n";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import HelmTags from "../../Helmet";
import ReactMarkdown from "react-markdown";

const OneNewsPage = () => {
  let { id } = useParams();
  const [topicsItems, setTopicsItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // get the list of all the devices and store it in state, as you did in
  // the other iphone component
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
  useEffect(() => {
    setAllItems(newsItems.concat(topicsItems));
  }, [newsItems, topicsItems]);
  const chosenItem = allItems && allItems.filter((el) => el.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();

  const title = chosenItem.length
    ? i18n.language === "ua"
      ? chosenItem[0].title
      : chosenItem[0].titleru
    : null;

  const metaTitle = chosenItem.length
    ? i18n.language
      ? chosenItem[0].metatags?.[0]
      : chosenItem[0].metatagsru?.[0]
    : null;
  const metaDesc = chosenItem.length
    ? i18n.language
      ? chosenItem[0].metatags?.[1]
      : chosenItem[0].metatagsru?.[1]
    : null;
  const metaImg = chosenItem.length
    ? i18n.language
      ? chosenItem[0].metatags?.[2]
      : chosenItem[0].metatagsru?.[2]
    : null;

  return (
    <>
      <HelmTags
        title={metaTitle || title}
        titleru={metaTitle || title}
        desc={metaDesc || ""}
        descru={metaDesc || ""}
        img={metaImg || ""}
      />

      <Header />
      <HeaderLink>
        <LinkString>
          <Link to="/">
            <Main>{t("auto.main")}</Main>
          </Link>
          <Next src="/images/next_gray.svg" alt="asd" />{" "}
          <Link to="/statti-ta-novyny">
            <Main>{t("mainscreen.news.title")}</Main>
          </Link>
          <Next src="/images/next_gray.svg" alt="asd" />{" "}
          <Link to="/statti-ta-novyny">
            <RedString>
              {chosenItem.length
                ? i18n.language === "ua"
                  ? chosenItem[0].title
                  : chosenItem[0].titleru
                : null}
            </RedString>
          </Link>
        </LinkString>
      </HeaderLink>
      {loading ? (
        <>Триває завантаження ...</>
      ) : chosenItem.length ? (
        <Wrapper>
          <>
            <Image img={chosenItem[0].image2}>
              <InfoBar>
                <Name>
                  {i18n.language === "ua"
                    ? chosenItem[0].title
                    : chosenItem[0].titleru}
                </Name>
                <Description>
                  <Tag>
                    {i18n.language === "ua"
                      ? chosenItem[0].tag
                      : chosenItem[0].tagru}
                  </Tag>
                  <Date>{chosenItem[0].date}</Date>
                  <Author>
                    <Title>Автор:</Title>
                    <AuthorName>
                      {i18n.language === "ua"
                        ? chosenItem[0].author
                        : chosenItem[0].authorru}
                    </AuthorName>
                  </Author>
                </Description>
              </InfoBar>
            </Image>
            <TextField>
              <DateRes>{chosenItem[0].date}</DateRes>
              <NameRes>{chosenItem[0].title}</NameRes>

              <Text>
                <ReactMarkdown>
                  {i18n.language === "ua"
                    ? chosenItem[0].text
                    : chosenItem[0].textru}
                </ReactMarkdown>
              </Text>
              <Text>
                <ReactMarkdown>
                  {i18n.language === "ua"
                    ? chosenItem[0].text2
                    : chosenItem[0].text2ru}
                </ReactMarkdown>
              </Text>
            </TextField>
          </>
        </Wrapper>
      ) : null}

      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </>
  );
};
export default OneNewsPage;
const Wrapper = styled.div`
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 360px) {
    padding: 0 30px;
  }
`;
//=========Info Bar===========
const InfoBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 35px;
  row-gap: 30px;
  bottom: 45px;
  @media screen and (max-width: 750px) {
    bottom: 20px;
    padding-left: 24px;
    row-gap: 14px;
  }
  @media screen and (max-width: 550px) {
    bottom: 12px;
    padding-left: 20px;
    row-gap: 14px;
  }
`;
const Name = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 500;
  text-align: left;
  margin-top: auto;
  @media screen and (max-width: 950px) {
    font-size: 28px;
  }
  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const NameRes = styled.div`
  color: #272531;
  display: none;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  margin-top: auto;
  line-height: 22px;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  column-gap: 35px;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 550px) {
    column-gap: 14px;
  }
`;
const Tag = styled.div`
  background-color: white;
  font-size: 14px;
  font-weight: 600;
  color: #e2052d;
  padding: 9px 30px;
  border-radius: 65px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    padding: 6px 24px;
  }
  @media screen and (max-width: 360px) {
    padding: 2px 16px;
  }
`;
const Date = styled.div`
  color: #939298;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const DateRes = styled.div`
  display: none;
  margin-top: -30px;
  margin-bottom: 15px;
  color: #939298;
  font-size: 12px;
  text-align: left;
  @media screen and (max-width: 550px) {
    display: block;
  }
`;
const Author = styled.div`
  display: flex;
  column-gap: 10px;
`;
const Title = styled.div`
  color: white;
  font-weight: 500;
`;
const AuthorName = styled.div`
  color: #939298;
`;
const Image = styled.div`
  position: relative;
  height: 527px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1100px) {
    height: 470px;
  }
  @media screen and (max-width: 950px) {
    height: 430px;
  }
  @media screen and (max-width: 750px) {
    height: 330px;
  }
  @media screen and (max-width: 550px) {
    height: 250px;
  }
  @media screen and (max-width: 430px) {
    height: 170px;
  }
  @media screen and (max-width: 360px) {
    height: 154px;
  }
`;
//=======Text Field=======
const TextField = styled.div`
  display: flex;
  margin-top: 59px;
  column-gap: 177px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
const Text = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: #939298;
  a {
    color: red;
  }
  line-height: 25px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
// Link String =======
const HeaderLink = styled.div`
  padding: 35px 180px;
  box-sizing: border-box;
  font-size: 16px;
  height: 93px;

  @media screen and (max-width: 1650px) {
    padding: 35px 40px;
  }
  @media screen and (max-width: 670px) {
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    height: 107px;
    padding: 25px 40px;
  }
`;
const LinkString = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  text-align: left;
  color: #e2052d;
  height: 11px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const RedString = styled.div`
  text-align: left;
  color: #e2052d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
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
