import React from "react";
import Header from "../common/Header";
import Catalog from "./Catalog";
import Footer from "../common/Footer";
import HelmTags from "../Helmet";

const CatalogPage = ({ globalStatus, tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.katalogavto[0]}
          titleru={tags.katalogavtoru[0]}
          desc={tags.katalogavto[1]}
          descru={tags.katalogavtoru[1]}
          img={tags.katalogavto[2]}
        />
      ) : null}
      <Header />
      <Catalog globalStatus={globalStatus} />
      <Footer />
    </>
  );
};
export default CatalogPage;
