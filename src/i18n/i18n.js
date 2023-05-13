import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ua from "./lang/ua.json";
import ru from "./lang/ru.json";
import { useParams } from "react-router-dom";

// the translations
// (tip move them in a JSON file and import them)

const resources = {
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
