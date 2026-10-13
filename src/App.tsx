import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'

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

        {/* Section anchors (placeholders prepared for upcoming phases) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">

          {/* Target for #sobre-mi */}
          <section
            id="sobre-mi"
            aria-labelledby="heading-sobre-mi"
            className="pt-8 scroll-mt-20 border-t border-border-subtle/60"
          >
            <div className="flex items-center justify-between p-6 rounded-xl bg-surface/50 border border-border-subtle text-xs font-mono text-text-secondary">
              <span id="heading-sobre-mi" className="font-semibold text-text-primary">
                #sobre-mi
              </span>
              <span className="text-text-tertiary">Siguiente fase: Perfil y trayectoria académica</span>
            </div>
          </section>

          {/* Target for #stack */}
          <section
            id="stack"
            aria-labelledby="heading-stack"
            className="pt-8 scroll-mt-20 border-t border-border-subtle/60"
          >
            <div className="flex items-center justify-between p-6 rounded-xl bg-surface/50 border border-border-subtle text-xs font-mono text-text-secondary">
              <span id="heading-stack" className="font-semibold text-text-primary">
                #stack
              </span>
              <span className="text-text-tertiary">Siguiente fase: Stack tecnológico categorizado</span>
            </div>
          </section>

          {/* Target for #contacto */}
          <section
            id="contacto"
            aria-labelledby="heading-contacto"
            className="pt-8 scroll-mt-20 border-t border-border-subtle/60"
          >
            <div className="flex items-center justify-between p-6 rounded-xl bg-surface/50 border border-border-subtle text-xs font-mono text-text-secondary">
              <span id="heading-contacto" className="font-semibold text-text-primary">
                #contacto
              </span>
              <span className="text-lime">Siguiente fase: Tarjetas interactivas y formulario</span>
            </div>
          </section>
        </div>
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
    </div>
  )
}
