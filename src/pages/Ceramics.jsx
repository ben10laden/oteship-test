import AboutSection from "../components/sections/Workshops/AboutSection";
import GallerySection from "../components/sections/Workshops/GallerySection";
import HeroSection from "../components/sections/Workshops/HeroSection";

export default function Ceramics() {
  return (
    <div className="bg-(--color-bg-primary) flex-1">
      <HeroSection />
      <AboutSection />
      <GallerySection />
    </div>
  );
}
