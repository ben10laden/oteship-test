import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHome from "./Home/en.json";
import grHome from "./Home/gr.json";
import enAbout from "./About/en.json";
import enGuide from "./Guide/en.json";
import enWorkshops from "./Workshops/en.json";
import enGallery from "./Gallery/en.json";
import enLayouts from "./layouts/en.json";
import grLayouts from "./layouts/gr.json";

const resources = {
  en: {
    home: enHome,
    about: enAbout,
    guide: enGuide,
    layouts: enLayouts,
    workshops: enWorkshops,
    gallery: enGallery,
  },
  ελ: {
    home: grHome,
    layouts: grLayouts,
  },
};

const savedLanguage = localStorage.getItem("oteship-lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  defaultNS: "home",
  interpolation: {
    escapeValue: false,
  },
  ns: ["home", "layouts", "about", "guide", "workshops", "gallery"],
});

export default i18n;
