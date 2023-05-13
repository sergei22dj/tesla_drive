import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../common/Header";
import { autopolitInfo1, autopolitInfo2, characteristics } from "./data";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Footer from "../../common/Footer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Quixote from "./pdf";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import HelmTags from "../../Helmet";

const Konfigurator = ({ setChosenModel, tags }) => {
  let { id } = useParams();
  const { t } = useTranslation();
  const chosenModel = id;
  const [activeModal, setActiveModal] = useState(false);
  const [buttonV, setButtonV] = useState(false);
  const [complect, setComplect] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    white: t("conf.white"),
  });
  const [selectedWheel, setSelectedWheel] = useState({
    first: '20" Cyberstream Wheels',
  });
  const [selectedInterior, setSelectedInterior] = useState({
    black: t("conf.black"),
  });
  const [selectedSeats, setSelectedSeats] = useState({
    fife: "included",
  });
  const [selectedAutopilot, setSelectedAutopilot] = useState({
    base: "0",
  });
  const [colorPriceDesc, setColorPriceDesc] = useState("");
  const [wheelsPriceDesc, setWheelsPriceDesc] = useState("");
  const [interiorPriceDesc, setInteriorPriceDesc] = useState("");
  const [inputData, setInputData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const inputHandler = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [numberImg, setNumberImg] = useState(1);
  const changeNumber = (e) => {
    e === 1
      ? setNumberImg((prev) => (prev < 4 ? prev + 1 : (prev = 1)))
      : setNumberImg((prev) => (prev > 1 ? prev - 1 : (prev = 4)));
  };
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `${"\u00A0"}`);

  const seatsPriceHandle = () => {
    switch (Object.keys(selectedInterior)[0]) {
      case "fife":
        setSelectedSeats("0");
        break;
      case "six":
        setSelectedSeats(characteristics[chosenModel].seats6);
        break;
      case "seven":
        setSelectedSeats(characteristics[chosenModel].seats7);
        break;

      default:
        break;
    }
  };

  const interiorPriceHandle = () => {
    switch (Object.keys(selectedInterior)[0]) {
      case "black":
        setInteriorPriceDesc("0");
        break;
      case "white":
        setInteriorPriceDesc(characteristics[chosenModel].interiorPrice);
        break;
      case "cream":
        setInteriorPriceDesc(characteristics[chosenModel].interiorPrice);
        break;

      default:
        break;
    }
  };

  const wheelsPriceHandle = () => {
    switch (Object.keys(selectedWheel)[0]) {
      case "first":
        setWheelsPriceDesc("0");
        break;
      case "second":
        setWheelsPriceDesc(characteristics[chosenModel].wheelPrice);
        break;

      default:
        break;
    }
  };
  const colorPriceDescHandle = () => {
    switch (Object.values(selectedColor)[0]) {
      case t("conf.white"):
        setColorPriceDesc("0");
        break;
      case t("conf.black"):
        setColorPriceDesc(characteristics[chosenModel].colorPrice.one);
        break;
      case t("conf.gray"):
        setColorPriceDesc(characteristics[chosenModel].colorPrice.one);
        break;
      case t("conf.blue"):
        setColorPriceDesc(characteristics[chosenModel].colorPrice.one);
        break;
      case t("conf.red"):
        setColorPriceDesc(characteristics[chosenModel].colorPrice.two);
        break;

      default:
        break;
    }
  };
  const image = `/images/konfigurator/cars/${chosenModel}_${
    Object.keys(selectedColor)[0]
  }_${Object.keys(selectedWheel)[0]}_${numberImg}.jpg`;
  const Video = useCallback(
    ({ number }) => {
      return (
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ width: "100%", marginTop: "5vh" }}
        >
          <source
            src={`/images/konfigurator/cars/vid_ap_${number}.mp4`}
            type="video/mp4"
          />
        </video>
      );
    },
    [numberImg]
  );
  const interiorImage = `/images/konfigurator/cars/${chosenModel}_${
    Object.keys(selectedInterior)[0]
  }.jpg`;
  const name = characteristics[chosenModel].name;
  const range = complect
    ? characteristics[chosenModel].range
    : characteristics[chosenModel].range1;
  const speed = complect
    ? characteristics[chosenModel].speed
    : characteristics[chosenModel].speed1;
  const racing = complect
    ? characteristics[chosenModel].racing
    : characteristics[chosenModel].racing1;
  const price = buttonV
    ? characteristics[chosenModel].price - "8400"
    : +characteristics[chosenModel].price;
  const price1 = buttonV
    ? characteristics[chosenModel].price1 - "8400"
    : +characteristics[chosenModel].price1;
  const wheelDesc =
    Object.keys(selectedWheel)[0] == "first"
      ? characteristics[chosenModel].wheel
      : characteristics[chosenModel].wheel1;
  const totalPrice =
    (complect ? price : price1) +
    (colorPriceDesc !== "included" ? +colorPriceDesc : 0) +
    (wheelsPriceDesc !== "included" ? +wheelsPriceDesc : 0) +
    (interiorPriceDesc !== "included" ? +interiorPriceDesc : 0) +
    (Object.values(selectedSeats)[0] !== "included"
      ? +Object.values(selectedSeats)[0]
      : 0) +
    (Object.values(selectedAutopilot)[0] !== "included"
      ? +Object.values(selectedAutopilot)[0]
      : 0);

  useEffect(() => {
    colorPriceDescHandle();
    wheelsPriceHandle();
    interiorPriceHandle();
    seatsPriceHandle();
  }, [selectedColor, selectedWheel, selectedInterior, selectedSeats]);

  const templateParams = {
    formName: "ЗАМОВЛЕННЯ АВТО З КОНФІГУРАТОРА",
    nameField: "Ім'я замовника - ",
    numberField: "Номер телефону - ",
    emailField: "Пошта - ",
    modelField: "Модель - ",
    complectationField: "Комплектація - ",
    colorField: "Колір - ",
    wheelField: "Колеса - ",
    interiorField: "Інтер'єр - ",
    seatsField: "Кількість місць - ",
    autopilotField: "Автопілот - ",
    totalPriceField: "Загально сума замовлення - ",
    color: Object.values(selectedColor)[0],
    model: chosenModel,
    wheel: wheelDesc,
    totalPrice: `$${totalPrice}`,
    interior:
      Object.keys(selectedInterior)[0] === "white"
        ? t("conf.iwhite")
        : Object.keys(selectedInterior)[0] === "black"
        ? t("conf.black")
        : Object.keys(selectedInterior)[0] === "cream"
        ? t("conf.cream")
        : false,
    name: inputData.name,
    number: inputData.number,
    email: inputData.email,
    complectation: characteristics[chosenModel].complect,
    seats:
      Object.keys(selectedSeats)[0] === "fife"
        ? "5"
        : Object.keys(selectedSeats)[0] === "six"
        ? "6"
        : Object.keys(selectedSeats)[0] === "seven"
        ? "7"
        : false,
    autopilot:
      Object.keys(selectedAutopilot)[0] === "base"
        ? t("conf.autopilot.name1")
        : Object.keys(selectedAutopilot)[0] === "enchanced"
        ? t("conf.autopilot.name2")
        : Object.keys(selectedAutopilot)[0] === "full"
        ? t("conf.autopilot.name3")
        : false,
  };
  const [done, setDone] = useState(false);

  const sendDasha = () => {
    emailjs
      .send(
        "service_t7iaku8",
        "template_uabqu09",
        templateParams,
        "O2Kznpin7qEbyXihA"
      )
      .then(
        function (response) {
          setDone(true);
        },
        function (error) {}
      );
  };
  const sendSerega = () => {
    emailjs
      .send(
        "service_t7iaku8",
        "template_war4p8s",
        templateParams,
        "O2Kznpin7qEbyXihA"
      )
      .then(
        function (response) {
          setDone(true);
        },
        function (error) {}
      );
  };
  const sendEmail = (e) => {
    sendDasha();
    sendSerega();
  };
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.config[0] + " " + name}
          titleru={tags.configru[0] + " " + name}
          desc={tags.config[1]}
          descru={tags.configru[1]}
          img={tags.configru[2]}
        />
      ) : null}
      <div style={{ position: "fixed", width: "100%", zIndex: "999999999" }}>
        <Header />
      </div>

      <Wrapper>
        {!inView2 ? (
          <Slider img={!inView ? image : interiorImage} m={numberImg === 4}>
            <HeaderLink>
              <LinkString>
                <Link to="/">
                  <Main>{t("auto.main")}</Main>
                </Link>{" "}
                <Next src="/images/next_gray.svg" alt="asd" />
                <Link to="/konfigurator">
                  <Main>{t("conf.name")}</Main>
                </Link>{" "}
                <Next src="/images/next_gray.svg" alt="asd" /> {name}
              </LinkString>
            </HeaderLink>
            {!inView && (
              <>
                <ButtonNavL onClick={() => changeNumber(2)}></ButtonNavL>
                <ButtonNavR onClick={() => changeNumber(1)}></ButtonNavR>
              </>
            )}
          </Slider>
        ) : (
          <Slider img={"none"}>
            <ButtonNavL onClick={() => changeNumber(2)}></ButtonNavL>
            <ButtonNavR onClick={() => changeNumber(1)}> </ButtonNavR>
            <Video number={numberImg} />
          </Slider>
        )}

        <ConfigBar>
          <ModelName>{name}</ModelName>

          <Link to="/konfigurator">
            <SelectModel>{t("conf.select")}</SelectModel>
          </Link>

          {/*Характеристики*/}
          <CharacteristicsWrapp>
            <Characteristics>
              <CharacteristicsValue>
                {range}
                <>км</>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.reserve")}</CharacteristicsDesc>
            </Characteristics>
            <Characteristics>
              <CharacteristicsValue>
                {speed}
                <>км/г</>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.speed")}</CharacteristicsDesc>
            </Characteristics>
            <Characteristics>
              <CharacteristicsValue>
                {racing}с<></>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.racing")}</CharacteristicsDesc>
            </Characteristics>
          </CharacteristicsWrapp>

          {/*Выбор комплектации*/}
          <ComplectName>{t("conf.dual")}</ComplectName>
          <Complect
            active={complect !== false}
            onClick={() => setComplect(false)}
          >
            <div>
              {name} {characteristics[chosenModel].complect}
            </div>
            <div>${numberWithCommas(price1)}</div>
          </Complect>
          <ComplectName>{t("conf.trial")}</ComplectName>
          <Complect
            active={complect !== true}
            onClick={() => setComplect(true)}
          >
            <div>
              {name} {characteristics[chosenModel].complect2}
            </div>
            <div>${numberWithCommas(price)}</div>
          </Complect>
          {chosenModel == "model3" ? (
            <>
              <ComplectName>{t("conf.trial")}</ComplectName>
              <Complect
                active={complect !== "3"}
                onClick={() => setComplect("3")}
              >
                <div>
                  {name} {characteristics[chosenModel].complect3}
                </div>
                <div>
                  $
                  {numberWithCommas(
                    !buttonV
                      ? characteristics[chosenModel].price2
                      : +characteristics[chosenModel].price2 - 8400
                  )}
                </div>
              </Complect>
            </>
          ) : null}

          {/* Выбор цвета */}
          <BlockName>{t("conf.color")}</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedColor.white}
              onClick={() => setSelectedColor({ white: t("conf.white") })}
              color={"#dcd0d0"}
              img="/images/konfigurator/icons/white.png"
            />
            <SelectItem
              active={selectedColor.black}
              onClick={() => setSelectedColor({ black: t("conf.black") })}
              color={"black"}
              img="/images/konfigurator/icons/black.png"
            />
            <SelectItem
              active={selectedColor.gray}
              onClick={() => setSelectedColor({ gray: t("conf.gray") })}
              color={"gray"}
              img="/images/konfigurator/icons/gray.png"
            />
            <SelectItem
              active={selectedColor.blue}
              onClick={() => setSelectedColor({ blue: t("conf.blue") })}
              color={"blue"}
              img="/images/konfigurator/icons/blue.png"
            />
            <SelectItem
              active={selectedColor.red}
              onClick={() => setSelectedColor({ red: t("conf.red") })}
              color={"red"}
              img={"/images/konfigurator/icons/red.png"}
            />
          </SelectItemsWrapper>
          <ItemDesc>
            {Object.values(selectedColor)[0]}

            <ItemPriceDesc>
              {colorPriceDesc == "included" ? "" : "$"}
              {colorPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          {/*Выбор колес */}
          <BlockName>Колеса</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedWheel.first}
              onClick={() =>
                setSelectedWheel({ first: '20" Cyberstream Wheels' })
              }
              img={`/images/konfigurator/icons/${chosenModel}_first.png`}
            />
            <SelectItem
              active={selectedWheel.second}
              onClick={() => setSelectedWheel({ second: '22" Turbine Wheels' })}
              img={`/images/konfigurator/icons/${chosenModel}_second.png`}
            />
          </SelectItemsWrapper>
          <ItemDesc>
            {wheelDesc}

            <ItemPriceDesc>
              {wheelsPriceDesc == "included" ? "" : "$"}
              {wheelsPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          <SText>{t("conf.wheels2")}</SText>

          {/*Выбор интерьера */}
          <BlockName>{t("conf.interior")}</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedInterior.black}
              onClick={() => setSelectedInterior({ black: t("conf.black") })}
              img={"/images/konfigurator/icons/salon-black.png"}
            />
            <SelectItem
              active={selectedInterior.white}
              onClick={() => setSelectedInterior({ white: t("conf.iwhite") })}
              img={"/images/konfigurator/icons/salon-white.png"}
            />
            {chosenModel !== "model3" && chosenModel !== "modelY" ? (
              <SelectItem
                active={selectedInterior.cream}
                onClick={() => setSelectedInterior({ cream: t("conf.cream") })}
                img={"/images/konfigurator/icons/salon-cream.png"}
              />
            ) : null}
          </SelectItemsWrapper>
          <ItemDesc>
            {Object.values(selectedInterior)[0]}

            <ItemPriceDesc>
              {interiorPriceDesc == "included" ? "" : "$"}
              {interiorPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          {chosenModel === "modelX" ? (
            <>
              <BlockName ref={ref}>{t("conf.seats")}</BlockName>
              <Complect
                active={!selectedSeats.fife}
                onClick={() => setSelectedSeats({ fife: "0" })}
              >
                <div>{t("conf.5")}</div>
                <div>$0</div>
              </Complect>
              <Complect
                active={!selectedSeats.six}
                onClick={() => setSelectedSeats({ six: "6800" })}
              >
                <div>{t("conf.6")}</div>
                <div>
                  ${numberWithCommas(+characteristics[chosenModel].seats6)}
                </div>
              </Complect>
              <Complect
                active={!selectedSeats.seven}
                onClick={() => setSelectedSeats({ seven: "3700" })}
              >
                <div>{t("conf.7")}</div>
                <div>
                  ${numberWithCommas(+characteristics[chosenModel].seats7)}
                </div>
              </Complect>
            </>
          ) : null}
          {/*Автопилот */}
          <BlockName ref={chosenModel !== "modelX" ? ref : null}>
            {t("conf.autopilot.name")}
          </BlockName>
          <Complect
            active={!selectedAutopilot.base}
            onClick={() => setSelectedAutopilot({ base: "0" })}
          >
            <div>{t("conf.autopilot.name1")}</div>
            <div>$0</div>
          </Complect>

          <Complect
            active={!selectedAutopilot.enchanced}
            onClick={() => setSelectedAutopilot({ enchanced: "6000" })}
          >
            <div>{t("conf.autopilot.name2")}</div>
            <div>${numberWithCommas(6000)}</div>
          </Complect>
          {selectedAutopilot.enchanced && (
            <AutopilotDesc>
              {autopolitInfo1.map((el) => (
                <ListItem>
                  <Dot />
                  {el}
                </ListItem>
              ))}
            </AutopilotDesc>
          )}

          <Complect
            active={!selectedAutopilot.full}
            onClick={() => setSelectedAutopilot({ full: "15000" })}
          >
            <div>{t("conf.autopilot.name3")}</div>
            <div>${numberWithCommas(15000)}</div>
          </Complect>
          {selectedAutopilot.full && (
            <AutopilotDesc>
              {autopolitInfo2.map((el) => (
                <ListItem>
                  <Dot />
                  {el}
                </ListItem>
              ))}
            </AutopilotDesc>
          )}
          {/* Заказать */}
          <BlockName ref={ref2}>
            {t("conf.total")}: ${numberWithCommas(totalPrice)}
          </BlockName>
          <Button onClick={() => setActiveModal(true)}>
            {t("conf.toorder")}
          </Button>
          <PDFDownloadLink
            document={
              <Quixote
                data={{
                  model: name,
                  motor: characteristics[chosenModel].complect,
                  color: Object.values(selectedColor)[0],
                  wheels: Object.values(selectedWheel)[0],
                  interior: Object.keys(selectedInterior)[0],
                  seats: Object.keys(selectedSeats)[0],
                  autopilot: Object.keys(selectedAutopilot)[0],
                }}
              />
            }
            fileName="Config.pdf"
          >
            <DLpdf style={{ marginBottom: "100px" }}>
              <img src="/images/pdf.svg" alt="asd" />
              {t("conf.pdf")}
            </DLpdf>
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
          <div style={{ height: "240px" }}></div>
        </ConfigBar>
      </Wrapper>
      {/*Мобильно-планшетное расширение */}
      {/*=============================================================================================================== */}
      <WrapperRes>
        <ConfigBarRes>
          <HeaderLinkRes>
            <LinkString>
              <Link to="/">
                <Main>{t("auto.main")}</Main>
              </Link>{" "}
              <Next src="/images/next_gray.svg" alt="asd" />
              <Link to="/konfigurator">
                <Main>{t("conf.name")}</Main>
              </Link>{" "}
              <Next src="/images/next_gray.svg" alt="asd" /> {name}
            </LinkString>
          </HeaderLinkRes>
          <Image
            img={`/images/konfigurator/cars/${chosenModel}_${
              Object.keys(selectedColor)[0]
            }_${Object.keys(selectedWheel)[0]}_${1}.jpg`}
          />
          <ModelName>{name}</ModelName>

          <Link to="/konfigurator">
            <SelectModel>{t("conf.select")}</SelectModel>
          </Link>

          {/*Характеристики*/}
          <CharacteristicsWrapp>
            <Characteristics>
              <CharacteristicsValue>
                {range}
                <>км</>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.reserve")}</CharacteristicsDesc>
            </Characteristics>
            <Characteristics>
              <CharacteristicsValue>
                {speed}
                <>км/г</>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.speed")}</CharacteristicsDesc>
            </Characteristics>
            <Characteristics>
              <CharacteristicsValue>
                {racing}с<></>
              </CharacteristicsValue>
              <CharacteristicsDesc>{t("auto.racing")}</CharacteristicsDesc>
            </Characteristics>
          </CharacteristicsWrapp>

          {/*Выбор комплектации*/}
          <ComplectName>{t("conf.dual")}</ComplectName>
          <Complect
            active={complect !== false}
            onClick={() => setComplect(false)}
          >
            <div>
              {name} {characteristics[chosenModel].complect}
            </div>
            <div>${numberWithCommas(price1)}</div>
          </Complect>
          <ComplectName>{t("conf.trial")}</ComplectName>
          <Complect
            active={complect !== true}
            onClick={() => setComplect(true)}
          >
            <div>
              {name} {characteristics[chosenModel].complect2}
            </div>
            <div>${numberWithCommas(price)}</div>
          </Complect>
          {chosenModel == "model3" ? (
            <>
              <ComplectName>{t("conf.trial")}</ComplectName>
              <Complect
                active={complect !== "3"}
                onClick={() => setComplect("3")}
              >
                <div>
                  {name} {characteristics[chosenModel].complect3}
                </div>
                <div>
                  $
                  {numberWithCommas(
                    !buttonV
                      ? characteristics[chosenModel].price2
                      : +characteristics[chosenModel].price2 - 8400
                  )}
                </div>
              </Complect>
            </>
          ) : null}

          <Image
            img={`/images/konfigurator/cars/${chosenModel}_${
              Object.keys(selectedColor)[0]
            }_${Object.keys(selectedWheel)[0]}_${2}.jpg`}
            style={{ marginTop: "100px" }}
          />

          {/* Выбор цвета */}
          <BlockName>{t("conf.color")}</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedColor.white}
              onClick={() => setSelectedColor({ white: t("conf.white") })}
              color={"#dcd0d0"}
              img="/images/konfigurator/icons/white.png"
            />
            <SelectItem
              active={selectedColor.black}
              onClick={() => setSelectedColor({ black: t("conf.black") })}
              color={"black"}
              img="/images/konfigurator/icons/black.png"
            />
            <SelectItem
              active={selectedColor.gray}
              onClick={() => setSelectedColor({ gray: t("conf.gray") })}
              color={"gray"}
              img="/images/konfigurator/icons/gray.png"
            />
            <SelectItem
              active={selectedColor.blue}
              onClick={() => setSelectedColor({ blue: t("conf.blue") })}
              color={"blue"}
              img="/images/konfigurator/icons/blue.png"
            />
            <SelectItem
              active={selectedColor.red}
              onClick={() => setSelectedColor({ red: t("conf.red") })}
              color={"red"}
              img={"/images/konfigurator/icons/red.png"}
            />
          </SelectItemsWrapper>
          <ItemDesc>
            {Object.values(selectedColor)[0]}

            <ItemPriceDesc>
              {colorPriceDesc == "included" ? "" : "$"}
              {colorPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          <Image
            img={`/images/konfigurator/cars/${chosenModel}_${
              Object.keys(selectedColor)[0]
            }_${Object.keys(selectedWheel)[0]}_${4}.jpg`}
            style={{ marginTop: "100px" }}
          />
          {/*Выбор колес */}
          <BlockName>Колеса</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedWheel.first}
              onClick={() =>
                setSelectedWheel({ first: '20" Cyberstream Wheels' })
              }
              img={`/images/konfigurator/icons/${chosenModel}_first.png`}
            />
            <SelectItem
              active={selectedWheel.second}
              onClick={() => setSelectedWheel({ second: '22" Turbine Wheels' })}
              img={`/images/konfigurator/icons/${chosenModel}_second.png`}
            />
          </SelectItemsWrapper>
          <ItemDesc>
            {wheelDesc}

            <ItemPriceDesc>
              {wheelsPriceDesc == "included" ? "" : "$"}
              {wheelsPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          <SText>{t("conf.wheels2")}</SText>
          <Image
            img={`/images/konfigurator/cars/${chosenModel}_${
              Object.keys(selectedInterior)[0]
            }.jpg`}
            style={{ marginTop: "100px" }}
          />

          {/*Выбор интерьера */}
          <BlockName>{t("conf.interior")}</BlockName>
          <SelectItemsWrapper>
            <SelectItem
              active={selectedInterior.black}
              onClick={() => setSelectedInterior({ black: t("conf.black") })}
              img={"/images/konfigurator/icons/salon-black.png"}
            />
            <SelectItem
              active={selectedInterior.white}
              onClick={() => setSelectedInterior({ white: t("conf.iwhite") })}
              img={"/images/konfigurator/icons/salon-white.png"}
            />
            {chosenModel !== "model3" && chosenModel !== "modelY" ? (
              <SelectItem
                active={selectedInterior.cream}
                onClick={() => setSelectedInterior({ cream: t("conf.cream") })}
                img={"/images/konfigurator/icons/salon-cream.png"}
              />
            ) : null}
          </SelectItemsWrapper>
          <ItemDesc>
            {Object.values(selectedInterior)[0]}

            <ItemPriceDesc>
              {interiorPriceDesc == "included" ? "" : "$"}
              {interiorPriceDesc}
            </ItemPriceDesc>
          </ItemDesc>
          {chosenModel === "modelX" ? (
            <>
              <BlockName>{t("conf.seats")}</BlockName>
              <Complect
                active={!selectedSeats.fife}
                onClick={() => setSelectedSeats({ fife: "0" })}
              >
                <div>{t("conf.5")}</div>
                <div>$0</div>
              </Complect>
              <Complect
                active={!selectedSeats.six}
                onClick={() => setSelectedSeats({ six: "6800" })}
              >
                <div>{t("conf.6")}</div>
                <div>
                  ${numberWithCommas(+characteristics[chosenModel].seats6)}
                </div>
              </Complect>
              <Complect
                active={!selectedSeats.seven}
                onClick={() => setSelectedSeats({ seven: "3700" })}
              >
                <div>{t("conf.7")}</div>
                <div>
                  ${numberWithCommas(+characteristics[chosenModel].seats7)}
                </div>
              </Complect>
            </>
          ) : null}
          <Video number={1} />
          {/*Автопилот */}
          <BlockName>{t("conf.autopilot.name")}</BlockName>
          <Complect
            active={!selectedAutopilot.base}
            onClick={() => setSelectedAutopilot({ base: "0" })}
          >
            <div>{t("conf.autopilot.name1")}</div>
            <div>$0</div>
          </Complect>

          <Complect
            active={!selectedAutopilot.enchanced}
            onClick={() => setSelectedAutopilot({ enchanced: "6000" })}
          >
            <div>{t("conf.autopilot.name2")}</div>
            <div>${numberWithCommas(6000)}</div>
          </Complect>
          {selectedAutopilot.enchanced && (
            <AutopilotDesc>
              {autopolitInfo1.map((el) => (
                <ListItem>
                  <Dot />
                  {el}
                </ListItem>
              ))}
            </AutopilotDesc>
          )}

          <Complect
            active={!selectedAutopilot.full}
            onClick={() => setSelectedAutopilot({ full: "15000" })}
          >
            <div>{t("conf.autopilot.name3")}</div>
            <div>${numberWithCommas(15000)}</div>
          </Complect>
          {selectedAutopilot.full && (
            <AutopilotDesc>
              {autopolitInfo2.map((el) => (
                <ListItem>
                  <Dot />
                  {el}
                </ListItem>
              ))}
            </AutopilotDesc>
          )}
          {/* Заказать */}
          <BlockName>
            {t("conf.total")}: ${numberWithCommas(totalPrice)}
          </BlockName>
          <Button onClick={() => setActiveModal(true)}>
            {t("conf.toorder")}
          </Button>
          <PDFDownloadLink
            document={
              <Quixote
                data={{
                  model: name,
                  motor: characteristics[chosenModel].complect,
                  color: Object.values(selectedColor)[0],
                  wheels: Object.values(selectedWheel)[0],
                  interior: Object.keys(selectedInterior)[0],
                  seats: Object.keys(selectedSeats)[0],
                  autopilot: Object.keys(selectedAutopilot)[0],
                }}
              />
            }
            fileName="Config.pdf"
          >
            <DLpdf style={{ marginBottom: "100px" }}>
              <img src="/images/pdf.svg" alt="asd" />
              {t("conf.pdf")}
            </DLpdf>
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </ConfigBarRes>
        <Footer />
      </WrapperRes>

      {/*Модалка оформления */}
      {activeModal && (
        <Modal onClick={() => setActiveModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <>
              <Form done={done}>
                {!done ? (
                  <>
                    <Exit
                      src="/images/exit.svg"
                      onClick={() => setActiveModal(false)}
                    />
                    <TextS>{t("conf.modal.text1")}</TextS>
                    <TextMain>{t("conf.modal.text2")}</TextMain>
                    <TextMainRes>{t("conf.modal.text21")}</TextMainRes>

                    <InputsWrapper>
                      <Input
                        placeholder={t("conf.modal.text3")}
                        name="name"
                        value={inputData.name}
                        onChange={(e) => inputHandler(e)}
                      />
                      <Input
                        placeholder="Телефон"
                        name="number"
                        value={inputData.number}
                        onChange={(e) => inputHandler(e)}
                      />
                      <Input
                        placeholder="E-mail"
                        name="email"
                        value={inputData.email}
                        onChange={(e) => inputHandler(e)}
                      />
                    </InputsWrapper>
                    <ButtonF onClick={() => [sendEmail()]}>
                      {t("conf.modal.text5")}
                    </ButtonF>
                  </>
                ) : (
                  <>
                    <Exit
                      src="/images/exit_black.svg"
                      onClick={() => setActiveModal(false)}
                    />
                    <DoneText>{t("conf.modal.text6")}</DoneText>
                    <DoneTextS>{t("conf.modal.text7")}</DoneTextS>
                  </>
                )}
              </Form>
            </>
          </ModalContent>
        </Modal>
      )}
      <Foot>
        <Smoke />
        <Footer />
      </Foot>
      <div ref={ref3}></div>
    </>
  );
};
export default Konfigurator;
const Foot = styled.div`
  position: relative;
  z-index: 9999999999;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const Smoke = styled.div`
  height: 10px;
  background-color: white;
  box-shadow: 1px 0px 35px 100px rgb(255 255 255);
