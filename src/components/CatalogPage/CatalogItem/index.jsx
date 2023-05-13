import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useContentful from "../../../contentful";
import i18n from "../../../i18n/i18n";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import RelCardItem from "../../common/Relinking/CardItem";
import ReactMarkdown from "react-markdown";
import {
  ButtonRed,
  CardWrapper,
  RelinkingWrapper,
  RelinkName,
  ResWrapperCard,
} from "../../common/Relinking/views";
import HelmTags from "../../Helmet";
import ModalCall from "../../common/modalCall";

const AutoItem = () => {
  let statusText;
  let BgColor;
  let TextColor;
  let color;
  let condition;

  let { id } = useParams();

  const [autoItems, setAutoItems] = useState([]);
  const [relinkItems, setRelinkItems] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [numberImg, setNumberImg] = useState(0);
  const [numberImgModal, setNumberImgModal] = useState(0);
  const chosenItem = autoItems && autoItems.filter((el) => el.id === id);
  useEffect(() => {
    if (chosenItem.length) {
      setSelectedModel(chosenItem[0].model);
    }
  }, [chosenItem]);

  let limitNumber = chosenItem.length ? chosenItem[0].image.length - 1 : null;
  let img1 = numberImg < limitNumber ? numberImg + 1 : numberImg - limitNumber;
  let img2 =
    limitNumber < 1
      ? numberImg < limitNumber
        ? numberImg + 1
        : numberImg - limitNumber
      : numberImg + 1 < limitNumber
      ? numberImg + 2
      : numberImg + 1 - limitNumber;
  let img3 =
    limitNumber < 2
      ? numberImg < limitNumber
        ? numberImg + 1
        : numberImg - limitNumber
      : numberImg + 2 < limitNumber
      ? numberImg + 3
      : numberImg + 2 - limitNumber;

  const changeNumber = (e) => {
    e === 1
      ? setNumberImg((prev) => (prev < limitNumber ? prev + 1 : (prev = 0)))
      : setNumberImg((prev) => (prev > 0 ? prev - 1 : (prev = limitNumber)));
  };
  const changeNumberModal = (e) => {
    e === 1
      ? setNumberImgModal((prev) =>
          prev < limitNumber ? prev + 1 : (prev = 0)
        )
      : setNumberImgModal((prev) =>
          prev > 0 ? prev - 1 : (prev = limitNumber)
        );
  };

  const { getItems } = useContentful();
  useEffect(() => {
    getItems(setLoading).then((response) => {
      setAutoItems(response);
    });
  }, []);

  // filter
  const applyFilters = () => {
    let updatedList = autoItems;

    // model Filter
    if (selectedModel.length) {
      updatedList = updatedList.filter((item) => item !== id);
    }

    setRelinkItems(updatedList);
  };
  useEffect(() => {
    if (autoItems.length) {
      applyFilters();
    }
  }, [autoItems, selectedModel]);
  const { t } = useTranslation();

  if (chosenItem.length ? chosenItem[0].availability == false : null) {
    statusText = t("mainscreen.catalog.card.status2");
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (chosenItem.length ? chosenItem[0].status == "a" : null) {
    statusText = t("mainscreen.catalog.card.status1");
    BgColor = `#E20531`;
    TextColor = `white`;
  }
  if (chosenItem.length ? chosenItem[0].status == "b" : null) {
    statusText = t("mainscreen.catalog.card.status2");
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (chosenItem.length ? chosenItem[0].status == "c" : null) {
    statusText = t("mainscreen.catalog.card.status3");
    BgColor = "#F9F9F9";
    TextColor = `#E20531`;
  }
  if (chosenItem.length ? chosenItem[0].sale : null) {
    statusText = t("mainscreen.catalog.card.status4");
    BgColor = "#fcef37";
    TextColor = `#000000`;
  }
  if (chosenItem.length ? chosenItem[0].color == "#FF0000" : null) {
    color = t("mainscreen.catalog.card.red");
  }
  if (chosenItem.length ? chosenItem[0].color == "#808080" : null) {
    color = t("mainscreen.catalog.card.gray");
  }
  if (chosenItem.length ? chosenItem[0].condition == true : null) {
    condition = t("mainscreen.catalog.card.new");
  }
  if (chosenItem.length ? chosenItem[0].condition == false : null) {
    condition = t("mainscreen.catalog.card.bu");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setNumberImg(0);
  }, [selectedModel]);
  const name = chosenItem.length ? chosenItem[0].name : null;
  const description = chosenItem.length
    ? i18n.language === "ua"
      ? chosenItem[0].description
      : chosenItem[0].descriptionru
    : null;
  const img = chosenItem.length ? chosenItem[0].image[1] : null;
  const metaTitle = chosenItem.length
    ? i18n.language === "ua"
      ? chosenItem[0].metatags?.[0]
      : chosenItem[0].metatagsru?.[0] || null
    : null;
  const metaDesc = chosenItem.length
    ? i18n.language === "ua"
      ? chosenItem[0].metatags?.[1]
      : chosenItem[0].metatagsru?.[1]
    : null;
  const metaImg = chosenItem.length
    ? i18n.language === "ua"
      ? chosenItem[0].metatags?.[2]
      : chosenItem[0].metatagsru?.[2]
    : null;
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
          "name": "Каталог авто",
          "item": "/katalog-auto"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": chosenItem.length ? chosenItem[0].mark + " " + chosenItem[0].model : "null",
        "item": window.location.href
    }
    ]
};
  return (
    <>
      <HelmTags
        title={metaTitle || name}
        titleru={metaTitle || name}
        desc={metaDesc || description}
        descru={metaDesc || description}
        img={metaImg || img}
      />
      <Header />

      <HeaderLink>
        <LinkString>
          <Link to="/">
            <Main>{t("auto.main")}</Main>
          </Link>
          <Next src="/images/next_gray.svg" alt="asd" />{" "}
          <Link to="/katalog-auto">
            <Main>Каталог авто</Main>
          </Link>
          <Next src="/images/next_gray.svg" alt="asd" />{" "}
          <RedString>{chosenItem.length ? <>{name}</> : <></>}</RedString>
        </LinkString>
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </HeaderLink>

      {chosenItem.length ? (
        <>
          <Wrapper>
            <LWrapper>
              <ImgBar>
                <ImgS
                  img={chosenItem[0].image[img1]}
                  onClick={() => [setNumberImg(img1), setNumberImgModal(img1)]}
                />
                <ImgS
                  img={chosenItem[0].image[img2]}
                  onClick={() => [setNumberImg(img2), setNumberImgModal(img2)]}
                />
                <ImgS
                  img={chosenItem[0].image[img3]}
                  onClick={() => [setNumberImg(img3), setNumberImgModal(img3)]}
                />
              </ImgBar>
              <MainImg
                img={chosenItem[0].image[numberImg]}
                onClick={() => setActiveModal(true)}
              >
                <Status bgCol={BgColor} tCol={TextColor}>
                  {statusText}
                </Status>
                <ArrowL onClick={(e) => [changeNumber(2), e.stopPropagation()]}>
                  <img src="/images/ArrowL_Slider.svg" alt="asd" />
                </ArrowL>
                <ArrowR onClick={(e) => [changeNumber(1), e.stopPropagation()]}>
                  <img src="/images/ArrowR_Slider.svg" alt="asd" />
                </ArrowR>
              </MainImg>
            </LWrapper>

            <RWrapper>
              <Name>{name}</Name>

              <PriceBar>
                <PriceM>{chosenItem[0].priceUsd} $</PriceM>
                <PriceS>{chosenItem[0].priceUah} грн</PriceS>
                <PriceS>{chosenItem[0].priceEu} €</PriceS>
              </PriceBar>

              <InfoBar>
                <Info>
                  <InfoWrapper>
                    <InfoName>VIN:</InfoName>
                    <InfoValue>{chosenItem[0].vin}</InfoValue>
                  </InfoWrapper>
                  <InfoWrapper>
                    <InfoName>{t("auto.color")}:</InfoName>
                    <InfoValue>{color}</InfoValue>
                  </InfoWrapper>
                </Info>
                <Info>
                  <InfoWrapper>
                    <InfoName>{t("auto.state")}:</InfoName>
                    <InfoValue>{condition}</InfoValue>
                  </InfoWrapper>
                  <InfoWrapper>
                    <InfoName>{t("auto.battery")}:</InfoName>
                    <InfoValue>{chosenItem[0].batteryCapacity} кВт/г</InfoValue>
                  </InfoWrapper>
                </Info>
                <Info>
                  <InfoWrapper>
                    <InfoName>{t("auto.mile")}:</InfoName>
                    <InfoValue>{chosenItem[0].mileage} км</InfoValue>
                  </InfoWrapper>
                  <InfoWrapper>
                    <InfoName>{t("auto.reserve")}:</InfoName>
                    <InfoValue>{chosenItem[0].powerReserve} км</InfoValue>
                  </InfoWrapper>
                </Info>
                <Info>
                  <InfoWrapper>
                    <InfoName>{t("auto.year")}:</InfoName>
                    <InfoValue>{chosenItem[0].year}</InfoValue>
                  </InfoWrapper>
                  <InfoWrapper>
                    <InfoName>{t("auto.speed")}:</InfoName>
                    <InfoValue>{chosenItem[0].maxSpeed} км/г</InfoValue>
                  </InfoWrapper>
                </Info>
                <Info>
                  <InfoWrapper>
                    {" "}
                    <InfoName>{t("auto.drive")}:</InfoName>
                    <InfoValue>{chosenItem[0].drive}</InfoValue>
                  </InfoWrapper>
                  <InfoWrapper>
                    <InfoName>{t("auto.racing")}:</InfoName>
                    <InfoValue>{chosenItem[0].racing} с</InfoValue>
                  </InfoWrapper>
                </Info>
              </InfoBar>

              <InfoBarRes>
                <Info>
                  <InfoName>VIN:</InfoName>
                  <InfoValue>{chosenItem[0].vin}</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.color")}:</InfoName>
                  <InfoValue>{color}</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.state")}:</InfoName>
                  <InfoValue>{condition}</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.battery")}:</InfoName>
                  <InfoValue>{chosenItem[0].batteryCapacity} кВт/г</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.mile")}:</InfoName>
                  <InfoValue>{chosenItem[0].mileage} км</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.reserve")}:</InfoName>
                  <InfoValue>{chosenItem[0].powerReserve} км</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.year")}:</InfoName>
                  <InfoValue>{chosenItem[0].year}</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.speed")}:</InfoName>
                  <InfoValue>{chosenItem[0].maxSpeed} км/г</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.drive")}:</InfoName>
                  <InfoValue>{chosenItem[0].drive}</InfoValue>
                </Info>
                <Info>
                  <InfoName>{t("auto.racing")}:</InfoName>
                  <InfoValue>{chosenItem[0].racing} с</InfoValue>
                </Info>
              </InfoBarRes>

              <Button onClick={() => setOpen(true)}>{t("auto.button")}</Button>
            </RWrapper>
          </Wrapper>
          <Description>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Description>
        </>
      ) : (
        <>Триває завантаження ...</>
      )}
      {relinkItems.length && (
        <RelinkingWrapper style={{ marginBottom: "200px" }}>
          <RelinkName>{t("auto.same")}:</RelinkName>
          <CardWrapper>
            <RelCardItem
              data={relinkItems[0]}
              linkUrl={`katalog-auto/${relinkItems[0].id}`}
              auto="auto"
            />
            {relinkItems[1] ? (
              <RelCardItem
                data={relinkItems[1]}
                linkUrl={`katalog-auto/${relinkItems[1].id}`}
                auto="auto"
              />
            ) : (
              <RelCardItem
                data={relinkItems[0]}
                linkUrl={`katalog-auto/${relinkItems[0].id}`}
                auto="auto"
              />
            )}
            {relinkItems[2] ? (
              <RelCardItem
                data={relinkItems[2]}
                linkUrl={`katalog-auto/${relinkItems[2].id}`}
                auto="auto"
              />
            ) : (
              <RelCardItem
                data={relinkItems[0]}
                linkUrl={`katalog-auto/${relinkItems[0].id}`}
                auto="auto"
              />
            )}

            <ResWrapperCard>
              {relinkItems[3] ? (
                <RelCardItem
                  data={relinkItems[3]}
                  linkUrl={`katalog-auto/${relinkItems[3].id}`}
                  auto="auto"
                />
              ) : (
                <RelCardItem
                  data={relinkItems[0]}
                  linkUrl={`katalog-auto/${relinkItems[0].id}`}
                  auto="auto"
                />
              )}
            </ResWrapperCard>
          </CardWrapper>
        </RelinkingWrapper>
      )}
      {activeModal ? (
        <Modal onClick={() => setActiveModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <MainImgModal img={chosenItem[0].image[numberImgModal]}>
              <ArrowLM onClick={() => changeNumberModal(2)}>
                <img src="/images/ArrowL_Slider.svg" alt="asd" />
              </ArrowLM>
              <ArrowRM onClick={() => changeNumberModal(1)}>
                <img src="/images/ArrowR_Slider.svg" alt="asd" />
              </ArrowRM>
            </MainImgModal>
          </ModalContent>
        </Modal>
      ) : (
        <></>
      )}

      <Footer />
      <ModalCall open={open} setOpen={setOpen} title={name} />
    </>
  );
};
export default AutoItem;
const Wrapper = styled.div`
  margin-top: 35px;
  margin-bottom: 70px;
  display: flex;
  column-gap: 57px;
  align-items: center;
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1325px) {
    flex-direction: column;
    row-gap: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-top: -10px;
    padding: 0 30px;
  }
`;
const LWrapper = styled.div`
  display: flex;
  column-gap: 18px;
  row-gap: 18px;
  @media screen and (max-width: 1830px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    row-gap: 10px;
  }
`;
const RWrapper = styled.div`
  width: 100%;
`;
// Modal =====
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0 0 0 / 76%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;
`;
const ModalContent = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  text-align: center;
  text-transform: uppercase;
  animation: ani 1s forwards;
  @keyframes ani {
    0% {
      scale: 0.2;
    }
    100% {
      scale: 1;
    }
  }
`;
const MainImgModal = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: grey;
  aspect-ratio: 16/9;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
