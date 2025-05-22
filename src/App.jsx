import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Work from "./components/Work"
import Technologies from "./components/Technologies"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Services />
        <About />
        <Work />
        <Technologies />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