`;
const Exit = styled.img`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
`;
// Link str
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
  height: 45px;

  @media screen and (max-width: 1650px) {
    padding-top: 25px;
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
const Wrapper = styled.div`
  display: flex;
  padding-right: 180px;
  @media screen and (max-width: 1650px) {
    padding-right: 40px;
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    padding-right: 30px;
  }
`;
const WrapperRes = styled.div`
  display: none;

  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
`;
const DLpdf = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;
const Image = styled.div`
  width: calc(100% + 80px);
  height: 520px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: 150%;
  margin: 0 -40px;
  background-repeat: no-repeat;
  @media screen and (max-width: 780px) {
    height: 400px;
  }
  @media screen and (max-width: 570px) {
    height: 340px;
  }
  @media screen and (max-width: 550px) {
    width: calc(100% + 60px);
    margin: 0 -30px;
  }
  @media screen and (max-width: 420px) {
    height: 250px;
  }
`;
// Modal
const Modal = styled.div`
  height: 100vh;
  background-color: rgb(0 0 0 / 76%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;
  z-index: 999999999;
`;
const ModalContent = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-right: auto;
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
const TitleModal = styled.div`
  font-size: 48px;
  padding: 0 11px;
  @media screen and (max-width: 700px) {
    font-size: 38px;
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
const CloseBtn = styled.div`
  margin-left: auto;
  padding-right: 10px;
  color: gray;
  font-size: 36px;

  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const Form = styled.div`
  position: relative;
  background-color: ${(props) => (props.done ? "white" : "#e20531")};

  padding: 51px 70px 0 70px;
  text-align: left;

  color: white;

  @media screen and (max-width: 800px) {
    padding: 40px 70px 70px 70px;
  }
  @media screen and (max-width: 640px) {
    text-align: center;
    padding-top: 46px;
  }
  @media screen and (max-width: 550px) {
    padding: 60px 36px;
  }
  padding-bottom: 70px;
`;
const TextS = styled.div`
  font-size: 36px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
  @media screen and (max-width: 550px) {
    font-size: 15px;
    margin: 0 11px;
  }
`;
const TextMain = styled.div`
  font-size: 48px;
  text-transform: uppercase;
  margin-top: 55px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const TextMainRes = styled.div`
  display: none;
  font-size: 48px;
  text-transform: uppercase;
  margin-top: 10px;
  @media screen and (max-width: 1000px) {
    display: block;
  }
  @media screen and (max-width: 640px) {
    font-size: 36px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;
const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.7fr) 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 143px;
  grid-row-gap: 50px;
  margin-top: 100px;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-top: 50px;
  }
`;
const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  width: 100%;
  display: grid;
  @media screen and (max-width: 566px) {
    font-size: 12px;
  }

  font-size: 20px;
  &:nth-child(3) {
    width: 100%;
    @media screen and (max-width: 1250px) {
      grid-area: 2 / 1 / 3 / 3;
    }
    @media screen and (max-width: 800px) {
      grid-area: auto;
    }
  }
  &::placeholder {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 566px) {
      font-size: 12px;
    }
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
const ButtonF = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 55px;
  width: 392px;
  height: 48px;
  font-family: "Gilroy-medium";
  color: #e20531;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    border: 1px solid white;
    background-color: #e20531;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    margin-top: 55px;
  }
  @media screen and (max-width: 770px) {
    width: 100%;
    font-size: 16px;
    height: 40px;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    font-size: 12px;
    height: 40px;
  }
`;
const InputTitle = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin-top: 20px;
  font-size: 18px;
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const Invalid = styled.div`
  font-size: 12px;
  color: red;
  padding-left: 5px;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`;
const DoneText = styled.div`
  padding-bottom: 20px;
  font-size: 48px;
  max-width: 295px;
  margin: 0 auto;
  text-align: center;
  color: red;
  @media screen and (max-width: 700px) {
    font-size: 38px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const DoneTextS = styled.div`
  padding-bottom: 20px;
  font-size: 24px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: red;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Dot = styled.div`
  width: 5px;
  height: 5px;
  min-width: 5px;
  margin-right: 5px;
  margin-top: 7px;
  background-color: black;
  border-radius: 50%;
`;
const SelectModel = styled.div`
  color: #939298;
  font-size: 14px;
`;
// ====
const Slider = styled.div`
  margin-right: 20px;
  width: calc(100% - 540px);
  max-width: 1400px;
  position: fixed;
  margin-top: 143px;
  height: calc(100vh - 143px);
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: 140%;
  background-repeat: no-repeat;
  z-index: 99999999;
  transition: background-image 0.2s ease-in-out;
  @media screen and (max-width: 1650px) {
    width: calc(100% - 380px);
  }
  @media screen and (max-width: 1130px) {
    background-size: 170%;
  }
  @media screen and (max-width: 550px) {
    width: calc(100% - 370px);
  }
`;
const ConfigBar = styled.div`
  margin-left: auto;
  min-width: 320px;
  max-width: 320px;
  padding-top: 177px;

  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const ConfigBarRes = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 1650px) {
    padding: 143px 40px 0;
  }
  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    padding: 133px 30px 0;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const ButtonNavL = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  z-index: 99999;
  cursor: pointer;
  transition: 0.3s;
  background-image: url("/images/Arrow.jpg");
  &:hover {
    background-image: url("/images/ArrowP_hover.png");
  }
`;
const ButtonNavR = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  z-index: 99999;
  cursor: pointer;
  transition: 0.3s;
  background-image: url("/images/Arrow_rev.jpg");
  &:hover {
    background-image: url("/images/ArrowF_hover.png");
  }
`;
const ModelName = styled.div`
  font-size: 40px;
`;
const BlockName = styled.div`
  font-size: 28px;
  margin-top: 240px;
  @media screen and (max-width: 1150px) {
    margin-top: 100px;
  }
`;
const SText = styled.div`
  font-size: 16px;
  padding-bottom: 8px;
`;
// Toggle
const TogglePrice = styled.div`
  display: flex;
`;
const ToggleBtnPrice = styled.div`
  padding: 5px 0;
  width: 50%;
  font-size: 12px;
  color: ${(props) => (props.active ? "white" : "white")};
  background-color: ${(props) => (props.active ? "#979797" : "#e20531")};
  cursor: pointer;
  transition: 0.3s;
`;
// Characteristics
const CharacteristicsWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  column-gap: 20px;
`;
const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CharacteristicsValue = styled.div`
  font-size: 24px;
  padding-bottom: 5px;
`;
const CharacteristicsDesc = styled.div`
  font-size: 12px;
`;
// Complect
const ComplectName = styled.div`
  font-size: 16px;
  margin: 15px 0 10px;
  text-align: left;
`;
const Complect = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: ${(props) =>
    props.active ? "1px solid #979797" : "2px solid #e20531"};
  transition: 0.3;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`;
// Color
const SelectItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
const SelectItem = styled.div`
  width: 54px;
  height: 54px;
  box-sizing: border-box;
  cursor: pointer;
  border: ${(props) => (props.active ? "2px solid #e20531" : "none")};
  background-image: url(${(props) => props.img});
  border-radius: 50%;
  background-size: 45px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.1s;
`;
const ItemDesc = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-top: 16px;
  font-weight: 600;
`;
const ItemPriceDesc = styled.div`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 500;
`;
const AutopilotDesc = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: start;
  padding-left: 10px;
  text-align: left;
  flex-direction: column;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  box-sizing: border-box;
  height: 48px;
  margin: 20px auto 0;
  background-color: #e20531;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
`;
