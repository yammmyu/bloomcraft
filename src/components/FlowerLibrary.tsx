import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Heart, DollarSign, Calendar, Leaf, Loader2 } from "lucide-react";
import { useFlowers } from "@/hooks/useFlowers";
import flowersEducationImage from "@/assets/flowers-education.jpg";

interface FlowerLibraryProps {
  searchQuery?: string;
}

const FlowerLibrary = ({ searchQuery = "" }: FlowerLibraryProps) => {
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { flowers, loading, error } = useFlowers();

  // Update search term when prop changes
  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  const filteredFlowers = flowers.filter(flower => {
    const matchesSearch = flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (flower.meaning || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (flower.scientific_name || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === "all") return matchesSearch;
    
    return matchesSearch && flower.occasions.some(occ => 
      occ.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  });

  const categories = [
    { id: "all", name: "All Flowers", icon: Leaf },
    { id: "wedding", name: "Wedding", icon: Heart },
    { id: "sympathy", name: "Sympathy", icon: Heart },
    { id: "romantic", name: "Romantic", icon: Heart },
    { id: "celebration", name: "Celebration", icon: Heart }
  ];

  return (
    <section id="learn" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Botanical Knowledge
            </span>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Discover the Language of Flowers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive library of flowers, their meanings, and symbolic significance across cultures
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative">
          <img 
            src={flowersEducationImage} 
            alt="Educational flower collection"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-medium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-serif font-semibold mb-2">
                Every Flower Tells a Story
              </h3>
              <p className="text-white/90">
                Learn the rich history and cultural significance behind each bloom
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search flowers by name, meaning, or scientific name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading flowers...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground mb-2">Failed to load flowers</h3>
            <p className="text-muted-foreground">{error}</p>
          </div>
        )}

        {/* Flowers Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlowers.map((flower) => (
              <Card key={flower.id} className="card-elegant overflow-hidden">
                {/* Flower Image */}
                {flower.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={flower.image_url} 
                      alt={flower.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif text-xl text-foreground">
                      {flower.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {flower.price_range}
                    </div>
                  </div>
                  <CardDescription className="italic text-muted-foreground">
                    {flower.scientific_name}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {flower.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-accent-floral" />
                      Meaning
                    </h4>
                    <p className="text-sm text-primary font-medium mb-2">{flower.meaning}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {flower.symbolism}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {flower.occasions.slice(0, 3).map((occasion) => (
                        <Badge key={occasion} variant="secondary" className="text-xs">
                          {occasion}
                        </Badge>
                      ))}
                      {flower.occasions.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{flower.occasions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Care Tips</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {flower.care_instructions}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Available:</span>
                      <span>{flower.availability.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredFlowers.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground mb-2">No flowers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlowerLibrary;