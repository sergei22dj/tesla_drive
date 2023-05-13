import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Skelet = ({ model }) => {
  const [select, setSelect] = useState(true);
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <Title>{t("skelet.text1")}</Title>
        <Text>
          {model} {t("skelet.text2")}
        </Text>

        <Image bg={`/images/skelet/${select ? "1" : "2"}.png`} />

        <Select>
          <SelectBlock active={select === true} onClick={() => setSelect(true)}>
            <Line active={select === true} />
            <TitleS>{model} </TitleS>
            <Text>{t("skelet.text3")}</Text>
            <InfoBar>
              <Info>
                3.8 c<Text>0-60 mph</Text>
              </Info>
              <Info>
                358 mi
                <Text>{t("skelet.text4")}</Text>
              </Info>
              <Info>
                670 hp
                <Text>{t("skelet.text5")}</Text>
              </Info>
            </InfoBar>
          </SelectBlock>
          <SelectBlock
            active={select === false}
            onClick={() => setSelect(false)}
          >
            <Line active={select === false} />
            <TitleS>{model} Plaid</TitleS>
            <Text>{t("skelet.text6")}</Text>
            <InfoBar>
              <Info>
                2.5 s<Text>0-60 mph</Text>
              </Info>
              <Info>
                333 mi
                <Text>{t("skelet.text4")}</Text>
              </Info>
              <Info>
                1,020 hp
                <Text>{t("skelet.text5")}</Text>
              </Info>
            </InfoBar>
          </SelectBlock>
        </Select>
      </Wrapper>
    </>
  );
};

export default Skelet;
const Wrapper = styled.div`
  padding: 100px 180px;
  @media screen and (max-width: 1650px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 550px) {
    padding: 100px 30px;
  }
`;
const Image = styled.div`
  background-image: url(${(p) => p.bg});
  background-position: center;
  width: 100%;
  aspect-ratio: 16 / 8;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1s;
`;
const Title = styled.div`
  font-size: 46px;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 38px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  text-align: left;
  padding-bottom: 20px;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
const Line = styled.div`
  display: flex;
  border: 1px solid ${(p) => (p.active ? "black" : "gray")};
  width: 100%;
  margin-bottom: 10px;
`;
const Select = styled.div`
  width: 100%;
  display: flex;
  column-gap: 40px;
  @media screen and (max-width: 550px) {
    column-gap: 20px;
  }
`;
const TitleS = styled.div`
  font-size: 24px;
  margin: 20px 0 12px;
  text-align: left;
`;
const SelectBlock = styled.div`
  color: ${(p) => (p.active ? "black" : "gray")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
`;
const InfoBar = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: auto;
  flex-wrap: wrap;
  row-gap: 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  align-items: flex-start;
  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`;
