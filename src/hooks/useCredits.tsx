import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";

interface CreditsContextType {
  credits: number;
  loading: boolean;
  refreshCredits: () => Promise<void>;
  deductCredit: () => Promise<boolean>;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export const CreditsProvider = ({ children }: { children: ReactNode }) => {
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const refreshCredits = async () => {
    if (!user) {
      setCredits(0);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("credits")
        .select("credits_remaining")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching credits:", error);
        setCredits(0);
      } else {
        setCredits(data?.credits_remaining || 0);
      }
    } catch (error) {
      console.error("Error refreshing credits:", error);
      setCredits(0);
    } finally {
      setLoading(false);
    }
  };

  const deductCredit = async (): Promise<boolean> => {
    if (!user) return false;

    try {
      const { data, error } = await supabase.rpc("deduct_credits", {
        user_uuid: user.id,
        amount: 1,
      });

      if (error) {
        console.error("Error deducting credits:", error);
        toast({
          title: "Error",
          description: "Failed to deduct credit. Please try again.",
          variant: "destructive",
        });
        return false;
      }

      if (data) {
        setCredits((prev) => Math.max(0, prev - 1));
        return true;
      } else {
        toast({
          title: "Insufficient Credits",
          description: "You don't have enough credits to generate a bouquet. Please subscribe for unlimited access.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error("Error deducting credits:", error);
      toast({
        title: "Error",
        description: "Failed to deduct credit. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    refreshCredits();
  }, [user]);

  return (
    <CreditsContext.Provider value={{ credits, loading, refreshCredits, deductCredit }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (context === undefined) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
};