import React, { useEffect, useRef, useState } from "react";
import { commentData } from "./data";
import Rating from "@mui/material/Rating";

// views
import {
  CardWrapper,
  Comment,
  Name,
  NavBar,
  Play,
  Polygon,
  StarIcon,
  Stars,
  Title,
  WrapperComments,
} from "./views";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation } from "swiper";

import "swiper/css";
import styled from "styled-components";
import useContentful from "../../../contentful";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
SwiperCore.use([Navigation]);
const Star = () => {
  return <StarIcon src="/images/Star.svg" />;
};
const StarEmpty = () => {
  return <StarIcon src="/images/Star_Empty.svg" />;
};
const CommentItem = ({ data, openVideo, setVideo }) => {
  return (
    <CardWrapper>
      <Image img={data.image}>
        {data.isVideo && (
          <Play onClick={() => [setVideo(data.videoUrl), openVideo(true)]}>
            <Polygon src={"/images/Play.svg"} />
          </Play>
        )}
      </Image>
      <Stars>
        <Rating
          readOnly
          value={data.rate}
          icon={<Star />}
          emptyIcon={<StarEmpty />}
        />
      </Stars>
      <Name>{i18n.language === "ua" ? data.author : data.authorru}</Name>

      <Comment>{i18n.language === "ua" ? data.text : data.textru}</Comment>
    </CardWrapper>
  );
};

const Comments = ({ vidhuky }) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const [commentItems, setCommentItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [video, setVideo] = useState("");
  const [videoIsOpen, setVideoIsOpen] = useState(false);

  const { getItemsComment } = useContentful();
  useEffect(() => {
    getItemsComment(setLoading).then((response) => {
      setCommentItems(response);
    });
  }, []);
  console.log(commentItems);
  const { t } = useTranslation();
  const isVidhuky = vidhuky ? true : false;
  return (
    <>
      {isVidhuky ? (
        <TitleVidhuky>{t("mainscreen.comments2")}</TitleVidhuky>
      ) : (
        <Title>{t("mainscreen.comments1")}</Title>
      )}

      <Wrapper vidhuky={isVidhuky}>
        <ArrowL ref={navigationPrevRef} vidhuky={isVidhuky} />
        <ArrowR ref={navigationNextRef} vidhuky={isVidhuky} />
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 51,
              centeredSlides: false,
            },
            1700: {
              slidesPerView: 3,
              spaceBetween: 51,
              centeredSlides: false,
            },
          }}
        >
          {commentItems.length ? (
            commentItems.map((el) => (
              <SwiperSlide>
                <CommentItem
                  data={el}
                  openVideo={setVideoIsOpen}
                  setVideo={setVideo}
                />
              </SwiperSlide>
            ))
          ) : (
            <>Завантаження</>
          )}
        </Swiper>
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
  );
};
export default Comments;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.vidhuky ? "0" : "0 180px")};
  transition: all 1s;
  position: relative;
  @media screen and (max-width: 1650px) {
    padding: ${(props) => (props.vidhuky ? "0" : "0 40px")};
  }
  @media screen and (max-width: 380px) {
    padding: ${(props) => (props.vidhuky ? "0" : "0 27px")};
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.img});
  width: 374px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  position: absolute;
  height: 223px;
  top: -118px;
  @media screen and (max-width: 690px) {
    width: 229px;
    height: 139px;
    top: -92px;
  }
  @media screen and (max-width: 380px) {
    width: 164px;
    height: 103px;
    top: -57px;
  }
`;
const TitleVidhuky = styled.div`
  font-size: 45px;
  text-align: left;
  font-family: "Gilroy-medium";
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 123px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
const ArrowL = styled.div`
  width: 45px;
  height: 45px;
  margin-top: 100px;
  margin: 32px;

  transition: 0.3s;
  background-image: url("/images/Arrow.jpg");
  &:hover {
    background-image: url("/images/ArrowP_hover.png");
  }
  cursor: pointer;
  position: absolute;
  height: 45px;
  z-index: 200;
  left: 125px;
  top: 290px;
  @media screen and (max-width: 1650px) {
    left: ${(props) => (props.vidhuky ? "-53px" : "-13px")};
    top: 290px;
  }
  @media screen and (max-width: 540px) {
    left: ${(props) => (props.vidhuky ? "7px" : "47px")};
    bottom: -49px;
    top: auto;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
  }
`;
const ArrowR = styled.div`
  width: 45px;
  transition: 0.3s;
  background-image: url("/images/Arrow_rev.jpg");
  &:hover {
    background-image: url("/images/ArrowF_hover.png");
  }
  cursor: pointer;
  margin-top: 100px;
  margin: 32px;
  cursor: pointer;
  position: absolute;
  height: 45px;
  z-index: 200;
  right: 125px;
  top: 290px;
  @media screen and (max-width: 1650px) {
    right: ${(props) => (props.vidhuky ? "-53px" : "-13px")};
    top: 290px;
  }
  @media screen and (max-width: 540px) {
    right: ${(props) => (props.vidhuky ? "7px" : "47px")};
    bottom: -49px;
    top: auto;
  }
  @media screen and (max-width: 380px) {
    width: 35px;
    height: 35px;
  }
`;
// Modal ========
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
  z-index: 201;
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
