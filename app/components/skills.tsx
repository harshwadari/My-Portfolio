"use client"

import {
    Code2,
    Brain,
    Cpu,
    Database,
    Layout,
    LineChart,
    Server,
    Cloud,
    Globe,
    GitBranch,
    Terminal,
} from "lucide-react"

import { FadeIn } from "./ui/fade-in"

const skills = [
    { name: "Python", icon: <Code2 className="text-blue-500" /> },
    { name: "JavaScript", icon: <Code2 className="text-yellow-500" /> },
    { name: "SQL", icon: <Database className="text-orange-500" /> },

    { name: "React.js", icon: <Layout className="text-cyan-500" /> },
    { name: "Next.js", icon: <Globe className="text-slate-500" /> },
    { name: "Node.js", icon: <Server className="text-green-600" /> },
    { name: "FastAPI", icon: <Server className="text-emerald-500" /> },

    { name: "MongoDB", icon: <Database className="text-green-500" /> },
    { name: "Git", icon: <GitBranch className="text-orange-500" /> },
    { name: "Version Control", icon: <GitBranch className="text-red-500" /> },
    { name: "Linux", icon: <Terminal className="text-slate-500" /> },

    { name: "Machine Learning", icon: <Brain className="text-purple-500" /> },
    { name: "Deep Learning", icon: <Cpu className="text-indigo-500" /> },
    { name: "Scikit-learn", icon: <LineChart className="text-yellow-500" /> },
    { name: "TensorFlow", icon: <Cpu className="text-orange-600" /> },
    { name: "PyTorch", icon: <Cpu className="text-red-500" /> },

    { name: "Pandas", icon: <Layout className="text-blue-600" /> },
    { name: "AWS", icon: <Cloud className="text-orange-500" /> },
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-white dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100"
        >
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">03.</span>
                        Skills & Technologies
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {skills.map((skill, index) => (
                        <FadeIn key={index} delay={index * 50}>
                            <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-[#11162a]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 p-2 ring-1 ring-slate-200 transition-all group-hover:ring-indigo-500/50 dark:bg-slate-900/50 dark:ring-white/10">
                                    {skill.icon}
                                </div>

                                <span className="text-center font-medium text-slate-600 transition-colors group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-white">
                                    {skill.name}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}