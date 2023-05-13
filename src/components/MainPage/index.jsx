import React, { useEffect, useState } from "react";
// components
import Catalog from "./Catalog";
import Comments from "./Commets";
import Feedback from "./Feedback";
import Footer from "../common/Footer";
import MainScreen from "./MainScreen";
import News from "./News";
import Spares from "./Spares";
import HelmTags from "../Helmet";

const MainPage = ({ setGlobalStatus, tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.mainpage[0]}
          titleru={tags.mainpageru[0]}
          desc={tags.mainpage[1]}
          descru={tags.mainpageru[1]}
          img={tags.mainpage[2]}
        />
      ) : null}

      <MainScreen />
      <Catalog setGlobalStatus={setGlobalStatus} />
      <Comments />
      <Feedback />
      <Spares />
      <News />
      <Footer />
    </>
  );
};
export default MainPage;
