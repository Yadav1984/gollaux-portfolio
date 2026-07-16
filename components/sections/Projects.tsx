'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, BookOpen, Clock, Users, Wrench, TrendingUp, ChevronRight, X, Filter } from 'lucide-react'
import { projects } from '@/lib/data'

const categories = ['All', 'Enterprise SaaS', 'FinTech', 'HealthTech', 'Design System', 'Banking', 'B2B SaaS']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Featured Work</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4" style={{ color: 'var(--foreground)' }}>
            Projects That
            <span className="gradient-text"> Create Impact</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A curated selection of enterprise products, FinTech platforms, and design systems that transformed how millions of users work.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass border border-white/10 hover:border-primary/30'
              }`}
              style={{ color: activeCategory === cat ? 'white' : 'var(--muted)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative glass border border-white/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ background: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>{project.description}</p>

                  {/* Impact */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.impact.slice(0, 2).map((imp, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${project.color}15`, color: project.color }}>
                        {imp}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--muted)' }}>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{project.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{project.role}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/10 shadow-2xl no-scrollbar"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur hover:bg-black/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-5">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: selectedProject.color }}>
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Meta row */}
                <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted)' }}>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{selectedProject.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-secondary" />{selectedProject.role}</span>
                  <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-accent" />{selectedProject.team}</span>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="font-heading font-bold mb-2" style={{ color: 'var(--foreground)' }}>Overview</h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{selectedProject.description}</p>
                </div>

                {/* Problem */}
                <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <h4 className="font-heading font-bold text-red-400 mb-2">The Problem</h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{selectedProject.problem}</p>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-heading font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                    <TrendingUp className="w-4 h-4 text-green-400" /> Business Impact
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {selectedProject.impact.map((imp, i) => (
                      <div key={i} className="p-3 rounded-xl text-center" style={{ background: `${selectedProject.color}15`, border: `1px solid ${selectedProject.color}30` }}>
                        <p className="text-sm font-semibold" style={{ color: selectedProject.color }}>{imp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-heading font-bold mb-3" style={{ color: 'var(--foreground)' }}>Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map(t => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-lg" style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={selectedProject.liveUrl} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={selectedProject.caseStudyUrl} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold glass border border-white/10"
                    style={{ color: 'var(--foreground)' }}>
                    <BookOpen className="w-4 h-4" /> Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
