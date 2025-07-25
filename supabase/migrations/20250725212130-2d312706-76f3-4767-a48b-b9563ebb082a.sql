-- Create flowers table with comprehensive flower data
CREATE TABLE public.flowers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  scientific_name TEXT,
  colors TEXT[] NOT NULL DEFAULT '{}',
  meaning TEXT,
  symbolism TEXT,
  price_range TEXT NOT NULL,
  availability TEXT[] NOT NULL DEFAULT '{}',
  care_instructions TEXT,
  occasions TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.flowers ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (flowers are public data)
CREATE POLICY "Flowers are viewable by everyone" 
ON public.flowers 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to insert/update (admin functionality)
CREATE POLICY "Authenticated users can insert flowers" 
ON public.flowers 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update flowers" 
ON public.flowers 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_flowers_updated_at
BEFORE UPDATE ON public.flowers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial flower data
INSERT INTO public.flowers (name, scientific_name, colors, meaning, symbolism, price_range, availability, care_instructions, occasions, image_url) VALUES
('Rose', 'Rosa', ARRAY['Red', 'Pink', 'White', 'Yellow', 'Orange', 'Purple'], 'Love and passion', 'The ultimate symbol of love, beauty, and perfection. Different colors convey different meanings.', '$$', ARRAY['Year-round'], 'Keep in cool water, trim stems at an angle, change water every 2-3 days. Remove wilted petals and leaves below waterline.', ARRAY['Valentine''s Day', 'Anniversaries', 'Romantic occasions', 'Apologies'], 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7'),

('Tulip', 'Tulipa', ARRAY['Red', 'Pink', 'Yellow', 'Purple', 'White', 'Orange'], 'Perfect love', 'Symbol of deep love, elegance, and grace. Associated with rebirth and new beginnings.', '$', ARRAY['Spring'], 'Cut stems underwater, use cold water, keep in cool location. Do not mix with daffodils.', ARRAY['Spring celebrations', 'Easter', 'Mother''s Day'], 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a'),

('Sunflower', 'Helianthus annuus', ARRAY['Yellow', 'Orange', 'Red'], 'Adoration and loyalty', 'Symbol of happiness, optimism, and unwavering faith. Represents the sun and positive energy.', '$', ARRAY['Summer', 'Fall'], 'Use deep water, cut stems at angle, remove excess leaves. Change water frequently.', ARRAY['Summer celebrations', 'Friendship', 'Congratulations'], 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d'),

('Lily', 'Lilium', ARRAY['White', 'Pink', 'Yellow', 'Orange', 'Red'], 'Purity and rebirth', 'Symbol of purity, rebirth, and motherhood. White lilies represent virtue and innocence.', '$$', ARRAY['Spring', 'Summer'], 'Remove pollen-heavy stamens, use lukewarm water, trim stems regularly. Keep away from cats (toxic).', ARRAY['Funerals', 'Easter', 'Mother''s Day', 'Sympathy'], 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433'),

('Carnation', 'Dianthus caryophyllus', ARRAY['Pink', 'Red', 'White', 'Yellow', 'Purple'], 'Fascination and distinction', 'Symbol of love, fascination, and distinction. Pink carnations represent a mother''s love.', '$', ARRAY['Year-round'], 'Very long-lasting. Cut stems underwater, use flower food, remove wilted blooms to encourage others.', ARRAY['Mother''s Day', 'Teacher appreciation', 'Graduation'], 'https://images.unsplash.com/photo-1594736797933-d0acc43d0034'),

('Chrysanthemum', 'Chrysanthemum', ARRAY['Yellow', 'White', 'Red', 'Pink', 'Purple'], 'Joy and optimism', 'Symbol of joy, optimism, and long life. In many cultures, represents honor and loyalty.', '$', ARRAY['Fall'], 'Mist petals lightly, use cool water, trim stems regularly. Remove spent blooms.', ARRAY['Fall celebrations', 'Thanksgiving', 'Friendship'], 'https://images.unsplash.com/photo-1515263487990-61b07816b739'),

('Daisy', 'Bellis perennis', ARRAY['White', 'Pink', 'Yellow'], 'Innocence and purity', 'Symbol of innocence, new beginnings, and loyal love. Represents true love and purity.', '$', ARRAY['Spring', 'Summer'], 'Very easy to care for. Use cool water, trim stems, change water every few days.', ARRAY['New baby', 'Friendship', 'New beginnings'], 'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7'),

('Orchid', 'Orchidaceae', ARRAY['Purple', 'White', 'Pink', 'Yellow'], 'Luxury and strength', 'Symbol of luxury, beauty, and strength. Represents exotic beauty and love.', '$$$', ARRAY['Year-round'], 'Use lukewarm water, avoid overwatering, keep in humid environment. Mist around (not on) flowers.', ARRAY['Luxury gifts', 'Corporate events', 'Sophisticated occasions'], 'https://images.unsplash.com/photo-1518709268805-4e9042af2176'),

('Peony', 'Paeonia', ARRAY['Pink', 'White', 'Red', 'Coral'], 'Honor and wealth', 'Symbol of honor, wealth, and romance. Represents a happy life and marriage.', '$$', ARRAY['Late spring'], 'Cut early morning, use warm water initially then cool, support heavy blooms. Short vase life but spectacular.', ARRAY['Weddings', 'Anniversaries', 'Luxury occasions'], 'https://images.unsplash.com/photo-1588267451837-5f5997edcfc5'),

('Hydrangea', 'Hydrangea', ARRAY['Blue', 'Pink', 'White', 'Purple'], 'Gratitude and understanding', 'Symbol of heartfelt emotions, gratitude, and understanding. Represents abundance.', '$$', ARRAY['Summer'], 'Submerge entire flower head in water for 30 minutes, then use deep water. Mist petals.', ARRAY['Thank you gifts', 'Sympathy', 'Apologies'], 'https://images.unsplash.com/photo-1594736797933-d0acc43d0034'),

('Iris', 'Iris', ARRAY['Purple', 'Blue', 'White', 'Yellow'], 'Faith and wisdom', 'Symbol of faith, wisdom, and courage. Represents messages and communication.', '$$', ARRAY['Spring'], 'Cut underwater, use cool water, trim stems regularly. Handle delicate petals carefully.', ARRAY['Graduation', 'Encouragement', 'Faith-based occasions'], 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'),

('Daffodil', 'Narcissus', ARRAY['Yellow', 'White'], 'New beginnings', 'Symbol of rebirth, new beginnings, and eternal life. Represents hope and renewal.', '$', ARRAY['Spring'], 'Use cool water, do not mix with other flowers initially (toxic sap), change water frequently.', ARRAY['Easter', 'Spring celebrations', 'New beginnings'], 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a'),

('Gerbera Daisy', 'Gerbera jamesonii', ARRAY['Orange', 'Pink', 'Yellow', 'Red', 'White'], 'Cheerfulness', 'Symbol of innocence, purity, and cheerfulness. Represents beauty and joy.', '$', ARRAY['Year-round'], 'Cut stems underwater, use warm water, support heavy flower heads. Change water frequently.', ARRAY['Birthday', 'Get well', 'Cheerful occasions'], 'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7'),

('Baby''s Breath', 'Gypsophila', ARRAY['White', 'Pink'], 'Everlasting love', 'Symbol of everlasting love, purity, and innocence. Perfect complement to other flowers.', '$', ARRAY['Year-round'], 'Very long-lasting. Minimal care needed, use cool water, trim stems.', ARRAY['Weddings', 'Baby showers', 'Delicate arrangements'], 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'),

('Gladiolus', 'Gladiolus', ARRAY['Pink', 'Red', 'White', 'Yellow', 'Purple'], 'Strength of character', 'Symbol of strength, honor, and moral integrity. Represents remembrance.', '$$', ARRAY['Summer'], 'Cut when first buds show color, use tall vase, remove spent blooms to encourage others.', ARRAY['Sympathy', 'Honor ceremonies', 'Remembrance'], 'https://images.unsplash.com/photo-1515263487990-61b07816b739'),

('Lavender', 'Lavandula', ARRAY['Purple', 'Blue'], 'Serenity and calm', 'Symbol of serenity, grace, and calmness. Represents devotion and peace.', '$', ARRAY['Summer'], 'Hang upside down to dry, use minimal water when fresh, highly fragrant.', ARRAY['Relaxation', 'Aromatherapy', 'Calm occasions'], 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'),

('Forget-Me-Not', 'Myosotis', ARRAY['Blue', 'Pink', 'White'], 'True love and remembrance', 'Symbol of true love, remembrance, and faithful love. Represents memories.', '$', ARRAY['Spring', 'Summer'], 'Use cool water, trim delicate stems carefully, change water frequently.', ARRAY['Memorial services', 'Remembrance', 'True love'], 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'),

('Marigold', 'Tagetes', ARRAY['Orange', 'Yellow', 'Red'], 'Passion and creativity', 'Symbol of passion, creativity, and positive emotions. Represents the warmth of the sun.', '$', ARRAY['Summer', 'Fall'], 'Very hardy, use cool water, remove spent blooms, long-lasting.', ARRAY['Fall celebrations', 'Día de los Muertos', 'Creative events'], 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d'),

('Snapdragon', 'Antirrhinum', ARRAY['Pink', 'Red', 'Yellow', 'White', 'Purple'], 'Gracious strength', 'Symbol of grace and strength. Represents deception and graciousness in folklore.', '$', ARRAY['Spring', 'Summer'], 'Cut when half the flowers are open, use cool water, remove spent blooms.', ARRAY['Mixed bouquets', 'Garden parties', 'Whimsical occasions'], 'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7'),

('Zinnia', 'Zinnia', ARRAY['Red', 'Pink', 'Orange', 'Yellow', 'Purple'], 'Thoughts of friends', 'Symbol of remembrance, endurance, and daily remembrance. Represents thoughts of absent friends.', '$', ARRAY['Summer', 'Fall'], 'Very long-lasting, use warm water, trim stems regularly, remove wilted blooms.', ARRAY['Friendship', 'Memorial', 'Long-distance relationships'], 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d');