import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlowerLibrary from "@/components/FlowerLibrary";

const FlowerLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Flower Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the beauty and meaning behind each flower. Learn about their symbolism, 
              care instructions, and perfect occasions to help you make the ideal choice.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Flower Library Component */}
          <FlowerLibrary searchQuery={searchQuery} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlowerLibraryPage;