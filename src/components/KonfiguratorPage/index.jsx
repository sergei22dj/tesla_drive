import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../common/Header";
import Konfigurator from "./Konfigurator";
import Welcome from "./wlcome";

const KonfiguratorPage = ({ tags }) => {
  const [chosenModel, setChosenModel] = useState("");
  return (
    <>
      <Helmet>
        <title>Configurator</title>
        <meta name="description" content="this is configurator page" />
        <link rel="canonical" href="/konfigurator" />
      </Helmet>
      <Header />
      {chosenModel ? (
        <Konfigurator
          chosenModel={chosenModel}
          setChosenModel={setChosenModel}
          tags={tags}
        />
      ) : (
        <Welcome
          chosenModel={chosenModel}
          setChosenModel={setChosenModel}
          tags={tags}
        />
      )}
    </>
  );
};
export default KonfiguratorPage;
