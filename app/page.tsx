import Education from "./components/education"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Section1 from "./components/section1"
import About from "./components/about"
import CodingProfiles from "./components/codingProfiles"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a]">
      <Section1 />
      <About />
      <Education />
      <Skills />
      <CodingProfiles/>
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}