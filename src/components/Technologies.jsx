"use client"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaAws, FaGoogle } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiVercel,
} from "react-icons/si"

export default function Technologies() {
  const technologies = [
    { name: "React", icon: <FaReact size={48} /> },
    { name: "Next.js", icon: <SiNextdotjs size={48} /> },
    { name: "TypeScript", icon: <SiTypescript size={48} /> },
    { name: "Node.js", icon: <FaNodeJs size={48} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
    { name: "MongoDB", icon: <SiMongodb size={48} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
    { name: "Python", icon: <FaPython size={48} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={48} /> },
    { name: "AWS", icon: <FaAws size={48} /> },
    { name: "Google Cloud", icon: <FaGoogle size={48} /> },
    { name: "Vercel", icon: <SiVercel size={48} /> },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technologies We <span className="gradient-text">Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We stay at the forefront of technology to deliver cutting-edge solutions that drive your business forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="text-gray-400 hover:text-primary transition-colors mb-3">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
