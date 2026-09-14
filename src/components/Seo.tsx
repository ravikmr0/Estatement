import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'

const siteUrl = 'https://estatement.in'
const siteName = 'Estatement Realty'
const defaultImage = `${siteUrl}/hero/top_building.jpg`

type SeoData = {
  title: string
  description: string
  keywords: string
  image?: string
}

const pageSeo: Record<string, SeoData> = {
  '/': {
    title: 'Estatement Realty | Premium Property Advisory in Noida',
    description:
      'Discover curated homes, commercial spaces, plots, and investment guidance across Noida, Greater Noida, Noida Expressway, and YEIDA.',
    keywords:
      'Noida real estate, real estate consultant in Noida, property advisor Noida, residential property Noida, commercial property Noida, YEIDA plots, Greater Noida property investment',
  },
  '/about': {
    title: 'About Estatement Realty | Noida Real Estate Advisors',
    description:
      'Learn how Estatement Realty helps homeowners, investors, and businesses make clearer property decisions across the Noida region.',
    keywords:
      'Noida real estate company, property consultants Noida, real estate advisors Greater Noida, trusted property advisor in Noida, Estatement Realty',
  },
  '/mission': {
    title: 'Mission & Vision | Estatement Realty',
    description:
      'Explore the principles behind Estatement Realty: transparent advice, local market understanding, careful evaluation, and client-first service.',
    keywords:
      'real estate advisory Noida, transparent property consultant, property investment guidance Noida, real estate due diligence NCR',
  },
  '/properties': {
    title: 'Properties in Noida, Greater Noida & YEIDA | Estatement Realty',
    description:
      'Explore selected commercial properties and YEIDA authority plots reviewed for location, usability, connectivity, and long-term potential.',
    keywords:
      'properties in Noida, flats in Noida, commercial property Noida Expressway, residential property Greater Noida, YEIDA authority plots, property for investment in Noida',
  },
  '/advisory': {
    title: 'Real Estate Investment Advisory in Noida | Estatement Realty',
    description:
      'Get practical real estate investment guidance, property evaluation, due diligence, risk review, and transaction support in Noida and NCR.',
    keywords:
      'real estate investment advisory Noida, property investment consultant, real estate portfolio advisory NCR, property due diligence Noida, investment consultant Greater Noida',
  },
  '/contact': {
    title: 'Contact Estatement Realty | Noida Property Consultation',
    description:
      'Speak with Estatement Realty about residential property, commercial opportunities, plots, portfolio reviews, or investment advisory.',
    keywords:
      'contact Noida property consultant, Noida real estate consultation, property investment consultation Greater Noida, Estatement Realty contact',
  },
}

const setMeta = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const setProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const setLink = (rel: string, href: string) => {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

const setStructuredData = (data: object) => {
  let element = document.querySelector<HTMLScriptElement>('#estatement-structured-data')
  if (!element) {
    element = document.createElement('script')
    element.id = 'estatement-structured-data'
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const propertySlug = normalizedPath.startsWith('/properties/')
      ? normalizedPath.split('/')[2]
      : undefined
    const property = propertySlug ? projects.find((item) => item.slug === propertySlug) : undefined
    const seo: SeoData = property
      ? {
          title: `${property.title} | ${property.location} | Estatement Realty`,
          description: `${property.description} Explore ${property.title} with Estatement Realty for availability, pricing, and investment guidance.`,
          keywords: `${property.title}, ${property.location} property, ${property.category.toLowerCase()} property Noida, real estate investment Noida, Estatement Realty`,
          image: `${siteUrl}${property.img}`,
        }
      : pageSeo[normalizedPath] || {
          title: 'Page Not Found | Estatement Realty',
          description: 'The requested Estatement Realty page could not be found.',
          keywords: 'Estatement Realty',
        }
    const isKnownPage = Boolean(property || pageSeo[normalizedPath])
    const canonicalUrl = `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`
    const imageUrl = seo.image || defaultImage

    document.title = seo.title
    document.documentElement.lang = 'en-IN'
    setMeta('description', seo.description)
    setMeta('keywords', seo.keywords)
    setMeta('robots', isKnownPage ? 'index, follow' : 'noindex, follow')
    setMeta('author', siteName)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    setMeta('twitter:image', imageUrl)
    setProperty('og:title', seo.title)
    setProperty('og:description', seo.description)
    setProperty('og:type', 'website')
    setProperty('og:url', canonicalUrl)
    setProperty('og:site_name', siteName)
    setProperty('og:locale', 'en_IN')
    setProperty('og:image', imageUrl)
    setProperty('og:image:alt', seo.title)

    setLink('canonical', canonicalUrl)

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Estatement Realty Pvt. Ltd.',
      url: siteUrl,
      logo: `${siteUrl}/estatement_logo.png`,
      telephone: '+91-8750080023',
      email: 'info@estatement.in',
      sameAs: [
        'https://www.linkedin.com/company/estatement-realty/',
        'https://www.instagram.com/estatementofficial/',
        'https://www.youtube.com/@Estatement_Group',
      ],
      areaServed: ['Noida', 'Greater Noida', 'YEIDA', 'Noida Expressway'],
      knowsAbout: [
        'Noida real estate',
        'Greater Noida property investment',
        'YEIDA authority plots',
        'commercial property in Noida',
        'real estate due diligence',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-74A, Sector 136',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201305',
        addressCountry: 'IN',
      },
    }
    const breadcrumbItems = normalizedPath === '/'
      ? [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }]
      : [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          ...(property
            ? [
                { '@type': 'ListItem', position: 2, name: 'Properties', item: `${siteUrl}/properties` },
                { '@type': 'ListItem', position: 3, name: property.title, item: canonicalUrl },
              ]
            : [{ '@type': 'ListItem', position: 2, name: seo.title.split(' | ')[0], item: canonicalUrl }]),
        ]
    const pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/properties?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebPage',
          name: seo.title,
          description: seo.description,
          keywords: seo.keywords,
          url: canonicalUrl,
          image: imageUrl,
          isPartOf: { '@type': 'WebSite', name: siteName, url: siteUrl },
          breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbItems },
        },
        ...(property
          ? [
              {
                '@type': 'Product',
                name: property.title,
                description: property.description,
                image: property.gallery.map((image) => `${siteUrl}${image}`),
                category: property.category,
                brand: { '@type': 'Brand', name: property.developer },
                offers: {
                  '@type': 'Offer',
                  url: canonicalUrl,
                  priceCurrency: 'INR',
                  description: property.price,
                  availability: property.status.toLowerCase().includes('available')
                    ? 'https://schema.org/InStock'
                    : 'https://schema.org/PreOrder',
                },
              },
            ]
          : []),
      ],
    }
    setStructuredData(isKnownPage ? pageSchema : { '@context': 'https://schema.org', '@type': 'WebPage', name: seo.title, url: canonicalUrl })
  }, [pathname])

  return null
}
