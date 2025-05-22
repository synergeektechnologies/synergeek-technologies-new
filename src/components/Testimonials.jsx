"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Garuda Krishna M",
      position: "CEO, Vital Flare Media",
      image: "/src/assets/garuda.jpg?height=100&width=100",
      content:
        "Synergeek Technologies delivered a modern, dynamic website that perfectly represents our digital marketing agency and its services and they help us to create the excellent online presence.",
    },
    {
      name: "Fawaz",
      position: "CEO, VIP Polymers",
      image: "/src/assets/vip.jpg?height=100&width=100",
      content:
        "Synergeek Technologies designed a visually striking brochure that effectively highlighted our polymer products, reflecting our brand perfectly. The team was professional and attentive to our needs.",
    },
    {
      name: "Tejasswin S",
      position: "CEO, Horizon Digital Solutions",
      image: "/src/assets/teju.jpg?height=100&width=100",
      content:
        "A modern and visually appealing website was designed, showcasing our portfolio in a way that highlights our technical expertise and innovative projects.",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="blur-dot bg-purple-600/20 w-[500px] h-[500px] top-0 right-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Don't just take our word for it. Here's what our clients have to say about working with Synergeek
            Technologies.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-7xl text-primary/20">
            <Quote />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: current === index ? 1 : 0,
                  x: current === index ? 0 : 100,
                  position: current === index ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {current === index && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary p-1">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover rounded-full w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-gray-300 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index ? "bg-primary" : "bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/50 backdrop-blur-sm hover:bg-gray-900 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/50 backdrop-blur-sm hover:bg-gray-900 text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
