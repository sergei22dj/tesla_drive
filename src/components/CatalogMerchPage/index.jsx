import React from "react";
import Catalog from "./Catalog";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HelmTags from "../Helmet";

const CatalogMerchPage = ({ tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.katalogmerch[0]}
          titleru={tags.katalogmerchru[0]}
          desc={tags.katalogmerch[1]}
          descru={tags.katalogmerchru[1]}
          img={tags.katalogmerch[2]}
        />
      ) : null}
      <Header />
      <Catalog />
      <Footer />
    </>
  );
};
export default CatalogMerchPage;
