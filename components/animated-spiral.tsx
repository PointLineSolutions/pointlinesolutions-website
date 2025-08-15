"use client"

import { useEffect, useRef } from "react"

export default function AnimatedSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Website colors
    const colors = [
      "#0F172A", // Deep navy
      "#1E293B", // Charcoal gray
      "#3B82F6", // Electric blue
      "#06B6D4", // Cyan
      "#8B5CF6", // Purple accent
    ]

    let animationId: number
    let time = 0

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const maxRadius = Math.min(centerX, centerY) * 0.8

      // Clear canvas with subtle background
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)"
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Draw multiple spirals
      for (let spiralIndex = 0; spiralIndex < colors.length; spiralIndex++) {
        const color = colors[spiralIndex]
        const offset = (spiralIndex * Math.PI * 2) / colors.length

        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.globalAlpha = 0.8

        ctx.beginPath()

        for (let i = 0; i < 200; i++) {
          const angle = i * 0.1 + time * 0.02 + offset
          const radius = (i / 200) * maxRadius

          // Create spiral coordinates
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()

        // Add glowing dots at spiral ends
        const finalAngle = 200 * 0.1 + time * 0.02 + offset
        const finalRadius = maxRadius
        const dotX = centerX + Math.cos(finalAngle) * finalRadius
        const dotY = centerY + Math.sin(finalAngle) * finalRadius

        // Outer glow
        ctx.globalAlpha = 0.3
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(dotX, dotY, 8, 0, Math.PI * 2)
        ctx.fill()

        // Inner dot
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add central pulsing core
      ctx.globalAlpha = 0.6 + Math.sin(time * 0.05) * 0.3
      ctx.fillStyle = "#3B82F6"
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8 + Math.sin(time * 0.08) * 4, 0, Math.PI * 2)
      ctx.fill()

      // Add outer ring
      ctx.globalAlpha = 0.4
      ctx.strokeStyle = "#06B6D4"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, 20 + Math.sin(time * 0.06) * 5, 0, Math.PI * 2)
      ctx.stroke()

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
      {/* Subtle overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 pointer-events-none" />
    </div>
  )
}
