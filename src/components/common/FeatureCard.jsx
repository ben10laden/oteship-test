import { Link } from "react-router";

const FeatureCard = ({ icon, title, description, to, aosDelay, index }) => {
  const cardContent = (
    <>
      <i
        className={`${icon} text-3xl text-(--color-primary) dark:text-(--color-primary2)`}
      ></i>
      <h1 className="text-xl font-bold text-(--color-dark-text) dark:text-white w-full">
        {title}
      </h1>
      <p className="w-full text-start text-base text-(--color-bg-dark) dark:text-(--color-bg-primary)">
        {description}
      </p>
    </>
  );

  // If it's the first card (index === 0), render as <a> tag
  if (index === 0) {
    return (
      <div
        data-aos="fade-down"
        data-aos-delay={aosDelay}
        data-aos-offset="50"
        className="flex-1"
      >
        <a
          href={to}
          className="[transition:all_200ms,translate_300ms] flex flex-col justify-start items-start gap-3 bg-white dark:bg-(--color-dark2-text) drop-shadow-md rounded-md flex-1 p-5 min-w-0 hover:shadow-xl/4 hover:-translate-y-1 h-full"
        >
          {cardContent}
        </a>
      </div>
    );
  }

  // For all other cards, render as Link
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={aosDelay}
      data-aos-offset="50"
      className="flex-1"
    >
      <Link
        to={to}
        className="[transition:all_200ms,translate_300ms] flex flex-col justify-start items-start gap-3 bg-white dark:bg-(--color-dark2-text) drop-shadow-md rounded-md flex-1 p-5 min-w-0 hover:shadow-xl/4 hover:-translate-y-1 h-full"
      >
        {cardContent}
      </Link>
    </div>
  );
};

export default FeatureCard;
