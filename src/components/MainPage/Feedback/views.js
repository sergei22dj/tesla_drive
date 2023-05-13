import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 80px 180px;
  margin-top: 300px;
  background-image: url("/images/Help_Background.jpg");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  @media screen and (max-width: 1650px) {
    background-origin: border-box;
    padding: 60px 40px;
  }
  @media screen and (max-width: 1376px) {
    background-origin: border-box;
  }
  @media screen and (max-width: 566px) {
    padding: 0 40px;
    margin-top: 80px;
    background-image: none;
  }
  @media screen and (max-width: 400px) {
    padding: 60px 20px;
  }
`;
export const FormWrapper = styled.div`
  background-color: #e20531;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 526px;
  padding: 60px 60px;
  @media screen and (max-width: 770px) {
    width: calc(100% - 50px);
    align-items: center;
    padding: 60px 27px;
    height: 100%;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 503px;

  @media screen and (max-width: 770px) {
    width: auto;
    align-items: center;
    padding: 0;
    height: 100%;
  }
`;
export const FormTextS = styled.div`
  margin-top: 54px;
  font-size: 36px;
  color: white;
  font-family: "Gilroy-medium";
  text-align: left;
  @media screen and (max-width: 770px) {
    font-size: 18px;
    margin-top: 60px;
    text-align: center;
  }
  @media screen and (max-width: 566px) {
    margin-top: 16px;
    font-size: 15px;
  }
`;
export const FormTextL = styled.div`
  margin: 42px 0;
  font-size: 48px;
  font-family: "Gilroy-medium";

  color: white;
  @media screen and (max-width: 566px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  width: 80%;
  font-size: 16px;
  &::placeholder {
    color: white;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 566px) {
      width: 80%;
      font-size: 12px;
    }
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media screen and (max-width: 770px) {
    width: 45%;
  }
  @media screen and (max-width: 566px) {
    width: 80%;
    font-size: 12px;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 55px;
  width: 50%;
  height: 48px;
  font-family: "Gilroy-medium";
  color: #e20531;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  &:hover {
    color: white;
    border: 1px solid white;
    background-color: #e20531;
  }
  @media screen and (max-width: 770px) {
    width: 100%;
    font-size: 16px;
    height: 40px;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    font-size: 12px;
    height: 40px;
  }
`;
