import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 180px;
  margin-bottom: -150px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 566px) {
    margin-bottom: 120px;
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  column-gap: 51px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const WrapperContentRes = styled.div`
  display: none;
  column-gap: 51px;
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HeaderTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
  text-align: left;
  @media screen and (max-width: 460px) {
    font-size: 24px;
  }
`;
export const LWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RWrapper = styled.div`
  width: 523px;
  display: flex;
  flex-direction: column;
`;

// =========Left Card==============
export const LCardWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-column-gap: 51px;
  grid-row-gap: 50px;
  @media screen and (max-width: 1428px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const WrapperCardL = styled.div`
  width: 100%;
  max-width: 486px;
  text-align: left;
  @media screen and (max-width: 1428px) {
    max-width: fit-content;
  }
`;

export const TitleLC = styled.div`
  margin-top: 35px;
  font-size: 20px;
  color: #272531;
  a {
    color: red;
  }
`;
export const TextLC = styled.div`
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
  font-size: 16px;
  color: #939298;
  a {
    color: red;
  }
`;
// ==========Right Card===========
export const RCardWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  grid-row-gap: 51px;
`;
export const WrapperCardR = styled.div`
  width: 523px;
  text-align: left;
  display: flex;
  column-gap: 24px;
`;
export const WrapperCardRContent = styled.div`
  max-width: 233px;
`;

export const TitleRC = styled.div`
  font-size: 20px;
  color: #272531;
  a {
    color: red;
  }
`;
export const TextRC = styled.div`
  height: 39px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  font-size: 16px;
  color: #939298;
  a {
    color: red;
  }
`;
// ========Nav Bar=========
export const NavBar = styled.div`
  @media screen and (max-width: 1100px) {
    display: flex;
    width: 486px;
    margin-top: 30px;

    column-gap: 25px;
  }
  @media screen and (max-width: 550px) {
    width: 230px;

    align-items: start;
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
  cursor: pointer;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
