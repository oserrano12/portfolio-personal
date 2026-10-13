import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Layers,
  Database,
  Cpu,
  CheckCircle2,
  Terminal,
  Sparkles,
  Network,
  Code2,
} from 'lucide-react'

type SkillLevel = 'Principal' | 'Avanzado' | 'Intermedio' | 'Básico'

type SkillCategory = 'core' | 'database' | 'frameworks' | 'hardware' | 'networking'

interface SkillItem {
  name: string
  level: SkillLevel
  description: string
  category: SkillCategory
}

const skills: SkillItem[] = [
  // Lenguajes & Conocimientos Principales
  {
    name: 'JavaScript (ES6+)',
    level: 'Principal',
    description: 'Lógica algorítmica, manipulación dinámica del DOM, asincronía, promesas y consumo eficiente de APIs REST.',
    category: 'core',
  },
  {
    name: 'Java',
    level: 'Principal',
    description: 'Programación Orientada a Objetos (POO), herencia, polimorfismo, interfaces, estructuras de datos y lógica algorítmica.',
    category: 'core',
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Principal',
    description: 'Maquetación semántica, estándares web modernos, accesibilidad WCAG y diseño responsivo adaptativo.',
    category: 'core',
  },
  {
    name: 'Bases de Datos & SQL',
    level: 'Principal',
    description: 'Modelado relacional (Diagramas E-R), diseño de esquemas, normalización, consultas complejas y transacciones ACID.',
    category: 'core',
  },

  // Bases de Datos & Cloud (Avanzado)
  {
    name: 'PostgreSQL',
    level: 'Avanzado',
    description: 'Administración de bases de datos relacionales, integridad referencial, índices, claves foráneas y optimización de consultas.',
    category: 'database',
  },
  {
    name: 'MySQL',
    level: 'Avanzado',
    description: 'Diseño de tablas relacionales, scripts DDL/DML, persistencia de datos estructurados e integridad de datos.',
    category: 'database',
  },
  {
    name: 'Supabase',
    level: 'Avanzado',
    description: 'Backend-as-a-Service con persistencia PostgreSQL en la nube, autenticación y seguridad por políticas RLS.',
    category: 'database',
  },
  {
    name: 'Vercel',
    level: 'Avanzado',
    description: 'Despliegue continuo (CI/CD), enrutamiento SPA, gestión de dominios y hosting cloud global de alta disponibilidad.',
    category: 'database',
  },

  // Hardware & Soporte
  {
    name: 'Hardware de PC & Arquitectura',
    level: 'Avanzado',
    description: 'Ensamble de equipos personalizados, compatibilidad de componentes físicos, arquitectura de computadores y diagnóstico a bajo nivel.',
    category: 'hardware',
  },
  {
    name: 'Mantenimiento & Reparación',
    level: 'Avanzado',
    description: 'Mantenimiento preventivo y correctivo, resolución de fallas críticas de hardware/software y optimización de sistemas operativos.',
    category: 'hardware',
  },
  {
    name: 'Linux / Terminal',
    level: 'Básico',
    description: 'Comandos esenciales de terminal Bash, navegación en sistemas de archivos, gestión básica de permisos y procesos.',
    category: 'hardware',
  },

  // Redes & Control de Versiones
  {
    name: 'Git & GitHub',
    level: 'Avanzado',
    description: 'Control de versiones profesional, flujo estructurado de ramas, commits atómicos, pull requests y resolución de conflictos.',
    category: 'networking',
  },
  {
    name: 'Redes & Topologías',
    level: 'Intermedio',
    description: 'Diseño y comprensión de topologías de red lógicas y físicas (estrella, malla, árbol), modelos de referencia OSI y TCP/IP.',
    category: 'networking',
  },
  {
    name: 'Subneteo & VLSM',
    level: 'Intermedio',
    description: 'Segmentación y cálculo de redes IPv4 utilizando máscaras de subred de longitud variable (VLSM) para aprovechamiento óptimo.',
    category: 'networking',
  },
  {
    name: 'Cisco Packet Tracer',
    level: 'Intermedio',
    description: 'Simulación de infraestructuras de red, configuración de routers y conmutadores, y pruebas de conectividad y enrutamiento.',
    category: 'networking',
  },

  // Frameworks & Desarrollo Web Complementario
  {
    name: 'React',
    level: 'Intermedio',
    description: 'Desarrollo de interfaces reactivas modulares basadas en componentes funcionales, manejo de estado y hooks.',
    category: 'frameworks',
  },
  {
    name: 'TypeScript',
    level: 'Intermedio',
    description: 'Tipado estático seguro, interfaces, tipado de props y prevención de errores en compilación para aplicaciones web.',
    category: 'frameworks',
  },
  {
    name: 'Tailwind CSS',
    level: 'Intermedio',
    description: 'Maquetación ágil con clases de utilidad, diseño responsive mobile-first y sistemas de diseño personalizados.',
    category: 'frameworks',
  },
  {
    name: 'Python',
    level: 'Intermedio',
    description: 'Desarrollo de scripts, lógica backend, manipulación de estructuras de datos y automatización de procesos.',
    category: 'frameworks',
  },
  {
    name: 'FastAPI',
    level: 'Intermedio',
    description: 'Construcción de APIs RESTful asíncronas, serialización de datos con Pydantic y documentación automática OpenAPI.',
    category: 'frameworks',
  },
  {
    name: 'Node.js',
    level: 'Intermedio',
    description: 'Entorno de ejecución de JavaScript en el servidor, gestión de dependencias con npm y automatización de tareas.',
    category: 'frameworks',
  },
]

