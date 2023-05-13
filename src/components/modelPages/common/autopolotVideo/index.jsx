import React, { useCallback } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const AVideo = () => {
  const [numberOfVideo, setNumberOfVideo] = useState(2);
  const Video = useCallback(
    ({ number }) => {
      return (
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ width: "100%", marginTop: "5vh" }}
        >
          <source
            src={`/images/konfigurator/cars/vid_ap_${number}.mp4`}
            type="video/mp4"
          />
        </video>
      );
    },
    [numberOfVideo]
  );
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <Title>{t("avtopilotv.text1")}</Title>
        <Text>{t("avtopilotv.text2")}</Text>
        <Video number={numberOfVideo} />

        <SelectWrapp>
          <Block
            active={numberOfVideo === 2}
            onClick={() => setNumberOfVideo(2)}
          >
            <Line active={numberOfVideo === 2} />
            <TitleS>{t("avtopilotv.text3")}</TitleS>
            <Text>{t("avtopilotv.text4")}</Text>
          </Block>
          <Block
            active={numberOfVideo === 1}
            onClick={() => setNumberOfVideo(1)}
          >
            <Line active={numberOfVideo === 1} />
            <TitleS>{t("avtopilotv.text5")}</TitleS>
            <Text>{t("avtopilotv.text6")}</Text>
          </Block>
          <Block
            active={numberOfVideo === 3}
            onClick={() => setNumberOfVideo(3)}
          >
            <Line active={numberOfVideo === 3} />
            <TitleS>{t("avtopilotv.text7")}</TitleS>
            <Text>{t("avtopilotv.text8")}</Text>
          </Block>
          <Block
            active={numberOfVideo === 4}
            onClick={() => setNumberOfVideo(4)}
          >
            <Line active={numberOfVideo === 4} />
            <TitleS>{t("avtopilotv.text9")}</TitleS>
            <Text>{t("avtopilotv.text10")}</Text>
          </Block>
        </SelectWrapp>
      </Wrapper>
    </>
  );
};
export default AVideo;
const Wrapper = styled.div`
  padding: 100px 180px;
  @media screen and (max-width: 1650px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 550px) {
    padding: 100px 30px;
  }
`;
const Title = styled.div`
  font-size: 46px;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 38px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  text-align: left;
  padding-bottom: 20px;
  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;
const Select = styled.div``;
const Block = styled.div`
  color: ${(p) => (p.active ? "black" : "gray")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 20%;
  min-width: 280px;
  cursor: pointer;
`;
const Line = styled.div`
  display: flex;
  border: 1px solid ${(p) => (p.active ? "black" : "gray")};
  width: 100%;
  margin-bottom: 10px;
`;
const TitleS = styled.div`
  font-size: 24px;
  margin: 20px 0 12px;
  text-align: left;
`;
const SelectWrapp = styled.div`
  width: 100%;
  display: flex;
  column-gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  @media screen and (max-width: 550px) {
    column-gap: 20px;
  }
`;
