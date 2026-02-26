// Optimized image loader with lazy loading and pre-processing
const imageModules = import.meta.glob(
  "../../assets/workshops/*.{jpg,png,jpeg,webp}",
  {
    eager: false, // Change to false for better initial load
  },
);

// Create a function to load images on demand
export const loadWorkshopImages = async () => {
  const modules = await Promise.all(
    Object.values(imageModules).map((loader) => loader()),
  );

  return modules.map((mod) => ({
    src: mod.default,
  }));
};

// For backward compatibility - this loads all images eagerly
const imageModulesEager = import.meta.glob(
  "../../assets/workshops/*.{jpg,png,jpeg,webp}",
  { eager: true },
);

export const wsImagesArray = Object.values(imageModulesEager).map(
  (mod) => mod.default,
);
