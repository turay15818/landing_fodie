import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import type { ActualTheme, ThemeMode } from './types/theme'

function getSystemTheme(): ActualTheme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'auto'
    }

    return (localStorage.getItem('theme-mode') as ThemeMode | null) ?? 'auto'
  })
  const [actualTheme, setActualTheme] = useState<ActualTheme>(getSystemTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const syncTheme = () => {
      const resolvedTheme = themeMode === 'auto' ? (media.matches ? 'dark' : 'light') : themeMode
      setActualTheme(resolvedTheme)
      document.documentElement.dataset.theme = resolvedTheme
      document.documentElement.style.colorScheme = resolvedTheme
      localStorage.setItem('theme-mode', themeMode)
    }

    syncTheme()
    media.addEventListener('change', syncTheme)

    return () => media.removeEventListener('change', syncTheme)
  }, [themeMode])

  return (
    <BrowserRouter>
      <div className="min-h-[100dvh] bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
        <div className="site-shell">
          <Navbar actualTheme={actualTheme} themeMode={themeMode} onThemeChange={setThemeMode} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
