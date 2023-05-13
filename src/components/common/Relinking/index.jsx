import React, { useEffect, useState } from "react";
import useContentful from "../../../contentful";
import RelCardItem from "./CardItem";
import CardItem from "./CardItem";
import {
  CardWrapper,
  Name,
  RelinkingWrapper,
  RelinkName,
  Wrapper,
} from "./views";

const Relinking = ({ data }) => {
  return (
    <RelinkingWrapper>
      <RelinkName>Не пропустіть також:</RelinkName>
      <CardWrapper>
        <RelCardItem data={data[0]} />
        <RelCardItem data={data[1]} />
        <RelCardItem data={data[2]} />
      </CardWrapper>
    </RelinkingWrapper>
  );
};
export default Relinking;
