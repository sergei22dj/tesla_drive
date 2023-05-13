import React from "react";
import Catalog from "./Catalog";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HelmTags from "../Helmet";

const CatalogAccessoriesPage = ({ tags }) => {
  return (
    <>
      {tags ? (
        <HelmTags
          title={tags.katalogacsesuary[0]}
          titleru={tags.katalogaksesuaryru[0]}
          desc={tags.katalogacsesuary[1]}
          descru={tags.katalogaksesuaryru[1]}
          img={tags.katalogaksesuaryru[2]}
        />
      ) : null}
      <Header />
      <Catalog tags={tags} />
      <Footer />
    </>
  );
};
export default CatalogAccessoriesPage;
