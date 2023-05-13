import { Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useContentful from "../../contentful";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderHat from "../common/HeaderHat";
import ModalDone from "../common/ModalDone";
import Comments from "../MainPage/Commets";
import { Play, Polygon, StarIcon, Stars } from "../MainPage/Commets/views";

const Star = () => {
  return <StarIcon src="/images/Star.svg" />;
};
const StarEmpty = () => {
  return <StarIcon src="/images/Star_Empty.svg" />;
};

const Card = ({ data, openVideo, setVideo }) => {
  return (
    <WrapperCard>
      <Image img={data.image}>
        {data.isVideo && (
          <Play onClick={() => [setVideo(data.videoUrl), openVideo(true)]}>
            <Polygon src={"/images/Play.svg"} />
          </Play>
        )}
      </Image>
      <WrapperCardL>
        <HeaderCard>
          <Author>{data.author}</Author>
          <Stars style={{ margin: 0 }}>
            <Rating
              readOnly
              value={data.rate}
              icon={<Star />}
              emptyIcon={<StarEmpty />}
            />
          </Stars>
        </HeaderCard>

        <Comment>{data.text}</Comment>
      </WrapperCardL>
    </WrapperCard>
  );
};

const CommentsPage = () => {
  const [commentItems, setCommentItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    text: "",
  });

  const [error, setError] = useState(false);

  const { getItemsComment } = useContentful();
  useEffect(() => {
    getItemsComment(setLoading).then((response) => {
      setCommentItems(response);
    });
  }, []);

  const inputHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { createPost } = useContentful();

  const postCreate = () => {
    createPost(formData);
    setOpenModal(true);
    setError(false);
  };

  const addComment = () => {
    formData.name.length && formData.number.length && formData.text.length
      ? postCreate()
      : setError(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <HeaderHat
        bg={"/images/Hat_Bg_vidhuky.jpg"}
        bgMob={"/images/Hat_Bg_vidhuky_mob.jpg"}
        name={t("mainscreen.comments1")}
      />
      {commentItems ? (
        <>
          <Wrapper>
            <HeaderText>{t("mainscreen.comments2")}</HeaderText>
            <CardsWrapper>
              {commentItems.map((el) => (
                <Card
                  data={el}
                  openVideo={setVideoIsOpen}
                  setVideo={setVideo}
                />
              ))}
            </CardsWrapper>
            <CardsWrapperRes>
              <Comments vidhuky={true} video={video} />
            </CardsWrapperRes>

            <Form>
              <TextS>{t("comments.text1")}</TextS>
              <TextMain>{t("comments.text2")}</TextMain>
              <TextMainRes>{t("comments.text3")}</TextMainRes>

              <InputsWrapper>
                <Input
                  placeholder={t("comments.text4")}
                  name="name"
                  value={formData.name}
                  onChange={(e) => inputHandler(e)}
                />
                <Input
                  placeholder="Телефон"
                  name="number"
                  value={formData.number}
                  onChange={(e) => inputHandler(e)}
                />
                <Input
                  placeholder={t("comments.text5")}
                  name="text"
                  value={formData.text}
                  onChange={(e) => inputHandler(e)}
                />
              </InputsWrapper>
              <Button
                onClick={() => [
                  addComment(),

                  setFormData({
                    name: "",
                    number: "",
                    text: "",
                  }),
                ]}
              >
                {t("comments.text6")}
              </Button>
              <ErrorText error={error}>
                (заполните пожалуйста все поля)
              </ErrorText>
            </Form>
          </Wrapper>
          {videoIsOpen && (
            <Modal onClick={() => setVideoIsOpen(false)}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <Youtube
                  src={video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></Youtube>
              </ModalContent>
            </Modal>
          )}
        </>
      ) : (
        <>Триває завантаження</>
      )}

      <Footer />
      {openModal && (
        <ModalDone
          openModal={setOpenModal}
          modalTitle={
            <React.Fragment>
              {t("comments.text7")}
              <br />
              {t("comments.text8")}
            </React.Fragment>
          }
          modalText={
            <React.Fragment>
              {t("comments.text9")}
              <br />
              {t("comments.text10")}
            </React.Fragment>
          }
        />
      )}
    </>
  );
};
export default CommentsPage;

const ErrorText = styled.div`
  display: ${(p) => (p.error ? "block" : "none")};
  color: white;
  font-size: 16px;
`;

const Wrapper = styled.div`
  margin-top: 123px;
  padding: 0 180px;
  @media screen and (max-width: 1650px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 640px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 30px;
  }
`;
const HeaderText = styled.div`
  font-size: 45px;
  text-align: left;
  font-family: "Gilroy-medium";
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 123px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
// Card ==========
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 188px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const CardsWrapperRes = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
const WrapperCard = styled.div`
  position: relative;
  display: flex;
  height: 220px;
  background-color: #f9f9f9;
`;
const WrapperCardL = styled.div`
  margin-left: 142px;
  width: 100%;
  margin-right: 71px;
  display: flex;
  flex-direction: column;
`;
const HeaderCard = styled.div`
  margin-top: 39px;
  margin-bottom: 42px;
  display: flex;
  justify-content: space-between;
`;
const Image = styled.div`
  position: absolute;
  left: 71px;
  bottom: 45px;
  min-width: 374px;
  height: 223px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Author = styled.div`
  font-size: 24px;
`;
const Comment = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #939298;
  text-align: left;
`;
// Form =========
const Form = styled.div`
  background-color: #e20531;
  height: 580px;
  margin: 175px 0;
  padding: 107px 127px 0 70px;
  text-align: left;

  color: white;
  @media screen and (max-width: 1250px) {
    height: 686px;
  }
  @media screen and (max-width: 800px) {
    padding: 107px 70px 0 70px;
    height: 786px;
  }
  @media screen and (max-width: 640px) {
    text-align: center;
  }
  @media screen and (max-width: 550px) {
    padding: 60px 36px 0;
    height: 675px;
  }
`;
const TextS = styled.div`
  font-size: 36px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
  @media screen and (max-width: 550px) {
    font-size: 15px;
    margin: 0 11px;
  }
`;
const TextMain = styled.div`
  font-size: 48px;
  text-transform: uppercase;
  margin-top: 55px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const TextMainRes = styled.div`
  display: none;
  font-size: 48px;
  text-transform: uppercase;
  margin-top: 55px;
  @media screen and (max-width: 1000px) {
    display: block;
  }
  @media screen and (max-width: 640px) {
    font-size: 36px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;
const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.7fr) 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 143px;
  grid-row-gap: 50px;
  margin-top: 100px;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  width: 100%;
  display: grid;
  @media screen and (max-width: 566px) {
    font-size: 12px;
  }

  font-size: 20px;
  &:nth-child(3) {
    width: 100%;
    @media screen and (max-width: 1250px) {
      grid-area: 2 / 1 / 3 / 3;
    }
    @media screen and (max-width: 800px) {
      grid-area: auto;
    }
  }
  &::placeholder {
    color: #ffffff;
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
  width: 392px;
  height: 48px;
  font-family: "Gilroy-medium";
  color: #e20531;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    border: 1px solid white;
    background-color: #e20531;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    margin-top: 55px;
  }
  @media screen and (max-width: 770px) {
    width: 100%;
    font-size: 16px;
    height: 40px;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    font-size: 12px;
    height: 40px;
  }
`;
// Modal ===========
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
  justify-content: center;
  z-index: 100000;
`;
const ModalContent = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  text-align: center;
  text-transform: uppercase;
  animation: ani 1s forwards;
  @keyframes ani {
    0% {
      scale: 0.2;
    }
    100% {
      scale: 1;
    }
  }
`;
const Youtube = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
`;
