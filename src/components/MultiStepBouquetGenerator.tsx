import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Heart, DollarSign, Clock, Palette, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { primaryPurposes, specialOccasions, decorationStyles, giftRecipients, styles, budgetRanges } from "@/data/flowers";
import { useFlowers, type FlowerWithParsedFields } from "@/hooks/useFlowers";
import { toast } from "sonner";
import { useCredits } from "@/hooks/useCredits";
import { useSubscription } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";

interface BouquetRecommendation {
  flowers: Array<{ flower: FlowerWithParsedFields; quantity: number }>;
  totalPrice: number;
  style: string;
  occasion: string;
  description: string;
  primaryPurpose: string;
  secondaryChoice: string;
}

const MultiStepBouquetGenerator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [primaryPurpose, setPrimaryPurpose] = useState("");
  const [secondaryChoice, setSecondaryChoice] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [recommendation, setRecommendation] = useState<BouquetRecommendation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { user } = useAuth();
  const { credits, deductCredit } = useCredits();
  const { subscribed } = useSubscription();

  const getSecondaryOptions = () => {
    switch (primaryPurpose) {
      case "special-occasion":
        return specialOccasions;
      case "gift":
        return giftRecipients;
      default:
        return [];
    }
  };

  const getSecondaryLabel = () => {
    switch (primaryPurpose) {
      case "special-occasion":
        return "Which special occasion?";
      case "gift":
        return "Who is this gift for?";
      default:
        return "Select an option";
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1:
        return primaryPurpose !== "";
      case 2:
        return secondaryChoice !== "";
      case 3:
        return selectedStyle !== "" && selectedBudget !== "";
      default:
        return true;
    }
  };

  const generateBouquet = async () => {
    if (!primaryPurpose || !secondaryChoice || !selectedStyle || !selectedBudget) {
      toast.error("Please complete all steps");
      return;
    }

    if (!user) {
      toast.error("Please sign in to generate bouquets");
      return;
    }

    // Check if user has credits or is subscribed
    if (!subscribed && credits <= 0) {
      toast.error("You don't have enough credits. Please subscribe for unlimited access or wait for free credits to refill.");
      return;
    }

    // Deduct credit if not subscribed
    if (!subscribed) {
      const creditDeducted = await deductCredit();
      if (!creditDeducted) {
        return; // Error already shown by deductCredit
      }
    }

    setIsGenerating(true);

    const prompt = `
    You are a florist assistant AI. Based on the user's preferences, respond with a **valid JSON object** that matches this exact structure and includes no text outside of the JSON:

{
  "flowers": [
    {
      "flower": {
        "id": string,
        "name": string,
        "scientificName": string,
        "meaning": string,
        "regions": string[],
        "careInstructions": string,
        "priceRange": { "min": number, "max": number }
      },
      "quantity": number
    }
  ],
  "totalPrice": number,
  "style": string,
  "occasion": string,
  "description": string,
  "primaryPurpose": string,
  "secondaryChoice": string
}

INSTRUCTIONS:
- Generate a bouquet consisting of multiple types of flowers (not just one).
- Carefully select a harmonious combination of flowers that suits the user's specified primary purpose, secondary choice, style, and budget.
- Assign realistic quantities to each flower type so that the total price fits within the user's budget.
- Ensure the bouquet composition reflects appropriate symbolism and seasonal availability if relevant.
- Provide meaningful care instructions and flower details for each flower.
- Fill all fields with accurate and coherent information.
- Return ONLY a compact/minified JSON (no line breaks, no markdown code fences, no extra explanation).
- The key "flowers" must hold an array of **multiple distinct flower objects**, representing a bouquet with varied flower types selected thoughtfully for the user's preferences.

USER INPUT:
- Primary Purpose: ${primaryPurpose}
- Secondary Choice: ${secondaryChoice}
- Style: ${selectedStyle}
- Budget: ${selectedBudget}
- Notes: ${additionalNotes || "None"}

Current date: Wednesday, July 23, 2025, 2:16 PM CEST
`;

    try {
      const response = await fetch("http://localhost:3001/api/deepseek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate bouquet from AI");
      }

      const data = await response.json();

      setRecommendation(data);
      setCurrentStep(5);
      toast.success("Your perfect bouquet has been created!");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Try again.");
    } finally {
      setIsGenerating(false);
    }
};

  // const generateBouquet = async () => {
  //   if (!primaryPurpose || !secondaryChoice || !selectedStyle || !selectedBudget) {
  //     toast.error("Please complete all steps");
  //     return;
  //   }

  //   setIsGenerating(true);
    
  //   // Simulate AI processing
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   // Enhanced AI-like bouquet generation logic
  //   const budget = budgetRanges.find(b => b.label === selectedBudget);
  //   if (!budget) return;

  //   // Filter flowers based on purpose and secondary choice
  //   let suitableFlowers = flowersDatabase;
    
  //   if (primaryPurpose === "special-occasion") {
  //     suitableFlowers = flowersDatabase.filter(flower => 
  //       flower.occasion.includes(secondaryChoice) || 
  //       flower.occasion.some(occ => occ.toLowerCase().includes(secondaryChoice.toLowerCase()))
  //     );
  //   }

  //   const recommendedFlowers: Array<{ flower: Flower; quantity: number }> = [];
  //   let currentPrice = 0;
  //   const targetPrice = (budget.min + budget.max) / 2;

  //   // Enhanced logic for different styles and purposes
  //   if (selectedStyle === "Romantic") {
  //     const roses = suitableFlowers.filter(f => f.name.includes("Rose"));
  //     if (roses.length > 0) {
  //       const quantity = Math.max(6, Math.floor(targetPrice * 0.4 / roses[0].priceRange.max));
  //       recommendedFlowers.push({ flower: roses[0], quantity });
  //       currentPrice += roses[0].priceRange.max * quantity;
  //     }
      
  //     const peonies = flowersDatabase.find(f => f.id === "peony");
  //     if (peonies && currentPrice < targetPrice * 0.7) {
  //       const quantity = Math.max(3, Math.floor((targetPrice - currentPrice) * 0.5 / peonies.priceRange.max));
  //       recommendedFlowers.push({ flower: peonies, quantity });
  //       currentPrice += peonies.priceRange.max * quantity;
  //     }
  //   } else if (selectedStyle === "Cheerful") {
  //     const cheerfulFlowers = flowersDatabase.filter(f => 
  //       f.id === "sunflower" || f.id === "gerbera" || f.id === "chrysanthemum"
  //     );
  //     if (cheerfulFlowers.length > 0) {
  //       const quantity = Math.max(5, Math.floor(targetPrice * 0.6 / cheerfulFlowers[0].priceRange.max));
  //       recommendedFlowers.push({ flower: cheerfulFlowers[0], quantity });
  //       currentPrice += cheerfulFlowers[0].priceRange.max * quantity;
  //     }
  //   } else if (selectedStyle === "Elegant") {
  //     const elegantFlowers = flowersDatabase.filter(f => 
  //       f.id === "lily-white" || f.id === "orchid" || f.id === "calla-lily"
  //     );
  //     if (elegantFlowers.length > 0) {
  //       const quantity = Math.max(4, Math.floor(targetPrice * 0.5 / elegantFlowers[0].priceRange.max));
  //       recommendedFlowers.push({ flower: elegantFlowers[0], quantity });
  //       currentPrice += elegantFlowers[0].priceRange.max * quantity;
  //     }
  //   }

  //   // Add complementary flowers
  //   const babyBreath = flowersDatabase.find(f => f.id === "baby-breath");
  //   if (babyBreath && currentPrice < targetPrice * 0.8) {
  //     recommendedFlowers.push({ flower: babyBreath, quantity: 3 });
  //     currentPrice += babyBreath.priceRange.max * 3;
  //   }

  //   const eucalyptus = flowersDatabase.find(f => f.id === "eucalyptus");
  //   if (eucalyptus && currentPrice < targetPrice * 0.9) {
  //     recommendedFlowers.push({ flower: eucalyptus, quantity: 5 });
  //     currentPrice += eucalyptus.priceRange.max * 5;
  //   }

  //   const bouquetDescription = generateDescription(selectedStyle, secondaryChoice, recommendedFlowers, primaryPurpose);

  //   setRecommendation({
  //     flowers: recommendedFlowers,
  //     totalPrice: Math.round(currentPrice),
  //     style: selectedStyle,
  //     occasion: secondaryChoice,
  //     description: bouquetDescription,
  //     primaryPurpose,
  //     secondaryChoice
  //   });

  //   setCurrentStep(5); // Move to results step
  //   setIsGenerating(false);
  //   toast.success("Your perfect bouquet has been created!");
  // };

  // const generateDescription = (style: string, occasion: string, flowers: Array<{ flower: Flower; quantity: number }>, purpose: string) => {
  //   const flowerNames = flowers.map(f => f.flower.name).join(", ");
  //   const styleDescriptions = {
  //     "Romantic": "A dreamy and passionate arrangement",
  //     "Modern": "A sleek and contemporary design",
  //     "Rustic": "A natural and organic composition",
  //     "Elegant": "A sophisticated and refined arrangement",
  //     "Cheerful": "A bright and uplifting bouquet",
  //     "Peaceful": "A serene and calming collection"
  //   };

  //   const purposeContext = purpose === "gift" ? `as a thoughtful gift for ${occasion}` : 
  //                         purpose === "decoration" ? `to complement your ${occasion} decor` :
  //                         `for your ${occasion}`;

  //   return `${styleDescriptions[style as keyof typeof styleDescriptions]} featuring ${flowerNames}. Perfect ${purposeContext}, this bouquet combines symbolic meaning with stunning visual impact.`;
  // };

  const resetFlow = () => {
    setCurrentStep(1);
    setPrimaryPurpose("");
    setSecondaryChoice("");
    setSelectedStyle("");
    setSelectedBudget("");
    setAdditionalNotes("");
    setRecommendation(null);
  };

  return (
    <section id="arrange" className="py-20 bg-gradient-nature">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our AI analyzes your preferences step-by-step to craft a personalized bouquet
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={`flex items-center ${step < 4 ? 'mr-4' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step ? <CheckCircle className="h-4 w-4" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-8 h-0.5 ml-4 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="card-elegant p-8">
          {/* Step 1: Primary Purpose */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-accent-floral" />
                  What's the primary purpose?
                </CardTitle>
                <CardDescription>
                  Choose the main reason for your flower arrangement
                </CardDescription>
              </CardHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {primaryPurposes.map((purpose) => (
                  <Card
                    key={purpose.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      primaryPurpose === purpose.id ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'
                    }`}
                    onClick={() => setPrimaryPurpose(purpose.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-lg mb-2">{purpose.label}</h3>
                      <p className="text-muted-foreground text-sm">{purpose.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Secondary Choice */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-accent-floral" />
                  {getSecondaryLabel()}
                </CardTitle>
                <CardDescription>
                  Tell us more details about your selection
                </CardDescription>
              </CardHeader>
              
              {(() => {
                const options = getSecondaryOptions();
                const commonOptions = options.slice(0, 6); // First 6 as common
                const hasMoreOptions = options.length > 6;
                
                return (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {commonOptions.map((option) => (
                      <Card
                        key={option}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          secondaryChoice === option ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'
                        }`}
                        onClick={() => setSecondaryChoice(option)}
                      >
                        <CardContent className="p-4 text-center">
                          <h3 className="font-medium text-base">{option}</h3>
                        </CardContent>
                      </Card>
                    ))}
                    
                    {hasMoreOptions && (
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md border-dashed ${
                          !commonOptions.includes(secondaryChoice) && secondaryChoice ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'
                        }`}
                      >
                        <CardContent className="p-4 text-center">
                          <h3 className="font-medium text-base mb-2">Others</h3>
                          <Select value={secondaryChoice} onValueChange={setSecondaryChoice}>
                            <SelectTrigger className="w-full h-8 text-xs">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-background border shadow-lg z-50">
                              {options.slice(6).map((option) => (
                                <SelectItem key={option} value={option} className="text-sm">
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* Step 3: Style and Budget */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Palette className="h-5 w-5 mr-2 text-accent-floral" />
                  Style & Budget Preferences
                </CardTitle>
                <CardDescription>
                  Choose your preferred style and budget range
                </CardDescription>
              </CardHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>
          )}

          {/* Step 4: Additional Notes and Generate */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-accent-floral" />
                  Final Touches
                </CardTitle>
                <CardDescription>
                  Add any special preferences or requirements
                </CardDescription>
              </CardHeader>

              {/* Summary */}
              <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold">Your Selections:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    {primaryPurposes.find(p => p.id === primaryPurpose)?.label}
                  </Badge>
                  <Badge variant="outline">{secondaryChoice}</Badge>
                  <Badge variant="outline">{selectedStyle}</Badge>
                  <Badge variant="outline">{selectedBudget}</Badge>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Additional Notes (Optional)</label>
                <Textarea
                  placeholder="Any specific colors, flower preferences, or special requirements..."
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
            </div>
          )}

          {/* Step 5: Results */}
          {currentStep === 5 && recommendation && (
            <div className="space-y-6">
              <CardHeader className="pb-6 px-0">
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-accent-floral" />
                  Your Perfect Bouquet
                </CardTitle>
              </CardHeader>

              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{recommendation.style}</Badge>
                    <Badge variant="outline">{recommendation.secondaryChoice}</Badge>
                    <Badge variant="outline">{primaryPurposes.find(p => p.id === recommendation.primaryPurpose)?.label}</Badge>
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
                        <div className="text-sm text-muted-foreground italic">{flower.scientific_name}</div>
                        <div className="text-sm text-primary font-medium mt-1">{flower.meaning}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Available: {flower.availability.join(", ")}
                        </div>
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
                      <span className="font-medium text-foreground">{flower.name}:</span> {flower.care_instructions}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="floral" size="lg" className="flex-1">
                    Order This Bouquet
                  </Button>
                  <Button variant="outline" onClick={resetFlow} className="px-8">
                    Start Over
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < 4 && (
                <Button 
                  onClick={nextStep} 
                  disabled={!canProceedFromStep(currentStep)}
                  className="flex items-center"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default MultiStepBouquetGenerator;