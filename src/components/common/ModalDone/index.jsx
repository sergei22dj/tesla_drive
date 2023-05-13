import React from "react";
import styled from "styled-components";

const ModalDone = ({ scale, openModal, modalTitle, modalText }) => {
  console.log(scale);
  console.log(modalTitle);
  return (
    <Modal scale={scale} onClick={() => openModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ExitIcon
          src="/images/exit_icon.svg"
          onClick={() => openModal(false)}
        />
        <Title>{modalTitle}</Title>
        <Text>{modalText}</Text>
      </ModalContent>
    </Modal>
  );
};
export default ModalDone;
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0 0 0 / 76%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow: auto;
  scale: ${(p) => (p.scale ? "1.3" : "1")};
  margin-top: ${(p) => (p.scale ? "300px" : "0")};
  justify-content: center;
  z-index: 99999999999999;
`;
const ModalContent = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  aspect-ratio: 1/1;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  text-align: center;

  animation: ani 1s forwards;
  @media screen and (max-width: 600px) {
    width: 60vw;
  }
  @keyframes ani {
    0% {
      scale: 0.2;
    }
    100% {
      scale: 1;
    }
  }
`;
const Title = styled.div`
  font-size: 5vw;
  color: #e20531;
  margin-top: auto;
  white-space: pre-wrap;
`;
const Text = styled.div`
  color: #e20531;
  font-size: 1.2vw;
  margin-bottom: auto;
  white-space: pre-wrap;
`;
const ExitIcon = styled.img`
  position: absolute;
  width: 7%;
  top: 8%;
  right: 8%;
  cursor: pointer;
`;
