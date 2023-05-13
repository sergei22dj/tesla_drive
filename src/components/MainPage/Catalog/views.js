import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 51px;
  padding: 0 40px;
  @media screen and (max-width: 380px) {
    padding: 0 27px;
  }
`;
export const Header = styled.div`
  width: 1560px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: 80px;
  @media screen and (max-width: 1640px) {
    width: 1023px;
    padding: 0 40px;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 1100px) {
    width: 486px;
    margin: 0 auto;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 566px) {
    width: 300px;
    margin: 0;
    padding: 0 40px;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 380px) {
    width: 255px;
    padding: 0;
    padding-left: 27px;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Name = styled.div`
  font-size: 45px;
  margin-top: 150px;
  text-align: left;
  font-family: "Gilroy-medium";
  @media screen and (max-width: 640px) {
    font-size: 24px;
    margin-top: 79px;
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
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Gilroy-medium";
  background-color: #e2052d;
  height: 48px;
  width: 216px;
  transition: 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  margin: 80px auto 0;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #939298;
  &:hover {
    color: #272531;
  }
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
`;
export const Point = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #e20531;
  margin: 0 20px;
  @media screen and (max-width: 1100px) {
    margin: 0 15px 0 0;
    width: 4px;
    height: 4px;
  }
`;
