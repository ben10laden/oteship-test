import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import OpportunitiesCard from "../../common/OpportunitiesCard";

const OpportunitiesSection = () => {
  const { opportunitiesCardsData } = useLanguageData();
  const { t } = useTranslation("home");
  return (
    <section className="bg-linear-to-bl from-[#FFCC00] via-[#2e489e] via-40% to-[#0F2FA2] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-white">
            {t("opportunities.title")}
          </h1>
          <h1 className="text-lg text-(--color-bg-primary) max-w-3xl text-center">
            {t("opportunities.description")}
          </h1>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {opportunitiesCardsData.map((card, index) => (
            <OpportunitiesCard
              key={index}
              icon={card.icon}
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

export default OpportunitiesSection;
