import React from "react";
import WorkshopCardBig from "../../common/WorkshopCardBig";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const AboutSection = () => {
  const { t } = useTranslation("workshops");
  const { workshopData } = useLanguageData();
  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) py-20 px-4 transition-colors duration-200 scroll-mt-8"
      id="workshops"
    >
      <div className="flex flex-col justify-between items-center gap-10 max-w-7xl mx-auto">
        <h1
          className="font-bold text-4xl text-(--color-dark-text) dark:text-white text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {t("about.title")}
        </h1>
        <div className="flex flex-col gap-12" data-aos-delay="300">
          {workshopData.map((school, index) => (
            <WorkshopCardBig
              key={index}
              image={school.image}
              title={school.title}
              description={school.description}
              outcomes={school.outcomes}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              aosDelay={index === 0 ? 1100 : 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
