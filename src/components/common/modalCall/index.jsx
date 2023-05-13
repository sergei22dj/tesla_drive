import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button, FormTextL, FormTextS } from "../../MainPage/Feedback/views";
import emailjs from "@emailjs/browser";
import ModalDone from "../ModalDone";

const ModalCall = ({ open, setOpen, title }) => {
  const { t } = useTranslation();
  const [done, setDone] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const templateParams = {
    nameField: "Ім'я замовника - ",
    numberField: "Номер телефону - ",
    titleField: "Назва товару - ",
    urlField: "Посилання на цей товар - ",
    name: formData.name,
    number: formData.number,
    title: title,
    url: window.location.href,
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_t7iaku8",
        "template_uabqu09",
        templateParams,
        "O2Kznpin7qEbyXihA"
      )
      .then(
        function (response) {
          setDone(true);
        },
        function (error) {}
      );
    emailjs
      .send(
        "service_t7iaku8",
        "template_war4p8s",
        templateParams,
        "O2Kznpin7qEbyXihA"
      )
      .then(
        function (response) {
          setDone(true);
        },
        function (error) {}
      );
    setOpenModal(true);
  };

  return (
    <Wrapper open={open} onClick={() => setOpen(false)}>
      <Content onClick={(e) => e.stopPropagation()}>
        <FormWrapper>
          <Form>
            <FormTextS>{t("mainscreen.feedback.textS4")}</FormTextS>
            <FormTextL>{t("mainscreen.feedback.textL")}</FormTextL>
            <InputBar>
              <Input
                value={formData.name}
                name="name"
                placeholder={t("mainscreen.feedback.name")}
                onChange={(e) => inputHandler(e)}
              />
              <Input
                value={formData.number}
                name="number"
                placeholder={t("mainscreen.feedback.number")}
                onChange={(e) => inputHandler(e)}
              />
            </InputBar>

            <Button onClick={() => sendEmail()}>
              {t("mainscreen.feedback.button4")}
            </Button>
          </Form>
        </FormWrapper>
      </Content>
      {openModal && (
        <ModalDone
          openModal={setOpenModal}
          modalTitle={
            <React.Fragment>
              {t("comments.text11")}
              <br />
              {t("comments.text12")}
            </React.Fragment>
          }
          modalText={
            <React.Fragment>
              {t("comments.text13")}
              <br />
              {t("comments.text14")}
            </React.Fragment>
          }
        />
      )}
    </Wrapper>
  );
};
export default ModalCall;

const Wrapper = styled.div`
  display: ${(p) => (p.open ? "flex" : "none")};
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  background-color: #0000005b;
`;
const Content = styled.div``;
export const FormWrapper = styled.div`
  background-color: #e20531;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 526px;
  padding: 60px 60px;
  @media screen and (max-width: 770px) {
    width: calc(100% - 72px);
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
const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  width: 80%;
  box-sizing: border-box;
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
    width: 80%;
  }
  @media screen and (max-width: 566px) {
    width: 100%;
    font-size: 12px;
  }
`;
const InputBar = styled.div`
  display: flex;
  margin: 0 auto;
  column-gap: 10px;

  @media screen and (max-width: 566px) {
    flex-direction: column;
    align-items: center;
  }
`;
