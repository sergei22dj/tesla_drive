import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Specs = ({ img, var1, var2, var3, name, data }) => {
  const [select, setSelect] = useState(0);
  return (
    <Wrapper>
      <Left img={img}></Left>
      <Right>
        <Name>{name} Specs</Name>
        <Head>
          <Select active={select === 0} onClick={() => setSelect(0)}>
            {var1}
          </Select>
          <Select active={select === 1} onClick={() => setSelect(1)}>
            {var2}
          </Select>
          {var3 && (
            <Select active={select === 2} onClick={() => setSelect(2)}>
              {var3}
            </Select>
          )}
        </Head>
        <Spec>
          {data[select].map((el) => (
            <SpecItem>
              <Line />
              <Label>{el.label}</Label>
              <Value>{el.value}</Value>
            </SpecItem>
          ))}
        </Spec>
      </Right>
    </Wrapper>
  );
};

export default Specs;
const Wrapper = styled.div`
  display: flex;
  padding: 200px 180px;
  background-color: black;
  @media screen and (max-width: 1650px) {
    padding: 200px 40px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    padding: 200px 30px;
  }
`;
const Left = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  width: 100%;
  aspect-ratio: 16 / 8;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const Right = styled.div`
  height: 700px;
`;
const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 32px;
  border: 1px solid ${(p) => (p.active ? "white" : "gray")};
  background-color: black;
  color: ${(p) => (p.active ? "white" : "gray")};
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Spec = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const SpecItem = styled.div`
  text-align: left;
  padding-top: 25px;
  min-width: 210px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Label = styled.div`
  @media screen and (max-width: 6700px) {
    font-size: 14px;
  }
`;
const Value = styled.div`
  margin-top: 4px;
  padding-right: 10px;
  @media screen and (max-width: 6700px) {
    font-size: 14px;
  }
`;
const Line = styled.div`
  border: 0.1rem solid white;
  width: 40px;
  margin-bottom: 10px;
`;
const Name = styled.div`
  color: white;
  text-align: left;
  font-size: 48px;
  margin-bottom: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
