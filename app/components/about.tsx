"use client"

import { FadeIn } from "./ui/fade-in"

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full bg-white dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100"
        >
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">01.</span>
                        About Me
                    </h2>
                </FadeIn>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <FadeIn delay={200}>
                        <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                Hello! I'm{" "}
                                <span className="font-medium text-slate-900 dark:text-white">
                                    Harsh Wadari
                                </span>
                                , a Final Enginering Student  and aspiring Machine Learning
                                Engineer based in Mumbai, India. I specialize in
                                building full-stack applications, AI-driven products,
                                and data-powered solutions. With a strong interest in
                                software engineering, machine learning, and
                                problem-solving, I enjoy creating technology that is
                                both innovative and useful, transforming complex ideas
                                into scalable real-world applications.
                            </p>

                            <p>
                                My journey in technology began with a curiosity about
                                how software works, leading me to pursue a Bachelor's
                                degree in Data Engineering. Along the way, I built
                                a strong foundation in software development, machine
                                learning, and problem-solving while creating projects
                                that solve real-world challenges.
                            </p>

                            <p>
                                My current focus is on building AI-powered
                                applications, backend systems, and machine learning
                                projects while strengthening my problem-solving skills
                                through Data Structures and Algorithms. I enjoy working
                                on projects that combine software engineering with
                                artificial intelligence to solve practical, real-world
                                problems.
                            </p>

                            <p>
                                When I'm not coding, you can find me exploring new
                                technologies, reading about AI advancements, solving
                                DSA problems, or playing video games.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Quick Overview */}
                    <FadeIn delay={400}>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900">
                            <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white">
                                Quick Overview
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                                    <h4 className="text-2xl font-bold text-indigo-500">
                                        350+
                                    </h4>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        DSA Problems Solved
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                                    <h4 className="text-2xl font-bold text-indigo-500">
                                        5+
                                    </h4>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        Projects Built
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                                    <h4 className="text-2xl font-bold text-indigo-500">
                                        B.E.
                                    </h4>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        Data Engineering
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                                    <h4 className="text-2xl font-bold text-indigo-500">
                                        AI
                                    </h4>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        ML & Backend Focus
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                                    Currently Working On
                                </h4>

                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li>
                                        • Store Intelligence System using Computer
                                        Vision
                                    </li>
                                    <li>
                                        • AI-Powered Applications with FastAPI &
                                        Next.js
                                    </li>
                                    <li>
                                        • Machine Learning & Deep Learning Projects
                                    </li>
                                    <li>
                                        • Strengthening DSA and Problem Solving Skills
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {[
                                    "Python",
                                    "FastAPI",
                                    "Machine Learning",
                                    "Deep Learning",
                                    "Next.js",
                                    "React",
                                    "MYSQL",
                                    "Docker",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}