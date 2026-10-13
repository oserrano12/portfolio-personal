import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowDown,
  Mail,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  ExternalLink,
} from 'lucide-react'
import DevInspectorCard from './DevInspectorCard'

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function Hero() {
  const [copiedDiscord, setCopiedDiscord] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const discordUsername = 'deadly04'
  const emailAddress = 'serranojaimesoscarsteven@hotmail.com'

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUsername)
    setCopiedDiscord(true)
    setTimeout(() => setCopiedDiscord(false), 2500)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-lime/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-6">
              <MapPin className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
              <span>Bucaramanga, Colombia</span>
              <span className="text-text-tertiary">•</span>
              <span className="text-text-primary">UTS</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-display text-text-primary tracking-tight leading-[1.12] mb-6"
            >
              Construyendo software con{' '}
              <span className="text-lime inline-block">código limpio</span> y visión práctica.
            </h1>

            {/* Presentation Bio */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Estudiante de Ingeniería de Sistemas en las UTS, interesado en el desarrollo web,
              las bases de datos y la creación de soluciones de software funcionales.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#proyectos"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-lime text-base font-semibold text-sm hover:bg-lime-hover transition-colors focus-ring shadow-lg shadow-lime/10"
              >
                <span>Explorar proyectos</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contacto"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border-subtle hover:border-border-hover hover:bg-surface-hover text-text-primary font-medium text-sm transition-colors focus-ring"
              >
                <span>Contáctame</span>
              </a>
            </div>

            {/* Contact Channels */}
            <div className="w-full pt-6 border-t border-border-subtle/80 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-text-tertiary">
                Canales directos de contacto
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* GitHub Link */}
                <a
                  href="https://github.com/oserrano12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
                  aria-label="Abrir perfil de GitHub de Oscar Serrano (abre en pestaña nueva)"
                >
                  <GithubIcon className="w-4 h-4 text-lime" aria-hidden="true" />
                  <span>github.com/oserrano12</span>
                  <ExternalLink className="w-3 h-3 text-text-tertiary" aria-hidden="true" />
                </a>

                {/* Discord User Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="touch-target inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
                  aria-label={`Copiar usuario de Discord: ${discordUsername}`}
                >
                  <MessageSquare className="w-4 h-4 text-lime" aria-hidden="true" />
                  <span>Discord: {discordUsername}</span>
                  {copiedDiscord ? (
                    <Check className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-text-tertiary" aria-hidden="true" />
                  )}
                </button>

                {/* Email Direct and Copy Link */}
                <div className="inline-flex items-center rounded-lg bg-surface border border-border-subtle overflow-hidden">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="touch-target inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors focus-ring"
                    aria-label={`Enviar correo a ${emailAddress}`}
                  >
                    <Mail className="w-4 h-4 text-lime" aria-hidden="true" />
                    <span>Enviar correo</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="touch-target p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-hover border-l border-border-subtle transition-colors focus-ring"
                    title="Copiar dirección de correo"
                    aria-label={copiedEmail ? 'Correo copiado' : 'Copiar dirección de correo'}
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* Accessible Live Region for Copy Feedback */}
              <div className="sr-only" aria-live="polite">
                {copiedDiscord && 'Usuario de Discord copiado al portapapeles'}
                {copiedEmail && 'Correo electrónico copiado al portapapeles'}
              </div>
            </div>
          </motion.div>

          {/* Right Column: DevInspectorCard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <DevInspectorCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
