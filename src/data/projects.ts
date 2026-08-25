export type Project = {
  slug: string
  img: string
  tag: string
  title: string
  location: string
  category: 'Residential' | 'Commercial' | 'Plots'
  type: string
  config: string
  beds?: number
  baths?: number
  area: string
  price: string
  status: string
  developer: string
  highlight: string
  description: string
  investment: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'yeida-authority-plots',
    img: '/hero/yeida_plots.png',
    tag: 'Authority Plots',
    title: 'YEIDA Authority Plots',
    location: 'YEIDA Yamuna Expressway',
    category: 'Plots',
    type: 'Authority Plot',
    config: 'Premium Plots',
    area: '50 - 600 sq. mtr.',
    price: '₹80,000 / sq. mtr.',
    status: 'Available',
    developer: 'YEIDA',
    highlight: 'Near Noida International Airport · Film City · High-growth corridor',
    description: 'Authority plots across the YEIDA growth corridor, selected for location, connectivity, and long-term development potential.',
    investment: 'Airport, Film City, and Yamuna Expressway growth corridor.',
    gallery: ['/hero/yeida_plots.png', '/hero/yamuna_expressway.png'],
  },
  {
    slug: 'arqis-mall',
    img: '/property/arqis_mall.png',
    tag: 'Commercial Property',
    title: 'ARQIS MALL',
    location: 'Noida Expressway Sector 129',
    category: 'Commercial',
    type: 'Commercial Property',
    config: 'Retail Shop / Studio Apartment',
    area: 'Retail and studio spaces',
    price: 'Pre-launch ₹18,999 | Launch ₹21,999',
    status: 'Pre-launch',
    developer: 'ARQIS',
    highlight: 'Investment starting at ₹95 Lakh*',
    description: 'A commercial destination designed for retail visibility, everyday convenience, and long-term leasing appeal in Sector 129.',
    investment: 'Investment starting at ₹95 Lakh* with strong expressway connectivity.',
    gallery: ['/property/arqis_mall.png', '/hero/top_building.jpg'],
  },
  {
    slug: 'ace-arte',
    img: '/property/ace_arte.png',
    tag: 'Luxury Residence',
    title: 'ACE ARTE',
    location: 'Greater Noida West',
    category: 'Residential',
    type: 'Premium Residence',
    config: '3 & 4 BHK',
    area: 'Premium residences',
    price: '₹2.4 Cr onward',
    status: 'New Launch',
    developer: 'ACE Group',
    highlight: 'Premium skyline residences with a refined urban address.',
    description: 'A considered residential address for buyers seeking generous spaces, contemporary design, and a well-connected Greater Noida West location.',
    investment: 'Premium skyline residences with a refined urban address.',
    gallery: ['/property/ace_arte.png', '/hero/top_building.jpg'],
  },
  {
    slug: 'eldeco-7-peaks',
    img: '/property/eldeco_7peek.jpg',
    tag: 'Pre-launch Offers',
    title: 'ELDECO 7 PEAKS',
    location: 'Omicron, Greater Noida',
    category: 'Residential',
    type: 'Luxury Apartments',
    config: '3 & 4 BHK | Luxury Apartments & Penthouses',
    area: 'Luxury apartments and penthouses',
    price: '₹2.19 Cr onward',
    status: 'Pre-launch',
    developer: 'Eldeco Group',
    highlight: 'By Eldeco Group · RERA Approved: UPRERAPRJ106523/01/2026',
    description: 'A landmark residential development in Omicron, Greater Noida, offering luxury apartments and penthouses for elevated city living.',
    investment: 'RERA Approved: UPRERAPRJ106523/01/2026.',
    gallery: ['/property/eldeco_7peek.jpg', '/hero/top_building.jpg'],
  },
]
