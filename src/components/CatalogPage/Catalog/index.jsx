import React, { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import useContentful from "../../../contentful";
import usePagination from "../../../hooks/usePagination";
import HeaderHat from "../../common/HeaderHat";
import { PriceRange } from "../../common/helpers/priceHandler";
import Configurator from "../../common/Relinking/Configurator";
import TextBlock from "../../common/TextBlock";
import Feedback from "../../MainPage/Feedback";
import News from "../../MainPage/News";
import CardItem from "../CardItem";

import Filter from "../Filter";
import SortedBar from "../SortedBar";
import {
  BodyWrapper,
  Empty,
  FilterFull,
  FilterSmall,
  Header,
  HideFilter,
  Name,
  RightWrapper,
  Wrapper,
} from "./views";

const Catalog = ({ globalStatus }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let models = searchParams.get("Model")
    ? searchParams.get("Model").split(",")
    : null;
  let years = searchParams.get("Year")
    ? searchParams.get("Year").split(",")
    : null;
  let color = searchParams.get("Color")
    ? searchParams.get("Color").split(",")
    : null;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [contentData, setContentData] = useState([]);
  const [items, setItems] = useState([]);
  const [numberOfView, setNumberOfVew] = useState(9);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: numberOfView,
    count: items.length,
  });

  // filtres data
  const [selectedPrice, setSelectedPrice] = useState([10, 2000000]);
  const [selectedMark, setSelectedMark] = useState(
    searchParams.get("Mark") ? [searchParams.get("Mark")] : ["Всі"]
  );
  const [selectedModel, setSelectedModel] = useState(
    models ? [...models] : ["Всі"]
  );
  const [selectedYear, setSelectedYear] = useState(
    years ? [...years] : ["Всі"]
  );
  const [selectedBattery, setSelectedBattery] = useState(["Всі"]);
  const [selectedReserve, setSelectedReserve] = useState(["Всі"]);
  const [selectedCondition, setSelectedCondition] = useState(
    searchParams.get("Condition")
      ? [Boolean(searchParams.get("Condition"))]
      : ["Всі"]
  );
  const [selectedStatus, setSelectedStatus] = useState(globalStatus);
  const [selectedColor, setSelectedColor] = useState(
    color ? [...color] : ["Всі"]
  );
  const [filtesUrl, setFiltersUrl] = useState({
    mark: "",
    model: "",
    year: "",
    battery: "",
    reserve: "",
    condition: "",
    color: "",
  });
  // get items from contentful
  const { getItems } = useContentful();
  useEffect(() => {
    selectedStatus == "all"
      ? getItems(setLoading).then((response) => {
          setItems(response);
          setContentData(response);
          setSelectedPrice(PriceRange(response));
        })
      : getItems(setLoading).then((response) => {
          setItems(response.filter((item) => item.status == selectedStatus));
          setContentData(
            response.filter((item) => item.status == selectedStatus)
          );
        });
  }, [selectedStatus]);
  // filtres
  const applyFilters = () => {
    let updatedList = contentData;
    // mark Filter
    if (selectedMark.length && !selectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        selectedMark.includes(item.mark)
      );
    }
    // model Filter
    if (selectedModel.length && !selectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        selectedModel.includes(item.model)
      );
    }
    // condition Filter
    if (
      selectedCondition.includes(true) &&
      selectedCondition.length &&
      selectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        selectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      selectedCondition.includes(false) &&
      selectedCondition.length &&
      selectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        selectedCondition.includes(item.condition)
      );
    }

    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // color Filter
    if (selectedColor.length && !selectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        selectedColor.includes(item.color)
      );
    }
    // year Filter
    if (selectedYear.length && !selectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        selectedYear.includes(item.year)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // battery Filter
    if (
      selectedBattery.length &&
      !selectedBattery.includes(NaN) &&
      !selectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...selectedBattery.flat());
      const maxBattery = Math.max(...selectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    // reserve Filter
    if (
      selectedReserve.length &&
      !selectedReserve.includes(NaN) &&
      !selectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...selectedReserve.flat());
      const maxReserve = Math.max(...selectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }

    setItems(updatedList);
  };
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedPrice,
    selectedYear,
    selectedReserve,
    selectedBattery,
    selectedMark,
    selectedModel,
    selectedCondition,
    selectedStatus,
    selectedColor,
    selectedYear,
    filtesUrl,
    searchParams,
    contentData,
  ]);
  // set Url values
  const setUrl = () => {
    selectedMark.length
      ? setFiltersUrl((prev) => ({ ...prev, mark: `&Mark=${selectedMark}` }))
      : setFiltersUrl((prev) => ({ ...prev, mark: `` }));

    selectedModel.length
      ? setFiltersUrl((prev) => ({ ...prev, model: `&Model=${selectedModel}` }))
      : setFiltersUrl((prev) => ({ ...prev, model: `` }));

    selectedYear.length
      ? setFiltersUrl((prev) => ({ ...prev, year: `&Year=${selectedYear}` }))
      : setFiltersUrl((prev) => ({ ...prev, year: `` }));
    selectedBattery
      ? setFiltersUrl((prev) => ({
          ...prev,
          battery: `&Battery=${selectedBattery}`,
        }))
      : setFiltersUrl((prev) => ({ ...prev, battery: `` }));
    selectedReserve.length
      ? setFiltersUrl((prev) => ({
          ...prev,
          reserve: `&Reserve=${selectedReserve}`,
        }))
      : setFiltersUrl((prev) => ({ ...prev, reserve: `` }));
    selectedCondition
      ? setFiltersUrl((prev) => ({
          ...prev,
          condition: `&Condition=${selectedCondition}`,
        }))
      : setFiltersUrl((prev) => ({ ...prev, condition: `` }));
    selectedColor.length
      ? setFiltersUrl((prev) => ({ ...prev, color: `&Color=${selectedColor}` }))
      : setFiltersUrl((prev) => ({ ...prev, color: `` }));
  };
  useEffect(() => {
    setUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedPrice,
    selectedYear,
    selectedReserve,
    selectedBattery,
    selectedMark,
    selectedModel,
    selectedCondition,
    selectedStatus,
    selectedColor,
    selectedYear,
  ]);
  // reset button
  const resetSelected = () => {
    setSelectedPrice([1000, 210000]);
    setSelectedMark(["Всі"]);
    setSelectedModel(["Всі"]);
    setSelectedYear(["Всі"]);
    setSelectedBattery(["Всі"]);
    setSelectedReserve(["Всі"]);
    setSelectedCondition(["Всі"]);
    setSelectedStatus("all");
    setSelectedColor(["Всі"]);
  };
  // sort arrow up
  const sortUp = (props) => {
    console.log(props);
    let sortedName =
      props === "priceUsd"
        ? items.sort((a, b) => (+a[props] > +b[props] ? 1 : -1))
        : items.sort((a, b) =>
            a[props].toLowerCase() > b[props].toLowerCase() ? 1 : -1
          );
    setItems(sortedName);
    forceUpdate();
  };
  // sort arrow down
  const sortDown = (props) => {
    let sortedName =
      props === "priceUsd"
        ? items.sort((a, b) => (+a[props] < +b[props] ? 1 : -1))
        : items.sort((a, b) =>
            a[props].toLowerCase() < b[props].toLowerCase() ? 1 : -1
          );
    setItems(sortedName);
    forceUpdate();
  };
  // button add more items
  const more = () => {
    setNumberOfVew((prev) => prev + 9);
  };
  // sort sale on first
  const premiumFirst = items.sort((a, b) => (a.sale ? -1 : 1));
  console.log(premiumFirst);
  // change Url
  useEffect(() => {
    window.history.pushState(
      "a",
      "New Page Title",
      `?filter=${
        selectedStatus == "a"
          ? "in-stock"
          : selectedStatus == "b"
          ? "on-the-road"
          : selectedStatus == "c"
          ? "new"
          : selectedStatus == "all"
          ? "all-electrocar"
          : null
      }${selectedMark ? filtesUrl.mark : null}${filtesUrl.model}${
        filtesUrl.year
      }${filtesUrl.battery}${filtesUrl.reserve}${filtesUrl.condition}${
        filtesUrl.color
      }`
    );
  }, [filtesUrl]);
  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
  }, [page]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <HeaderHat
        bg={"/images/Hat_Bg_auto.jpg"}
        bgMob={"/images/Hat_Bg_auto_mob.jpg"}
        name={"Каталог авто"}
      />
      <BodyWrapper>
        <FilterFull>
          <Filter
            renderItems={items}
            itemsData={contentData}
            setSelectedPrice={setSelectedPrice}
            resetSelected={resetSelected}
            selectedPrice={selectedPrice}
            setSelectedMark={setSelectedMark}
            SelectedMark={selectedMark}
            setSelectedModel={setSelectedModel}
            SelectedModel={selectedModel}
            setSelectedCondition={setSelectedCondition}
            SelectedCondition={selectedCondition}
            setSelectedBattery={setSelectedBattery}
            SelectedBattery={selectedBattery}
            setSelectedReserve={setSelectedReserve}
            SelectedReserve={selectedReserve}
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
            setSelectedColor={setSelectedColor}
            SelectedColor={selectedColor}
            setSelectedYear={setSelectedYear}
            SelectedYear={selectedYear}
          />
        </FilterFull>

        <RightWrapper>
          <Header>
            <Name>Каталог авто</Name>
          </Header>
          <HideFilter
            onClick={() => (visible ? setVisible(false) : setVisible(true))}
          >
            {t("katavto.pidbir")}
          </HideFilter>
          {visible ? (
            <FilterSmall>
              <Filter
                renderItems={items}
                itemsData={contentData}
                setSelectedPrice={setSelectedPrice}
                resetSelected={resetSelected}
                selectedPrice={selectedPrice}
                setSelectedMark={setSelectedMark}
                SelectedMark={selectedMark}
                setSelectedModel={setSelectedModel}
                SelectedModel={selectedModel}
                setSelectedCondition={setSelectedCondition}
                SelectedCondition={selectedCondition}
                setSelectedBattery={setSelectedBattery}
                SelectedBattery={selectedBattery}
                setSelectedReserve={setSelectedReserve}
                SelectedReserve={selectedReserve}
                setSelectedStatus={setSelectedStatus}
                selectedStatus={selectedStatus}
                setSelectedColor={setSelectedColor}
                SelectedColor={selectedColor}
                setSelectedYear={setSelectedYear}
                SelectedYear={selectedYear}
              />
            </FilterSmall>
          ) : null}

          <SortedBar sortUp={sortUp} sortDown={sortDown} />
          {loading ? (
            <Empty>Триває завантаження ...</Empty>
          ) : items.length ? (
            <>
              <Wrapper>
                {items.slice(firstContentIndex, lastContentIndex).map((el) => (
                  <CardItem data={el} />
                ))}
              </Wrapper>
              <Button disabled={page === totalPages} onClick={more}>
                {t("katavto.more")}
              </Button>
              <PagiBar>
                <PagiButtonArrow onClick={prevPage}>&larr;</PagiButtonArrow>

                {[...Array(totalPages).keys()].map((el) => (
                  <PagiButton
                    onClick={() => setPage(el + 1)}
                    key={el}
                    variant={`${page === el + 1 ? "#e2052d" : "#e5e4e4"}`}
                    text={`${page === el + 1 ? "#ffff" : "#666666"}`}
                  >
                    {el + 1}
                  </PagiButton>
                ))}
                <PagiButtonArrow onClick={nextPage}>&rarr;</PagiButtonArrow>
              </PagiBar>
            </>
          ) : (
            <Empty>{t("katavto.empty")}</Empty>
          )}
        </RightWrapper>
      </BodyWrapper>
      <Configurator />
      <TextBlock page={"CatalogAuto"} />

      <News />
    </>
  );
};
export default Catalog;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  font-family: "Gilroy-medium";
  background-color: ${(props) => (props.disabled ? "#4b4b4b" : "#e2052d")};
  height: 48px;
  width: 216px;
  cursor: pointer;
  margin: 40px auto;
`;
const PagiBar = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  column-gap: 20px;
  margin-bottom: 20px;
`;
const PagiButton = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => props.text};
  font-size: 16px;
  font-weight: 500;
  background-color: #e5e4e4;
  background-color: ${(props) => props.variant};
  border: none;
  cursor: pointer;
  transition: 0.5s;
`;
const PagiButtonArrow = styled.button`
  width: 40px;
  height: 40px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  background-color: #e5e4e4;
  border: none;
  cursor: pointer;
  transition: 0.5s;
`;
