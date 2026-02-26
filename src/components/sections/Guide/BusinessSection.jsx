import React, { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import businessBanner from "../../../assets/banners/guide-business-banner.webp";

const BusinessSection = () => {
  const { t } = useTranslation("guide");
  const { benefitsCardsData, stepsCardsData } = useLanguageData();
  const firstItemRef = useRef(null);

  return (
    <section
      className="flex flex-row gap-8 min-h-fit scroll-mt-32"
      id="entrepreneurship"
    >
      {/* Left content - will determine the height */}
      <div className="flex flex-col items-start gap-6 flex-[1.5]">
        <div
          className="flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="h-1 w-8 bg-(--color-primary) rounded-full"></div>
          <h1 className="font-semibold text-2xl text-(--color-dark-text) dark:text-white">
            {t("business.title")}
          </h1>
        </div>

        {/* Description - First element */}
        <p
          className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)"
          ref={firstItemRef}
          data-aos="fade-down"
          data-aos-delay="800"
          data-aos-anchor-placement="top-bottom"
          id="business-stagger-trigger"
        >
          {t("business.description")}
        </p>

        {/* Benefits Card - Second element */}
        <div
          className="flex flex-col gap-4 bg-white rounded-md drop-shadow-lg p-6 w-full"
          data-aos="fade-down"
          data-aos-delay="950"
          data-aos-anchor="#business-stagger-trigger"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="font-semibold text-(--color-dark-text) dark:text-white">
            {t("business.benefitsTitle")}
          </h1>
          <div className="grid grid-cols-2 gap-3 gap-x-5">
            {benefitsCardsData.map((item, index) => (
              <div
                className="flex flex-row items-start justify-start gap-2"
                key={index}
              >
                <i
                  className={`${item.icon} mt-1 text-sm text-(--color-primary)`}
                ></i>
                <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Title - Third element */}
        <h1
          className="font-semibold text-(--color-dark-text) dark:text-white"
          data-aos="fade-down"
          data-aos-delay="1100"
          data-aos-anchor="#business-stagger-trigger"
          data-aos-anchor-placement="top-bottom"
        >
          {t("business.stepsTitle")}
        </h1>

        {/* Steps Cards - Each staggered individually */}
        <div className="flex flex-col gap-4 w-full">
          {stepsCardsData.map((card, index) => (
            <div
              className="flex flex-row items-center justify-start bg-white drop-shadow-lg flex-1 rounded-md p-3 gap-2"
              key={index}
              data-aos="fade-down"
              data-aos-delay={1250 + index * 150}
              data-aos-anchor="#business-stagger-trigger"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="flex items-center justify-center bg-(--color-light3-text)/70 rounded-full w-6 h-6 shrink-0">
                <p className="font-medium text-(--color-dark-text) dark:text-white text-sm">
                  {card.order}
                </p>
              </div>
              <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right image - fixed delay like PrefaceSection */}
      <Link
        to="/ceramics"
        className="rounded-md overflow-hidden drop-shadow-lg flex-1"
        data-aos="fade-down"
        data-aos-delay="1250"
        data-aos-anchor="#business-stagger-trigger"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          src={businessBanner}
          alt="Ceramics workshop"
          className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
        />
      </Link>
    </section>
  );
};

export default BusinessSection;
