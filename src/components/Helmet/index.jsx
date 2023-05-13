import React from "react";
import { Helmet } from "react-helmet-async";
import i18n from "../../i18n/i18n";

const metaDecorator = require("../data/index.json");

const HelmTags = ({ title, titleru, desc, descru, img }) => {
  const titleRes = i18n.language === "ua" ? title : titleru;
  const descRes = i18n.language === "ua" ? desc : descru;
  console.log(descRes);
  return (
    <Helmet>
      <title>{titleRes}</title>
      <meta name="description" key="description" content={descRes} />
      <meta property="og:type" content="article" />
      <meta property="og:title" key="og:title" content={titleRes} />
      <meta property="og:description" key="og:description" content={descRes} />
      <meta property="og:image" key="og:image" content={img} />
      <meta
        property="og:url"
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={img} />
    </Helmet>
  );
};
export default HelmTags;
