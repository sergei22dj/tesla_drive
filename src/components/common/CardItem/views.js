import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 695px) {
    width: 100%;
    max-width: 486px;
    margin: 0 auto;
  }
`;
export const Name = styled.div`
  text-align: left;
  font-family: "Gilroy-medium";
  font-size: 24px;
  margin-top: 45px;
  color: #272531;
  @media screen and (max-width: 461px) {
    font-size: 15px;
    margin-top: 25px;
  }
`;
export const PriceBar = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 22px;
  margin-top: 25px;
  @media screen and (max-width: 461px) {
    column-gap: 17px;
  }
`;
export const PriceM = styled.div`
  font-size: 24px;
  font-family: "Gilroy-medium";
  color: #e20531;
  @media screen and (max-width: 461px) {
    font-size: 20px;
  }
`;
export const PriceS = styled.div`
  font-size: 16px;
  color: #27253180;
  @media screen and (max-width: 461px) {
    font-size: 12px;
  }
`;
export const InfoWrapper = styled.div`
  margin-top: 45px;
  border-bottom: 1px solid #27253120;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #27253120;
  padding: 22px 0;
`;
export const InfoName = styled.div`
  font-size: 16px;
  color: #939298;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
export const InfoValue = styled.div`
  font-size: 20px;
  color: #272531;
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;
export const RedLine = styled.div`
  margin-top: 5px;
  height: 1px;
  background-color: red;
  box-sizing: border-box;
`;
export const GrayLine = styled.div`
  height: 1px;
  background-color: #27253120;
  box-sizing: border-box;
`;
