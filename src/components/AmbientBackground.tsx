import { useEffect } from 'react'
import { motion, useSpring } from 'motion/react'

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
      {/* Subtle tech dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />

      {/* Ambient mouse follow spotlight */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(198,255,74,0.04)_0%,transparent_70%)] blur-2xl pointer-events-none"
      />
    </div>
  )
}
