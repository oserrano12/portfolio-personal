import { motion } from 'motion/react'
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react'
import { projectsData } from './data/projects'

export default function App() {
  return (
    <>
      {/* Accessible skip link for keyboard/screen reader users */}
      <a href="#main-content" className="skip-to-content focus-ring">
        Saltar al contenido principal
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-base text-text-primary font-body p-6 md:p-12 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl w-full bg-surface border border-border-subtle rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime opacity-10 blur-3xl pointer-events-none rounded-full" />

          {/* Header badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-lime-muted text-lime border border-lime-border">
              <Terminal className="w-3.5 h-3.5" />
              <span>Sistema de Diseño Inicializado</span>
            </span>
            <span className="text-xs text-text-tertiary font-mono">v0.1.0</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-3 tracking-tight">
            Oscar Serrano
          </h1>
          <p className="text-text-secondary text-sm md:text-base mb-6 leading-relaxed">
            Estudiante de Ingeniería de Sistemas | Desarrollo Web, Apps &amp; Bases de Datos.
            Entorno preparado con estética <span className="text-lime font-mono font-medium">Dark Creative Developer</span>.
          </p>

          {/* Tokens preview grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-base border border-border-subtle mb-6 font-mono text-xs">
            <div className="flex flex-col gap-1.5">
              <span className="text-text-tertiary">Fondo Base</span>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded border border-white/20 bg-[#101114]" />
                <span className="text-text-secondary">#101114</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-text-tertiary">Superficie</span>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded border border-white/20 bg-[#1C1E23]" />
                <span className="text-text-secondary">#1C1E23</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-text-tertiary">Acento Lima</span>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-[#C6FF4A]" />
                <span className="text-lime">#C6FF4A</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-text-tertiary">Texto Principal</span>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-[#E9EAF0]" />
                <span className="text-text-primary">#E9EAF0</span>
              </div>
            </div>
          </div>

          {/* Verified projects count */}
          <div className="flex items-center justify-between text-xs font-mono text-text-secondary pt-4 border-t border-border-subtle">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime" />
              <span>{projectsData.length} proyectos verificados en src/data/projects.ts</span>
            </span>
            <span className="flex items-center gap-1 text-text-tertiary">
              <Sparkles className="w-3.5 h-3.5 text-lime" />
              <span>Vite + React + Tailwind v4 + Motion</span>
            </span>
          </div>
        </motion.div>
      </main>
    </>
  )
}
