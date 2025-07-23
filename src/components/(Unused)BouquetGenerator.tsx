import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Heart, DollarSign, Clock, Palette } from "lucide-react";
import { flowersDatabase, occasions, styles, budgetRanges, type Flower } from "@/data/flowers";
import { toast } from "sonner";

interface BouquetRecommendation {
  flowers: Array<{ flower: Flower; quantity: number }>;
  totalPrice: number;
  style: string;
  occasion: string;
  description: string;
}

const BouquetGenerator = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [recommendation, setRecommendation] = useState<BouquetRecommendation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBouquet = async () => {
    if (!selectedOccasion || !selectedStyle || !selectedBudget) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // AI-like bouquet generation logic
    const budget = budgetRanges.find(b => b.label === selectedBudget);
    if (!budget) return;

    const suitableFlowers = flowersDatabase.filter(flower => 
      flower.occasion.includes(selectedOccasion) || 
      flower.occasion.some(occ => occ.toLowerCase().includes(selectedOccasion.toLowerCase()))
    );

    const recommendedFlowers: Array<{ flower: Flower; quantity: number }> = [];
    let currentPrice = 0;
    const targetPrice = (budget.min + budget.max) / 2;

    // Add main flowers based on style and occasion
    if (selectedStyle === "Romantic") {
      const roses = suitableFlowers.filter(f => f.name.includes("Rose"));
      if (roses.length > 0) {
        const quantity = Math.max(6, Math.floor(targetPrice * 0.4 / roses[0].priceRange.max));
        recommendedFlowers.push({ flower: roses[0], quantity });
        currentPrice += roses[0].priceRange.max * quantity;
      }
      
      const peonies = flowersDatabase.find(f => f.id === "peony");
      if (peonies && currentPrice < targetPrice * 0.7) {
        const quantity = Math.max(3, Math.floor((targetPrice - currentPrice) * 0.5 / peonies.priceRange.max));
        recommendedFlowers.push({ flower: peonies, quantity });
        currentPrice += peonies.priceRange.max * quantity;
      }
    } else if (selectedStyle === "Cheerful") {
      const sunflowers = flowersDatabase.find(f => f.id === "sunflower");
      if (sunflowers) {
        const quantity = Math.max(5, Math.floor(targetPrice * 0.6 / sunflowers.priceRange.max));
        recommendedFlowers.push({ flower: sunflowers, quantity });
        currentPrice += sunflowers.priceRange.max * quantity;
      }
    } else if (selectedStyle === "Elegant") {
      const lilies = flowersDatabase.find(f => f.id === "lily-white");
      if (lilies) {
        const quantity = Math.max(4, Math.floor(targetPrice * 0.5 / lilies.priceRange.max));
        recommendedFlowers.push({ flower: lilies, quantity });
        currentPrice += lilies.priceRange.max * quantity;
      }
    }

    // Add complementary flowers
    const babyBreath = flowersDatabase.find(f => f.id === "baby-breath");
    if (babyBreath && currentPrice < targetPrice * 0.8) {
      recommendedFlowers.push({ flower: babyBreath, quantity: 3 });
      currentPrice += babyBreath.priceRange.max * 3;
    }

    const eucalyptus = flowersDatabase.find(f => f.id === "eucalyptus");
    if (eucalyptus && currentPrice < targetPrice * 0.9) {
      recommendedFlowers.push({ flower: eucalyptus, quantity: 5 });
      currentPrice += eucalyptus.priceRange.max * 5;
    }

    const bouquetDescription = generateDescription(selectedStyle, selectedOccasion, recommendedFlowers);

    setRecommendation({
      flowers: recommendedFlowers,
      totalPrice: Math.round(currentPrice),
      style: selectedStyle,
      occasion: selectedOccasion,
      description: bouquetDescription
    });

    setIsGenerating(false);
    toast.success("Your perfect bouquet has been created!");
  };

  const generateDescription = (style: string, occasion: string, flowers: Array<{ flower: Flower; quantity: number }>) => {
    const flowerNames = flowers.map(f => f.flower.name).join(", ");
    const styleDescriptions = {
      "Romantic": "A dreamy and passionate arrangement",
      "Modern": "A sleek and contemporary design",
      "Rustic": "A natural and organic composition",
      "Elegant": "A sophisticated and refined arrangement",
      "Cheerful": "A bright and uplifting bouquet",
      "Peaceful": "A serene and calming collection"
    };

    return `${styleDescriptions[style as keyof typeof styleDescriptions]} featuring ${flowerNames}. Perfect for ${occasion.toLowerCase()}, this bouquet combines symbolic meaning with stunning visual impact.`;
  };

  return (
    <section id="arrange" className="py-20 bg-gradient-nature">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              AI Bouquet Designer
            </span>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Create Your Perfect Arrangement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your preferences to craft a personalized bouquet with meaningful flowers and perfect pricing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Generator Form */}
          <Card className="card-elegant p-8">
            <CardHeader className="pb-6">
              <CardTitle className="font-serif text-2xl flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-accent-floral" />
                Design Your Bouquet
              </CardTitle>
              <CardDescription>
                Tell us about your vision and we'll create the perfect arrangement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Occasion *</label>
                <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    {occasions.map((occasion) => (
                      <SelectItem key={occasion} value={occasion}>
                        {occasion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Style *</label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style.name} value={style.name}>
                        <div>
                          <div className="font-medium">{style.name}</div>
                          <div className="text-xs text-muted-foreground">{style.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Budget Range *</label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget.label} value={budget.label}>
                        {budget.label} ({budget.range})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Additional Notes</label>
                <Textarea
                  placeholder="Any specific preferences, colors, or requirements..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                onClick={generateBouquet}
                disabled={isGenerating}
                variant="default"
                size="lg"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Your Bouquet...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate My Bouquet
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Recommendation Display */}
          <Card className="card-elegant p-8">
            <CardHeader className="pb-6">
              <CardTitle className="font-serif text-2xl flex items-center">
                <Heart className="h-5 w-5 mr-2 text-accent-floral" />
                Your Personalized Bouquet
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recommendation ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{recommendation.style}</Badge>
                      <Badge variant="outline">{recommendation.occasion}</Badge>
                    </div>
                    <div className="flex items-center text-lg font-semibold text-primary">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {recommendation.totalPrice}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {recommendation.description}
                  </p>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Flowers in Your Bouquet:</h4>
                    {recommendation.flowers.map(({ flower, quantity }) => (
                      <div key={flower.id} className="flex justify-between items-start p-4 rounded-lg bg-secondary/30">
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{flower.name}</div>
                          <div className="text-sm text-muted-foreground italic">{flower.scientificName}</div>
                          <div className="text-sm text-primary font-medium mt-1">{flower.meaning}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">×{quantity}</div>
                          <div className="text-sm text-muted-foreground">
                            ${flower.priceRange.min}-${flower.priceRange.max} each
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Care Instructions:
                    </h4>
                    {recommendation.flowers.map(({ flower }) => (
                      <div key={`care-${flower.id}`} className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{flower.name}:</span> {flower.careInstructions}
                      </div>
                    ))}
                  </div>

                  <Button variant="floral" size="lg" className="w-full">
                    Order This Bouquet
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-floral rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form to get your personalized bouquet recommendation
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BouquetGenerator;