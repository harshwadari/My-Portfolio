"use client"

import Link from "next/link"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import { FadeIn } from "./ui/fade-in"

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value
        const subject = (form.elements.namedItem("subject") as HTMLInputElement).value
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

        const body = `
Name: ${name}

Email: ${email}

Message:
${message}
        `

        window.location.href = `mailto:harshwadari@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`
    }

    return (
        <section
            id="contact"
            className="min-h-screen w-full bg-white dark:bg-[#0b0f1a] px-6 py-20 text-slate-900 dark:text-slate-100"
        >
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h2 className="mb-16 text-4xl font-bold">
                        <span className="mr-2 text-indigo-500">06.</span>
                        Contact
                    </h2>
                </FadeIn>

                <div className="grid gap-12 text-lg lg:grid-cols-2">
                    {/* Left Column */}
                    <FadeIn delay={200}>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
                                    Let's Connect
                                </h3>

                                <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400">
                                    I'm currently looking for internship and software
                                    engineering opportunities. Whether you have a
                                    question, project idea, or just want to connect,
                                    feel free to reach out.
                                </p>

                                <div className="space-y-6">
                                    <a
                                        href="mailto:harshwadari@gmail.com"
                                        className="flex items-center gap-4 text-slate-600 dark:text-slate-300 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#11162a]">
                                            <Mail size={20} />
                                        </div>

                                        <span>harshwadari@gmail.com</span>
                                    </a>

                                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#11162a]">
                                            <MapPin size={20} />
                                        </div>

                                        <span>Mumbai, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                                    Connect With Me
                                </h4>

                                <div className="flex gap-4">
                                    <Link
                                        href="https://github.com/harshwadari"
                                        target="_blank"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-slate-800 dark:bg-[#11162a] dark:text-slate-400"
                                    >
                                        <Github size={20} />
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/in/harsh-wadari/"
                                        target="_blank"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-slate-800 dark:bg-[#11162a] dark:text-slate-400"
                                    >
                                        <Linkedin size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column */}
                    <FadeIn delay={400}>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-[#11162a]"
                        >
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-600 dark:text-slate-400"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-[#0b0f1a] dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-slate-600 dark:text-slate-400"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-[#0b0f1a] dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Project Inquiry"
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-[#0b0f1a] dark:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Your message here..."
                                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-[#0b0f1a] dark:text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}