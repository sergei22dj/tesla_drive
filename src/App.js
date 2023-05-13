import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import CatalogAccessoriesPage from "./components/CatalogAccessoriesPage";
import AccessoriesItem from "./components/CatalogAccessoriesPage/CatalogItem";
import CatalogMerchPage from "./components/CatalogMerchPage";
import MerchItem from "./components/CatalogMerchPage/CatalogItem";

import CatalogPage from "./components/CatalogPage";
import AutoItem from "./components/CatalogPage/CatalogItem";
import CatalogSparesPage from "./components/CatalogSparesPage";
import SparesItem from "./components/CatalogSparesPage/CatalogItem";
import CommentsPage from "./components/CommentsPage";
import ModalTO from "./components/common/modalTO";
import ContactsPage from "./components/ContactsPage";
import FeedbackPage from "./components/FeebackPage";
import KonfiguratorPage from "./components/KonfiguratorPage";
import Konfigurator from "./components/KonfiguratorPage/Konfigurator";
import Quixote from "./components/KonfiguratorPage/Konfigurator/pdf";
import Welcome from "./components/KonfiguratorPage/wlcome";

// components
import MainPage from "./components/MainPage";
import Cybertruk from "./components/modelPages/cybertruk";
import Model3 from "./components/modelPages/model3";
import ModelS from "./components/modelPages/modelS";
import ModelX from "./components/modelPages/modelX";
import ModelY from "./components/modelPages/modelY";
import Roadster from "./components/modelPages/roadster";
import NewsPage from "./components/NewsPage";
import OneNewsPage from "./components/NewsPage/CatalogItem";
import useContentful from "./contentful";
import i18n from "./i18n/i18n";

const Rel = () => window.location.replace(`/${i18n.language}/`);

function App() {
  const [globalStatus, setGlobalStatus] = useState(null);
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  document.documentElement.lang = i18n.language === "ua" ? "uk-UA" : "ru-UA";
  i18n.changeLanguage(window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"));

  const [tags, setTags] = useState([]);
  const { getMetaTags } = useContentful();

  useEffect(() => {
    getMetaTags().then((response) => setTags(response));
  }, []);
  console.log(tags);
  const tag = tags.length ? tags[0] : null;
  return (
    <div className="App">
      <Attention>
        Увага! Наразі сайт знаходиться на технічному обслуговуванні та
        тестуванні.
      </Attention>
      <BrowserRouter basename={`/${lang}/`}>
        <Routes>
          <Route
            exact
            path="*"
            element={<MainPage tags={tag} setGlobalStatus={setGlobalStatus} />}
          />
          <Route
            exact
            path="/ru"
            element={<MainPage tags={tag} setGlobalStatus={setGlobalStatus} />}
          />
          <Route
            exact
            path="/ua"
            element={<MainPage tags={tag} setGlobalStatus={setGlobalStatus} />}
          />

          <Route
            path={`/katalog-auto`}
            element={
              <CatalogPage tags={tag} globalStatus={globalStatus || "all"} />
            }
          />
          <Route path="/katalog-auto/:id" element={<AutoItem />} />
          <Route
            path="/katalog-merch"
            element={<CatalogMerchPage tags={tag} />}
          />
          <Route path="/katalog-merch/:id" element={<MerchItem />} />
          <Route
            path="/katalog-aksesuary"
            element={<CatalogAccessoriesPage tags={tag} />}
          />
          <Route
            path="/katalog-aksesuary/:id"
            element={<AccessoriesItem tags={tag} />}
          />
          <Route
            path="/katalog-zapchastyny"
            element={<CatalogSparesPage tags={tag} />}
          />
          <Route path="/katalog-zapchastyny/:id" element={<SparesItem />} />
          <Route path="/statti-ta-novyny" element={<NewsPage tags={tag} />} />
          <Route path="/statti-ta-novyny/:id" element={<OneNewsPage />} />
          <Route path="/vidhuky" element={<CommentsPage tags={tag} />} />
          <Route path="/kontakty" element={<ContactsPage tags={tag} />} />
          <Route
            path="/zapys-na-test-drayv"
            element={<FeedbackPage tags={tag} />}
          />
          <Route path="/konfigurator" element={<Welcome tags={tag} />} />
          <Route
            path="/konfigurator/:id"
            element={<Konfigurator tags={tag} />}
          />
          {/*Стриницы моделей */}
          <Route path="/modelS" element={<ModelS tags={tag} />} />
          <Route path="/model3" element={<Model3 tags={tag} />} />
          <Route path="/modelX" element={<ModelX tags={tag} />} />
          <Route path="/modelY" element={<ModelY tags={tag} />} />
          <Route path="/roadster" element={<Roadster tags={tag} />} />
          <Route path="/cybertruck" element={<Cybertruk tags={tag} />} />
          <Route path="/test" element={<Quixote />} />
          <Route element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
const Attention = styled.div`
  width: 100%;
  background-color: red;
  color: white;
  font-size: 30px;
`;
