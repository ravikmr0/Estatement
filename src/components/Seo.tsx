import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://estatement.in'

const pageSeo: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Estatement Realty | Premium Property Advisory in Noida',
    description:
      'Discover curated homes, commercial spaces, plots, and investment guidance across Noida, Greater Noida, Noida Expressway, and YEIDA.',
  },
  '/about': {
    title: 'About Estatement Realty | Noida Real Estate Advisors',
    description:
      'Learn how Estatement Realty helps homeowners, investors, and businesses make clearer property decisions across the Noida region.',
  },
  '/mission': {
    title: 'Mission & Vision | Estatement Realty',
    description:
      'Explore the principles behind Estatement Realty: transparent advice, local market understanding, careful evaluation, and client-first service.',
  },
  '/properties': {
    title: 'Properties in Noida, Greater Noida & YEIDA | Estatement Realty',
    description:
      'Explore selected commercial properties and YEIDA authority plots reviewed for location, usability, connectivity, and long-term potential.',
  },
  '/advisory': {
    title: 'Real Estate Investment Advisory in Noida | Estatement Realty',
    description:
      'Get practical real estate investment guidance, property evaluation, due diligence, risk review, and transaction support in Noida and NCR.',
  },
  '/contact': {
    title: 'Contact Estatement Realty | Noida Property Consultation',
    description:
      'Speak with Estatement Realty about residential property, commercial opportunities, plots, portfolio reviews, or investment advisory.',
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

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = pageSeo[pathname] || pageSeo['/']
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`

    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('robots', 'index, follow')
    setProperty('og:title', seo.title)
    setProperty('og:description', seo.description)
    setProperty('og:type', 'website')
    setProperty('og:url', canonicalUrl)
    setProperty('og:site_name', 'Estatement Realty')

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    let structuredData = document.querySelector<HTMLScriptElement>('#estatement-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'estatement-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Estatement Realty Pvt. Ltd.',
      url: siteUrl,
      logo: `${siteUrl}/estatement_logo.png`,
      telephone: '+91-8750080023',
      email: 'info@estatement.in',
      areaServed: ['Noida', 'Greater Noida', 'YEIDA', 'Noida Expressway'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'A-74A, Sector 136',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201305',
        addressCountry: 'IN',
      },
    })
  }, [pathname])

  return null
}
