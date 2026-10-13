import { useState, useMemo } from 'react'
import { AnimatePresence } from 'motion/react'
import { Code2, Filter } from 'lucide-react'
import { projectsData, filterOptions } from '../data/projects'
import type { FilterOption } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption['id']>('all')

  // Calculate project count for each filter category
  const filterCounts = useMemo(() => {
    const counts: Record<FilterOption['id'], number> = {
      all: projectsData.length,
      ecommerce: 0,
      tailwind: 0,
      academico: 0,
    }
    for (const option of filterOptions) {
      const category = option.id
      if (category !== 'all') {
        counts[category] = projectsData.filter((p) => p.categories.includes(category)).length
      }
    }
    return counts
  }, [])

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData
    const category = activeFilter
    return projectsData.filter((p) => p.categories.includes(category))
  }, [activeFilter])

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="pt-20 pb-24 border-t border-border-subtle/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-4">
            <Code2 className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>Evidencia Técnica • Código Real</span>
          </div>

          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-display text-text-primary tracking-tight"
          >
            Proyectos destacados
          </h2>

          <p className="text-[15px] text-text-secondary leading-relaxed mt-3">
            Selección de mis proyectos principales en GitHub con código fuente abierto
            y despliegues en producción verificados y accesibles en Vercel.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-border-subtle/60">
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="flex flex-wrap items-center gap-2"
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.id
              const count = filterCounts[option.id]

              return (
                <button
                  key={option.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls="projects-grid"
                  onClick={() => setActiveFilter(option.id)}
                  className={`touch-target inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 focus-ring ${
                    isSelected
                      ? 'bg-lime text-base font-semibold shadow-md shadow-lime/10'
                      : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-hover'
                  }`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isSelected
                        ? 'bg-base/20 text-base font-bold'
                        : 'bg-base text-text-tertiary border border-border-subtle'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Filter status indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-text-tertiary">
            <Filter className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>
              Mostrando {filteredProjects.length} de {projectsData.length} proyectos
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeFilter}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
