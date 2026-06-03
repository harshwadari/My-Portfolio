"use client"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b0f1a] py-8 text-center text-slate-600 dark:text-slate-400">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

                <p className="text-lg font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 cursor-default">
                    © {new Date().getFullYear()} Harsh Wadari. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <Link href="https://github.com/harshwadari" target="_blank" rel="noopener noreferrer" className="group text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md group-hover:shadow-lg transform transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-125 group-hover:-translate-y-2">
                            <Github size={32} className="text-indigo-500 dark:text-indigo-400" />
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/harsh-wadari/" target="_blank" rel="noopener noreferrer" className="group text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md group-hover:shadow-lg transform transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-125 group-hover:-translate-y-2">
                            <Linkedin size={32} className="text-indigo-500 dark:text-indigo-400" />
                        </div>
                    </Link>
                    <a
                        href="mailto:harshwadari@gmail.com"
                        className="group text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                    >
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md group-hover:shadow-lg transform transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-125 group-hover:-translate-y-2">
                            <Mail size={32} className="text-indigo-500 dark:text-indigo-400" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
