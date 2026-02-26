import React from "react";
import SchoolCardBig from "../../common/SchoolCardBig";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const SchoolsSection = () => {
  const { t } = useTranslation("about");
  const { schoolData } = useLanguageData();
  return (
    <section className="bg-white dark:bg-(--color-dark-text) py-20 px-4 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10 max-w-7xl mx-auto">
        <h1
          className="font-bold text-4xl text-(--color-dark-text) dark:text-white text-center"
          data-aos="fade-up"
        >
          {t("schools.title")}
        </h1>
        <div className="flex flex-col gap-12" data-aos-delay="300">
          {schoolData.map((school, index) => (
            <SchoolCardBig
              key={index}
              to={school.to}
              image={school.image}
              title={school.title}
              description={school.description}
              country={school.country}
              location={school.location}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              aosDelay={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
