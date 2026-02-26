import React, { useState } from "react";
import { useLanguageData } from "../../../hooks/useLanguageData";
import { useTranslation } from "react-i18next";

const EmploymentSection = () => {
  const BASE_DELAY = 300;
  const { successCardsData } = useLanguageData();
  const { t } = useTranslation("guide");
  const puBenefits = t("employment.puBenefits", { returnObjects: true });
  const prSteps = t("employment.prSteps", { returnObjects: true });
  const frBenefits = t("employment.frBenefits", { returnObjects: true });

  const [animatedCard, setAnimatedCard] = useState(null);

  const handleCardAnimation = (cardId) => {
    setAnimatedCard(cardId);

    // Remove animation class after animation completes
    setTimeout(() => {
      setAnimatedCard(null);
    }, 350); // Match this with animation duration
  };

  // Expose the animation function to the window object for sidebar access
  React.useEffect(() => {
    window.animateEmploymentCard = handleCardAnimation;

    return () => {
      delete window.animateEmploymentCard;
    };
  }, []);

  const getCardClass = (cardId) => {
    const baseClass =
      "bg-white rounded-md drop-shadow-lg p-5 w-full h-full flex flex-col gap-2.5 transition-transform duration-350 transform-gpu backface-visibility-hidden perspective-1000";
    return animatedCard === cardId ? `${baseClass} scale-105` : baseClass;
  };

  return (
    <section
      id="employment"
      className="flex flex-col items-start gap-4 scroll-mt-30"
    >
      <div
        className="flex flex-row items-center justify-center gap-2"
        data-aos="fade-up"
      >
        <div className="h-1 w-8 bg-(--color-primary) rounded-full"></div>
        <h1 className="font-semibold text-2xl text-(--color-dark-text) dark:text-white">
          {t("employment.title")}
        </h1>
      </div>
      <div className="flex flex-row grow w-full gap-8">
        {/* Public Sector Card - with AOS wrapper */}
        <div
          data-aos="fade-down"
          data-aos-delay={BASE_DELAY}
          className="flex-1 flex"
        >
          <div className={getCardClass("public")} id="public_sector">
            <div className="bg-(--color-primary)/20 w-10 h-10 flex items-center justify-center text-(--color-primary) rounded-md">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <h1 className="font-semibold text-xl text-(--color-dark-text) dark:text-white">
              {t("employment.puTitle")}
            </h1>
            <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
              {t("employment.puDesc")}
            </p>
            <div className="text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-12">
              {puBenefits.map((item, index) => (
                <div
                  className="flex flex-row items-center justify-start gap-2"
                  key={index}
                >
                  <i className="fa-solid fa-check text-green-600"></i>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Private Sector Card - with AOS wrapper */}
        <div
          data-aos="fade-down"
          data-aos-delay={BASE_DELAY + 150}
          className="flex-1 flex"
        >
          <div className={getCardClass("private")} id="private_sector">
            <div className="bg-(--color-gold)/10 w-10 h-10 flex items-center justify-center text-(--color-gold) rounded-md">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h1 className="font-semibold text-xl text-(--color-dark-text) dark:text-white">
              {t("employment.prTitle")}
            </h1>
            <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
              {t("employment.prDesc")}
            </p>
            <div className="flex flex-col items-start gap-2 text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto bg-(--color-bg-primary) drop-shadow-sm/10 p-3 outline-1 outline-(--color-light3-text)/40 rounded-md">
              <h1 className="font-medium text-(--color-dark-text) dark:text-white">
                {t("employment.prSubtitle")}
              </h1>
              <ol className="list-decimal list-inside">
                {prSteps.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Freelance Card - with AOS wrapper */}
        <div
          data-aos="fade-down"
          data-aos-delay={BASE_DELAY + 300}
          className="flex-1 flex"
        >
          <div className={getCardClass("freelance")} id="freelancing">
            <div className="bg-emerald-100 w-10 h-10 flex items-center justify-center text-emerald-600 rounded-md">
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h1 className="font-semibold text-xl text-(--color-dark-text) dark:text-white">
              {t("employment.frTitle")}
            </h1>
            <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
              {t("employment.frDesc")}
            </p>
            <div className="text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-12">
              {frBenefits.map((item, index) => (
                <div
                  className="flex flex-row items-center justify-start gap-2"
                  key={index}
                >
                  <i className="fa-solid fa-percent text-emerald-500"></i>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Cards Section - keep as is */}
      <div className="flex flex-col items-start gap-4 mt-6 w-full">
        <h1
          className="font-semibold text-lg text-(--color-dark-text) dark:text-white"
          data-aos="fade-up"
        >
          {t("employment.successTitle")}
        </h1>

        <div className="flex flex-row grow w-full gap-8 [&>div]:bg-white [&>div]:rounded-md [&>div]:drop-shadow-lg [&>div]:p-3">
          {successCardsData?.map((card, index) => (
            <div
              key={index}
              className="flex-1 flex flex-row gap-2.5"
              data-aos="fade-down"
              data-aos-delay={BASE_DELAY + index * 150}
            >
              <div className="bg-(--color-secondary)/15 min-w-10 h-10 max-h-10 flex items-center justify-center text-(--color-secondary) rounded-md">
                <i className={card.icon} />
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-sm font-medium text-(--color-dark-text) dark:text-white">
                  {card.title}
                </h1>
                <p className="text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentSection;
