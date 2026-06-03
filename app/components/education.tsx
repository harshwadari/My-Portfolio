"use client"
import { GraduationCap } from "lucide-react"
import { FadeIn } from "./ui/fade-in"

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Engineering in Data Engineering",
            institution: "University of Mumbai",
            period: "2023 - 2027",
            description: "Specialized in Data Science and Machine Learning. Relevant coursework includes Statistics, Machine Learning, Database Management, Data Structures, and Algorithms.",
            tags: ["CGPA: 6.5/10", "Data Science Specialization"],
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "S.I.E.S College of Science and Arts",
            period: "2021 - 2023",
            description: "Major in Science with focus on Mathematics and Computer Science.",
            tags: [""],
        },
    ]

    return (
        <section id="education" className="min-h-screen w-full bg-slate-50 dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">02.</span>
                        Education
                    </h2>
                </FadeIn>

                <div className="relative mx-auto max-w-4xl space-y-8">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800 md:left-8" />

                    {education.map((item, index) => (
                        <FadeIn key={index} delay={index * 200}>
                            <div className="relative pl-20 md:pl-24">
                                {/* Icon Bubble */}
                                <div className="absolute left-2 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 md:left-2">
                                    <GraduationCap className="text-white" size={24} />
                                </div>

                                {/* Card */}
                                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11162a] p-6 shadow-xl transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 md:p-8">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
                                                {item.degree}
                                            </h3>
                                            <p className="mt-1 text-lg font-medium text-indigo-500 dark:text-indigo-400">
                                                {item.institution}
                                            </p>
                                        </div>
                                        <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {item.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
