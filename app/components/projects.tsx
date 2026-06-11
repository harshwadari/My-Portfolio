"use client"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "PrepWise AI",
        description:
            "An AI-powered interview preparation platform that analyzes resumes and job descriptions to generate personalized interview reports, skill-gap insights, interview questions, and structured preparation roadmaps. Built with a modern full-stack architecture and integrated Google Gemini AI for intelligent career guidance.",
        tags: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Google Gemini AI",
            "JWT",
            "Google OAuth",
            "Tailwind CSS"
        ],
        links: {
            demo: "https://ai-resume-analyzer-gray-ten.vercel.app/",
            github: "https://github.com/harshwadari/AI_Resume_Analyzer",
        },
    },



    {
        title: "Plant Disease Classifier",
        description:
            "Built an end-to-end plant disease detection system for 6 tomato leaf classes using OpenCV, Scikit-learn, FastAPI, and Streamlit. Developed a computer vision pipeline with image segmentation, feature extraction, and machine learning models, achieving over 90% classification accuracy.",
        tags: [
            "Python",
            "OpenCV",
            "Scikit-learn",
            "FastAPI",
            "Streamlit",
            "Machine Learning"
        ],
        links: {
            demo: '#',
            github: "https://github.com/harshwadari/Plant-Disease-Classifier",
        },
    },

    {
        title: "Personal Finance Tracker",
        description:
            "Developed a full-stack personal finance management platform that enables users to track budgets, income, and expenses through an interactive dashboard. Integrated AI-powered financial summaries, secure Clerk authentication, and real-time data visualization using charts and analytics to help users make informed financial decisions.",
        tags: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Drizzle ORM",
            "Clerk",
            "Tailwind CSS",
            "JavaScript"
        ],
        links: {
            demo: "#",
            github: "https://github.com/harshwadari/Personal-Finance-Tracker",
        },
    },
    {
        title: "Movie Recommendation System",
        description:
            "Built an end-to-end content-based Movie Recommendation System using NLP, TF-IDF Vectorization, and Cosine Similarity. Developed a FastAPI backend for recommendation serving and a Streamlit frontend for an interactive user experience. Integrated the TMDB API to fetch real-time movie posters, metadata, and details, and deployed the application using Render and Streamlit Cloud.",
        tags: [
            "Python",
            "Machine Learning",
            "NLP",
            "TF-IDF",
            "Cosine Similarity",
            "FastAPI",
            "Streamlit",
            "TMDB API",
            "Pandas",
            "Scikit-Learn"
        ],
        links: {
            demo: "https://movierecommendationsystem-itzydga79ssnnqb2uczlou.streamlit.app/",
            github: "https://github.com/harshwadari/Movie_Recommendation_System",
        },
    }

]

import { FadeIn } from "./ui/fade-in"

// ... existing code ...

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full bg-white dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">05.</span>
                        Projects
                    </h2>
                </FadeIn>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 150}>
                            <div
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#11162a] p-8 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-4">
                                                <Link
                                                    href={project.links.github}
                                                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                                >
                                                    <Github size={20} />
                                                </Link>
                                                <Link
                                                    href={project.links.demo}
                                                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                </Link>
                                            </div>
                                        </div>

                                        <p className="mb-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full bg-slate-100 dark:bg-slate-800/50 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-300"
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

                <FadeIn delay={400}>
                    <div className="mt-12 text-center">
                        <Link href="https://github.com/harshwadari" className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors font-medium">
                            View Github Profile <ExternalLink size={16} />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
