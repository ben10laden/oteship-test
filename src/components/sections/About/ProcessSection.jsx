import React, { useRef } from "react";
import ImageCardSmall from "../../common/ImageCardSmall";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const ProcessSection = () => {
  const { t } = useTranslation("about");
  const { processCardsData } = useLanguageData();
  const scrollContainerRef = useRef(null);

  // Fixed card width
  const CARD_WIDTH = 320; // pixels
  const CARD_GAP = 32; // 8 * 4 = 32px (gap-8 in Tailwind)
  const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

  // Scroll by one card with boundary checking
  const scrollByCard = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const maxScroll = container.scrollWidth - containerWidth;

      let newScrollPosition;

      if (direction === "left") {
        newScrollPosition = Math.max(0, currentScroll - TOTAL_CARD_WIDTH);
      } else {
        newScrollPosition = Math.min(
          maxScroll,
          currentScroll + TOTAL_CARD_WIDTH,
        );
      }

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-(--color-dark-text) py-20 px-4 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10 max-w-7xl mx-auto">
        <h1
          className="font-bold text-4xl text-(--color-dark-text) dark:text-white text-center"
          data-aos="fade-up"
        >
          {t("process.title")}
        </h1>

        {/* Carousel container with relative positioning for buttons */}
        <div className="relative w-full">
          {/* Scrollable cards container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row items-stretch gap-8 overflow-x-auto scroll-smooth py-4 drop-shadow-md"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Hide scrollbar for Chrome/Safari/Edge */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {processCardsData.map((card, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                <ImageCardSmall
                  to={card.to}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  aosDelay={300 + index * 150}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow - positioned relative to the container */}
          <button
            onClick={() => scrollByCard("left")}
            className="cursor-pointer absolute z-1 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-(--color-dark2-text) rounded-full p-3 drop-shadow-lg transition-all"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow - positioned relative to the container */}
          <button
            onClick={() => scrollByCard("right")}
            className="cursor-pointer absolute z-1 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-(--color-dark2-text) rounded-full p-3 drop-shadow-lg transition-all"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
