/**
 * All site content lives in this file.
 * Edit text, contact details, categories and products here — every page
 * is rendered from these constants.
 */

export type Product = {
  /** Unique code, also used in the product URL: /collection/<sku> */
  sku: string;
  name: string;
  material: string;
  colors: string[];
  /** Size range as shown to customers, e.g. "46-56" or "S-XXL" */
  sizes: string;
  /** Price in USD */
  price: number;
};

export type Category = {
  name: string;
  /** Used for anchors: /collection#<slug> */
  slug: string;
  desc: string;
  products: Product[];
};

export type Store = {
  name: string;
  tagline: string;
  season: string;
  intro: string;
  whyUs: string[];
  contact: {
    address: string;
    phones: string[];
    hours: string;
    social: { facebook: string; instagram: string; telegram: string };
  };
};

/**
 * Public URL of the deployed site (no trailing slash). Used for the sitemap,
 * robots.txt and Open Graph tags. Set NEXT_PUBLIC_SITE_URL when deploying.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
).replace(/\/$/, "");

export const store: Store = {
  name: "Z'Leerk",
  tagline: "Tailored Menswear & Footwear",
  season: "Collection 2026 / 2027",
  intro:
    "Z'Leerk brings together sharp tailoring, everyday trousers, refined footwear, modern sneakers and outerwear in one curated collection. Every piece is chosen for fit, fabric and lasting style, so customers can build a complete look from suit to shoe in a single visit.",
  whyUs: [
    "Complete looks in one place - from suit and trousers to shoes, sneakers and jackets.",
    "Carefully chosen fabrics and leathers for comfort and long wear.",
    "Wide size range and friendly fitting advice in store.",
  ],
  contact: {
    address:
      "No. 47, Street 278, Sangkat Boeng Keng Kang 1, Khan Boeng Keng Kang, Phnom Penh, Cambodia",
    phones: ["+855 12 486 739", "+855 96 318 254"],
    hours: "Mon - Sun, 9:00 AM - 9:00 PM",
    social: { facebook: "#", instagram: "#", telegram: "#" },
  },
};

export const priceNote = "Prices in USD, subject to change.";

export const categories: Category[] = [
  {
    name: "Suits",
    slug: "suits",
    desc: "Tailored two- and three-piece suits for business, weddings and formal events.",
    products: [
      { sku: "ZL-SU-001", name: "Classic Two-Piece Business Suit", material: "Wool blend", colors: ["Navy", "Charcoal", "Black"], sizes: "46-56", price: 189 },
      { sku: "ZL-SU-002", name: "Slim-Fit Wedding Suit", material: "Super 110s wool", colors: ["Midnight Blue", "Ivory"], sizes: "44-54", price: 249 },
      { sku: "ZL-SU-003", name: "Three-Piece Vested Suit", material: "Wool & cashmere", colors: ["Grey Check", "Brown"], sizes: "46-56", price: 289 },
      { sku: "ZL-SU-004", name: "Linen Summer Suit", material: "100% linen", colors: ["Beige", "Light Grey", "Sky Blue"], sizes: "44-54", price: 169 },
    ],
  },
  {
    name: "Trousers",
    slug: "trousers",
    desc: "Dress, chino and casual trousers in regular, slim and tapered fits.",
    products: [
      { sku: "ZL-TR-001", name: "Formal Dress Trousers", material: "Wool blend", colors: ["Black", "Navy", "Charcoal"], sizes: "28-38", price: 59 },
      { sku: "ZL-TR-002", name: "Slim Stretch Chinos", material: "Cotton & elastane", colors: ["Khaki", "Olive", "Navy", "Stone"], sizes: "28-38", price: 45 },
      { sku: "ZL-TR-003", name: "Pleated Tapered Trousers", material: "Twill", colors: ["Taupe", "Black"], sizes: "29-36", price: 65 },
      { sku: "ZL-TR-004", name: "Linen Drawstring Trousers", material: "100% linen", colors: ["White", "Sand", "Grey"], sizes: "S-XXL", price: 49 },
    ],
  },
  {
    name: "Shoes",
    slug: "shoes",
    desc: "Leather dress shoes and smart-casual footwear finished by hand.",
    products: [
      { sku: "ZL-SH-001", name: "Oxford Cap-Toe Shoes", material: "Full-grain leather", colors: ["Black", "Dark Brown"], sizes: "39-45", price: 129 },
      { sku: "ZL-SH-002", name: "Brogue Derby Shoes", material: "Calf leather", colors: ["Tan", "Cognac"], sizes: "39-45", price: 119 },
      { sku: "ZL-SH-003", name: "Penny Loafers", material: "Suede & leather", colors: ["Brown", "Navy", "Black"], sizes: "39-45", price: 99 },
      { sku: "ZL-SH-004", name: "Chelsea Boots", material: "Leather, rubber sole", colors: ["Black", "Chocolate"], sizes: "39-46", price: 139 },
    ],
  },
  {
    name: "Sneakers",
    slug: "sneakers",
    desc: "Clean everyday sneakers that pair with chinos, denim or a relaxed suit.",
    products: [
      { sku: "ZL-SN-001", name: "Minimal Leather Court Sneakers", material: "Smooth leather", colors: ["White", "White/Black"], sizes: "39-45", price: 89 },
      { sku: "ZL-SN-002", name: "Knit Running Sneakers", material: "Breathable knit mesh", colors: ["Grey", "Black", "Navy"], sizes: "39-46", price: 75 },
      { sku: "ZL-SN-003", name: "High-Top Canvas Sneakers", material: "Cotton canvas", colors: ["Black", "Off-White", "Olive"], sizes: "38-45", price: 55 },
      { sku: "ZL-SN-004", name: "Suede Retro Trainers", material: "Suede & nylon", colors: ["Sand", "Burgundy", "Forest"], sizes: "39-45", price: 85 },
    ],
  },
  {
    name: "Jackets",
    slug: "jackets",
    desc: "Outerwear and layering pieces, from smart blazers to weekend bombers.",
    products: [
      { sku: "ZL-JA-001", name: "Unstructured Blazer", material: "Cotton-linen", colors: ["Navy", "Camel", "Grey"], sizes: "S-XXL", price: 129 },
      { sku: "ZL-JA-002", name: "Leather Biker Jacket", material: "Lambskin leather", colors: ["Black", "Brown"], sizes: "S-XXL", price: 219 },
      { sku: "ZL-JA-003", name: "Bomber Jacket", material: "Nylon, ribbed trims", colors: ["Olive", "Black", "Navy"], sizes: "S-XXL", price: 89 },
      { sku: "ZL-JA-004", name: "Denim Trucker Jacket", material: "Rigid denim", colors: ["Indigo", "Washed Black"], sizes: "S-XXL", price: 79 },
    ],
  },
];

/* ---------- Helpers derived from the data above ---------- */

export const allProducts: Product[] = categories.flatMap((c) => c.products);

export function findProduct(
  sku: string,
): { product: Product; category: Category } | undefined {
  for (const category of categories) {
    const product = category.products.find((p) => p.sku === sku);
    if (product) return { product, category };
  }
  return undefined;
}

/** Lowest price in a category, for the "From $X" label. */
export function startingPrice(category: Category): number {
  return Math.min(...category.products.map((p) => p.price));
}
