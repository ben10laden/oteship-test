import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const SchoolCardBig = ({
  to,
  image,
  title,
  description,
  country,
  location,
  imagePosition = "left", // 'left' or 'right'
  aosDelay,
}) => {
  const { t } = useTranslation("about");
  return (
    <div
      className={`flex flex-row items-stretch justify-between w-full flex-1 gap-12 ${
        imagePosition === "right" ? "flex-row-reverse" : ""
      }`}
      data-aos={imagePosition === "right" ? "fade-left" : "fade-right"}
      data-aos-delay={aosDelay}
    >
      <Link
        to={to}
        className="inset-0 w-full max-h-80 block overflow-hidden rounded-md flex-1"
      >
        <img
          src={image}
          alt="Hands-On Learning"
          className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
        />
      </Link>
      <div className="flex flex-col justify-start items-start flex-1 gap-6">
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-xl font-bold text-(--color-dark-text) dark:text-white w-full line-clamp-2">
            {title}
          </h1>
          <Link
            to={location}
            className="link-container flex flex-row items-center justify-center gap-1.5 text-sm text-(--color-primary) dark:text-(--color-primary2)"
          >
            <i className="fa-solid fa-location-dot"></i>
            <p className="hover-anim [--hover-color:var(--color-primary)] dark:[--hover-color:var(--color-primary2)]">
              {country}
            </p>
          </Link>
        </div>
        <p className="w-full text-start text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl">
          {description}
        </p>
        <Link
          to={to}
          className="link-container text-sm text-(--color-primary) dark:text-(--color-primary2)"
        >
          <p className="hover-anim [--hover-color:var(--color-primary)] dark:[--hover-color:var(--color-primary2)]">
            {t("schoolCardBig.learnMore")}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCardBig;
