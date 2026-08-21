export type Property = {
  id: number
  slug: string
  title: string
  location: string
  category: 'Residential' | 'Commercial' | 'Plots'
  type: string
  config: string
  price: string
  status: string
  area: string
  budget: string
  developer: string
  investment: string
  highlight: string
  description: string
  image: string
  gallery: string[]
}

export const properties: Property[] = [
  {
    id: 1,
    slug: 'crest-residences',
    category: 'Residential',
    title: 'The Crest Residences',
    location: 'Sector 150, Noida',
    type: 'Luxury Residence',
    config: '3 BHK / 4 BHK',
    price: 'Starting ₹3.9 Cr*',
    status: 'Ready to Move',
    area: '2,900 sq ft',
    budget: '₹3 Cr - ₹7 Cr',
    developer: 'Aurora Estates',
    investment: 'Prime residential corridor',
    highlight: 'Large terraces, premium finishes and panoramic views.',
    description:
      'A refined residential collection designed for modern living and long-term value, positioned for discerning buyers seeking a premium retreat with strong location advantages.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 2,
    slug: 'apex-business-park',
    category: 'Commercial',
    title: 'Apex Business Park',
    location: 'Noida Expressway',
    type: 'Commercial Investment',
    config: 'Grade-A Office & Retail',
    price: 'Starting ₹10.2 Cr*',
    status: 'Under Construction',
    area: '9,000 sq ft - 30,000 sq ft',
    budget: 'Above ₹7 Cr',
    developer: 'Solace Developments',
    investment: 'Strategic commercial corridor',
    highlight: 'Visibility, connectivity and strong leasing appeal.',
    description:
      'Strategic commercial spaces positioned for visibility, connectivity and long-term demand. A premium investment option with well-considered location fundamentals.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 3,
    slug: 'golden-meadows',
    category: 'Plots',
    title: 'Golden Meadows',
    location: 'YEIDA Growth Corridor',
    type: 'Premium Plot',
    config: 'Premium Plot',
    price: 'Expected ₹2.2 Cr*',
    status: 'Released',
    area: '200 sqm - 520 sqm',
    budget: 'Under ₹3 Cr',
    developer: 'Vista Landcraft',
    investment: 'Growth-oriented plot development',
    highlight: 'Quiet township setting with future corridor potential.',
    description:
      'Curated plotted development opportunities in the YEIDA growth corridor, designed for long-term value and future community potential.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 4,
    slug: 'silk-avenue',
    category: 'Residential',
    title: 'Silk Avenue',
    location: 'Greater Noida',
    type: 'Premium Apartments',
    config: '2 BHK / 3 BHK',
    price: 'Starting ₹2.4 Cr*',
    status: 'New Launch',
    area: '1,200 sq ft - 2,100 sq ft',
    budget: '₹3 Cr - ₹7 Cr',
    developer: 'Luminous Realty',
    investment: 'High-growth residential location',
    highlight: 'Modern concierge living near urban amenities.',
    description:
      'An elegant residential address crafted for buyers who value quality, curation, and an elevated urban lifestyle.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Mission & Vision', href: '/mission-vision' },
  { label: 'Properties', href: '/properties' },
  { label: 'Investment Advisory', href: '/investment-advisory' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const propertyTypes = ['All', 'Residential', 'Commercial', 'Plots', 'Investment']
export const locationOptions = ['All', 'Noida', 'Greater Noida', 'YEIDA', 'Noida Expressway']
export const budgetOptions = ['All', 'Under ₹3 Cr', '₹3 Cr - ₹7 Cr', 'Above ₹7 Cr']
export const configOptions = ['All', '2 BHK', '3 BHK', '4 BHK', 'Premium Plot']

export const heroSlides = [
  {
    image: '/hero/balcony_view.jpg',
    eyebrow: 'ESTATEMENT REALTY',
    title: 'Focused on Noida.',
    supportingText: 'Premium residences and commercial opportunities across Noida.',
    description:
      'Estatement Realty helps clients discover quality properties in established locations with strong infrastructure, connectivity and long-term growth potential.',
    location: 'Noida',
  },
  {
    image: '/hero/yamuna_expressway.png',
    eyebrow: 'ESTATEMENT REALTY',
    title: 'Focused on Noida Expressway.',
    supportingText: 'Residential and commercial opportunities along Noida Expressway.',
    description:
      'Explore strategically located properties across one of NCR key growth corridors, supported by excellent connectivity and evolving infrastructure.',
    location: 'Noida Expressway',
  },
  {
    image: '/hero/top_building.jpg',
    eyebrow: 'ESTATEMENT REALTY',
    title: 'Focused on Greater Noida.',
    supportingText: 'Residences, commercial spaces and emerging investment opportunities.',
    description:
      'Estatement Realty connects clients with carefully selected properties in high-potential locations shaped by planned development, infrastructure and strategic connectivity.',
    location: 'Greater Noida',
  },
  {
    image: '/hero/pool_view.jpg',
    eyebrow: 'ESTATEMENT REALTY',
    title: 'Focused on YEIDA.',
    supportingText: 'YEIDA Authority Plots and strategic real estate opportunities.',
    description:
      'Discover opportunities across the YEIDA region, positioned around major infrastructure developments, connectivity and the future growth of the NCR.',
    location: 'YEIDA',
  },
]

export const categoryCards = [
  {
    title: 'Luxury Residences',
    description: 'Curated homes for refined living across the city most desirable corridors.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Commercial Opportunities',
    description: 'Strategic spaces chosen for visibility, leasing appeal and long-term demand.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Premium Plots',
    description: 'Land parcels in emerging corridors selected for clarity, location and future potential.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Strategic Investments',
    description: 'Opportunities evaluated with a long-term view, risk awareness and market context.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
]

export const whyItems = [
  {
    title: 'Market Expertise',
    description: 'Deep understanding of Noida and the YEIDA growth corridor.',
  },
  {
    title: 'Curated Opportunities',
    description: 'Carefully selected properties rather than simply presenting listings.',
  },
  {
    title: 'Transparent Advisory',
    description: 'Clear and straightforward property guidance at every stage.',
  },
  {
    title: 'Personalized Guidance',
    description: 'Recommendations aligned with individual priorities and objectives.',
  },
  {
    title: 'End-to-End Support',
    description: 'Professional assistance throughout the property journey.',
  },
]

export const journeySteps = [
  { step: 'DISCOVER', label: 'Discover' },
  { step: 'SHORTLIST', label: 'Shortlist' },
  { step: 'EVALUATE', label: 'Evaluate' },
  { step: 'DECIDE', label: 'Decide' },
  { step: 'COMPLETE', label: 'Complete' },
]

export const advisoryPoints = [
  'Market Understanding',
  'Opportunity Screening',
  'Property Evaluation',
  'Personalized Strategy',
  'Transaction Support',
]
