import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MultiStepBouquetGenerator from "@/components/MultiStepBouquetGenerator";
import FlowerRecognition from "@/components/FlowerRecognition";
import FlowerLibrary from "@/components/FlowerLibrary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MultiStepBouquetGenerator />
      <FlowerRecognition />
      <FlowerLibrary />
      <Footer />
    </div>
  );
};

export default Index;
