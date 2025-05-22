import { ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Our Portfolio", href: "#work" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "AI Solutions", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "E-commerce", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Testimonials", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Synergeek</span>
            </a>

            <p className="text-gray-400 mb-6 max-w-md">
              Synergeek Technologies delivers innovative digital solutions to help businesses thrive in today's
              competitive landscape. From web development to AI and digital marketing, we're your partner in digital
              excellence.
            </p>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Synergeek Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/synergeek-technologies/" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573203298617" className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/synergeek_technologies/" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
