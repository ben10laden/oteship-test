import React, { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import bannerImage from "../../../assets/banners/about-story-banner.webp";

const AboutSection = () => {
  const { t } = useTranslation("about");
  const paragraphs = t("about.paragraphs", { returnObjects: true });
  const firstParRef = useRef(null);
  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          <div className="flex flex-col gap-8 justify-evenly flex-1">
            <h1
              className="font-bold text-4xl text-(--color-dark-text) dark:text-white"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {t("about.title")}
            </h1>
            {paragraphs.map((item, index) => (
              <p
                className="text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)"
                key={index}
                ref={index === 0 ? firstParRef : null}
                data-aos="fade-right"
                data-aos-delay={800 + index * 150}
                data-aos-anchor={index === 0 ? undefined : "#first-par-trigger"}
                data-aos-anchor-placement="top-bottom"
                id={index === 0 ? "first-par-trigger" : undefined}
              >
                {item}
              </p>
            ))}
          </div>
          <Link
            to="/ceramics"
            className="inset-0 rounded-md max-w-100 block overflow-hidden"
            data-aos="fade-down"
            data-aos-delay="1100"
          >
            <img
              src={bannerImage}
              alt="tets"
              className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
