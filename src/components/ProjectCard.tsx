import { motion } from 'motion/react'
import { ExternalLink, ArrowUpRight, Check, Sparkles, Globe } from 'lucide-react'
import type { Project } from '../data/projects'
import GithubIcon from './GithubIcon'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getTypeLabel = (type: Project['type']) => {
    switch (type) {
      case 'comercial':
        return 'Caso Comercial'
      case 'academico':
        return 'Académico • UTS'
      case 'personal':
        return 'Proyecto Personal'
    }
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-2xl bg-surface border border-border-subtle p-6 flex flex-col justify-between hover:border-lime-border transition-all duration-300 hover:shadow-xl hover:shadow-lime/[0.03] group relative overflow-hidden"
    >
      <div>
        {/* Card Header: Type Badge & Featured Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono ${
              project.type === 'comercial'
                ? 'bg-lime-muted text-lime border border-lime-border'
                : 'bg-base text-text-secondary border border-border-subtle'
            }`}
          >
            {getTypeLabel(project.type)}
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-mono text-lime font-medium">
              <Sparkles className="w-3 h-3 text-lime" aria-hidden="true" />
              <span>Destacado</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-white transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mt-2.5">
          {project.description}
        </p>

        {/* Verified Highlights */}
        {project.highlights.length > 0 && (
          <ul
            className="mt-4 space-y-1.5 text-xs text-text-secondary/90 border-t border-border-subtle/60 pt-3"
            aria-label={`Aspectos relevantes de ${project.title}`}
          >
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border-subtle/80 flex flex-col gap-4">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Tecnologías utilizadas">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-base/80 text-text-secondary border border-border-subtle/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-1">
          {/* GitHub Repo */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-base border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
            aria-label={`Ver código fuente de ${project.title} en GitHub (abre en nueva pestaña)`}
          >
            <GithubIcon className="w-3.5 h-3.5 text-lime" />
            <span>Código</span>
            <ArrowUpRight className="w-3 h-3 text-text-tertiary" aria-hidden="true" />
          </a>

          {/* Demo Link or Contextual Badge */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-lime-muted border border-lime-border text-xs font-mono font-medium text-lime hover:bg-lime hover:text-base transition-colors focus-ring shadow-sm"
              aria-label={`Ver demo en vivo de ${project.title} (abre en nueva pestaña)`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Demo en vivo</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-text-tertiary bg-base/40 border border-border-subtle/40">
              <Globe className="w-3.5 h-3.5 text-text-tertiary" aria-hidden="true" />
              <span>Proyecto Web</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
