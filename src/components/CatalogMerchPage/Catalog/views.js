import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  row-gap: 100px;
  column-gap: 51px;
  padding-right: 40px;
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
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 180px;
  margin-bottom: 60px;
  justify-content: center;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;
export const Empty = styled.div`
  font-size: 40px;
  margin-right: 40px;
  width: 972px;
  @media screen and (max-width: 1350px) {
    width: 631px;
  }
  @media screen and (max-width: 1020px) {
    margin-right: 0;
  }
  @media screen and (max-width: 695px) {
    width: 290px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 60px;
  margin-bottom: -20px;
  @media screen and (max-width: 1020px) {
    width: 630px;
    margin-top: 60px;
    padding: 0;
  }
  @media screen and (max-width: 695px) {
    width: 100%;
  }
`;
export const Name = styled.div`
  font-size: 45px;
  text-align: left;
  font-family: "Gilroy-medium";

  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;
export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const STitleBar = styled.div`
  display: none;
  align-items: center;
  @media screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 17px;
    grid-row-gap: 23px;
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #939298;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HideFilter = styled.div`
  display: none;
  color: white;
  height: 60px;
  margin-top: 40px;
  cursor: pointer;
  background-color: #e2052d;
  transition: 0.3s;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  @media screen and (max-width: 1020px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const FilterFull = styled.div`
  display: block;
  width: 30%;
  min-width: 20%;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
export const FilterSmall = styled.div`
  display: none;
  @media screen and (max-width: 1020px) {
    display: block;
  }
`;
