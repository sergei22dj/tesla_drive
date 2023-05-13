import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1c1b22;
  min-height: 376px;
  padding: 80px 180px;
  box-sizing: border-box;
  gap: 20px;
  @media screen and (max-width: 1650px) {
    padding: 80px 40px;
  }
  @media screen and (max-width: 1250px) {
    display: none;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
    padding: 80px 40px;
  }
`;
export const ResWrapper = styled.div`
  display: none;
  justify-content: space-between;
  background-color: #1c1b22;
  min-height: 376px;
  padding: 80px 180px;
  box-sizing: border-box;
  gap: 20px;
  @media screen and (max-width: 1650px) {
    padding: 80px 40px;
  }
  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 715px) {
    flex-direction: column;
    padding: 80px 40px;
  }
`;
export const WrapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 50px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  @media screen and (max-width: 715px) {
    width: calc(50% - 30px);
  }
`;
export const RessColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-weight: 600;
  font-family: "Gilroy-medium";
  @media screen and (max-width: 715px) {
    display: none;
  }
`;
export const ResColumn = styled.div`
  display: none;
  font-family: "Gilroy-medium";
  font-weight: 600;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  @media screen and (max-width: 715px) {
    font-weight: 600;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 0px;
    width: 100%;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 3px 0;
  &:hover {
    font-weight: 600;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
export const LogosBar = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
    margin-bottom: 20px;
    column-gap: 10px;
  }
`;
export const LogoW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #e20531;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
  }
  @media screen and (max-width: 550px) {
    width: 35px;
    height: 35px;
  }
`;
export const LogoS = styled.img``;
export const ColumnWrapper = styled.div`
  display: flex;
  column-gap: 30px;
`;
export const ColumnResWrapper = styled.div`
  display: flex;
  column-gap: 30px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
