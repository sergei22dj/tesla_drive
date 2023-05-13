import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useContentful from "../../../contentful";
import CardItem from "../CardItem";
import {
  Button,
  Header,
  Name,
  Point,
  STitleBar,
  Title,
  TitleBar,
  Wrapper,
} from "./views";

const Catalog = ({ setGlobalStatus }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getItems } = useContentful();

  useEffect(() => {
    getItems(setLoading).then((response) => setItems(response));
  }, []);
  const { t } = useTranslation();
  console.log("items:   ", items);
  return (
    <>
      <Header>
        <Name>Каталог авто</Name>
        <TitleBar>
          <Link to="/katalog-auto?filter=in-stock&Mark=Tesla">
            <Title onClick={() => setGlobalStatus("a")}>
              {t("mainscreen.catalog.in1")}
            </Title>
          </Link>

          <Point />
          <Link to="/katalog-auto?filter=on-the-road&Mark=Tesla">
            <Title onClick={() => setGlobalStatus("b")}>
              {" "}
              {t("mainscreen.catalog.in2")}
            </Title>
          </Link>

          <Point />
          <Link to="/katalog-auto?filter=&Mark=Tesla&Condition=true">
            <Title onClick={() => setGlobalStatus("all")}>
              {" "}
              {t("mainscreen.catalog.in3")}
            </Title>
          </Link>

          <Point />
          <Link to="/katalog-auto">
            <Title> {t("mainscreen.catalog.in4")}</Title>
          </Link>
        </TitleBar>
        <STitleBar>
          <Link to="/katalog-auto?filter=in-stock&Mark=Tesla">
            <Title>
              <Point />
              {t("mainscreen.catalog.in1")}
            </Title>
          </Link>
          <Link to="/katalog-auto?filter=on-the-road&Mark=Tesla">
            <Title>
              <Point />
              {t("mainscreen.catalog.in2")}
            </Title>
          </Link>

          <Link to="/katalog-auto?filter=&Mark=Tesla&Condition=true">
            <Title>
              <Point />
              {t("mainscreen.catalog.in3")}
            </Title>
          </Link>

          <Link to="/katalog-auto">
            <Title>
              <Point />
              {t("mainscreen.catalog.in4")}
            </Title>
          </Link>
        </STitleBar>
      </Header>
      <Wrapper>
        {items.slice(0, 6).map((el) => (
          <CardItem data={el} />
        ))}
      </Wrapper>
      <Link to="/katalog-auto">
        <Button>{t("mainscreen.catalog.to")}</Button>
      </Link>
    </>
  );
};
export default Catalog;
