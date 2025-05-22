"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_kms6eyb", // Replace with your EmailJS Service ID
        "template_h6a50go", // Replace with your Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: "synergeektechnologies@gmail.com"
        },
        "9yyRQXTmteNWuNqZs" // Replace with your Public Key
      )

      setFormStatus("success")
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "synergeektechnologies@gmail.com",
      link: "mailto:synergeektechnologies@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 96775 61597",
      link: "tel:+919677561597",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "182, 2nd Floor, Subramanium road, R S Puram, Coimbatore, Tamil Nadu - 641002",
      link: "https://maps.google.com",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="blur-dot bg-purple-600/20 w-[500px] h-[500px] bottom-0 left-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 hover:text-primary transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-gray-800 text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/synergeek-technologies/"
                    className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/synergeek_technologies/"
                    className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573203298617"
                    className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
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
            <div className="rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-4 rounded-full bg-primary/20 text-primary mb-4">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white"
                    onClick={() => {
                      setFormStatus(null)
                      setFormState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </button>

                  {formStatus === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/20 text-red-500 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      <span>There was an error sending your message. Please try again.</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
