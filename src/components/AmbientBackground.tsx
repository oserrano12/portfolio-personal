import { useEffect } from 'react'
import { motion, useSpring } from 'motion/react'
import DarkVeil from './DarkVeil'

export default function AmbientBackground() {
  const mouseX = useSpring(0, { stiffness: 60, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark Veil Animated Backdrop (React Bits) spanning entire site */}
      <div className="absolute inset-0">
        <DarkVeil
          color="#C6FF4A"
          speed={0.35}
          scale={1.0}
          flow={0.9}
          warp={0}
          variation={0}
          brightness={0.8}
          glow={0.35}
          sheen={0}
          intro={false}
          fade={0}
          opacity={0.65}
          quality={0.5}
          mouseInteraction={true}
          mouseStrength={0.8}
          className="w-full h-full"
        />
      </div>

      {/* Subtle tech dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />

      {/* Ambient mouse follow spotlight */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(198,255,74,0.03)_0%,transparent_70%)] blur-2xl pointer-events-none"
      />
    </div>
  )
}
