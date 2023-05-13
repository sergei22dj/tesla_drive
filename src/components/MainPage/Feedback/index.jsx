import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import FakeInput from "../../common/fakeInput";
import { SelectData } from "./data";
import emailjs from "@emailjs/browser";
// views
import {
  Button,
  Form,
  FormTextL,
  FormTextS,
  FormWrapper,
  Input,
  Wrapper,
} from "./views";
import ModalDone from "../../common/ModalDone";

const Select = ({ title, data, selected, set, name }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => (prev ? false : true));
  };
  const handleSelect = (e) => {
    set((prev) => ({ ...prev, [name]: e }));
    handleOpen();
  };
  return (
    <WrapperSelect onClick={() => handleOpen()}>
      <Title>{selected ? selected : title}</Title>
      {open && (
        <Dropdown onClick={() => handleOpen(false)}>
          {data.map((el) => (
            <TextDD onClick={() => handleSelect(el)}>{el}</TextDD>
          ))}
        </Dropdown>
      )}
      <Arr rotate={open} src="/images/arrow-select.svg" />
    </WrapperSelect>
  );
};
const Arr = styled.img`
  width: 14px;
  height: 8px;
  margin-left: auto;
  transform: rotate(${(p) => (p.rotate ? "180deg" : "0")});
`;
const Title = styled.div`
  font-size: 16px;
  @media screen and (max-width: 566px) {
    font-size: 14px;
  }
`;
const WrapperSelect = styled.div`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  text-align: left;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  width: 80%;
  box-sizing: border-box;
  font-size: 16px;

  @media screen and (max-width: 770px) {
    width: 80%;
  }
  @media screen and (max-width: 566px) {
    width: 100%;
  }
`;
const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 10px;
  width: 162px;
  background-color: #e20531;
  top: 14px;
  border: 1px solid white;
  z-index: 999999999;
`;
const TextDD = styled.div`
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
  padding: 15px 10px;
  &:hover {
    background-color: white;
    color: red;
  }
`;

const Feedback = ({ testPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    time: "",
    model: "",
    fake: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [done, setDone] = useState(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formData);
  const { t } = useTranslation();

  // send Email
  const [error, setError] = useState(false);
  const templateParams = {
    formName:
      testPage === "1"
        ? "ЗАПИС НА ТЕСТ-ДРАЙВ"
        : testPage === "2"
        ? "ЗАПИС НА ТО"
        : "ДОПОМОГА З ВИБОРОМ/ЗАПИТАННЯ",
    nameField: "Ім'я замовника - ",
    numberField: "Номер телефону - ",
    dateField: testPage === "1" ? "Обрана дата - " : null,
    timeField: testPage === "1" ? "Обраний час - " : null,
    modelField: testPage === "1" ? "Обрана модель - " : null,
    name: formData.name,
    number: formData.number,
    date: formData.date,
    time: formData.time,
    model: formData.model,
  };
  const send1Email = () => {
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
    setError(false);
  };

  const sendEmail = (testPage) => {
    switch (testPage) {
      case "1":
        formData.name.length &&
        formData.number.length &&
        formData.date.length &&
        formData.time.length &&
        formData.model.length &&
        formData.fake.length < 1
          ? send1Email()
          : setError(true);
        break;
      case "2":
        formData.name.length &&
        formData.number.length &&
        formData.fake.length < 1
          ? send1Email()
          : setError(true);
        break;
      case undefined:
        formData.name.length &&
        formData.number.length &&
        formData.fake.length < 1
          ? send1Email()
          : setError(true);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Form>
            {testPage === "1" ? (
              <FormTextS>{t("mainscreen.feedback.textS1")}</FormTextS>
            ) : testPage === "2" ? (
              <FormTextS>{t("mainscreen.feedback.textS3")}</FormTextS>
            ) : (
              <FormTextS>{t("mainscreen.feedback.textS2")}</FormTextS>
            )}

            <FormTextL>{t("mainscreen.feedback.textL")}</FormTextL>
            <InputBar active={testPage === "1"}>
              <Input
                placeholder={t("mainscreen.feedback.name")}
                value={formData.name}
                onChange={(e) => inputHandler(e)}
                name="name"
              />
              <Input
                placeholder={t("mainscreen.feedback.number")}
                value={formData.number}
                onChange={(e) => inputHandler(e)}
                name="number"
              />
            </InputBar>
            <InputBarRes active={testPage === "1"}>
              <InputRes
                placeholder={t("mainscreen.feedback.name")}
                value={formData.name}
                onChange={(e) => inputHandler(e)}
                name="name"
              />
              <InputRes
                placeholder={t("mainscreen.feedback.number")}
                value={formData.number}
                onChange={(e) => inputHandler(e)}
                name="number"
              />
              <InputRes
                placeholder={"Дата"}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={formData.date}
                onChange={(e) => inputHandler(e)}
                name="date"
              />
              <Select
                name="time"
                title={t("mainscreen.feedback.time")}
                data={SelectData[0]}
                selected={formData.time}
                set={setFormData}
              />
              <Select
                name="model"
                title={"Модель Tesla"}
                data={SelectData[1]}
                selected={formData.model}
                set={setFormData}
              />
              <FakeInput value={formData.fake} />
            </InputBarRes>

            <Button onClick={() => [sendEmail(testPage)]}>
              {testPage === "1"
                ? t("mainscreen.feedback.button1")
                : testPage === "2"
                ? t("mainscreen.feedback.button3")
                : t("mainscreen.feedback.button2")}
            </Button>

            <ErrorText error={error}>
              {t("mainscreen.feedback.errormessage")}
            </ErrorText>
          </Form>
        </FormWrapper>
      </Wrapper>
      {openModal && (
        <ModalDone
          scale={testPage === "2"}
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
    </>
  );
};
export default Feedback;

const ErrorText = styled.div`
  display: ${(p) => (p.error ? "block" : "none")};
  color: white;
  font-size: 16px;
`;

const InputBar = styled.div`
  display: ${(p) => (p.active ? "none" : "flex")};
  margin: 0 auto;
  column-gap: 10px;

  @media screen and (max-width: 566px) {
    flex-direction: column;
    align-items: center;
  }
`;
const InputBarRes = styled.div`
  display: ${(p) => (p.active ? "grid" : "none")};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media screen and (max-width: 566px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;
const InputRes = styled.input`
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
