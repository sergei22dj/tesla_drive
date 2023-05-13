import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 180px;
  margin-bottom: 100px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 600px;
    padding: 0 100px;
  }
  @media screen and (max-width: 566px) {
    height: 320px;
    padding: 0 40px;
    align-items: flex-start;
  }
  @media screen and (max-width: 400px) {
    padding: 0 27px;
  }
`;
export const NameWbtn = styled.div``;

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
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e20531;
  }
  @media screen and (max-width: 566px) {
    height: 33px;
    width: 158px;
    font-size: 12px;
  }
`;
export const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 220px;

  @media screen and (max-width: 1195px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 30px;
    margin-top: 300px;
    align-items: flex-start;
    justify-content: space-between;
  }
  @media screen and (max-width: 965px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 10px;
    align-items: flex-start;
  }
  @media screen and (max-width: 566px) {
    margin-top: 140px;
  }
`;
export const TitleWrapper = styled.div`
  text-align: end;
  margin-top: 70px;
  &:nth-child(2) {
    width: 180px;
  }
  @media screen and (max-width: 1195px) {
    width: 130px;
    text-align: left;
  }
`;
export const BTitle = styled.div`
  color: white;
  font-size: 40px;
  @media screen and (max-width: 614px) {
    font-size: 24px;
  }
`;
export const STitle = styled.div`
  color: white;
  font-size: 16px;
  max-width: 225px;
  @media screen and (max-width: 614px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;
export const SDTitle = styled.div`
  color: white;
  font-size: 16px;
  max-width: 225px;
  @media screen and (max-width: 1195px) {
    display: none;
  }
  @media screen and (max-width: 614px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;
export const SMTitle = styled.div`
  display: none;
  color: white;
  font-size: 16px;
  max-width: 225px;
  @media screen and (max-width: 1195px) {
    display: block;
  }
  @media screen and (max-width: 614px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;
export const FooterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 180px;
  margin-bottom: 46px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 27px;
  }
`;
export const IconsBar = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const IconW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
  }
  @media screen and (max-width: 566px) {
    margin-top: 10px;
    width: 35px;
    height: 35px;
  }
`;
export const Slider = styled.div`
  display: flex;
  width: 352px;
  height: 176px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const ScrollWrapper = styled.div`
  width: 2px;
  background-color: #e2052d;
`;
export const Scroll = styled.div`
  width: 2px;
  background-color: white;
  height: 33%;
`;
export const Text = styled.div`
  font-size: 36px;
  color: white;
  margin-top: 25px;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavButton = styled.img``;
