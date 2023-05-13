import styled from "styled-components";

export const WrapperComments = styled.div`
  display: flex;
  column-gap: 50px;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 48px;
  color: #272531;
  font-family: "Gilroy-medium";
  margin: 200px 0 150px;
  text-align: left;
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }

  @media screen and (max-width: 566px) {
    padding: 0 40px;
    margin: 80px 0 60px;
  }
  @media screen and (max-width: 380px) {
    margin: 80px 0 28px;
  }
`;
export const CardWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 118px;
  background-color: #f9f9f9;
  position: relative;
  @media screen and (max-width: 690px) {
    margin-top: 95px;
  }
`;
export const Play = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 93px;
  height: 93px;
  border-radius: 50%;
  background-color: #e2053180;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff80;
  }
  @media screen and (max-width: 690px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;
  }
`;
export const Polygon = styled.img``;
export const Stars = styled.div`
  margin: 142px 0 34px;
  @media screen and (max-width: 380px) {
    margin: 81px 0 23px;
  }
`;
export const StarIcon = styled.img`
  width: 21px;
  height: 21px;
`;
export const NavBar = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Name = styled.div`
  font-size: 24px;
  color: #272531;
  font-family: "Gilroy-medium";
  margin-bottom: 35px;
  @media screen and (max-width: 380px) {
    margin-bottom: 17px;
  }
`;
export const Comment = styled.div`
  font-size: 16px;
  color: #939298;
  width: 374px;
  margin-bottom: 50px;
  line-height: 25px;
  @media screen and (max-width: 690px) {
    width: 229px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
    width: 200px;
  }
`;
