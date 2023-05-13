import styled from "styled-components";

export const Wrapper = styled.div`
  padding-right: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 51px;
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1020px) {
    padding-right: 0;
    display: block;
  }
`;
export const BarWrapper = styled.div`
  margin-top: 60px;
  height: 60px;
`;
