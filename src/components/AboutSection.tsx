import { motion } from 'motion/react'
import {
  User,
  GraduationCap,
  Cpu,
  Wrench,
  Database,
  MapPin,
  Sparkles,
  Layers,
  Gamepad2,
  Headphones,
} from 'lucide-react'

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="pt-20 pb-24 border-t border-border-subtle/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-4">
            <User className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>Perfil • Trayectoria & Visión</span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-display text-text-primary tracking-tight"
          >
            Sobre mí
          </h2>

          <p className="text-base text-text-secondary leading-relaxed mt-3">
            Estudiante de Ingeniería de Sistemas con enfoque en desarrollo web, interfaces
            interactivas y comprensión profunda de la tecnología, desde los componentes de
            hardware hasta la capa de usuario.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Principal - Formación & Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 rounded-2xl bg-surface border border-border-subtle p-7 flex flex-col justify-between hover:border-lime-border/60 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -z-10 group-hover:bg-lime/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-lime-muted text-lime border border-lime-border">
                  <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ingeniería de Sistemas</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-text-tertiary">
                  <MapPin className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                  <span>Bucaramanga, Colombia</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-text-primary group-hover:text-white transition-colors">
                Desarrollo frontend creativo y fundamentos de ingeniería
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-3">
                Actualmente curso la carrera de <strong>Ingeniería de Sistemas</strong> en las{' '}
                <strong>Unidades Tecnológicas de Santander (UTS)</strong>. Mi pasión principal es
                diseñar y maquetar interfaces web modernas, dinámicas y reactivas, cuidando la
                composición visual, el rendimiento y la experiencia de usuario.
              </p>

              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                Me enfoco en transformar ideas en aplicaciones funcionales mediante código limpio y
                modular con tecnologías contemporáneas como Next.js, React, TypeScript y Tailwind
                CSS, respaldadas por arquitecturas de datos seguras y escalables.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border-subtle/80 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-text-secondary border border-border-subtle">
                Diseño Web Interactivo
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-text-secondary border border-border-subtle">
                Arquitectura de Software
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-text-secondary border border-border-subtle">
                Mobile-First & A11y
              </span>
            </div>
          </motion.div>

          {/* Bento Card 2: Dominio en Hardware */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl bg-surface border border-border-subtle p-7 flex flex-col justify-between hover:border-lime-border/60 transition-all duration-300 relative group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-lime-muted border border-lime-border flex items-center justify-center text-lime mb-5">
                <Cpu className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-white transition-colors">
                Hardware & Reparación
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                Cuento con un conocimiento profundo en el área física y electrónica de cómputo:
                ensamble de PCs personalizadas, diagnóstico de fallas, mantenimiento correctivo y
                preventivo tanto de hardware como de software a bajo nivel.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                <Wrench className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                <span>Ensamble y diagnóstico técnico</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                <Layers className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                <span>Optimización de componentes y SO</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Bases de Datos & Backend */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl bg-surface border border-border-subtle p-7 flex flex-col justify-between hover:border-lime-border/60 transition-all duration-300 relative group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-base border border-border-subtle flex items-center justify-center text-lime mb-5">
                <Database className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-white transition-colors">
                Datos & Lógica de Servidor
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                Modelado de bases de datos relacionales en PostgreSQL y Supabase. Implementación de
                políticas de seguridad a nivel de filas (RLS), APIs RESTful y control estricto de
                transacciones.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle/80">
              <span className="text-xs font-mono text-lime font-medium">
                PostgreSQL • Supabase • FastAPI
              </span>
            </div>
          </motion.div>

          {/* Bento Card 4: Filosofía de Trabajo & Pasiones */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 rounded-2xl bg-surface border border-border-subtle p-7 flex flex-col justify-between hover:border-lime-border/60 transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-lime" aria-hidden="true" />
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                  Estilo de trabajo & motivación
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-white transition-colors">
                Curiosidad técnica, música y resolución creativa de problemas
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                Me apasiona el aprendizaje autodidacta y estar al día con las herramientas que
                definen la industria web. Fuera del código, disfruto de los videojuegos, escuchar
                música y explorar nuevas tecnologías para seguir construyendo proyectos con alto
                valor visual y técnico.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle/80 flex flex-wrap items-center gap-4 text-xs font-mono text-text-tertiary">
              <span className="inline-flex items-center gap-1.5 text-text-secondary">
                <Headphones className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                <span>Música & Concentración</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-text-secondary">
                <Gamepad2 className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                <span>Videojuegos & Creatividad</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-lime font-medium">
                <span>Disponibilidad activa para proyectos</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
