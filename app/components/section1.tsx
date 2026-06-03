"use client"
import { useEffect, useState } from "react"
import { BarChart3, Brain, Cpu, Download, Code2, Linkedin, Github, Mail } from "lucide-react"
import { FadeIn } from "./ui/fade-in"

const roles = [
  "Python Developer",
  "Aspiring Software Engineer",
  "Machine Learning Engineer",
]

export default function Section1() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // typing animation
  useEffect(() => {
    const current = roles[index]

    if (!deleting && subIndex < current.length) {
      setTimeout(() => {
        setText(current.slice(0, subIndex + 1))
        setSubIndex(subIndex + 1)
      }, 90)
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setText(current.slice(0, subIndex - 1))
        setSubIndex(subIndex - 1)
      }, 60)
    } else if (!deleting && subIndex === current.length) {
      setTimeout(() => setDeleting(true), 1200)
    } else if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((index + 1) % roles.length)
    }
  }, [subIndex, deleting, index])

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#0b0f1a]">
      {/* background dots */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16 px-6 py-28">
        {/* LEFT */}
        <FadeIn delay={100} className="col-span-1">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Harsh Wadari
              </span>
            </h1>

            <p className="mt-6 text-2xl font-medium text-slate-600 dark:text-slate-400">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Passionate about transforming data into actionable insights.
              Interested in Machine Learning, Data Analysis, and Visualization.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-white font-medium hover:opacity-90">
                <Code2 size={18} />
                <a href='#projects'>
                View My Work</a>
              </button>

              <a
                href="https://drive.google.com/file/d/1pOArg3MmfwZaG7pQvGkgUHIeXUKZmoMZ/view?usp=sharing"
                className="flex items-center gap-2 rounded-full border border-indigo-500 px-6 py-3 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harsh-wadari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition"
              >
                <Linkedin size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/harshwadari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition"
              >
                <Github size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:harshwadari@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT FLOATING CARDS */}
        <div className="relative hidden lg:block">
          <FloatingCard
            icon={<BarChart3 />}
            text="Data Analysis"
            className="top-10 left-10"
            delay="0s"
          />
          <FloatingCard
            icon={<Brain />}
            text="Machine Learning"
            className="top-48 left-32"
            delay="0.3s"
          />
          <FloatingCard
            icon={<Cpu />}
            text="Deep Learning"
            className="top-80 left-20"
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  )
}

/* Floating Card */
function FloatingCard({
  icon,
  text,
  className,
  delay,
}: {
  icon: React.ReactNode
  text: string
  className: string
  delay: string
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`absolute ${className} animate-float flex items-center gap-3 rounded-2xl bg-white dark:bg-[#11162a] px-6 py-4 shadow-xl dark:shadow-indigo-900/30 border border-slate-100 dark:border-slate-800`}
    >
      <div className="text-indigo-500">{icon}</div>
      <span className="font-semibold text-slate-800 dark:text-white">
        {text}
      </span>
    </div>
  )
}
