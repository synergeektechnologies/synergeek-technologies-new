"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, BarChart3 } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(124, 58, 237, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="absolute inset-0 z-0 animated-gradient-bg opacity-30" />

      <div className="container relative z-10 px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
              Innovative Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Transforming Ideas Into <br />
            <span className="gradient-text text-glow">Digital Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Synergeek Technologies delivers cutting-edge web development, AI solutions, and digital marketing strategies
            to help your business thrive in the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white flex items-center" onClick={() => location.href = "#services"}>
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 text-white" onClick={() => location.href = "#work"}>
              View Our Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Web Development",
              description: "Custom websites and web applications built with cutting-edge technologies.",
            },
            {
              icon: <Cpu className="h-10 w-10 text-primary" />,
              title: "AI Solutions",
              description: "Intelligent automation and AI-powered tools to streamline your business.",
            },
            {
              icon: <BarChart3 className="h-10 w-10 text-primary" />,
              title: "Digital Marketing",
              description: "Strategic marketing campaigns to boost your online presence and growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 card-hover"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#services">
          <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="h-10 w-6 rounded-full border border-gray-700 flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="h-2 w-2 rounded-full bg-primary"
              />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}
