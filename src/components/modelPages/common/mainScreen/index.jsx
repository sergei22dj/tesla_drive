import React from "react";
import styled from "styled-components";
import Header from "../../../MainPage/Header";

const MainScreenModel = ({ bg, mbg, model }) => {
  return (
    <>
      <>
        <Wrapper bg={bg} mbg={mbg}>
          <Header />
          <Name color={model.color}>{model.name}</Name>
          <InfoBar>
            <Info>
              <Value>{model.value1}</Value>
              <Desc>{model.desc1}</Desc>
            </Info>
            <Info>
              <Value>{model.value2}</Value>
              <Desc>{model.desc2}</Desc>
            </Info>
            <Info>
              <Value>{model.value3}</Value>
              <Desc>{model.desc3}</Desc>
            </Info>
            {model.value4 && (
              <Info>
                <Value>{model.value4}</Value>
                <Desc>{model.desc4}</Desc>
              </Info>
            )}
          </InfoBar>
        </Wrapper>
      </>
    </>
  );
};
export default MainScreenModel;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: right 67% bottom 45%;
  background-repeat: no-repeat;
  width: 100%;
  height: 960px;
  @media screen and (max-width: 566px) {
    height: 640px;
  }
  @media screen and (max-width: 340px) {
    height: 640px;
    background-image: url(${(props) => props.mbg});
  }
`;
const Name = styled.div`
  margin-top: 80px;
  font-size: 68px;

  color: ${(props) => (props.color ? "white" : "black")};
  @media screen and (max-width: 630px) {
    font-size: 52px;
  }
  @media screen and (max-width: 430px) {
    font-size: 46px;
  }
`;
const InfoBar = styled.div`
  display: flex;
  column-gap: 40px;
  margin-top: auto;
  margin-bottom: 50px;
  justify-content: center;
  padding: 0 20px;
  @media screen and (max-width: 470px) {
    column-gap: 20px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Value = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media screen and (max-width: 470px) {
    font-size: 18px;
  }
`;
const Desc = styled.div`
  color: white;
  font-size: 12px;
`;
