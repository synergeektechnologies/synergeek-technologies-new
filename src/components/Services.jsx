"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, BarChart3, Globe, Smartphone, ShoppingCart, Search, Mail, Share2 } from "lucide-react"

export default function Services() {
  const [activeTab, setActiveTab] = useState("web")

  const services = [
    {
      id: "web",
      name: "Web Development",
      icon: <Code className="h-6 w-6" />,
      description:
        "We build responsive, high-performance websites and web applications tailored to your business needs.",
      features: [
        { name: "Custom Website Development", icon: <Globe className="h-5 w-5" /> },
        { name: "Web Application Development", icon: <Code className="h-5 w-5" /> },
        {
          name: "E-commerce Solutions",
          icon: <ShoppingCart className="h-5 w-5" />,
        },
        {
          name: "Progressive Web Apps",
          icon: <Smartphone className="h-5 w-5" />,
        },
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL"],
      caseStudy: {
        title: "E-commerce Platform Redesign",
        description:
          "Increased conversion rates by 45% through a complete redesign and optimization of the client's e-commerce platform.",
      },
    },
    {
      id: "ai",
      name: "AI Solutions",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "Leverage the power of artificial intelligence to automate processes and gain valuable insights from your data.",
      features: [
        {
          name: "AI Chatbots & Assistants",
          icon: <Mail className="h-5 w-5" />,
        },
        { name: "Machine Learning Models", icon: <Cpu className="h-5 w-5" /> },
        {
          name: "Data Analysis & Visualization",
          icon: <BarChart3 className="h-5 w-5" />,
        },
        {
          name: "Process Automation",
          icon: <Share2 className="h-5 w-5" />,
        },
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Langchain", "Computer Vision", "NLP"],
      caseStudy: {
        title: "Customer Support AI Assistant",
        description:
          "Reduced customer support response time by 80% with an AI-powered assistant that handles common inquiries.",
      },
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: <BarChart3 className="h-6 w-6" />,
      description:
        "Grow your online presence and reach your target audience with our comprehensive digital marketing strategies.",
      features: [
        {
          name: "Search Engine Optimization",
          icon: <Search className="h-5 w-5" />,
        },
        {
          name: "Social Media Marketing",
          icon: <Share2 className="h-5 w-5" />,
        },
        {
          name: "Email Marketing Campaigns",
          icon: <Mail className="h-5 w-5" />,
        },
        {
          name: "Content Marketing Strategy",
          icon: <BarChart3 className="h-5 w-5" />,
        },
      ],
      technologies: ["Google Analytics", "SEMrush", "Mailchimp", "HubSpot", "Meta Ads", "Google Ads"],
      caseStudy: {
        title: "Integrated Digital Marketing Campaign",
        description:
          "Achieved a 300% increase in organic traffic and 200% growth in lead generation through a comprehensive marketing strategy.",
      },
    },
  ]

  const activeService = services.find((service) => service.id === activeTab)

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="blur-dot bg-purple-600/30 w-[500px] h-[500px] top-0 right-0" />
      <div className="blur-dot bg-blue-600/20 w-[500px] h-[500px] bottom-0 left-0" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We offer a comprehensive range of digital services to help your business thrive in today's competitive
            landscape.
          </motion.p>
        </div>

        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-1 rounded-lg flex">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    activeTab === service.id ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {service.icon}
                  <span className="hidden sm:inline">{service.name}</span>
                </button>
              ))}
            </div>
          </div>

          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeService.name}</h3>
                <p className="text-gray-300 mb-6">{activeService.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                    >
                      <div className="p-2 rounded-md bg-primary/20 text-primary">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium">{feature.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white">
                  Learn More About {activeService.name}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
