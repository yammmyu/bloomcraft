import { useState } from "react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { useCredits } from "@/hooks/useCredits";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const { user } = useAuth();
  const { subscribed, subscriptionTier, createCheckout, loading: subLoading } = useSubscription();
  const { credits } = useCredits();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    await createCheckout();
    setIsLoading(false);
  };

  const features = {
    free: [
      "5 free bouquet generations",
      "Basic flower identification",
      "Access to flower library",
      "Standard arrangement styles",
    ],
    premium: [
      "Unlimited bouquet generations",
      "Advanced AI flower recognition",
      "Premium arrangement styles",
      "Custom color palettes",
      "Priority customer support",
      "Export high-resolution designs",
      "Save and organize your bouquets",
      "Early access to new features",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start creating beautiful bouquets for free, or unlock unlimited creativity with Premium
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="relative border-2">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Free</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Perfect for getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {user && !subscribed && (
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    Current Plan • {credits} credits remaining
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.free.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>
                  {user ? "Current Plan" : "Get Started Free"}
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className={`relative border-2 ${subscribed ? 'border-primary bg-primary/5' : 'border-primary/20'}`}>
              {!subscribed && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Premium</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Unlimited creativity unleashed
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {subscribed && (
                  <Badge variant="default" className="w-fit mx-auto mt-2">
                    <Crown className="h-4 w-4 mr-1" />
                    Active • {subscriptionTier}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.premium.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {subscribed ? (
                  <Button variant="default" className="w-full" disabled>
                    <Crown className="h-4 w-4 mr-2" />
                    Current Plan
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={handleSubscribe}
                    disabled={isLoading || subLoading || !user}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    {!user ? "Sign In to Subscribe" : "Upgrade to Premium"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I change my plan anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade, downgrade, or cancel your subscription at any time through your profile page.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">What happens to my credits?</h3>
                  <p className="text-muted-foreground">
                    Free users get 5 credits that refresh monthly. Premium users get unlimited generations.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    Your free account includes 5 bouquet generations to try our service before upgrading.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Need help?</h3>
                  <p className="text-muted-foreground">
                    Contact our support team anytime. Premium users get priority support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;