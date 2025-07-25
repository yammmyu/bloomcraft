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
  regions: string[];
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
    description: "Classic symbol of love with velvety petals and intoxicating fragrance",
    regions: ["North America", "Europe", "Asia"]
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
    description: "Elegant and timeless with pristine white petals symbolizing pure intentions",
    regions: ["Europe", "North America", "Asia"]
  },
  {
    id: "rose-pink",
    name: "Pink Rose",
    scientificName: "Rosa damascena",
    colors: ["Light Pink", "Deep Pink", "Blush"],
    meaning: "Gratitude, grace, admiration",
    occasion: ["Mother's Day", "Thank You", "Friendship", "Birthday"],
    season: ["Spring", "Summer", "Fall"],
    priceRange: { min: 3, max: 7 },
    careInstructions: "Regular water changes, cool location, trim stems daily",
    symbolism: "Expresses appreciation and gentle emotions",
    description: "Soft and romantic with delicate pink hues conveying tenderness",
    regions: ["Middle East", "Europe", "North America"]
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
    description: "Lush, full blooms with ruffled petals and sweet fragrance",
    regions: ["China", "Asia", "Europe", "North America"]
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
    description: "Majestic trumpet-shaped blooms with powerful symbolic meaning",
    regions: ["Mediterranean", "Europe", "Asia"]
  },
  {
    id: "lily-oriental",
    name: "Oriental Lily",
    scientificName: "Lilium orientale",
    colors: ["Pink", "White", "Yellow", "Red"],
    meaning: "Magnificence, majesty, wealth",
    occasion: ["Wedding", "Anniversary", "Celebration"],
    season: ["Summer", "Fall"],
    priceRange: { min: 6, max: 14 },
    careInstructions: "Keep away from pets, remove pollen, cool water",
    symbolism: "Represents magnificence and royal beauty",
    description: "Large, fragrant blooms with exotic spotted patterns",
    regions: ["Asia", "Japan", "China"]
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
    description: "Simple yet sophisticated cup-shaped blooms in vibrant colors",
    regions: ["Netherlands", "Turkey", "Europe", "North America"]
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
    description: "Bold and cheerful with large golden petals that follow the sun",
    regions: ["North America", "South America", "Europe"]
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
    description: "Delicate clusters of tiny white flowers perfect for adding texture",
    regions: ["Europe", "Asia", "North America"]
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
    description: "Aromatic silvery leaves that add natural elegance and fragrance",
    regions: ["Australia", "California", "Mediterranean"]
  },
  {
    id: "hydrangea",
    name: "Hydrangea",
    scientificName: "Hydrangea macrophylla",
    colors: ["Blue", "Pink", "White", "Purple"],
    meaning: "Gratitude, grace, heartfelt emotions",
    occasion: ["Wedding", "Anniversary", "Thank You", "Sympathy"],
    season: ["Summer", "Fall"],
    priceRange: { min: 6, max: 12 },
    careInstructions: "Keep stems in deep water, mist petals, cool location",
    symbolism: "Expresses deep understanding and heartfelt emotions",
    description: "Large, full flower heads with densely packed small blooms",
    regions: ["Asia", "North America", "Europe"]
  },
  {
    id: "orchid",
    name: "Orchid",
    scientificName: "Orchidaceae",
    colors: ["Purple", "White", "Pink", "Yellow"],
    meaning: "Luxury, strength, beauty, love",
    occasion: ["Anniversary", "Congratulations", "Luxury Events"],
    season: ["Year-round"],
    priceRange: { min: 12, max: 25 },
    careInstructions: "Minimal water, indirect light, high humidity",
    symbolism: "Symbol of refined beauty and exotic charm",
    description: "Exotic and sophisticated with intricate petal patterns",
    regions: ["Tropical Asia", "South America", "Australia"]
  },
  {
    id: "carnation",
    name: "Carnation",
    scientificName: "Dianthus caryophyllus",
    colors: ["Pink", "Red", "White", "Yellow"],
    meaning: "Love, fascination, distinction",
    occasion: ["Mother's Day", "Wedding", "Sympathy", "Birthday"],
    season: ["Year-round"],
    priceRange: { min: 2, max: 4 },
    careInstructions: "Trim stems under water, change water regularly",
    symbolism: "Traditional symbol of motherly love",
    description: "Ruffled petals with a spicy fragrance and long-lasting blooms",
    regions: ["Mediterranean", "Europe", "North America"]
  },
  {
    id: "chrysanthemum",
    name: "Chrysanthemum",
    scientificName: "Chrysanthemum morifolium",
    colors: ["Yellow", "Orange", "Red", "Purple", "White"],
    meaning: "Joy, optimism, honor, loyalty",
    occasion: ["Birthday", "Celebration", "Fall Wedding", "Honor"],
    season: ["Fall", "Winter"],
    priceRange: { min: 3, max: 7 },
    careInstructions: "Cool water, trim stems, remove lower leaves",
    symbolism: "Symbol of joy and long life in many cultures",
    description: "Full, rounded blooms with layered petals in warm colors",
    regions: ["Asia", "China", "Japan", "Europe"]
  },
  {
    id: "dahlia",
    name: "Dahlia",
    scientificName: "Dahlia pinnata",
    colors: ["Red", "Pink", "Orange", "Purple", "Yellow", "White"],
    meaning: "Elegance, dignity, commitment, change",
    occasion: ["Wedding", "Anniversary", "Birthday", "Celebration"],
    season: ["Summer", "Fall"],
    priceRange: { min: 5, max: 10 },
    careInstructions: "Deep water, cool location, trim stems regularly",
    symbolism: "Represents commitment and lasting bonds",
    description: "Geometric petals forming perfect spheres in bold colors",
    regions: ["Mexico", "Central America", "North America"]
  },
  {
    id: "iris",
    name: "Iris",
    scientificName: "Iris germanica",
    colors: ["Purple", "Blue", "Yellow", "White"],
    meaning: "Faith, wisdom, valor, hope",
    occasion: ["Graduation", "Sympathy", "Encouragement", "Friendship"],
    season: ["Spring", "Summer"],
    priceRange: { min: 4, max: 8 },
    careInstructions: "Shallow water, cool location, handle gently",
    symbolism: "Ancient symbol of faith and wisdom",
    description: "Distinctive three-petaled blooms with elegant form",
    regions: ["Europe", "Mediterranean", "Asia", "North America"]
  },
  {
    id: "freesia",
    name: "Freesia",
    scientificName: "Freesia refracta",
    colors: ["White", "Pink", "Purple", "Yellow", "Red"],
    meaning: "Friendship, trust, thoughtfulness",
    occasion: ["Friendship", "Thank You", "Wedding", "Spring Events"],
    season: ["Spring", "Summer"],
    priceRange: { min: 3, max: 6 },
    careInstructions: "Cool water, support stems, fragrant blooms",
    symbolism: "Symbol of lasting friendship and trust",
    description: "Delicate tubular blooms with sweet fragrance",
    regions: ["South Africa", "Mediterranean", "California"]
  },
  {
    id: "gerbera",
    name: "Gerbera Daisy",
    scientificName: "Gerbera jamesonii",
    colors: ["Pink", "Orange", "Yellow", "Red", "White"],
    meaning: "Cheerfulness, beauty, purity",
    occasion: ["Birthday", "Get Well", "Celebration", "Friendship"],
    season: ["Spring", "Summer", "Fall"],
    priceRange: { min: 4, max: 7 },
    careInstructions: "Clean water, support heavy blooms, good drainage",
    symbolism: "Represents cheerful thoughts and beauty",
    description: "Large, vibrant daisy-like flowers with bold colors",
    regions: ["South Africa", "Asia", "South America"]
  },
  {
    id: "delphinium",
    name: "Delphinium",
    scientificName: "Delphinium elatum",
    colors: ["Blue", "Purple", "Pink", "White"],
    meaning: "Big-hearted, cheerful, encouragement",
    occasion: ["Wedding", "Celebration", "Encouragement", "Summer Events"],
    season: ["Summer"],
    priceRange: { min: 6, max: 12 },
    careInstructions: "Deep water, cool location, support tall stems",
    symbolism: "Symbol of an open heart and fun",
    description: "Tall spikes of densely packed small flowers",
    regions: ["Europe", "North America", "Asia"]
  },
  {
    id: "anemone",
    name: "Anemone",
    scientificName: "Anemone coronaria",
    colors: ["White", "Pink", "Purple", "Red", "Blue"],
    meaning: "Protection, anticipation, forsaken love",
    occasion: ["Wedding", "Sympathy", "Spring Events", "Romantic"],
    season: ["Spring", "Summer"],
    priceRange: { min: 5, max: 9 },
    careInstructions: "Cool water, gentle handling, short stems",
    symbolism: "Ancient symbol of protection against evil",
    description: "Papery petals with dark centers and delicate appearance",
    regions: ["Mediterranean", "Europe", "Asia"]
  },
  {
    id: "ranunculus",
    name: "Ranunculus",
    scientificName: "Ranunculus asiaticus",
    colors: ["Pink", "White", "Yellow", "Orange", "Red"],
    meaning: "Radiant charm, attractiveness",
    occasion: ["Wedding", "Anniversary", "Spring Events", "Romantic"],
    season: ["Spring", "Summer"],
    priceRange: { min: 4, max: 8 },
    careInstructions: "Cool water, handle gently, short vase life",
    symbolism: "Represents radiant charm and attractiveness",
    description: "Layers of delicate, tissue-like petals forming full blooms",
    regions: ["Asia", "Europe", "North Africa"]
  },
  {
    id: "protea",
    name: "Protea",
    scientificName: "Protea cynaroides",
    colors: ["Pink", "Red", "White", "Yellow"],
    meaning: "Courage, transformation, diversity",
    occasion: ["Modern Wedding", "Celebration", "Unique Events"],
    season: ["Year-round"],
    priceRange: { min: 10, max: 18 },
    careInstructions: "Minimal water, dry location, long-lasting",
    symbolism: "Symbol of transformation and courage",
    description: "Exotic sculptural blooms with unique spiky appearance",
    regions: ["South Africa", "Australia"]
  },
  {
    id: "lavender",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    colors: ["Purple", "Blue", "White"],
    meaning: "Serenity, grace, calmness, devotion",
    occasion: ["Wedding", "Relaxation", "Spa Events", "Sympathy"],
    season: ["Summer"],
    priceRange: { min: 3, max: 6 },
    careInstructions: "Minimal water, dry location, aromatic",
    symbolism: "Ancient symbol of purity and cleanliness",
    description: "Fragrant spikes of tiny purple flowers with calming scent",
    regions: ["Mediterranean", "Europe", "North America"]
  },
  {
    id: "wisteria",
    name: "Wisteria",
    scientificName: "Wisteria sinensis",
    colors: ["Purple", "Blue", "White", "Pink"],
    meaning: "Welcome, honor, longevity",
    occasion: ["Spring Wedding", "Celebration", "Honor", "Welcome"],
    season: ["Spring"],
    priceRange: { min: 8, max: 15 },
    careInstructions: "Support cascading stems, cool water",
    symbolism: "Symbol of honor and welcome in Asian cultures",
    description: "Cascading clusters of fragrant pea-like flowers",
    regions: ["Asia", "China", "Japan", "North America"]
  },
  {
    id: "gardenia",
    name: "Gardenia",
    scientificName: "Gardenia jasminoides",
    colors: ["White", "Cream"],
    meaning: "Purity, peace, love, refinement",
    occasion: ["Wedding", "Sympathy", "Mother's Day", "Elegant Events"],
    season: ["Summer"],
    priceRange: { min: 7, max: 12 },
    careInstructions: "Cool water, high humidity, handle gently",
    symbolism: "Symbol of purity and peace",
    description: "Waxy white petals with intense, sweet fragrance",
    regions: ["Asia", "China", "Southern United States"]
  },
  {
    id: "jasmine",
    name: "Jasmine",
    scientificName: "Jasminum officinale",
    colors: ["White", "Yellow", "Pink"],
    meaning: "Love, beauty, sensuality, grace",
    occasion: ["Wedding", "Romantic Events", "Evening", "Celebration"],
    season: ["Summer", "Fall"],
    priceRange: { min: 5, max: 10 },
    careInstructions: "Cool water, evening fragrance strongest",
    symbolism: "Sacred flower symbolizing divine love",
    description: "Small star-shaped flowers with intoxicating evening fragrance",
    regions: ["Asia", "Mediterranean", "Middle East"]
  },
  {
    id: "magnolia",
    name: "Magnolia",
    scientificName: "Magnolia grandiflora",
    colors: ["White", "Pink", "Purple"],
    meaning: "Nobility, perseverance, dignity",
    occasion: ["Wedding", "Memorial", "Southern Events", "Honor"],
    season: ["Spring", "Summer"],
    priceRange: { min: 8, max: 16 },
    careInstructions: "Cool water, handle large blooms carefully",
    symbolism: "Ancient symbol of nobility and perseverance",
    description: "Large, fragrant blooms with glossy leaves",
    regions: ["Southern United States", "Asia", "South America"]
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    scientificName: "Strelitzia reginae",
    colors: ["Orange", "Blue", "Yellow"],
    meaning: "Freedom, magnificence, joy",
    occasion: ["Tropical Wedding", "Celebration", "Exotic Events"],
    season: ["Year-round"],
    priceRange: { min: 12, max: 20 },
    careInstructions: "Warm water, support heavy blooms, mist regularly",
    symbolism: "Symbol of freedom and magnificent beauty",
    description: "Exotic orange and blue blooms resembling a bird in flight",
    regions: ["South Africa", "Hawaii", "California"]
  },
  {
    id: "anthurium",
    name: "Anthurium",
    scientificName: "Anthurium andraeanum",
    colors: ["Red", "Pink", "White", "Purple"],
    meaning: "Hospitality, abundance, happiness",
    occasion: ["Tropical Wedding", "Housewarming", "Business Opening"],
    season: ["Year-round"],
    priceRange: { min: 8, max: 15 },
    careInstructions: "Warm water, high humidity, clean leaves",
    symbolism: "Symbol of hospitality and abundance",
    description: "Glossy heart-shaped spathes with prominent spadix",
    regions: ["South America", "Caribbean", "Hawaii"]
  },
  {
    id: "calla-lily",
    name: "Calla Lily",
    scientificName: "Zantedeschia aethiopica",
    colors: ["White", "Pink", "Purple", "Yellow", "Orange"],
    meaning: "Magnificent beauty, purity, rebirth",
    occasion: ["Wedding", "Funeral", "Easter", "Modern Events"],
    season: ["Spring", "Summer"],
    priceRange: { min: 6, max: 12 },
    careInstructions: "Deep water, cool location, support stems",
    symbolism: "Symbol of magnificent beauty and rebirth",
    description: "Elegant trumpet-shaped spathes with smooth lines",
    regions: ["South Africa", "Mediterranean", "North America"]
  }
];

// Primary purposes
export const primaryPurposes = [
  { id: "special-occasion", label: "Special Occasion", description: "Celebrate life's important moments" },
  { id: "gift", label: "Gift for Someone", description: "Show someone you care" }
];

// Secondary choices based on primary purpose
export const specialOccasions = [
  "Wedding", "Birthday", "Proposal", "Anniversary", "Store Opening", 
  "Graduation", "Valentine's Day", "Mother's Day", "Easter", "Christmas",
  "Baby Shower", "Retirement", "Housewarming"
];

export const decorationStyles = [
  "Mixed", "Scandinavian", "Minimalistic", "Mediterranean", "Bohemian",
  "Modern", "Rustic", "Tropical", "Classic", "Contemporary"
];

export const giftRecipients = [
  "Girlfriend", "Boyfriend", "Teacher", "Parents", "Friend", "Colleague",
  "Boss", "Neighbor", "Sister", "Brother", "Grandparents", "In-laws"
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