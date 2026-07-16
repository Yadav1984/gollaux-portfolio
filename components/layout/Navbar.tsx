'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Command } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { personal } from '@/lib/data'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-300 ${
            scrolled ? 'shadow-lg' : ''
          }`}
          style={{
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
          }}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-sm">GD</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-sm" style={{ color: 'var(--foreground)' }}>
                  Golla Design
                </span>
                <p className="text-xs leading-none mt-0.5" style={{ color: 'var(--muted)' }}>Lead UI/UX Designer</p>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary bg-primary/10'
                      : 'hover:bg-white/5'
                  }`}
                  style={{
                    color: activeSection === link.href.replace('#', '') ? 'var(--primary)' : 'var(--muted)',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command palette hint */}
              <button
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs glass border border-white/10 hover:border-primary/30 transition-colors"
                style={{ color: 'var(--muted)' }}
                onClick={() => {
                  const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true })
                  document.dispatchEvent(e)
                }}
              >
                <Command className="w-3 h-3" />
                <span>⌘K</span>
              </button>

              <ThemeToggle />

              <motion.a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/25 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </motion.a>

              {/* Mobile toggle */}
              <button
                className="lg:hidden p-2 rounded-xl glass border border-white/10"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-72 glass border-l border-white/10 p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">GD</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-white/5">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors hover:bg-white/5"
                    style={{ color: activeSection === link.href.replace('#', '') ? 'var(--primary)' : 'var(--foreground)' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
