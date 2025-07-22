import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bouquet.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful flower arrangement"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-accent-floral mr-2" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              AI-Powered Floral Design
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Craft Perfect
            </span>
            <br />
            <span className="text-foreground">Flower Arrangements</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover the language of flowers with our AI assistant. Create stunning bouquets tailored to any occasion, complete with meanings and care instructions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('arrange')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-medium"
            >
              Create My Bouquet
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById('identify')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-medium"
            >
              Identify Flowers
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-floral/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;