import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const ImpactSection = () => {
  const { impactNumbersData } = useLanguageData();
  const { t } = useTranslation("about");
  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-20 transition-colors duration-200 scroll-mt-16"
      id="impact"
    >
      <div className="flex flex-col justify-between items-center gap-12">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-(--color-dark-text) dark:text-white">
            {t("impact.title")}
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-20 max-w-7xl">
          {impactNumbersData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
              data-aos="fade-down"
              data-aos-delay={300 + index * 150}
            >
              <h1 className="font-bold text-6xl text-(--color-primary) dark:text-(--color-primary2)">
                {item.num}
              </h1>
              <h1 className="uppercase text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                {item.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
