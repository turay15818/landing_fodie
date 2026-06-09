import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../data/landing'
import type { ActualTheme, ThemeMode } from '../types/theme'

type NavbarProps = {
  actualTheme: ActualTheme
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
}

export function Navbar({ actualTheme, themeMode, onThemeChange }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.15, 0.35, 0.55] },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const goToSection = (id: string) => {
    setOpen(false)
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/#home" className="group flex items-center gap-3" onClick={() => goToSection('home')}>
          <span className="grid size-10 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--soft-shadow)]">
            <Sparkles size={19} />
          </span>
          <span className="leading-none">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Foday
            </span>
            <span className="block text-base font-semibold tracking-tight text-[var(--heading)]">
              Sheriff
            </span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] p-1 lg:flex">
          {navItems.map((item) => (
            <button key={item.id} type="button" className="nav-link" onClick={() => goToSection(item.id)}>
              {activeId === item.id && <motion.span layoutId="nav-pill" className="nav-link-pill" />}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              className="icon-button min-w-[9.5rem] justify-between px-3"
              aria-label="Select color theme"
              onClick={() => setThemeOpen((value) => !value)}
            >
              <span className="flex items-center gap-2">
                {actualTheme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
                <span className="text-sm font-medium capitalize">{themeMode}</span>
              </span>
              <ChevronDown size={15} />
            </button>

            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  className="absolute right-0 mt-2 w-44 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1 shadow-[var(--deep-shadow)]"
                >
                  {(['auto', 'light', 'dark'] as ThemeMode[]).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      className="theme-option"
                      onClick={() => {
                        onThemeChange(mode)
                        setThemeOpen(false)
                      }}
                    >
                      <span className="capitalize">{mode}</span>
                      {themeMode === mode && <Check size={15} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`mobile-nav-link text-left ${activeId === item.id ? 'mobile-nav-link-active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
