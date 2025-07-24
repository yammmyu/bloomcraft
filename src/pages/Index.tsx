import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { CreditsDisplay } from "@/components/CreditsDisplay";
import MultiStepBouquetGenerator from "@/components/MultiStepBouquetGenerator";
import FlowerRecognition from "@/components/FlowerRecognition";
import FlowerLibrary from "@/components/FlowerLibrary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <CreditsDisplay />
      </div>
      <MultiStepBouquetGenerator />
      <FlowerRecognition />
      <FlowerLibrary />
      <Footer />
    </div>
  );
};

export default Index;
