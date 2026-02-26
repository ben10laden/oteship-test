import React from "react";
import FeatureCard from "../../common/FeatureCard";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const AboutSection = () => {
  const { featureCardsData } = useLanguageData();
  const { t } = useTranslation("home");

  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-(--color-dark-text) dark:text-white">
            {t("about.title")}
          </h1>
          <h1 className="text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl text-center">
            {t("about.description")}
          </h1>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {featureCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              to={card.to}
              aosDelay={1100 + index * 150}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
