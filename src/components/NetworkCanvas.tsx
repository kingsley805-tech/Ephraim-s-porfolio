import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

interface Packet {
  fromNode: number
  toNode: number
  progress: number
  speed: number
}

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Generate network nodes
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 55)
    const nodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Packets traveling along links
    const packets: Packet[] = []
    const maxDistance = 145

    // Mouse tracking
    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    let lastPacketTime = 0

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        if (!prefersReducedMotion) {
          node.x += node.vx
          node.y += node.vy

          // Bounce off boundaries
          if (node.x < 10) {
            node.x = 10
            node.vx *= -1
          } else if (node.x > width - 10) {
            node.x = width - 10
            node.vx *= -1
          }

          if (node.y < 10) {
            node.y = 10
            node.vy *= -1
          } else if (node.y > height - 10) {
            node.y = height - 10
            node.vy *= -1
          }

          // Mouse gentle interaction
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120
            node.x -= (dx / dist) * force * 1.5
            node.y -= (dy / dist) * force * 1.5
          }
        }

        // Pulse glow
        node.pulsePhase += 0.03
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + pulse * 1, 0, Math.PI * 2)
        ctx.fillStyle = i % 4 === 0 ? 'rgba(6, 182, 212, 0.85)' : 'rgba(37, 99, 235, 0.75)'
        ctx.shadowColor = i % 4 === 0 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(37, 99, 235, 0.5)'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Draw connections
      const eligibleConnections: Array<[number, number]> = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()

            eligibleConnections.push([i, j])
          }
        }
      }

      // Spawn packets occasionally
      if (!prefersReducedMotion && time - lastPacketTime > 650 && eligibleConnections.length > 0) {
        lastPacketTime = time
        const pair = eligibleConnections[Math.floor(Math.random() * eligibleConnections.length)]
        packets.push({
          fromNode: pair[0],
          toNode: pair[1],
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
        })
      }

      // Update and draw packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p]
        pkt.progress += pkt.speed

        if (pkt.progress >= 1) {
          packets.splice(p, 1)
          continue
        }

        const n1 = nodes[pkt.fromNode]
        const n2 = nodes[pkt.toNode]
        if (!n1 || !n2) {
          packets.splice(p, 1)
          continue
        }

        const px = n1.x + (n2.x - n1.x) * pkt.progress
        const py = n1.y + (n2.y - n1.y) * pkt.progress

        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(6, 182, 212, 0.95)'
        ctx.shadowColor = 'rgba(6, 182, 212, 1)'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-65"
      aria-hidden="true"
    />
  )
}

