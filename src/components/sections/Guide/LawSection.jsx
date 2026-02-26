import React from "react";
import { useTranslation } from "react-i18next";

const LawSection = () => {
  const { t } = useTranslation("guide");
  const BASE_DELAY = 300;
  const rights = t("law.rights", { returnObjects: true });
  return (
    <section
      className="flex flex-col items-start gap-8 scroll-mt-32 bg-white drop-shadow-lg rounded-md p-8"
      id="legislation"
    >
      <div className="flex flex-col gap-6" data-aos="fade-up">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="bg-(--color-primary)/20 w-10 h-10 flex items-center justify-center text-(--color-primary) rounded-md">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <h1 className="font-semibold text-2xl text-(--color-dark-text) dark:text-white">
            {t("law.title")}
          </h1>
        </div>
        <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
          {t("law.description")}
        </p>
      </div>
      <div className="flex flex-row items-stretch justify-between w-full gap-8">
        <div
          data-aos="fade-down"
          data-aos-delay={BASE_DELAY}
          className="flex-1 flex flex-col gap-4 bg-(--color-bg-primary) drop-shadow-sm/10 p-4 outline-1 outline-(--color-light3-text)/40 rounded-md"
        >
          <div className="flex flex-row items-center justify-start gap-2">
            <i className="fa-regular fa-circle-check text-(--color-primary)"></i>
            <h1 className="font-medium text-(--color-dark-text) dark:text-white">
              {t("law.rightsTitle")}
            </h1>
          </div>
          <div className="flex flex-col text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) ml-1">
            <ul className="list-disc list-outside ml-4 space-y-3 [&>li::marker]:text-(--color-primary)">
              {rights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay={BASE_DELAY + 150}
          className="flex-1 flex flex-col gap-4 bg-(--color-bg-primary) drop-shadow-sm/10 p-4 outline-1 outline-(--color-light3-text)/40 rounded-md"
        >
          <div className="flex flex-row items-center justify-start gap-2">
            <i className="fa-solid fa-building-columns text-(--color-gold)"></i>
            <h1 className="font-medium text-(--color-dark-text) dark:text-white">
              {t("law.lawCardTitle")}
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
              {t("law.lawCardDesc")}
            </p>
            <div className="flex flex-col bg-white gap-2 p-4 rounded-md outline-1 outline-(--color-light3-text)/40 drop-shadow-sm/5">
              <h1 className="uppercase text-sm font-medium text-(--color-secondary)">
                {t("law.lawTitle")}
              </h1>
              <p className="text-sm text-(--color-dark-text) dark:text-white">
                {t("law.lawDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
