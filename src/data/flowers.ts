export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  colors: string[];
  meaning: string;
  occasion: string[];
  season: string[];
  priceRange: { min: number; max: number };
  careInstructions: string;
  symbolism: string;
  description: string;
  image?: string;
}

export const flowersDatabase: Flower[] = [
  {
    id: "rose-red",
    name: "Red Rose",
    scientificName: "Rosa rubiginosa",
    colors: ["Deep Red", "Crimson", "Burgundy"],
    meaning: "Passionate love, romance, courage",
    occasion: ["Valentine's Day", "Anniversary", "Proposal", "Romantic Dinner"],
    season: ["Spring", "Summer", "Fall"],
    priceRange: { min: 3, max: 8 },
    careInstructions: "Cut stems underwater, change water daily, keep in cool location",
    symbolism: "The red rose is the ultimate symbol of passionate love and deep emotion",
    description: "Classic symbol of love with velvety petals and intoxicating fragrance"
  },
  {
    id: "rose-white",
    name: "White Rose",
    scientificName: "Rosa alba",
    colors: ["Pure White", "Cream", "Ivory"],
    meaning: "Pure love, new beginnings, remembrance",
    occasion: ["Wedding", "Sympathy", "New Baby", "Graduation"],
    season: ["Spring", "Summer", "Fall"],
    priceRange: { min: 3, max: 7 },
    careInstructions: "Trim stems at angle, use clean vase, add flower food",
    symbolism: "Represents purity, innocence, and new beginnings",
    description: "Elegant and timeless with pristine white petals symbolizing pure intentions"
  },
  {
    id: "peony",
    name: "Peony",
    scientificName: "Paeonia lactiflora",
    colors: ["Pink", "White", "Coral", "Red"],
    meaning: "Honor, wealth, good fortune, happy marriage",
    occasion: ["Wedding", "Anniversary", "Graduation", "Spring Celebration"],
    season: ["Late Spring", "Early Summer"],
    priceRange: { min: 8, max: 15 },
    careInstructions: "Cut stems early morning, place in deep water immediately",
    symbolism: "Associated with honor and wealth in many cultures",
    description: "Lush, full blooms with ruffled petals and sweet fragrance"
  },
  {
    id: "lily-white",
    name: "White Lily",
    scientificName: "Lilium candidum",
    colors: ["Pure White"],
    meaning: "Rebirth, purity, motherhood",
    occasion: ["Funeral", "Sympathy", "Easter", "Mother's Day"],
    season: ["Summer"],
    priceRange: { min: 5, max: 12 },
    careInstructions: "Remove pollen to prevent staining, trim stems regularly",
    symbolism: "Symbol of rebirth and the soul's return to innocence",
    description: "Majestic trumpet-shaped blooms with powerful symbolic meaning"
  },
  {
    id: "tulip",
    name: "Tulip",
    scientificName: "Tulipa gesneriana",
    colors: ["Red", "Pink", "Yellow", "Purple", "White", "Orange"],
    meaning: "Perfect love, elegance, grace",
    occasion: ["Spring Wedding", "Easter", "Mother's Day", "Apology"],
    season: ["Spring"],
    priceRange: { min: 2, max: 5 },
    careInstructions: "Keep in cool water, trim stems regularly, avoid direct sunlight",
    symbolism: "Represents deep love and elegance",
    description: "Simple yet sophisticated cup-shaped blooms in vibrant colors"
  },
  {
    id: "sunflower",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    colors: ["Bright Yellow", "Orange", "Red"],
    meaning: "Loyalty, adoration, longevity, happiness",
    occasion: ["Summer Wedding", "Graduation", "Get Well", "Friendship"],
    season: ["Summer", "Early Fall"],
    priceRange: { min: 4, max: 8 },
    careInstructions: "Use tall vase, change water frequently, trim stems underwater",
    symbolism: "Represents unwavering faith and loyalty",
    description: "Bold and cheerful with large golden petals that follow the sun"
  },
  {
    id: "baby-breath",
    name: "Baby's Breath",
    scientificName: "Gypsophila paniculata",
    colors: ["White", "Light Pink"],
    meaning: "Innocence, purity, everlasting love",
    occasion: ["Wedding", "Baby Shower", "Baptism", "Any occasion as filler"],
    season: ["Summer", "Fall"],
    priceRange: { min: 3, max: 6 },
    careInstructions: "Mist lightly, keep stems in shallow water, dries beautifully",
    symbolism: "Represents the purity of emotion and everlasting love",
    description: "Delicate clusters of tiny white flowers perfect for adding texture"
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    colors: ["Silver-Green", "Blue-Green"],
    meaning: "Protection, abundance, strength",
    occasion: ["Any occasion as greenery", "Spa themed events", "Modern weddings"],
    season: ["Year-round"],
    priceRange: { min: 4, max: 10 },
    careInstructions: "Crush stems to release oils, mist regularly, very long-lasting",
    symbolism: "Represents protection and healing",
    description: "Aromatic silvery leaves that add natural elegance and fragrance"
  }
];

export const occasions = [
  "Wedding",
  "Anniversary",
  "Valentine's Day",
  "Mother's Day",
  "Birthday",
  "Graduation",
  "Sympathy",
  "Apology",
  "Get Well",
  "New Baby",
  "Housewarming",
  "Thank You",
  "Just Because"
];

export const styles = [
  { name: "Romantic", description: "Soft colors, roses, peonies" },
  { name: "Modern", description: "Clean lines, minimalist design" },
  { name: "Rustic", description: "Wildflowers, natural textures" },
  { name: "Elegant", description: "Sophisticated, luxury flowers" },
  { name: "Cheerful", description: "Bright colors, sunflowers" },
  { name: "Peaceful", description: "Soft whites, gentle pastels" }
];

export const budgetRanges = [
  { label: "Budget-friendly", range: "$20-50", min: 20, max: 50 },
  { label: "Standard", range: "$50-100", min: 50, max: 100 },
  { label: "Premium", range: "$100-200", min: 100, max: 200 },
  { label: "Luxury", range: "$200+", min: 200, max: 500 }
];