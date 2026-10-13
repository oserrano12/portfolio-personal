import { motion } from 'motion/react'
import {
  ExternalLink,
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  ShoppingBag,
  Store,
  Coffee,
} from 'lucide-react'
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

  const getProjectPreview = (id: string) => {
    switch (id) {
      case 'deportivos-pipe-catalogo':
        return {
          icon: ShoppingBag,
          category: 'E-commerce & Streetwear',
          gradient: 'from-emerald-950/40 via-surface to-lime/10',
          borderColor: 'border-lime-border/40',
        }
      case 'proyecto-final':
        return {
          icon: Store,
          category: 'Cafeterías & Panaderías',
          gradient: 'from-amber-950/30 via-surface to-orange-950/20',
          borderColor: 'border-amber-500/30',
        }
      case 'cafe-artesanal-app':
        return {
          icon: Coffee,
          category: 'Café Especial Regional',
          gradient: 'from-amber-950/40 via-surface to-yellow-950/20',
          borderColor: 'border-yellow-600/30',
        }
      default:
        return {
          icon: Globe,
          category: 'Desarrollo Web',
          gradient: 'from-base via-surface to-base',
          borderColor: 'border-border-subtle',
        }
    }
  }

  const preview = getProjectPreview(project.id)
  const IconComponent = preview.icon

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
        {/* Browser Mockup Visual Preview */}
        <div className="mb-5 rounded-xl bg-base border border-border-subtle overflow-hidden transition-all duration-300 group-hover:border-lime-border/50">
          {/* Browser Window Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-surface/90 border-b border-border-subtle/80 text-[10px] font-mono text-text-tertiary select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              <span className="w-2 h-2 rounded-full bg-lime/70" />
            </div>

            {project.demoUrl && (
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-base/80 text-[10px] text-text-secondary truncate max-w-[200px]">
                <span className="text-lime">https://</span>
                <span className="truncate">{project.demoUrl.replace('https://', '')}</span>
              </div>
            )}

            <div className="w-4" />
          </div>

          {/* Project Visual Theme Bar */}
          <div
            className={`px-4 py-3.5 bg-gradient-to-r ${preview.gradient} border-b ${preview.borderColor} flex items-center justify-between`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-base/80 border border-border-subtle flex items-center justify-center text-lime shrink-0">
                <IconComponent className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-text-primary font-semibold block leading-tight">
                  {preview.category}
                </span>
                <span className="text-[10px] font-mono text-text-tertiary">
                  Vercel Live App
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-lime font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span>En vivo</span>
            </div>
          </div>
        </div>

        {/* Card Badges: Type & Featured */}
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
