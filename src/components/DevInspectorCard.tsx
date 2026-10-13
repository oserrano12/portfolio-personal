import { useState, useRef, useEffect } from 'react'
import { FileCode2, Copy, Check } from 'lucide-react'

export default function DevInspectorCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [copied, setCopied] = useState(false)

  // Detect pointer capability and user motion preference
  useEffect(() => {
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setIsFinePointer(hasFinePointer && !prefersReducedMotion)
    }

    checkPointer()
    const mediaQuery = window.matchMedia('(pointer: fine)')
    mediaQuery.addEventListener?.('change', checkPointer)
    return () => mediaQuery.removeEventListener?.('change', checkPointer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isFinePointer) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const codeSnippet = `const developer = {
  nombre: "Oscar Serrano",
  rol: "Estudiante de Ing. de Sistemas",
  institucion: "UTS (Bucaramanga, CO)",
  competenciasPrincipales: [
    "JavaScript & Java",
    "HTML5 & CSS3",
    "Bases de Datos & SQL",
    "Hardware & Soporte de PC"
  ],
  stackPractico: ["React", "TypeScript", "FastAPI", "Node"],
  disponibilidad: "Pasantías & Proyectos"
};`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isFinePointer && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl bg-surface border border-border-subtle p-0 overflow-hidden shadow-2xl transition-all duration-300 hover:border-lime-border group"
    >
      {/* Subtle Spotlight effect (only active on fine pointer devices and without reduced motion) */}
      {isFinePointer && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(380px circle at ${coords.x}px ${coords.y}px, rgba(198, 255, 74, 0.08), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-base/70 border-b border-border-subtle select-none">
        <div className="flex items-center gap-2">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          </div>
          {/* Active file tab */}
          <div className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border-subtle text-xs font-mono text-text-primary">
            <FileCode2 className="w-3.5 h-3.5 text-lime" aria-hidden="true" />
            <span>oscar.config.ts</span>
          </div>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopyCode}
          className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-surface-hover rounded focus-ring transition-colors"
          title="Copiar código"
          aria-label={copied ? 'Código copiado' : 'Copiar fragmento de código'}
        >
          {copied ? (
            <Check className="w-4 h-4 text-lime" aria-hidden="true" />
          ) : (
            <Copy className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Editor Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        <pre className="text-text-secondary">
          <code>
            <span className="text-[#89DDFF]">const</span> <span className="text-[#FFCB6B]">developer</span>{' '}
            <span className="text-[#89DDFF]">=</span> &#123;{'\n'}
            {'  '}<span className="text-text-primary">nombre</span>: <span className="text-lime">"Oscar Serrano"</span>,{'\n'}
            {'  '}<span className="text-text-primary">rol</span>: <span className="text-lime">"Estudiante de Ing. de Sistemas"</span>,{'\n'}
            {'  '}<span className="text-text-primary">institucion</span>: <span className="text-lime">"UTS (Bucaramanga, CO)"</span>,{'\n'}
            {'  '}<span className="text-text-primary">competenciasPrincipales</span>: [{'\n'}
            {'    '}<span className="text-text-secondary">"JavaScript &amp; Java"</span>,{'\n'}
            {'    '}<span className="text-text-secondary">"HTML5 &amp; CSS3"</span>,{'\n'}
            {'    '}<span className="text-text-secondary">"Bases de Datos &amp; SQL"</span>,{'\n'}
            {'    '}<span className="text-text-secondary">"Hardware &amp; Soporte de PC"</span>{'\n'}
            {'  '}],{'\n'}
            {'  '}<span className="text-text-primary">stackPractico</span>: [<span className="text-lime">"React"</span>, <span className="text-lime">"TypeScript"</span>, <span className="text-lime">"FastAPI"</span>, <span className="text-lime">"Node"</span>],{'\n'}
            {'  '}<span className="text-text-primary">disponibilidad</span>: <span className="text-lime">"Pasantías &amp; Proyectos"</span>{'\n'}
            &#125;;
          </code>
        </pre>
      </div>

      {/* Status footer bar */}
      <div className="px-4 py-2 bg-base/40 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
          <span>TypeScript 5.x • UTF-8</span>
        </span>
        <span>Ln 14, Col 2</span>
      </div>
    </div>
  )
}
