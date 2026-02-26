import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const SkillsSection = () => {
  const { t } = useTranslation("guide");
  const { skillsCardsData } = useLanguageData();
  const firstSkillRef = useRef(null);

  return (
    <section
      className="relative flex flex-col bg-(--color-dark-text) items-start gap-6 scroll-mt-32 drop-shadow-lg rounded-md p-8 overflow-hidden"
      id="skills"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-(--color-primary) rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <h1 className="font-semibold text-2xl text-white" data-aos="fade-up">
        {t("skills.title")}
      </h1>
      <div className="flex flex-col gap-6">
        {skillsCardsData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="flex flex-col gap-4"
              ref={index === 0 ? firstSkillRef : null}
              data-aos="fade-right"
              data-aos-delay={600 + index * 150}
              data-aos-anchor={index === 0 ? undefined : "#first-skill-trigger"}
              data-aos-anchor-placement="top-bottom"
              id={index === 0 ? "first-skill-trigger" : undefined}
            >
              <div className="flex flex-row gap-4">
                <div className="flex items-center justify-center bg-slate-800 rounded-full w-9 h-9 shrink-0 outline-1 outline-(--color-divider)">
                  <p className="font-semibold text-(--color-gold2)">
                    {item.order}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <h1 className="font-semibold text-base text-white">
                    {item.title}
                  </h1>
                  <p className="text-sm text-(--color-light3-text)">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < skillsCardsData.length - 1 && (
                <div className="border-t border-(--color-divider) mt-4"></div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
