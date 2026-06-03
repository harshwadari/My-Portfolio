// app/components/header.tsx
"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-1 text-xl font-semibold">
          <span className="text-violet-500">&lt;</span>
          <span className="text-foreground">HW</span>
          <span className="text-violet-500">&gt;</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#home"
            className="border-b-2 border-violet-500 pb-1 text-violet-500"
          >
            Home
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#education" className="text-muted-foreground hover:text-foreground">
            Education
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground">
            Skills
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
