import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 180px;
  column-gap: 32px;
  font-family: "Gilroy-medium";
  margin: 200px 0 150px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 770px) {
    flex-direction: column;
    padding: 0 20px;
    margin: 80px 0;
  }
`;
export const Name = styled.div`
  font-size: 36px;
  color: #272531;

  margin: 45px auto 45px 38px;
  text-align: left;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 470px) {
    font-size: 24px;
    text-align: left;
    margin: 25px 25px;
  }
`;
export const RName = styled.div`
  font-size: 36px;
  color: #272531;
  margin: 110px auto 45px 38px;
  text-align: left;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 770px) {
    margin: 45px auto 45px 38px;
  }
  @media screen and (max-width: 470px) {
    font-size: 24px;
    text-align: left;
    margin: 25px 25px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  @media screen and (max-width: 770px) {
    margin-bottom: 51px;
    height: 273px;
  }
  @media screen and (max-width: 470px) {
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 48px;
  color: white;
  background-color: #e2052d;
  margin: 45px auto 45px 38px;
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
    border: 1px solid #e2052d;
  }
  @media screen and (max-width: 370px) {
    width: 153px;
    margin: 0 20px;
    font-size: 12px;
    height: 32px;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  row-gap: 30px;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const Image1 = styled.img`
  width: 500px;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 97;
  @media screen and (max-width: 1480px) {
    width: 400px;
  }
  @media screen and (max-width: 1150px) {
    width: 300px;
  }
  @media screen and (max-width: 770px) {
    width: 250px;
  }
  @media screen and (max-width: 470px) {
    width: 200px;
  }
`;
export const Image2 = styled.img`
  width: 300px;
  bottom: 0;
  right: 200px;
  position: absolute;
  z-index: 99;
  @media screen and (max-width: 1480px) {
    width: 200px;
  }
  @media screen and (max-width: 1150px) {
    width: 150px;
  }
  @media screen and (max-width: 770px) {
    width: 150px;
    right: 150px;
  }
  @media screen and (max-width: 470px) {
    width: 115px;
    right: 128px;
  }
`;
export const SImage1 = styled.img`
  width: 300px;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 97;
  @media screen and (max-width: 1150px) {
    width: 200px;
  }
  @media screen and (max-width: 770px) {
    width: 250px;
  }
  @media screen and (max-width: 470px) {
    width: 201px;
  }
`;
export const SImage2 = styled.img`
  width: 200px;
  bottom: 0;
  position: absolute;
  right: 200px;
  z-index: 99;
  @media screen and (max-width: 1150px) {
    width: 150px;
    right: 100px;
  }
  @media screen and (max-width: 770px) {
    width: 150px;
    right: 150px;
  }
  @media screen and (max-width: 470px) {
    right: 105px;
  }
`;
export const Hat = styled.img`
  width: 118px;
  bottom: 0;
  position: absolute;
  right: 200px;
  z-index: 99;
  @media screen and (max-width: 1150px) {
    width: 86px;
    right: 120px;
  }
  @media screen and (max-width: 770px) {
    width: 116px;
    right: 152px;
  }
  @media screen and (max-width: 470px) {
    width: 96px;
    right: 100px;
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: 0;
  right: 0;
`;
