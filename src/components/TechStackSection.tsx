import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Layers,
  Layout,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Terminal,
  Sparkles,
} from 'lucide-react'

interface SkillItem {
  name: string
  level: 'Principal' | 'Avanzado' | 'Sólido'
  description: string
  category: 'frontend' | 'backend' | 'database' | 'hardware'
}

const skills: SkillItem[] = [
  // Frontend
  {
    name: 'Next.js',
    level: 'Principal',
    description: 'Framework React fullstack, Server Actions, App Router y optimización de renderizado.',
    category: 'frontend',
  },
  {
    name: 'React',
    level: 'Principal',
    description: 'Arquitectura modular de componentes, Hooks y desarrollo de interfaces reactivas.',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 'Principal',
    description: 'Tipado estático seguro, interfaces robustas y prevención de errores en compilación.',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 'Principal',
    description: 'Maquetación responsive mobile-first, sistemas de diseño personalizados y utilidades.',
    category: 'frontend',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 'Avanzado',
    description: 'Manipulación del DOM, programación asíncrona, promesas y consumo de APIs.',
    category: 'frontend',
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Avanzado',
    description: 'Estructuración semántica, estándares WCAG de accesibilidad y animaciones modernas.',
    category: 'frontend',
  },

  // Backend
  {
    name: 'Python',
    level: 'Avanzado',
    description: 'Desarrollo de lógica backend, scripts de automatización y modelado de datos.',
    category: 'backend',
  },
  {
    name: 'FastAPI',
    level: 'Avanzado',
    description: 'Creación de APIs RESTful de alto rendimiento, esquemas Pydantic y documentación OpenAPI.',
    category: 'backend',
  },
  {
    name: 'Java',
    level: 'Sólido',
    description: 'Programación Orientada a Objetos (POO), patrones de diseño y conexión nativa JDBC.',
    category: 'backend',
  },
  {
    name: 'Node.js',
    level: 'Sólido',
    description: 'Entorno de ejecución para tooling de desarrollo web y microservicios backend.',
    category: 'backend',
  },

  // Database & Cloud
  {
    name: 'PostgreSQL',
    level: 'Avanzado',
    description: 'Diseño de esquemas relacionales, consultas complejas, índices y transacciones ACID.',
    category: 'database',
  },
  {
    name: 'Supabase',
    level: 'Avanzado',
    description: 'BaaS con persistencia PostgreSQL, autenticación y seguridad por políticas RLS.',
    category: 'database',
  },
  {
    name: 'Neon Database',
    level: 'Sólido',
    description: 'PostgreSQL serverless optimizado para despliegues modernos en la nube.',
    category: 'database',
  },
  {
    name: 'Vercel',
    level: 'Avanzado',
    description: 'Despliegue continuo (CI/CD), enrutamiento SPA y hosting con CDN de baja latencia.',
    category: 'database',
  },

  // Hardware & Tools
  {
    name: 'Hardware de PC',
    level: 'Avanzado',
    description: 'Ensamble personalizado, diagnóstico de fallas a bajo nivel y mantenimiento integral.',
    category: 'hardware',
  },
  {
    name: 'Reparación & Mantenimiento',
    level: 'Avanzado',
    description: 'Mantenimiento preventivo y correctivo de componentes físicos y sistemas operativos.',
    category: 'hardware',
  },
  {
    name: 'Git & GitHub',
    level: 'Avanzado',
    description: 'Control de versiones profesional, flujo estructurado de ramas y commits atómicos.',
    category: 'hardware',
  },
  {
    name: 'Linux / Terminal',
    level: 'Sólido',
    description: 'Manejo de terminal Bash, automatización básica de comandos y utilidades de sistema.',
    category: 'hardware',
  },
]

type CategoryTab = 'all' | 'frontend' | 'backend' | 'database' | 'hardware'

const categoryTabs: { id: CategoryTab; label: string; icon: typeof Layers }[] = [
  { id: 'all', label: 'Todo el stack', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend & APIs', icon: Server },
  { id: 'database', label: 'Bases de Datos & Cloud', icon: Database },
  { id: 'hardware', label: 'Hardware & Entorno', icon: Cpu },
]

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="pt-20 pb-24 border-t border-border-subtle/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-4">
            <Terminal className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>Herramientas & Capacidades</span>
          </div>

          <h2
            id="stack-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-display text-text-primary tracking-tight"
          >
            Stack tecnológico
          </h2>

          <p className="text-base text-text-secondary leading-relaxed mt-3">
            Tecnologías, librerías y herramientas con las que construyo soluciones de software,
            organizadas según mi experiencia práctica en proyectos reales y formación en
            Ingeniería de Sistemas.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Filtrar tecnologías por área técnica"
          className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-subtle/60"
        >
          {categoryTabs.map((tab) => {
            const isSelected = activeCategory === tab.id
            const Icon = tab.icon

            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls="skills-grid"
                onClick={() => setActiveCategory(tab.id)}
                className={`touch-target inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 focus-ring ${
                  isSelected
                    ? 'bg-lime text-base font-semibold shadow-md shadow-lime/10'
                    : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-base' : 'text-lime'}`} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div
          id="skills-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-surface border border-border-subtle p-5 flex flex-col justify-between hover:border-lime-border/60 hover:shadow-lg hover:shadow-lime/[0.02] transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                      skill.level === 'Principal'
                        ? 'bg-lime-muted text-lime border-lime-border font-medium'
                        : 'bg-base text-text-secondary border-border-subtle'
                    }`}
                  >
                    {skill.level === 'Principal' && (
                      <Sparkles className="w-2.5 h-2.5 text-lime" aria-hidden="true" />
                    )}
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-subtle/60 flex items-center gap-1.5 text-[11px] font-mono text-text-tertiary">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0" aria-hidden="true" />
                <span>Verificado en proyectos prácticos</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
