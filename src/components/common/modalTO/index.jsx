import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Feedback from "../../MainPage/Feedback";
import ModalDone from "../ModalDone";

const ModalTO = ({ open, setOpen, margin }) => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Wrapper margin={margin} open={open} onClick={() => setOpen(false)}>
        <ContentWrapper onClick={(e) => e.stopPropagation()}>
          <Feedback testPage={"2"} openModal={setOpenModal} />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};
export default ModalTO;
const Wrapper = styled.div`
  display: ${(p) => (p.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  margin-top: ${(p) => (p.margin ? "0" : "-145px")};
  background: rgba(0, 0, 0, 0.7);
  z-index: 999999999;
`;
const ContentWrapper = styled.div`
  margin-top: -300px;
  scale: 0.8;
  width: 100%;
`;
