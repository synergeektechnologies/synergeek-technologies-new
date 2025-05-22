"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Work() {
  const categories = ["All", "Web Development", "Digital Marketing"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "Badminton E-commerce Platform",
      category: "Web Development",
      image: "/badminton.png?height=600&width=800",
      description: "A fully responsive badminton e-commerce platform with advanced filtering and payment integration.",
      technologies: ["React.js", "Tailwind CSS","Django", "Razorpay", "Sqlite3"],
    },
    {
      title: "Bay Body Space Marketing",
      category: "Digital Marketing",
      image: "/meta_ads.png?height=600&width=800",
      description: "A social media marketing campaign that increased their lead generation by 150% in 3 months.",
      technologies: ["Meta Ads", "Content Creation", "Analytics"],
    },
    {
      title: "Vital Flare Media Marketing",
      category: "Digital Marketing",
      image: "/vital_flare.png?height=600&width=800",
      description: "We actively managed their social media accounts, increasing their followers by 200% in 6 months.",
      technologies: ["Social Media Management", "Content Creation", "Analytics"],
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="blur-dot bg-purple-600/20 w-[500px] h-[500px] top-0 left-0" />
      <div className="blur-dot bg-blue-600/20 w-[500px] h-[500px] bottom-0 right-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering
            exceptional results.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border border-gray-800 text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{project.category}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 text-white flex items-center justify-center">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
