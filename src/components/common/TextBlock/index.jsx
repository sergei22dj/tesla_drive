import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "../../../contentful";
import ReactMarkdown from "react-markdown";
import i18n from "../../../i18n/i18n";

const TextBlock = ({ page }) => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getSeoText } = useContentful();

  useEffect(() => {
    getSeoText(setLoading).then((response) => {
      setText(response);
    });
  }, []);
  const seoText = text.length
    ? i18n.language === "ua"
      ? text[0][`Seo${page}Ua`]
      : text[0][`Seo${page}Ru`]
    : null;

  return (
    <Wrapper>
      <Text>
        {" "}
        <ReactMarkdown>{seoText}</ReactMarkdown>
      </Text>
    </Wrapper>
  );
};
export default TextBlock;
const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: -150px;
  display: flex;
  column-gap: 57px;
  align-items: center;
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
    row-gap: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-top: -10px;
    padding: 0 30px;
  }
`;

const Text = styled.div`
  text-align: left;
  color: black;
  font-size: 18px;
  a {
    color: red;
  }
`;
