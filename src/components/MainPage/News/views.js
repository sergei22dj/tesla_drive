import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 40px 80px;
  flex-wrap: wrap;
  column-gap: 51px;
  row-gap: 51px;
  justify-content: center;
  @media screen and (max-width: 1650px) {
    padding: 0 40px 80px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 20px 80px;
  }
`;
export const LWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 51px;
  row-gap: 51px;
  text-align: left;
  justify-content: center;
  @media screen and (max-width: 1104px) {
    display: none;
  }
`;
export const LIWrapper = styled.div`
  display: none;
  flex-wrap: wrap;
  column-gap: 51px;
  row-gap: 51px;
  text-align: left;
  justify-content: center;
  @media screen and (max-width: 1104px) {
    display: flex;
  }
`;
export const RWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 51px;
  width: 505px;
  @media screen and (max-width: 1104px) {
    display: none;
  }
`;
export const CardItem = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export const SCardItem = styled.div`
  display: flex;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
export const Title = styled.div`
  font-size: 48px;
  color: #272531;
  font-family: "Gilroy-medium";
  margin: 200px auto 150px;
  text-align: left;
  padding: 0 40px;
  width: 1580px;
  @media screen and (max-width: 1659px) {
    width: 1023px;
    padding: 0 40px;
  }
  @media screen and (max-width: 1100px) {
    width: 486px;
    margin: 70px auto 30px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 20px;
    width: 370px;
    margin: 70px 0 30px;
  }
  @media screen and (max-width: 426px) {
    font-size: 24px;
    margin: 70px 0 30px;
    padding: 0 20px;
    width: 241px;
  }
`;
export const Image = styled.img`
  width: 486px;
  height: 341;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export const ImageS = styled.img`
  height: 145px;
  padding-right: 24px;
`;
export const Name = styled.div`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 500;
  font-family: "Gilroy-medium";
`;
export const SName = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: "Gilroy-medium";
`;
export const Text = styled.div`
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
  @media screen and (max-width: 550px) {
    display: none;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
  }
`;
export const FText = styled.div`
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  @media screen and (max-width: 1104px) {
    display: none;
    font-size: 12px;
  }
`;
export const CText = styled.div`
  display: none;
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  @media screen and (max-width: 550px) {
    display: block;
    font-size: 12px;
  }
`;
export const PText = styled.div`
  display: none;
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  @media screen and (max-width: 1104px) {
    display: block;
  }
  @media screen and (max-width: 550px) {
    display: none;
    font-size: 12px;
  }
`;
export const Button = styled.div`
  display: flex;
  font-size: 16px;
  color: #e20531;
  margin-top: 45px;
  text-align: left;
  font-family: "Gilroy-medium";
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #272531;
  }
`;
export const SText = styled.div`
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
`;
export const SButton = styled.div`
  display: flex;
  font-size: 16px;
  color: #e20531;
  text-align: left;
  font-family: "Gilroy-medium";
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #272531;
  }
`;

export const NavBar = styled.div`
  display: none;

  @media screen and (max-width: 1104px) {
    display: flex;
    width: 486px;
    margin: 0 auto;
    column-gap: 25px;
    padding: 0 0 40px 0;
  }
  @media screen and (max-width: 550px) {
    width: 230px;
    margin: 0;
    align-items: start;
    padding: 0 0 40px 20px;
  }
`;
export const VectorArrow = styled.div`
  height: 10px;
  width: 18px;
  transition: 0.3s;
  margin-left: 17px;
  margin-top: 6px;
  background-image: url("/images/Arrow_Details.svg");
  ${Button}:hover & {
    background-image: url("/images/Vector_arr_black.png");
  }
  ${SButton}:hover & {
    background-image: url("/images/Vector_arr_black.png");
  }
`;
export const NavTextActive = styled.div`
  border-bottom: 1px solid #e20531;
  padding-bottom: 2px;
  font-size: 18px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
export const NavTextInActive = styled.div`
  color: #939298;
  font-size: 18px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
