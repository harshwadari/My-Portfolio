"use client"

import {
    Brain,
    Cpu,
    Terminal,
    BarChart3,
    Wrench,
    Database,
} from "lucide-react"
import { SiAew } from "react-icons/si"
import {
    SiPython,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiMongodb,
    SiMysql,
    SiTensorflow,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiDocker,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiRender,
} from "react-icons/si"

import { FadeIn } from "./ui/fade-in"

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <SiPython className="text-blue-500 text-2xl" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-2xl" /> },
            { name: "SQL", icon: <Database className="text-blue-500" /> },
        ],
    },

    {
        title: "ML & AI",
        skills: [
            { name: "Machine Learning", icon: <Brain className="text-purple-500" /> },
            { name: "Deep Learning", icon: <Cpu className="text-indigo-500" /> },
        ],
    },

    {
        title: "ML Libraries",
        skills: [
            { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500 text-2xl" /> },
            { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600 text-2xl" /> },
            { name: "PyTorch", icon: <SiPytorch className="text-red-500 text-2xl" /> },
            { name: "Pandas", icon: <SiPandas className="text-blue-600 text-2xl" /> },
            { name: "NumPy", icon: <SiNumpy className="text-cyan-500 text-2xl" /> },
            { name: "Matplotlib", icon: <BarChart3 className="text-green-500" /> },
            { name: "Seaborn", icon: <BarChart3 className="text-pink-500" /> },
        ],
    },

    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: <SiReact className="text-cyan-500 text-2xl" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-2xl" /> },
        ],
    },

    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-2xl" /> },
            { name: "Express.js", icon: <SiExpress className="text-black dark:text-white text-2xl" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-emerald-500 text-2xl" /> },
        ],
    },

    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500 text-2xl" /> },
        ],
    },

    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: <SiAew className="text-orange-500 text-2xl" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-500 text-2xl" /> },
            { name: "Git", icon: <SiGit className="text-orange-600 text-2xl" /> },
            { name: "Linux", icon: <Terminal className="text-slate-500" /> },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "GitHub", icon: <SiGithub className="text-black dark:text-white text-2xl" /> },
            { name: "VS Code", icon: <Wrench className="text-blue-500" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-500 text-2xl" /> },
            { name: "Vercel", icon: <SiVercel className="text-black dark:text-white text-2xl" /> },
            { name: "Render", icon: <SiRender className="text-purple-500 text-2xl" /> },
        ],
    },
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full bg-white px-6 py-20 text-slate-900 dark:bg-[#0b0f1a] dark:text-slate-100"
        >
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">03.</span>
                        Skills & Technologies
                    </h2>
                </FadeIn>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <FadeIn key={category.title} delay={categoryIndex * 100}>
                            <div>
                                <h3 className="mb-6 text-2xl font-semibold text-indigo-500">
                                    {category.title}
                                </h3>

                                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-[#11162a]"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 p-2 ring-1 ring-slate-200 transition-all group-hover:ring-indigo-500/50 dark:bg-slate-900/50 dark:ring-white/10">
                                                {skill.icon}
                                            </div>

                                            <span className="text-center font-medium text-slate-600 transition-colors group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-white">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}