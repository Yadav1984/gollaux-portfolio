'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Home, User, Briefcase, FolderOpen, BookOpen, Zap, BarChart2, Star, Award, Mail, FileText, ChevronRight } from 'lucide-react'

interface CommandItem {
  id: string
  title: string
  section: string
  icon: React.ReactNode
  action: () => void
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items: CommandItem[] = [
    { id: 'home', title: 'Home', section: 'Navigation', icon: <Home className="w-4 h-4" />, action: () => scrollTo('hero') },
    { id: 'about', title: 'About', section: 'Navigation', icon: <User className="w-4 h-4" />, action: () => scrollTo('about') },
    { id: 'experience', title: 'Experience', section: 'Navigation', icon: <Briefcase className="w-4 h-4" />, action: () => scrollTo('experience') },
    { id: 'projects', title: 'Projects', section: 'Navigation', icon: <FolderOpen className="w-4 h-4" />, action: () => scrollTo('projects') },
    { id: 'skills', title: 'Skills', section: 'Navigation', icon: <BarChart2 className="w-4 h-4" />, action: () => scrollTo('skills') },
    { id: 'process', title: 'Design Process', section: 'Navigation', icon: <Zap className="w-4 h-4" />, action: () => scrollTo('process') },
    { id: 'testimonials', title: 'Testimonials', section: 'Navigation', icon: <Star className="w-4 h-4" />, action: () => scrollTo('testimonials') },
    { id: 'awards', title: 'Awards', section: 'Navigation', icon: <Award className="w-4 h-4" />, action: () => scrollTo('awards') },
    { id: 'blog', title: 'Blog', section: 'Navigation', icon: <BookOpen className="w-4 h-4" />, action: () => scrollTo('blog') },
    { id: 'contact', title: 'Contact', section: 'Navigation', icon: <Mail className="w-4 h-4" />, action: () => scrollTo('contact') },
    { id: 'resume', title: 'Download Resume', section: 'Actions', icon: <FileText className="w-4 h-4" />, action: () => window.open('/Golla_Yerriswamy_Lead_UIUX_Designer_CV.pdf') },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const filtered = items.filter(i =>
    i.title.toLowerCase().includes(query.toLowerCase()) ||
    i.section.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
        setQuery('')
        setSelected(0)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'ArrowDown') setSelected(s => Math.min(s + 1, filtered.length - 1))
      if (e.key === 'ArrowUp') setSelected(s => Math.max(s - 1, 0))
      if (e.key === 'Enter') { filtered[selected]?.action(); setOpen(false) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, selected, filtered])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            className="relative w-full max-w-xl glass rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" style={{ color: 'var(--muted)' }} />
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setSelected(0) }}
                placeholder="Search pages, actions..."
                className="flex-1 bg-transparent outline-none text-sm font-body"
                style={{ color: 'var(--foreground)' }}
              />
              <button onClick={() => setOpen(false)} className="shrink-0 p-1 rounded hover:bg-white/10 transition-colors">
                <X className="w-4 h-4" style={{ color: 'var(--muted)' }} />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto no-scrollbar py-2">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-sm" style={{ color: 'var(--muted)' }}>No results found</div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${i === selected ? 'bg-primary/10' : 'hover:bg-white/5'}`}
                    onClick={() => { item.action(); setOpen(false) }}
                  >
                    <span style={{ color: i === selected ? 'var(--primary)' : 'var(--muted)' }}>{item.icon}</span>
                    <span className="flex-1 text-left" style={{ color: 'var(--foreground)' }}>{item.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>{item.section}</span>
                    {i === selected && <ChevronRight className="w-3 h-3" style={{ color: 'var(--primary)' }} />}
                  </button>
                ))
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t border-white/10">
              <div className="flex gap-3 text-xs" style={{ color: 'var(--muted)' }}>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded text-xs glass border border-white/10">↑↓</kbd> Navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded text-xs glass border border-white/10">↵</kbd> Select</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded text-xs glass border border-white/10">Esc</kbd> Close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
