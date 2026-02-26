import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("home");
  return (
    <div data-aos="fade-down" data-aos-delay="400" className="flex-1">
      <div className="flex flex-col p-5 bg-white dark:bg-(--color-dark2-text) rounded-md gap-5 drop-shadow-md flex-1 transition-colors duration-200 h-full">
        <h2 className="text-(--color-dark-text) dark:text-white font-bold text-xl">
          {t("contact.sendMessage")}
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-(--color-bg-dark) dark:text-(--color-bg-primary) mb-1">
              {t("contact.name")}
            </label>
            <input
              type="text"
              required
              className="text-(--color-dark-text) dark:text-(--color-bg-primary) w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) dark:focus:ring-(--color-primary2) transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--color-bg-dark) dark:text-(--color-bg-primary) mb-1">
              {t("contact.email")}
            </label>
            <input
              type="email"
              required
              className="text-(--color-dark-text) dark:text-(--color-bg-primary) w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) dark:focus:ring-(--color-primary2) transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--color-bg-dark) dark:text-(--color-bg-primary) mb-1">
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              pattern="[0-9+() -]*"
              required
              className="text-(--color-dark-text) dark:text-(--color-bg-primary) w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) dark:focus:ring-(--color-primary2) transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--color-dark2-text) dark:text-(--color-bg-primary) mb-1">
              {t("contact.message")}
            </label>
            <textarea
              rows="4"
              className="text-(--color-dark-text) dark:text-(--color-bg-primary) w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-(--color-primary) dark:focus:ring-(--color-primary2) transition-all duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-(--color-primary) hover:bg-(--color-primary-hover) dark:bg-(--color-primary2) dark:hover:bg-(--color-primary2-hover) text-white text-base font-bold py-2 rounded-md transition-all duration-200 cursor-pointer"
          >
            {t("contact.sendButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
