const OpportunitiesCard = ({ icon, title, description, aosDelay }) => {
  return (
    <div className="flex-1" data-aos="fade-down" data-aos-delay={aosDelay}>
      <div className="flex flex-col justify-center items-center gap-3 bg-white/10 drop-shadow-md rounded-md flex-1 p-5 min-w-0 transition-colors duration-200 h-full">
        <i
          className={`${icon} text-3xl text-(--color-gold) dark:text-(--color-gold2) transition-transform duration-300 group-hover:scale-110`}
        ></i>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="w-full text-center text-base text-(--color-bg-primary)">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
