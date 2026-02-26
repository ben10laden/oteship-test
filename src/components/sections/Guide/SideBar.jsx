// src/components/layouts/SideBar.jsx
import React from "react";

const SideBar = () => {
  const handleEmploymentClick = (e, cardType) => {
    e.preventDefault();

    // Scroll to employment section
    const employmentSection = document.getElementById("employment");
    if (employmentSection) {
      employmentSection.scrollIntoView({ behavior: "smooth" });
    }

    // Trigger the card animation if the function exists
    if (window.animateEmploymentCard) {
      window.animateEmploymentCard(cardType);
    }
  };

  return (
    <aside
      className="flex flex-col h-full w-full drop-shadow-lg/10"
      data-aos="fade-right"
    >
      {/* First section - stays at top */}
      <div className="flex flex-col gap-2 p-5 bg-(--color-bg-primary) dark:bg-(--color-bg-dark) rounded-t-md border-b border-(--color-light3-text)/40">
        <div className="flex flex-row items-center justify-start gap-2.5 ">
          <div className="bg-(--color-primary) dark:bg-(--color-primary2) rounded-md p-1.5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-open-icon lucide-book-open"
            >
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
          </div>
          <h1 className="font-bold text-lg text-(--color-dark-text) dark:text-white">
            Erasmus+ Guide
          </h1>
        </div>

        <p className="text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-60">
          Entrepreneurship development and promotion practices
        </p>
      </div>

      {/* Navigation section - scrollable if needed */}
      <div className="border-b border-(--color-light3-text)/40 bg-white dark:bg-(--color-dark-text) flex flex-col gap-1.5 p-5 overflow-y-auto [&_a]:hover:bg-(--color-primary)/5 [&_a_i]:text-slate-900/55 [&_a:hover_i]:text-(--color-primary) [&_a]:hover:text-(--color-primary) [&_a]:p-1.5 [&_a]:px-3 [&_a]:rounded-md">
        <a
          href="#preface"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-regular fa-comment text-sm"></i>
          Preface
        </a>
        <a
          href="#legislation"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-solid fa-scale-balanced text-sm"></i>1. Legislation
        </a>
        <a
          href="#employment"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-solid fa-briefcase text-sm"></i>2. Employment Type
        </a>
        <div className="text-sm flex flex-col ml-6.5 [&_a]:hover:bg-transparent [&_a]:text-(--color-dark2-text)">
          <a
            href="#employment"
            onClick={(e) => handleEmploymentClick(e, "public")}
            className="cursor-pointer hover:text-(--color-primary) transition-colors"
          >
            A. Public Sector
          </a>
          <a
            href="#employment"
            onClick={(e) => handleEmploymentClick(e, "private")}
            className="cursor-pointer hover:text-(--color-primary) transition-colors"
          >
            B. Private Sector
          </a>
          <a
            href="#employment"
            onClick={(e) => handleEmploymentClick(e, "freelance")}
            className="cursor-pointer hover:text-(--color-primary) transition-colors"
          >
            C. Freelancing
          </a>
        </div>
        <a
          href="#skills"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-solid fa-graduation-cap text-sm"></i>Skill
          Acquisition
        </a>
        <a
          href="#entrepreneurship"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-solid fa-rocket text-sm"></i>
          Entrepreneurship
        </a>
        <a
          href="#family_municipality"
          className="flex flex-row items-center justify-start gap-2 text-(--color-dark-text) dark:text-white"
        >
          <i className="fa-solid fa-user-group text-sm"></i>Family and
          Municipality
        </a>
      </div>

      <div className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-5 border-b border-(--color-light3-text)/40">
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <span className="fi fi-eu text-4xl block scale-135"></span>
          </div>

          <h1 className="text-(--color-bg-dark) dark:text-(--color-bg-primary) text-xs max-w-40">
            Co-funded by the Erasmus+ Programme
          </h1>
        </div>
      </div>
      {/* Spacer div - fills all remaining space with white background */}
      <div className="bg-white dark:bg-(--color-dark-text) flex-1 rounded-b-md"></div>
    </aside>
  );
};

export default SideBar;
