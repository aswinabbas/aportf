"use client"

import About from "@/components/sections/About"
import Floating from "@/components/sections/Floating"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Touch from "@/components/sections/Touch"
import Works from "@/components/sections/Works"
import { useEffect, useState } from "react"


export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Projects />
        <Touch />
        <Floating />

        {/* Add bottom padding to prevent content from being hidden behind floating nav */}
        <div className="pb-24" />
      </div>
    </div>
  )
}
