import React from "react";
import Header from "../common/Header";
import Catalog from "./Catalog";
import Footer from "../common/Footer";
import HelmTags from "../Helmet";

const CatalogSparesPage = ({ tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.katalogzapchastyny[0]}
          titleru={tags.katalogzapchastynyru[0]}
          desc={tags.katalogzapchastyny[1]}
          descru={tags.katalogzapchastynyru[1]}
          img={tags.katalogzapchastyny[2]}
        />
      ) : null}
      <Header />
      <Catalog />
      <Footer />
    </>
  );
};
export default CatalogSparesPage;
