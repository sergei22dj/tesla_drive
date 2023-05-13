import styled from "styled-components";

export const RelinkingWrapper = styled.div`
  padding: 0 180px;
  margin-bottom: -150px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
`;
export const RelinkName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 45px;
  text-align: left;
  font-family: "Gilroy-medium";
  margin-top: 60px;
  margin-bottom: 105px;
  @media screen and (max-width: 1020px) {
    width: 630px;
    margin-top: 60px;
    padding: 0;
  }
  @media screen and (max-width: 695px) {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  row-gap: 100px;
  column-gap: 51px;
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1020px) {
    padding-right: 0;
  }
  @media screen and (max-width: 695px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ButtonRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Gilroy-medium";
  background-color: #e2052d;
  height: 48px;
  width: 286px;
  margin: 105px auto 200px;
  transition: 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  @media screen and (max-width: 566px) {
    width: 240px;
    font-size: 12px;
  }
`;
export const ResWrapperCard = styled.div`
  display: none;
  @media screen and (max-width: 1350px) {
    display: contents;
  }
  @media screen and (max-width: 695px) {
    display: none;
  }
`;
