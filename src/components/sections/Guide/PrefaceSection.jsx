import React, { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import prefaceBanner from "../../../assets/banners/guide-preface-banner.webp";

const PrefaceSection = () => {
  const { t } = useTranslation("guide");
  const prefaceParagraphs = t("preface.paragraphs", { returnObjects: true });
  const bodies = t("preface.bodies", { returnObjects: true });
  const firstItemRef = useRef(null);

  // Combine all elements that need staggering
  const staggeredElements = [
    ...prefaceParagraphs.map((text) => ({ type: "paragraph", content: text })),
    { type: "title", content: t("preface.bodiesTitle") },
    ...bodies.map((body) => ({ type: "body", content: body })),
  ];

  return (
    <section
      className="flex flex-col items-start gap-4 scroll-mt-30"
      id="preface"
    >
      <div
        className="flex flex-row items-center justify-center gap-2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="h-1 w-8 bg-(--color-primary) rounded-full"></div>
        <h1 className="font-semibold text-2xl text-(--color-dark-text) dark:text-white">
          {t("preface.title")}
        </h1>
      </div>
      <div className="flex flex-row justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2">
            {staggeredElements.map((element, index) => {
              if (element.type === "paragraph") {
                return (
                  <p
                    className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) pb-4"
                    key={`para-${index}`}
                    ref={index === 0 ? firstItemRef : null}
                    dangerouslySetInnerHTML={{ __html: element.content }}
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor={
                      index === 0 ? undefined : "#first-stagger-trigger"
                    }
                    data-aos-anchor-placement="top-bottom"
                    id={index === 0 ? "first-stagger-trigger" : undefined}
                  />
                );
              } else if (element.type === "title") {
                return (
                  <h1
                    key={`title-${index}`}
                    className="text-sm font-semibold text-(--color-dark-text) dark:text-white"
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor="#first-stagger-trigger"
                    data-aos-anchor-placement="top-bottom"
                  >
                    {element.content}
                  </h1>
                );
              } else if (element.type === "body") {
                return (
                  <div
                    key={`body-${index}`}
                    className="flex flex-row items-center justify-start gap-1"
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor="#first-stagger-trigger"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <i className="fa-solid fa-location-dot text-(--color-primary)"></i>
                    <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                      {element.content}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <Link
          to="/ceramics"
          className="inset-0 rounded-md max-h-64 min-w-1/2 block overflow-hidden drop-shadow-lg"
          data-aos="fade-down"
          data-aos-delay="1100"
        >
          <img
            src={prefaceBanner}
            alt="tets"
            className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>
      </div>
    </section>
  );
};

export default PrefaceSection;
