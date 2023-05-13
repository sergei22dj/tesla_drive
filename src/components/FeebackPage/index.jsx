import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderHat from "../common/HeaderHat";
import ModalDone from "../common/ModalDone";
import TextBlock from "../common/TextBlock";
import HelmTags from "../Helmet";
import Feedback from "../MainPage/Feedback";

const FeedbackPage = ({ tags }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.zapys[0]}
          titleru={tags.zapysru[0]}
          desc={tags.zapys[1]}
          descru={tags.zapysru[1]}
          img={tags.zapysru[2]}
        />
      ) : null}
      <Header />
      <HeaderHat
        bg={"/images/Hat_Bg_feedback.jpg"}
        bgMob={"/images/Hat_Bg_feedback_mob.jpg"}
        name={"Тест-драйв Tesla"}
      />
      <WrapperText>
        <TextBlock page={"TestDrive"} />
      </WrapperText>

      <Wrapper>
        <Feedback testPage={"1"} openModal={setOpenModal} />
      </Wrapper>
      <Footer />
      {openModal && (
        <ModalDone
          openModal={setOpenModal}
          modalTitle={
            <React.Fragment>
              Заявку
              <br />
              надіслано!
            </React.Fragment>
          }
          modalText={
            <React.Fragment>
              Найближчим часом із вами зв'яжеться наш
              <br />
              менеджер
            </React.Fragment>
          }
        />
      )}
    </>
  );
};
export default FeedbackPage;
const Wrapper = styled.div`
  margin-top: -200px;
  margin-bottom: 100px;
  @media screen and (max-width: 1650px) {
    margin-top: -50px;
  }
`;
const WrapperText = styled.div`
  margin-top: -100px;
`;
