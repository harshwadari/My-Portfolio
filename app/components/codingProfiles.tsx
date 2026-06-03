"use client"

import { ExternalLink, Code2 } from "lucide-react"

export default function CodingProfiles() {
    return (
        <section
            id="coding"
            className="min-h-screen w-full bg-white dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100"
        >
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-4xl font-bold">
                    <span className="mr-2 text-indigo-500">04.</span>
                    Coding Profiles
                </h2>

                {/* Profile Links */}
                <div className="mb-12 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            name: "Codolio",
                            href: "https://codolio.com/profile/harshwadari",
                            desc: "Complete coding profile, achievements and platform statistics.",
                        },
                        {
                            name: "LeetCode",
                            href: "https://leetcode.com/u/harshwadari/",
                            desc: "DSA problem solving, contests, and interview preparation.",
                        },
                        {
                            name: "GitHub",
                            href: "https://github.com/harshwadari",
                            desc: "Projects, open-source contributions, and development work.",
                        },
                    ].map(({ name, href, desc }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-500 dark:border-slate-800 dark:bg-[#11162a]"
                        >
                            <h3 className="mb-2 text-xl font-semibold">
                                {name}
                            </h3>

                            <p className="mb-4 text-slate-600 dark:text-slate-400">
                                {desc}
                            </p>

                            <div className="flex items-center gap-2 text-indigo-500">
                                Visit Profile
                                <ExternalLink size={16} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* LeetCode + Quick Overview */}
                <div className="mb-8 grid gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#11162a]">
                        <h3 className="mb-4 text-xl font-semibold">
                            LeetCode Statistics
                        </h3>

                        <img
                            src="https://leetcard.jacoblin.cool/harshwadari?theme=dark&font=Karma&ext=contest"
                            alt="LeetCode Stats"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-[#11162a]">
                        <h3 className="mb-6 text-xl font-semibold">
                            Quick Overview
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl bg-slate-50 p-5 dark:bg-[#0b0f1a]">
                                <h4 className="text-3xl font-bold text-indigo-500">
                                    300+
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    Problems Solved
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5 dark:bg-[#0b0f1a]">
                                <h4 className="text-3xl font-bold text-indigo-500">
                                    10+
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    Projects Built
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5 dark:bg-[#0b0f1a]">
                                <h4 className="text-3xl font-bold text-indigo-500">
                                    AI
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    ML & Backend
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5 dark:bg-[#0b0f1a]">
                                <h4 className="text-3xl font-bold text-indigo-500">
                                    B.E.
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    Computer Engineering
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="mb-3 font-semibold">
                                Focus Areas
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "DSA",
                                    "Machine Learning",
                                    "Deep Learning",
                                    "FastAPI",
                                    "React",
                                    "Next.js",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* GitHub Streak */}
                <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#11162a]">
                    <h3 className="mb-4 text-xl font-semibold">
                        GitHub Streak
                    </h3>

                    <img
                        src="https://streak-stats.demolab.com?user=harshwadari&theme=tokyonight&hide_border=true"
                        alt="GitHub Streak"
                        className="w-full rounded-lg"
                    />
                </div>

                {/* Codolio CTA */}
                <div className="flex flex-col items-start gap-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 sm:flex-row sm:items-center">
                    <div className="rounded-xl bg-indigo-500/10 p-3">
                        <Code2
                            size={24}
                            className="text-indigo-500"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="mb-1 text-lg font-semibold">
                            View Full Coding Profile on Codolio
                        </h3>

                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Explore achievements, coding statistics, contest
                            history, and activity across all platforms in one
                            place.
                        </p>
                    </div>

                    <a
                        href="https://codolio.com/profile/harshwadari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-600"
                    >
                        Open Codolio
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}