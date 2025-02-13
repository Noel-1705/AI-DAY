"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const neurons: { x: number; y: number; connections: number[] }[] = []
    const neuronCount = 100

    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
      })
    }

    // Create connections
    neurons.forEach((neuron, i) => {
      for (let j = i + 1; j < neurons.length; j++) {
        if (Math.random() > 0.98) {
          neuron.connections.push(j)
        }
      }
    })

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
      ctx.fillStyle = "rgba(0, 255, 255, 0.5)"

      neurons.forEach((neuron, i) => {
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, 2, 0, Math.PI * 2)
        ctx.fill()

        neuron.connections.forEach((j) => {
          ctx.beginPath()
          ctx.moveTo(neuron.x, neuron.y)
          ctx.lineTo(neurons[j].x, neurons[j].y)
          ctx.stroke()
        })

        // Move neurons
        neuron.x += (Math.random() - 0.5) * 0.5
        neuron.y += (Math.random() - 0.5) * 0.5

        // Keep neurons within canvas
        neuron.x = Math.max(0, Math.min(canvas.width, neuron.x))
        neuron.y = Math.max(0, Math.min(canvas.height, neuron.y))
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-tech text-cyan-300"
        >
          AI Tech Fest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light text-cyan-100"
        >
          Igniting Innovation in Artificial Intelligence
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-12 max-w-2xl mx-auto text-gray-300"
        >
          Join us for a cutting-edge exploration of AI technologies, featuring world-class speakers, hands-on workshops,
          and networking opportunities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#about"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            See More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

