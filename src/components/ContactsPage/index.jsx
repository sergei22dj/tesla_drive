import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../common/Footer";
import { contactsImages } from "../common/Footer/data";
import { LogoW } from "../common/Footer/views";
import Header from "../common/Header";
import HeaderHat from "../common/HeaderHat";
import HelmTags from "../Helmet";

const ContactsPage = ({ tags }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  console.log(tags);
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.kontakty[0]}
          titleru={tags.kontaktyru[0]}
          desc={tags.kontakty[1]}
          descru={tags.kontaktyru[1]}
          img={tags.kontaktyru[2]}
        />
      ) : null}
      <Header />
      <HeaderHat
        bg={"/images/Hat_Bg_contacts.jpg"}
        bgMob={"/images/Hat_Bg_contacts_mob.jpg"}
        name={t("contacts.title")}
      />

      <Wrapper>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.4600726439751!2d30.50102662936096!3d50.4254472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cede20fe6a1d%3A0x8f26b6c9566cdae!2z0YPQuy4g0J_RgNC-0YLQsNGB0L7QsiDQr9GALCAxMywg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1671894484010!5m2!1sru!2sua"
            width="100%"
            height="708px"
            style={{ border: "0" }}
            allowfullscreen=""
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
        <RightWrapper>
          <ContactData>
            <TextWrapper>
              <TextLink href="tel:380689778888">+38 068 977 88 88</TextLink>
              <TextLink href="mailto:tesladrive.com.ua@gmail.com">
                tesladrive.com.ua@gmail.com
              </TextLink>
              <Text>{t("contacts.adress")}</Text>
            </TextWrapper>
            <IconsWrapper>
              {contactsImages.map((el) => (
                <a href={el.link}>
                  <LogoW>
                    <LogoS img={el.img} hover={el.hover} />
                  </LogoW>
                </a>
              ))}
            </IconsWrapper>
          </ContactData>
          <Form>
            <TitleS>{t("contacts.text1")}</TitleS>
            <TitleL>{t("contacts.text2")}</TitleL>
            <InputsWrapper>
              <Input placeholder={t("contacts.text3")} />
              <Input placeholder="Телефон" />
              <Input placeholder={t("contacts.text4")} />
            </InputsWrapper>
            <Button>{t("contacts.text5")}</Button>
          </Form>
        </RightWrapper>
      </Wrapper>

      <WrapperRes>
        <ContactData>
          <TextWrapper>
            <TextLink href="tel:380689778888">+38 068 977 88 88</TextLink>
            <TextLink href="mailto:tesladrive.com.ua@gmail.com">
              tesladrive.com.ua@gmail.com
            </TextLink>
            <Text>{t("contacts.adress")}</Text>
          </TextWrapper>
          <IconsWrapper>
            {contactsImages.map((el) => (
              <a href={el.link}>
                <LogoW>
                  <LogoS img={el.img} hover={el.hover} />
                </LogoW>
              </a>
            ))}
          </IconsWrapper>
        </ContactData>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.4600726439751!2d30.50102662936096!3d50.4254472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cede20fe6a1d%3A0x8f26b6c9566cdae!2z0YPQuy4g0J_RgNC-0YLQsNGB0L7QsiDQr9GALCAxMywg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1671894484010!5m2!1sru!2sua"
            height="501px"
            width="100%"
            style={{ border: "0", marginTop: "100px", padding: "0" }}
            allowfullscreen=""
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
        <Form>
          <TitleS>{t("contacts.text1")}</TitleS>
          <TitleL>{t("contacts.text2")}</TitleL>
          <InputsWrapper>
            <Input placeholder={t("contacts.text3")} />
            <Input placeholder="Телефон" />
            <Input placeholder={t("contacts.text4")} />
          </InputsWrapper>
          <Button>{t("contacts.text5")}</Button>
        </Form>
      </WrapperRes>

      <Footer />
    </>
  );
};
export default ContactsPage;
const Wrapper = styled.div`
  margin: 146px 0;
  display: flex;
  padding: 0 180px;
  height: 708px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const WrapperRes = styled.div`
  margin: 78px 0;
  padding: 0 180px;
  display: none;
  flex-direction: column;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1150px) {
    padding: 0;
    display: flex;
  }
