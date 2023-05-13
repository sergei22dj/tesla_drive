import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1c1b22;
  justify-content: space-between;
  padding: 45px 180px;
  @media screen and (max-width: 1650px) {
    padding: 45px 40px;
  }
  @media screen and (max-width: 566px) {
    padding: 36px 40px;
  }
  @media screen and (max-width: 400px) {
    flex-direction: row-reverse;
    padding: 36px 27px;
  }
`;
export const Logo = styled.img`
  width: 154px;
  @media screen and (max-width: 400px) {
    width: 100px;
    padding-right: 20px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 79px;
  margin-right: auto;
  @media screen and (max-width: 1340px) {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  color: white;
  margin-right: 38px;
  cursor: pointer;
  @media screen and (max-width: 725px) {
    display: none;
    margin-right: 0;
  }
`;
export const MenuBtn = styled.img`
  padding-left: 73px;
  cursor: pointer;
  @media screen and (max-width: 1340px) {
    padding: 0;
  }
`;
export const Phone = styled.img`
  display: none;
  @media screen and (max-width: 400px) {
    display: block;
  }
`;
