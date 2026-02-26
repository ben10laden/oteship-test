import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import ImageCardSmall from "../../common/ImageCardSmall";

const CeramicsSection = () => {
  const { ceramicsCardsData } = useLanguageData();
  const { t } = useTranslation("home");
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-(--color-dark-text) dark:text-white">
            {t("ceramics.title")}
          </h1>
          <h1 className="text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl text-center">
            {t("ceramics.description")}
          </h1>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {ceramicsCardsData.map((card, index) => (
            <ImageCardSmall
              key={index}
              to={card.to}
              image={card.image}
              title={card.title}
              description={card.description}
              aosDelay={300 + index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeramicsSection;
