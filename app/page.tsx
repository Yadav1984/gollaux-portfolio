'use client'
import { useEffect } from 'react'
import LoadingScreen from '@/components/ui/LoadingScreen'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import CommandPalette from '@/components/ui/CommandPalette'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import CaseStudies from '@/components/sections/CaseStudies'
import Skills from '@/components/sections/Skills'
import Tools from '@/components/sections/Tools'
import DesignProcess from '@/components/sections/DesignProcess'
import Testimonials from '@/components/sections/Testimonials'
import Awards from '@/components/sections/Awards'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import { useLenis } from '@/hooks/useLenis'

export default function Home() {
  useLenis()

  return (
    <main className="relative min-h-screen noise" style={{ background: 'var(--background)' }}>
      {/* Global UI */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <CommandPalette />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <Skills />
      <Tools />
      <DesignProcess />
      <Testimonials />
      <Awards />
      <Blog />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
