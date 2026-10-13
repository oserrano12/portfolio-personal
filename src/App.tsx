import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TechStackSection from './components/TechStackSection'
import ContactSection from './components/ContactSection'
import ScrollToTop from './components/ScrollToTop'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <div className="min-h-screen bg-base text-text-primary font-body flex flex-col selection:bg-lime selection:text-base">
      {/* Accessible skip link for keyboard and screen reader users (WCAG 2.4.1) */}
      <a href="#main-content" className="skip-to-content focus-ring">
        Saltar al contenido principal
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        <Hero />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-4 sm:px-6 bg-surface/30 text-center text-xs font-mono text-text-tertiary">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {CURRENT_YEAR} Oscar Serrano • Diseñado con calidad y accesibilidad.</p>
          <a
            href="https://github.com/oserrano12/portfolio-personal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-lime transition-colors focus-ring rounded px-1"
          >
            Código abierto en GitHub
          </a>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </div>
  )
}
