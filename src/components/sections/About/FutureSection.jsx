import React from "react";
import { useTranslation } from "react-i18next";

const FutureSection = () => {
  const { t } = useTranslation("about");
  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-20 transition-colors duration-200">
      <div
        className="flex flex-col items-center justify-between gap-6 max-w-7xl mx-auto"
        data-aos="zoom-out"
      >
        <h1 className="font-bold text-4xl text-(--color-dark-text) dark:text-white">
          {t("future.title")}
        </h1>

        <h1 className="text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-4xl text-center">
          {t("future.description")}
        </h1>
      </div>
    </section>
  );
};

export default FutureSection;
