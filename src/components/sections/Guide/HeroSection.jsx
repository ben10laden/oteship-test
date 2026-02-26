import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("guide");
  return (
    <section
      data-aos="zoom-out"
      data-aos-delay="400"
      className="relative bg-linear-to-tl from-[#2E5D9E] to-[#0F2FA2] transition-colors duration-200 drop-shadow-lg rounded-md overflow-hidden w-full"
    >
      <div className="absolute -bottom-70 -right-90 w-150 h-110 bg-[#ffd000] rounded-full opacity-60 blur-3xl"></div>

      <div className="flex flex-col p-12 gap-6 items-start justify-center">
        <div className="flex flex-row items-center gap-2 bg-white rounded-full py-0.5 px-3">
          <div className="h-2 w-2 bg-[#2E5D9E] rounded-full"></div>
          <h1 className="uppercase font-semibold text-xs text-[#2E5D9E]">
            {t("hero.tag")}
          </h1>
        </div>
        <h1 className="font-semibold text-5xl text-white">{t("hero.title")}</h1>
        <p className="text-(--color-bg-primary)">{t("hero.description")}</p>
        <a
          href="#preface"
          className="flex flex-row items-center justify-center cursor-pointer py-2.5 px-4.5 bg-white text-[#2E5D9E] font-semibold border-2 border-transparent rounded-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap text-center"
        >
          {t("hero.startReading")}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 mt-0.5 ml-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