type CategoryTab = 'all' | SkillCategory

const categoryTabs: { id: CategoryTab; label: string; icon: typeof Layers }[] = [
  { id: 'all', label: 'Todo el stack', icon: Layers },
  { id: 'core', label: 'Conocimientos Principales', icon: Terminal },
  { id: 'database', label: 'Bases de Datos & Cloud', icon: Database },
  { id: 'hardware', label: 'Hardware & Mantenimiento', icon: Cpu },
  { id: 'networking', label: 'Redes & Control de Versiones', icon: Network },
  { id: 'frameworks', label: 'Frameworks & Ecosistema Web', icon: Code2 },
]

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'Principal':
        return 'bg-lime-muted text-lime border-lime-border font-semibold shadow-[0_0_8px_rgba(198,255,74,0.12)]'
      case 'Avanzado':
        return 'bg-surface-hover text-text-primary border-border-hover font-medium'
      case 'Intermedio':
        return 'bg-base text-text-secondary border-border-subtle font-normal'
      case 'Básico':
        return 'bg-base/60 text-text-tertiary border-border-subtle/80 font-normal'
    }
  }

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="pt-20 pb-24 border-t border-border-subtle/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-4">
            <Terminal className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>Habilidades Técnicas • Competencias Verificadas</span>
          </div>

          <h2
            id="stack-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-display text-text-primary tracking-tight"
          >
            Stack tecnológico
          </h2>

          <p className="text-[15px] text-text-secondary leading-relaxed mt-3">
            Habilidades y tecnologías estructuradas según mi grado real de dominio y aplicación
            práctica en la carrera de Ingeniería de Sistemas y proyectos de desarrollo.
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
              <motion.button
                key={tab.id}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls="skills-grid"
                onClick={() => setActiveCategory(tab.id)}
                className={`touch-target inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 focus-ring cursor-pointer ${
                  isSelected
                    ? 'bg-lime text-base font-semibold shadow-md shadow-lime/10'
                    : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-base' : 'text-lime'}`} />
                <span>{tab.label}</span>
              </motion.button>
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
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              className="rounded-2xl bg-surface border border-border-subtle p-5 flex flex-col justify-between hover:border-lime-border/60 hover:shadow-xl hover:shadow-lime/[0.03] transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getLevelBadgeClass(
                      skill.level
                    )}`}
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
                <span>
                  {skill.level === 'Principal'
                    ? 'Conocimiento central / Base sólida'
                    : skill.level === 'Avanzado'
                      ? 'Dominio probado y autónomo'
                      : skill.level === 'Intermedio'
                        ? 'Desarrollo práctico de proyectos'
                        : 'Conceptos y comandos esenciales'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
