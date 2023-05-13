import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HelmTags from "../Helmet";
import Feedback from "../MainPage/Feedback";
import CatalogNews from "./Catalog";

const NewsPage = ({ tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.stattitanovyny[0]}
          titleru={tags.stattitanovynyru[0]}
          desc={tags.stattitanovyny[1]}
          descru={tags.stattitanovynyru[1]}
          img={tags.stattitanovyny[2]}
        />
      ) : null}
      <Header />
      <CatalogNews />
      <Feedback />
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </>
  );
};
export default NewsPage;