`;
const ArrowLM = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: #272531;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: calc(50% - 24px);
  left: -24px;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: #e2052d;
  }
  @media screen and (max-width: 380px) {
    bottom: calc(50% - 17px);
    left: -17px;
    width: 35px;
    height: 35px;
  }
`;
const ArrowRM = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: #272531;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: calc(50% - 24px);
  right: -24px;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: #e2052d;
  }
  @media screen and (max-width: 380px) {
    bottom: calc(50% - 17px);
    right: -17px;
    width: 35px;
    height: 35px;
  }
`;

// Info Header ========
const Name = styled.div`
  font-size: 24px;
  color: #272531;
  text-align: left;
  @media screen and (max-width: 380px) {
    font-size: 15px;
  }
`;
const PriceBar = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 22px;
  margin-top: 25px;
  @media screen and (max-width: 461px) {
    column-gap: 17px;
  }
`;
const PriceM = styled.div`
  font-size: 32px;
  color: #e20531;
  font-weight: 600;
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`;
const PriceS = styled.div`
  font-size: 20px;
  color: #27253180;
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

// Info Bar ==========
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 277px;
`;
const InfoBar = styled.div`
  width: 100%;
  margin-top: 45px;
  border-bottom: 1px solid #27253120;
  @media screen and (max-width: 1325px) {
    display: none;
  }
`;
const InfoBarRes = styled.div`
  display: none;
  width: 100%;
  margin-top: 45px;
  border-bottom: 1px solid #27253120;
  @media screen and (max-width: 1325px) {
    display: block;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #27253120;
  padding: 14px 0;
`;
const InfoName = styled.div`
  font-size: 16px;
  color: #939298;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
const InfoValue = styled.div`
  font-size: 20px;
  color: #272531;
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
const Button = styled.div`
  background-color: #e2052d;
  width: 277px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 45px;
  transition: 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  @media screen and (max-width: 980px) {
    margin: 45px auto 0;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    height: 32px;
    font-size: 12px;
  }
`;