`;
const Map = styled.div`
  width: 100%;
`;
const RightWrapper = styled.div`
  min-width: 488px;
  display: flex;
  flex-direction: column;
`;
const ContactData = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1150px) {
    flex-direction: column-reverse;
    padding: 0 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
  }
`;
// ===========
const Form = styled.div`
  background-color: #f9f9f9;
  height: 498px;
  margin-top: auto;
  padding: 52px 52px 67px;
  text-align: right;
  box-sizing: border-box;
  @media screen and (max-width: 1150px) {
    text-align: center;
    height: 400px;
  }
  @media screen and (max-width: 777px) {
    height: 490px;
  }
  @media screen and (max-width: 777px) {
    height: 570px;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 47px 67px;
  }
`;
const TitleS = styled.div`
  font-size: 34px;
  font-weight: 400;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
  @media screen and (max-width: 390px) {
    font-size: 15px;
  }
`;
const TitleL = styled.div`
  font-size: 40px;
  margin-top: 5px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 390px) {
    font-size: 20px;
  }
`;
const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 50px;
  margin-top: 30px;
  @media screen and (max-width: 1150px) {
    grid-template-columns: 0.6fr 0.7fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 70px;
  }
  @media screen and (max-width: 777px) {
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 555px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #f9f9f9;
  box-shadow: none;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid #e20531;
  padding: 16px;
  color: #272531;
  width: 100%;
  display: grid;
  @media screen and (max-width: 566px) {
    font-size: 12px;
  }

  font-size: 20px;
  &:nth-child(1) {
    width: 137px;
    @media screen and (max-width: 1150px) {
      width: 100%;
    }
  }
  &:nth-child(3) {
    width: 100%;
    grid-area: 2 / 1 / 3 / 3;
    @media screen and (max-width: 1150px) {
      grid-area: auto;
    }
    @media screen and (max-width: 777px) {
      grid-area: 2 / 1 / 3 / 3;
    }
    @media screen and (max-width: 555px) {
      grid-area: auto;
    }
  }
  &::placeholder {
    color: #272531;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 566px) {
      font-size: 12px;
    }
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 55px;
  width: 250px;
  height: 48px;
  font-family: "Gilroy-medium";
  color: white;
  background-color: #e20531;
  cursor: pointer;
  transition: 0.3s;
  @media screen and (max-width: 480px) {
    margin-inline: auto;
  }
  &:hover {
    color: #e20531;
    border: 1px solid #e20531;
    background-color: white;
  }
`;
// ============
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  text-align: left;
  row-gap: 32px;
  margin-top: 13px;
  @media screen and (max-width: 1150px) {
    margin-top: 65px;
    margin-left: 0;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  @media screen and (max-width: 1150px) {
    flex-direction: row;
    justify-content: start;
    column-gap: 70px;
  }
  @media screen and (max-width: 390px) {
    justify-content: space-between;
  }
`;
const LogoS = styled.div`
  width: 37px;
  background-repeat: no-repeat;
  background-position: center;
  height: 37px;
  transition: 0.5s;
  background-image: url(${(props) => props.img});
  &:hover {
    background-image: url(${(props) => props.hover});
  }
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 400;
  @media screen and (max-width: 390px) {
    font-size: 18px;
    font-weight: 400;
  }
  &:first-child {
    font-size: 24px;
    font-weight: 500;
  }
`;
const TextLink = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  color: black;
  &:hover {
    font-weight: 600;
    color: black;
  }
  @media screen and (max-width: 390px) {
    font-size: 18px;
    font-weight: 400;
  }
  &:first-child {
    font-size: 24px;
    font-weight: 500;
    &:hover {
      font-weight: 600;
      color: black;
    }
  }
`;
