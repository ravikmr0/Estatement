import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import MissionVision from './pages/MissionVision'
import Properties from './pages/Properties'
import InvestmentAdvisory from './pages/InvestmentAdvisory'
import ContactUs from './pages/ContactUs'
import PropertyDetail from './pages/PropertyDetail'
import { normalizePath, getCurrentPath } from './utils/navigation'

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  const [scrolled, setScrolled] = useState(false)

  // Extract path and slug for property detail pages
  const currentDetailSlug = currentPath.startsWith('/properties/')
    ? currentPath.replace('/properties/', '')
    : ''
  const activePath = currentPath.startsWith('/properties/') ? '/properties' : currentPath

  // Set up scroll and navigation listeners
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    const updatePath = () => setCurrentPath(normalizePath(window.location.pathname))

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', updatePath)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', updatePath)
    }
  }, [])

  // Set up reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPath])

  const navigate = (href: string) => {
    const normalized = normalizePath(href)
    if (normalized === currentPath) return
    window.history.pushState({}, '', normalized)
    setCurrentPath(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render page content based on current path
  const renderPageContent = () => {
    if (currentPath === '/') return <Home onNavigate={navigate} />
    if (currentPath === '/about-us') return <AboutUs onNavigate={navigate} />
    if (currentPath === '/mission-vision') return <MissionVision onNavigate={navigate} />
    if (currentPath === '/properties' && !currentDetailSlug)
      return <Properties onNavigate={navigate} />
    if (currentPath.startsWith('/properties/') && currentDetailSlug)
      return <PropertyDetail slug={currentDetailSlug} onNavigate={navigate} />
    if (currentPath === '/investment-advisory') return <InvestmentAdvisory onNavigate={navigate} />
    if (currentPath === '/contact-us') return <ContactUs onNavigate={navigate} />

    // Fallback for unknown routes
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <Header scrolled={scrolled} activePath={activePath} onNavigate={navigate} />

      <main className="page-content">{renderPageContent()}</main>

      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
