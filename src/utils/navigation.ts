export const normalizePath = (path: string): string => path.replace(/\\+/g, '/').replace(/\/$/, '') || '/'

export const navigate = (href: string, onNavigate: (path: string) => void): void => {
  const normalized = normalizePath(href)
  window.history.pushState({}, '', normalized)
  onNavigate(normalized)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const getCurrentPath = (): string => normalizePath(window.location.pathname)
