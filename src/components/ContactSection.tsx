import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react'
import GithubIcon from './GithubIcon'

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(label)
      setTimeout(() => {
        setCopiedItem(null)
      }, 2500)
    } catch {
      // Fallback
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto Portafolio - ${name || 'Propuesta'}`)
    const body = encodeURIComponent(
      `Hola Oscar,\n\n${message}\n\nAtentamente,\n${name}\nCorreo de contacto: ${senderEmail}`
    )
    window.location.href = `mailto:serranojaimesoscarsteven@hotmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="pt-20 pb-24 border-t border-border-subtle/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono text-text-secondary mb-4">
            <Mail className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>Hablemos • Canales Directos</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-display text-text-primary tracking-tight"
          >
            Contacto
          </h2>

          <p className="text-[15px] text-text-secondary leading-relaxed mt-3">
            ¿Tienes una propuesta laboral, proyecto freelance, pasantía universitaria o idea
            colaborativa? Contáctame directamente a través de cualquiera de estos canales.
          </p>
        </div>

        {/* Status Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-surface border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime" />
            </span>
            <div>
              <p className="text-sm font-bold font-display text-text-primary">
                Disponibilidad abierta e inmediata
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                Prácticas / pasantías UTS • Ofertas frontend & web Jr • Proyectos freelance
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-lime-muted text-lime border border-lime-border shrink-0">
            <Sparkles className="w-3 h-3 text-lime" aria-hidden="true" />
            <span>Listo para colaborar</span>
          </span>
        </div>

        {/* Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Channels Column */}
          <div className="space-y-4 lg:col-span-1">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-2xl bg-surface border border-border-subtle hover:border-lime-border/60 hover:shadow-xl hover:shadow-lime/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-base border border-border-subtle flex items-center justify-center text-lime">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">Correo Electrónico</h3>
                  <span className="text-[11px] font-mono text-text-tertiary">Respuesta rápida</span>
                </div>
              </div>

              <p className="text-xs font-mono text-text-secondary truncate mt-2 select-all">
                serranojaimesoscarsteven@hotmail.com
              </p>

              <div className="mt-4 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() =>
                    handleCopy('serranojaimesoscarsteven@hotmail.com', 'email')
                  }
                  className="touch-target inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime" />
                      <span className="text-lime font-medium">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-tertiary" />
                      <span>Copiar correo</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:serranojaimesoscarsteven@hotmail.com"
                  className="touch-target inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-lime-muted border border-lime-border text-xs font-mono text-lime hover:bg-lime hover:text-base transition-colors focus-ring"
                >
                  <span>Escribir</span>
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>

            {/* Discord Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="p-5 rounded-2xl bg-surface border border-border-subtle hover:border-lime-border/60 hover:shadow-xl hover:shadow-lime/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-base border border-border-subtle flex items-center justify-center text-lime">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">Discord</h3>
                  <span className="text-[11px] font-mono text-text-tertiary">Mensajería directa</span>
                </div>
              </div>

              <p className="text-xs font-mono text-text-secondary mt-2">
                Usuario: <span className="text-lime font-semibold">deadly04</span>
              </p>

              <div className="mt-4 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => handleCopy('deadly04', 'discord')}
                  className="touch-target inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
                >
                  {copiedItem === 'discord' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime" />
                      <span className="text-lime font-medium">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-tertiary" />
                      <span>Copiar usuario</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="p-5 rounded-2xl bg-surface border border-border-subtle hover:border-lime-border/60 hover:shadow-xl hover:shadow-lime/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-base border border-border-subtle flex items-center justify-center text-lime">
                  <GithubIcon className="w-4 h-4 text-lime" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">GitHub</h3>
                  <span className="text-[11px] font-mono text-text-tertiary">Código & Repositorios</span>
                </div>
              </div>

              <p className="text-xs font-mono text-text-secondary mt-2">
                Perfil: <span className="text-text-primary">github.com/oserrano12</span>
              </p>

              <div className="mt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/oserrano12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:border-lime-border transition-colors focus-ring"
                >
                  <span>Explorar perfil</span>
                  <ArrowUpRight className="w-3 h-3 text-text-tertiary" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Message Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl bg-surface border border-border-subtle p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Send className="w-4 h-4 text-lime" />
                <h3 className="text-xl font-bold font-display text-text-primary">
                  Enviar mensaje directo
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Completa este formulario rápido para abrir tu cliente de correo con un mensaje
                listo para enviar a mi bandeja personal.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-text-secondary mb-1.5"
                    >
                      Tu nombre / Empresa
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Carlos / Empresa XYZ"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle text-sm text-text-primary placeholder:text-text-tertiary focus-ring transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-text-secondary mb-1.5"
                    >
                      Tu correo electrónico
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle text-sm text-text-primary placeholder:text-text-tertiary focus-ring transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-text-secondary mb-1.5"
                  >
                    Mensaje o propuesta
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntame sobre la oportunidad, proyecto o consulta técnica..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-base border border-border-subtle text-sm text-text-primary placeholder:text-text-tertiary focus-ring transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-tertiary">
                    Entrega directa a serranojaimesoscarsteven@hotmail.com
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime text-base font-semibold text-xs font-mono hover:bg-lime-hover transition-colors shadow-lg shadow-lime/10 focus-ring"
                  >
                    <span>Enviar propuesta</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
