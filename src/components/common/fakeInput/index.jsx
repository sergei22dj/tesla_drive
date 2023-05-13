import React from "react";
import styled from "styled-components";

const FakeInput = ({ value }) => {
  return <Wrapper value={value} />;
};
export default FakeInput;
const Wrapper = styled.input`
  width: 0;
  height: 0;
  display: none;
`;
