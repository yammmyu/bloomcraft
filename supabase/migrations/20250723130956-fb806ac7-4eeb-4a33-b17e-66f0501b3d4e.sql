-- Create credits table to track user credits
CREATE TABLE public.credits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  credits_remaining INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.credits ENABLE ROW LEVEL SECURITY;

-- Create policies for credits table
CREATE POLICY "Users can view their own credits" 
ON public.credits 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own credits" 
ON public.credits 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "System can insert credits for users" 
ON public.credits 
FOR INSERT 
WITH CHECK (true);

-- Create subscribers table to track subscription information
CREATE TABLE public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  subscribed BOOLEAN NOT NULL DEFAULT false,
  subscription_tier TEXT,
  subscription_end TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for subscribers
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for subscribers table
CREATE POLICY "Users can view their own subscription" 
ON public.subscribers 
FOR SELECT 
USING (auth.uid() = user_id OR email = auth.email());

CREATE POLICY "System can update subscriptions" 
ON public.subscribers 
FOR UPDATE 
USING (true);

CREATE POLICY "System can insert subscriptions" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Add trigger for automatic timestamp updates on credits
CREATE TRIGGER update_credits_updated_at
BEFORE UPDATE ON public.credits
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add trigger for automatic timestamp updates on subscribers
CREATE TRIGGER update_subscribers_updated_at
BEFORE UPDATE ON public.subscribers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update the handle_new_user function to also create credits
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    NEW.email
  );
  
  -- Give new users 5 free credits
  INSERT INTO public.credits (user_id, credits_remaining)
  VALUES (NEW.id, 5);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Create function to deduct credits
CREATE OR REPLACE FUNCTION public.deduct_credits(user_uuid UUID, amount INTEGER DEFAULT 1)
RETURNS BOOLEAN AS $$
DECLARE
  current_credits INTEGER;
BEGIN
  -- Get current credits
  SELECT credits_remaining INTO current_credits
  FROM public.credits
  WHERE user_id = user_uuid;
  
  -- Check if user has enough credits
  IF current_credits >= amount THEN
    -- Deduct credits
    UPDATE public.credits
    SET credits_remaining = credits_remaining - amount,
        updated_at = now()
    WHERE user_id = user_uuid;
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Create function to add credits (for subscription refills)
CREATE OR REPLACE FUNCTION public.add_credits(user_uuid UUID, amount INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE public.credits
  SET credits_remaining = credits_remaining + amount,
      updated_at = now()
  WHERE user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';