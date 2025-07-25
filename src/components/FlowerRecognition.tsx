import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Upload, Loader2, CheckCircle, AlertCircle, Eye } from "lucide-react";
import { pipeline, env } from '@huggingface/transformers';
import { toast } from "sonner";
import { useFlowers } from "@/hooks/useFlowers";
import flowerAIImage from "@/assets/flower-ai-recognition.jpg";

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

interface RecognitionResult {
  label: string;
  score: number;
  flowerInfo?: any;
}

const FlowerRecognition = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<RecognitionResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const { flowers } = useFlowers();

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const analyzeImage = useCallback(async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    setResults([]);

    try {
      console.log('Starting image analysis...');
      
      // Create image classifier pipeline
      const classifier = await pipeline(
        'image-classification',
        'google/vit-base-patch16-224',
        { device: 'webgpu' }
      );

      console.log('Classifier loaded, processing image...');

      // Load and process the image  
      const imageElement = await loadImage(file);
      
      // Convert to canvas for compatibility with the classifier
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context not available');
      
      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;
      ctx.drawImage(imageElement, 0, 0);
      
      const results = await classifier(canvas);
      
      console.log('Classification results:', results);

      // Filter and map results to our flower database
      const processedResults = results
        .slice(0, 5) // Top 5 results
        .map((result: any) => {
          // Try to match with our flower database
          const matchedFlower = flowers.find(flower => 
            flower.name.toLowerCase().includes(result.label.toLowerCase()) ||
            result.label.toLowerCase().includes(flower.name.toLowerCase()) ||
            result.label.toLowerCase().includes('flower') ||
            result.label.toLowerCase().includes('rose') ||
            result.label.toLowerCase().includes('tulip') ||
            result.label.toLowerCase().includes('lily') ||
            result.label.toLowerCase().includes('sunflower')
          );

          return {
            label: result.label,
            score: result.score,
            flowerInfo: matchedFlower
          };
        });

      setResults(processedResults);
      toast.success("Image analysis complete!");
      
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError("Failed to analyze image. Please try again with a different image.");
      toast.error("Failed to analyze image");
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please select an image file");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    analyzeImage(file);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const triggerCameraCapture = () => {
    cameraInputRef.current?.click();
  };

  const clearResults = () => {
    setSelectedImage(null);
    setResults([]);
    setError(null);
  };

  return (
    <section id="identify" className="py-20 gradient-nature">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              AI-Powered Recognition
            </span>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Identify Any Flower Instantly
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload a photo or take a picture, and our AI will identify the flower species with detailed information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <Card className="card-elegant p-8">
            <CardHeader className="pb-6">
              <CardTitle className="font-serif text-2xl flex items-center">
                <Eye className="h-5 w-5 mr-2 text-accent-floral" />
                Upload Your Flower Photo
              </CardTitle>
              <CardDescription>
                Take a clear photo of the flower for best recognition results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Demo Image */}
              <div className="relative">
                <img 
                  src={flowerAIImage} 
                  alt="AI flower recognition demo"
                  className="w-full h-48 object-cover rounded-lg shadow-soft"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg flex items-end">
                  <p className="p-4 text-white text-sm">
                    Advanced AI technology for accurate flower identification
                  </p>
                </div>
              </div>

              {/* Upload Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={triggerFileSelect}
                  disabled={isAnalyzing}
                  className="h-16 flex flex-col gap-1"
                >
                  <Upload className="h-5 w-5" />
                  <span className="text-sm">Choose Photo</span>
                </Button>

                <Button
                  variant="elegant"
                  size="lg"
                  onClick={triggerCameraCapture}
                  disabled={isAnalyzing}
                  className="h-16 flex flex-col gap-1"
                >
                  <Camera className="h-5 w-5" />
                  <span className="text-sm">Take Photo</span>
                </Button>
              </div>

              {/* Hidden file inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Selected Image Preview */}
              {selectedImage && (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Selected flower"
                      className="w-full h-64 object-cover rounded-lg shadow-soft"
                    />
                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                          <p className="text-sm">Analyzing flower...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {!isAnalyzing && (
                    <Button variant="outline" onClick={clearResults} className="w-full">
                      Clear & Try Another
                    </Button>
                  )}
                </div>
              )}

              {/* Analysis Status */}
              {isAnalyzing && (
                <Alert>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <AlertDescription>
                    Our AI is analyzing your flower image... This may take a few moments.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="card-elegant p-8">
            <CardHeader className="pb-6">
              <CardTitle className="font-serif text-2xl flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-accent-floral" />
                Recognition Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {results.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Here are the most likely matches for your flower:
                  </p>
                  
                  {results.map((result, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground capitalize">
                            {result.label.replace(/_/g, ' ')}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Confidence: {Math.round(result.score * 100)}%
                          </p>
                        </div>
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {index === 0 ? "Best Match" : `Match ${index + 1}`}
                        </Badge>
                      </div>

                      {result.flowerInfo && (
                        <div className="space-y-3 pt-3 border-t border-border/50">
                          <div>
                            <h5 className="font-medium text-foreground mb-1">Meaning</h5>
                            <p className="text-sm text-primary">{result.flowerInfo.meaning}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-foreground mb-1">Description</h5>
                            <p className="text-sm text-muted-foreground">
                              {result.flowerInfo.symbolism}
                            </p>
                          </div>

                          <div>
                            <h5 className="font-medium text-foreground mb-1">Perfect For</h5>
                            <div className="flex flex-wrap gap-1">
                              {result.flowerInfo.occasions.slice(0, 3).map((occasion: string) => (
                                <Badge key={occasion} variant="outline" className="text-xs">
                                  {occasion}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium text-foreground mb-1">Care Tips</h5>
                            <p className="text-sm text-muted-foreground">
                              {result.flowerInfo.care_instructions}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  <Button variant="floral" size="lg" className="w-full mt-6">
                    Create Bouquet with This Flower
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    Upload or take a photo to identify your flower
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Make sure the flower is clearly visible and well-lit for best results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="card-elegant mt-12 p-6">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-lg">Tips for Best Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Take photos in natural lighting when possible</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Focus on a single flower for accurate identification</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Include both petals and leaves when possible</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FlowerRecognition;