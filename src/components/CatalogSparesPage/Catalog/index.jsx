import React, { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import styled from "styled-components";
import useContentful from "../../../contentful";
import usePagination from "../../../hooks/usePagination";
import HeaderHat from "../../common/HeaderHat";
import { PriceRange } from "../../common/helpers/priceHandler";
import RelCardItem from "../../common/Relinking/CardItem";
import {
  ButtonRed,
  CardWrapper,
  RelinkingWrapper,
  RelinkName,
  ResWrapperCard,
} from "../../common/Relinking/views";
import TextBlock from "../../common/TextBlock";
import Feedback from "../../MainPage/Feedback";
import CardItem from "../CardItem";
import { merchItems } from "../data";

import Filter from "../Filter/index";
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

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [contentData, setContentData] = useState([]);
  const [items, setItems] = useState([]);
  const [relinkItems, setRelinkItems] = useState([]);
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
  const [selectedStatus, setSelectedStatus] = useState(["Всі"]);

  // get items from contentful
  const { getItemsSpares, getItemsAccessories } = useContentful();
  useEffect(() => {
    getItemsSpares(setLoading).then((response) => {
      setItems(response);
      setContentData(response);
      setSelectedPrice(PriceRange(response));
    });
  }, []);
  useEffect(() => {
    getItemsAccessories(setLoading).then((response) => {
      setRelinkItems(response);
    });
  }, []);

  // filtres
  const applyFilters = () => {
    let updatedList = contentData;

    // model Filter
    if (selectedModel.length && !selectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        selectedModel.every((element) => {
          return item.model.includes(element);
        })
      );
    }
    // status filter
    if (selectedStatus.length && !selectedStatus.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        selectedStatus.includes(item.availability)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );

    setItems(updatedList);
  };
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrice, selectedStatus, selectedModel, selectedMark]);
  // set Url values
  /* const setUrl = () => {
   selectedStatus.length
      ? setFiltersUrl((prev) => ({ ...prev, mark: `&Mark=${selectedStatus}` }))
      : setFiltersUrl((prev) => ({ ...prev, mark: `` })); 
  };*/
  useEffect(() => {
    // setUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrice, selectedStatus]);
  // reset button
  const resetSelected = () => {
    setSelectedPrice([210, 650]);
    setSelectedMark(["Всі"]);
    setSelectedModel(["Всі"]);
    setSelectedStatus(["Всі"]);
  };
  // sort arrow up
  const sortUp = (props) => {
    let sortedName = items.sort((a, b) => (+a[props] > +b[props] ? 1 : -1));
    setItems(sortedName);
    forceUpdate();
  };
  // sort arrow down
  const sortDown = (props) => {
    let sortedName = items.sort((a, b) => (+a[props] < +b[props] ? 1 : -1));
    setItems(sortedName);
    forceUpdate();
  };
  // button add more items
  const more = () => {
    setNumberOfVew((prev) => prev + 9);
  };
  // sort sale on first
  const premiumFirst = items.sort((a, b) => (a.sale ? -1 : 1));

  // change Url

  useEffect(() => {
    window.history.pushState(
      "a",
      "New Page Title",
      `?filter=${
        selectedStatus.includes("Всі") ||
        (selectedStatus.includes(true) && selectedStatus.includes(false))
          ? "all-spares"
          : selectedStatus.includes(true)
          ? "spares-in-stock"
          : selectedStatus.includes(false)
          ? "on-order"
          : null
      }`
    );
  }, [selectedStatus]);
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
        bg={"/images/Hat_Bg_spares.jpg"}
        bgMob={"/images/Hat_Bg_spares_mob.jpg"}
        name={t("katavto.namesp")}
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
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
          />
        </FilterFull>

        <RightWrapper>
          <Header>
            <Name>{t("katavto.namesp")}</Name>
          </Header>
          <HideFilter
            onClick={() => (visible ? setVisible(false) : setVisible(true))}
          >
            {t("katavto.pidbirsp")}
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
                setSelectedStatus={setSelectedStatus}
                selectedStatus={selectedStatus}
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
      <TextBlock page={"CatalogZapchasti"} />
      <Feedback />

      {relinkItems.length && (
        <RelinkingWrapper>
          <RelinkName>{t("katavto.dontmiss")}:</RelinkName>
          <CardWrapper>
            <RelCardItem
              data={relinkItems[0]}
              linkUrl={`katalog-aksesuary/${relinkItems[0].id}`}
            />
            {relinkItems[1] ? (
              <RelCardItem
                data={relinkItems[1]}
                linkUrl={`katalog-aksesuary/${relinkItems[1].id}`}
              />
            ) : (
              <RelCardItem
                data={relinkItems[0]}
                linkUrl={`katalog-aksesuary/${relinkItems[0].id}`}
              />
            )}

            {relinkItems[2] ? (
              <RelCardItem
                data={relinkItems[2]}
                linkUrl={`katalog-aksesuary/${relinkItems[2].id}`}
              />
            ) : (
              <RelCardItem
                data={relinkItems[0]}
                linkUrl={`katalog-aksesuary/${relinkItems[0].id}`}
              />
            )}
            <ResWrapperCard>
              {relinkItems[3] ? (
                <RelCardItem
                  data={relinkItems[3]}
                  linkUrl={`katalog-aksesuary/${relinkItems[3].id}`}
                />
              ) : (
                <RelCardItem
                  data={relinkItems[0]}
                  linkUrl={`katalog-aksesuary/${relinkItems[0].id}`}
                />
              )}
            </ResWrapperCard>
          </CardWrapper>
          <Link to="/katalog-aksesuary">
            <ButtonRed>{t("katavto.toacs")}</ButtonRed>
          </Link>
        </RelinkingWrapper>
      )}
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