// Slider =======
const ImgBar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  column-gap: 18px;
  @media screen and (max-width: 1830px) {
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    column-gap: 10px;
  }
`;
const MainImg = styled.div`
  position: relative;
  height: 498px;
  width: 564px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
  @media screen and (max-width: 560px) {
    height: 450px;
  }
  @media screen and (max-width: 500px) {
    height: 380px;
  }
  @media screen and (max-width: 450px) {
    height: 310px;
  }
  @media screen and (max-width: 380px) {
    height: 154px;
  }
`;
const ImgS = styled.div`
  width: 258px;
  height: 154px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media screen and (max-width: 1830px) {
    width: 175px;
  }
  @media screen and (max-width: 1270px) {
    width: 100%;
  }
  @media screen and (max-width: 560px) {
    height: 130px;
  }
  @media screen and (max-width: 500px) {
    height: 100px;
  }
  @media screen and (max-width: 450px) {
    height: 80px;
  }
  @media screen and (max-width: 380px) {
    height: 60px;
  }
`;
const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 37px;
  color: ${(props) => props.tCol};
  background-color: ${(props) => props.bgCol};
  @media screen and (max-width: 450px) {
    width: 122px;
    height: 23px;
    font-size: 10px;
  }
`;
const ArrowL = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: #272531;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: #e2052d;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
  }
`;
const ArrowR = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: #272531;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: #e2052d;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
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
const Description = styled.div`
  padding: 0 180px;
  font-size: 16px;
  text-align: left;
  a {
    color: red;
  }
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 30px;
  }
`;
