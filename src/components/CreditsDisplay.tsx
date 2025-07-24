import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCredits } from "@/hooks/useCredits";
import { useSubscription } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";
import { Coins, Crown, Sparkles } from "lucide-react";

export const CreditsDisplay = () => {
  const { credits, loading: creditsLoading } = useCredits();
  const { subscribed, subscriptionTier, createCheckout, openCustomerPortal, loading: subLoading } = useSubscription();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-primary" />
              <span className="font-medium">
                {creditsLoading ? "..." : credits} Credits
              </span>
            </div>
            
            {subscribed && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Crown className="h-3 w-3" />
                {subscriptionTier || "Premium"}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            {subscribed ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openCustomerPortal}
                disabled={subLoading}
              >
                Manage Subscription
              </Button>
            ) : (
              <Button 
                size="sm" 
                onClick={createCheckout}
                disabled={subLoading}
                className="flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3" />
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>
        
        {!subscribed && credits === 0 && (
          <div className="mt-3 p-2 bg-muted/50 rounded-md">
            <p className="text-sm text-muted-foreground">
              No credits remaining. Subscribe for unlimited bouquet generation!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};