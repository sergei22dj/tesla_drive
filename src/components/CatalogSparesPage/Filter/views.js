import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 153px;
  padding: 60px 20px;
  border: 1px solid #919191;
  border-radius: 5px;
  @media screen and (max-width: 1020px) {
    margin-top: 60px;
  }
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const ResetButton = styled.button`
  height: 50px;
  background-color: #d32f2f;
  border: none;
  color: white;
  cursor: pointer;
`;
