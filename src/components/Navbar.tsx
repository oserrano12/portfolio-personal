import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          return
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(16,17,20,0.85)] backdrop-blur-md border-b border-border-subtle transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="font-display font-bold text-lg tracking-tight text-text-primary hover:text-white transition-colors focus-ring rounded-sm px-1 py-0.5 inline-flex items-center gap-1"
        >
          <span>&lt;oscar</span>
          <span className="text-lime">.</span>
          <span>dev /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-ring relative ${
                  isActive
                    ? 'text-lime font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-lime rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right Action / Status Badge */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" aria-hidden="true" />
            <span>Portafolio personal</span>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-lime text-base hover:bg-lime-hover transition-colors focus-ring font-semibold"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="touch-target p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-md focus-ring inline-flex items-center justify-center"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {isOpen ? <X className="w-6 h-6 text-lime" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-b border-border-subtle bg-surface/95 backdrop-blur-lg px-4 pt-2 pb-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="touch-target flex items-center px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover/70 transition-colors focus-ring"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border-subtle flex flex-col gap-2">
                <div className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-lime" aria-hidden="true" />
                  <span>Portafolio personal • Oscar Serrano</span>
                </div>
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="touch-target flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-lime text-base font-semibold text-sm hover:bg-lime-hover transition-colors focus-ring"
                >
                  <span>Contáctame</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
