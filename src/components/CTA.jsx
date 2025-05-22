"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="blur-dot bg-purple-600/30 w-[500px] h-[500px] top-0 left-0" />
      <div className="blur-dot bg-blue-600/30 w-[500px] h-[500px] bottom-0 right-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 animated-gradient-bg opacity-70" />

            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Digital Presence?
              </h2>

              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create innovative solutions that drive your business forward. Get in touch with us
                today to start your digital transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 flex items-center justify-center" onClick={ () => location.href = "#contact" }>
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="px-4 py-2 rounded-md border border-white text-white hover:bg-white/10" onClick={ () => location.href = "#services" }>
                  View Our Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
