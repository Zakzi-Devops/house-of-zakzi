// =====================================================================
// House of Zakzi — Site content
// Edit any value below to update the site. No code knowledge needed.
// =====================================================================

import heroLiving from "@/assets/hero-living.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioNook from "@/assets/portfolio-nook.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioEntry from "@/assets/portfolio-entry.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import founder from "@/assets/founder.jpg";

export const site = {
  brand: "House of Zakzi",
  tagline: "Elegant home staging that helps properties sell faster and feel unforgettable.",
  email: "hello@houseofzakzi.com",
  phone: "+48 518 914 323",
  address: "Krakow, Poland",
  social: {
    instagram: "https://instagram.com/houseofzakzi",
    pinterest: "https://pinterest.com/houseofzakzi",
    facebook: "https://facebook.com/houseofzakzi",
  },
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const valueProps = [
  {
    title: "Sell faster",
    body: "Staged homes consistently spend less time on the market and attract stronger offers.",
  },
  {
    title: "Emotional connection",
    body: "We design rooms that help buyers picture themselves living, hosting and resting there.",
  },
  {
    title: "Higher perceived value",
    body: "Thoughtful styling elevates listing photography and the in-person viewing experience.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  beforeImage?: string;
  gallery: string[];
  propertyType: string;
  scope: string;
  results: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "apartment-refresh",
    title: "Apartment Refresh",
    category: "Apartment Refresh",
    cover: portfolioBedroom,
    beforeImage: beforeLiving,
    gallery: [portfolioBedroom, portfolioNook, portfolioEntry],
    propertyType: "2-bedroom city apartment, 68 m²",
    scope: "Full restyling, soft furnishings, art and accessories",
    results: "Listed and accepted offer within 11 days, 4% above asking.",
    description:
      "A tired rental in the city centre transformed into a serene, light-filled home. We layered linen textiles, warm oak and quiet ceramics to suggest an unhurried, elevated way of living.",
  },
  {
    slug: "family-home-styling",
    title: "Family Home Styling",
    category: "Family Home Styling",
    cover: portfolioDining,
    gallery: [portfolioDining, portfolioKitchen, portfolioNook],
    propertyType: "Detached family house, 180 m²",
    scope: "Living, dining and kitchen styling for sale photography",
    results: "Photographed within a week, multiple viewings booked the first weekend.",
    description:
      "We softened a busy family interior into a calm, aspirational backdrop — keeping warmth and character while making every room feel generous, considered and ready for new owners.",
  },
  {
    slug: "premium-sale-staging",
    title: "Premium Sale Staging",
    category: "Premium Sale Staging",
    cover: portfolioKitchen,
    gallery: [portfolioKitchen, portfolioBathroom, portfolioEntry, portfolioBedroom],
    propertyType: "Luxury penthouse, 142 m²",
    scope: "Full furniture rental, art curation, photography prep",
    results: "Sold at full asking price after a single open viewing.",
    description:
      "A premium listing deserves a premium narrative. We curated furniture, art and lighting to match the architecture — creating a memorable, magazine-worthy first impression for high-end buyers.",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  forWho: string;
  includes: string[];
  process: string[];
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "home-staging-for-sale",
    title: "Home Staging for Sale",
    short: "Prepare your property to attract more buyers and stronger offers.",
    forWho: "Homeowners, real estate agents and developers preparing a property for the market.",
    includes: [
      "On-site walk-through and styling concept",
      "Furniture, textile and accessory rental",
      "Full installation and styling day",
      "Coordination with your photographer",
    ],
    process: [
      "Consultation and brief",
      "Concept and proposal",
      "Sourcing and preparation",
      "On-site staging and handover",
    ],
    priceFrom: "from 1 200zl",
  },
  {
    slug: "interior-styling",
    title: "Interior Styling",
    short: "Refine the home you live in with calm, considered detail.",
    forWho: "Homeowners who want a polished, magazine-worthy interior — without renovating.",
    includes: [
      "Room-by-room styling plan",
      "Curated shopping list",
      "Personal styling day",
      "Final photography of the result",
    ],
    process: [
      "Discovery call",
      "Mood and palette",
      "Sourcing",
      "Styling day",
    ],
    priceFrom: "from 800zl",
  },
  {
    slug: "photo-shoot-preparation",
    title: "Photo Shoot Preparation",
    short: "Ensure every frame of your listing photography is unforgettable.",
    forWho: "Agents and owners who want listing photos that stop the scroll.",
    includes: [
      "Pre-shoot styling and decluttering",
      "On-the-day adjustments per frame",
      "Light, flowers and final touches",
      "Photographer liaison",
    ],
    process: [
      "Brief and timing",
      "Pre-shoot prep",
      "Shoot day styling",
      "Reset and handover",
    ],
    priceFrom: "from 450zl",
  },
  {
    slug: "consultation",
    title: "Consultation",
    short: "An expert second opinion to unlock your home's potential.",
    forWho: "Anyone seeking clear, actionable styling guidance — DIY or pre-listing.",
    includes: [
      "90-minute on-site visit",
      "Room-by-room recommendations",
      "Written follow-up summary",
      "Sourcing suggestions",
    ],
    process: [
      "Book a slot",
      "On-site visit",
      "Recommendations",
      "Follow-up notes",
    ],
    priceFrom: "from 180zl",
  },
];

export const testimonials = [
  {
    quote:
      "House of Zakzi transformed our listing in three days. The photos felt like a magazine and the apartment sold the same week.",
    author: "Claudia Zakzi",
    role: "Homeowner, Krakow",
  },
  {
    quote:
      "Every property we stage with Claudia performs above market average. Her eye for warmth and proportion is remarkable.",
    author: "Marek W.",
    role: "Real Estate Agent",
  },
  {
    quote:
      "Calm, professional, and genuinely beautiful work. Worth every złoty.",
    author: "Julia & Tomasz",
    role: "Sellers, Mokotów",
  },
];

export const faqs = [
  {
    q: "How long does a staging project take?",
    a: "Most projects are styled in 1–3 days on site, with planning and sourcing in the week before. Larger homes or premium staging may take longer.",
  },
  {
    q: "Are furniture and accessories included?",
    a: "Yes — for full staging projects we provide furniture, textiles, art and accessories on a rental basis. For consultations and styling days we use what you already own and recommend selected additions.",
  },
  {
    q: "Which areas do you serve?",
    a: "We work across Krakow and surrounding regions. Projects elsewhere in Poland are welcome — please ask about travel.",
  },
  {
    q: "What does the consultation process look like?",
    a: "We start with a short call, then visit your property to understand its strengths. You receive a clear proposal with scope, timeline and investment.",
  },
  {
    q: "How is pricing structured?",
    a: "Each project is unique. We share a transparent, fixed quote after the consultation, based on size, scope and rental duration.",
  },
];

export const images = {
  hero: heroLiving,
  founder,
};
