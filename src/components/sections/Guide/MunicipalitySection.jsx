import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const MunicipalitySection = () => {
  const { t } = useTranslation("guide");
  const { familyCardsData, munCardsData } = useLanguageData();
  return (
    <section
      className="flex flex-row gap-8 scroll-mt-32 grow w-full [&>div]:bg-white [&>div]:rounded-md [&>div]:drop-shadow-lg [&>div]:p-8 [&>div]:border-t-4"
      id="family_municipality"
    >
      <div
        className="flex-1 flex flex-col gap-2.5 border-(--color-primary)"
        data-aos="fade-down"
      >
        <div className="bg-(--color-primary)/20 w-10 h-10 flex items-center justify-center text-(--color-primary) rounded-md">
          <i className="fa-regular fa-house"></i>
        </div>
        <h1 className="font-semibold text-xl text-(--color-dark-text) dark:text-white">
          {t("municipality.familyTitle")}
        </h1>
        <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
          {t("municipality.familyDesc")}
        </p>
        <div className="text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-6 flex flex-col gap-2.5">
          {familyCardsData.map((card, index) => (
            <div
              className="flex flex-row items-center justify-start gap-2"
              key={index}
            >
              <i className={`${card.icon} text-(--color-primary)`}></i>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex-1 flex flex-col gap-2.5 border-(--color-gold2)"
        data-aos="fade-down"
        data-aos-delay={150}
      >
        <div className="bg-(--color-gold2)/20 w-10 h-10 flex items-center justify-center text-(--color-gold2) rounded-md">
          <i className="fa-regular fa-building"></i>
        </div>
        <h1 className="font-semibold text-xl text-(--color-dark-text) dark:text-white">
          {t("municipality.munTitle")}
        </h1>
        <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
          {t("municipality.munDesc")}
        </p>
        <div className="text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-6 flex flex-col gap-2.5">
          {munCardsData.map((card, index) => (
            <div
              className="flex flex-row items-center justify-start gap-2"
              key={index}
            >
              <i className={`${card.icon} text-(--color-gold2)`}></i>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MunicipalitySection;
