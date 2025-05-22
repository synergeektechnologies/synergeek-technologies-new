"use client"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "99.9%", label: "Client Satisfaction" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description:
        "We maintain the highest standards in every aspect of our work, from code to design to client communication.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, treating their goals as our own and ensuring transparent communication.",
    },
    {
      title: "Adaptability",
      description: "We embrace change and quickly adapt to new technologies and market demands.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-800">
                <img
                  src="/Tab_Logo.png"
                  alt="Synergeek Team"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 w-64">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Synergeek</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Synergeek Technologies is a forward-thinking digital agency specializing in web development, AI solutions,
              and digital marketing. Founded with a passion for technology and innovation, we've been helping businesses
              transform their digital presence since 2018.
            </p>

            <p className="text-gray-300 mb-8">
              Our team of experts combines technical expertise with creative thinking to deliver solutions that not only
              meet but exceed our clients' expectations. We believe in building long-term partnerships and helping our
              clients stay ahead in the rapidly evolving digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
