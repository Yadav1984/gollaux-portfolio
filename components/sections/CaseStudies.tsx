'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  Target, Search, Users, Map, LayoutGrid, Layers, TestTube2,
  RefreshCw, TrendingUp, Lightbulb, X, ChevronRight, BarChart2, ArrowRight
} from 'lucide-react'
import { projects } from '@/lib/data'

const caseStudyPhases = [
  { icon: Target, label: 'Challenge', color: '#EF4444' },
  { icon: Search, label: 'Research', color: '#F59E0B' },
  { icon: Users, label: 'Personas', color: '#06B6D4' },
  { icon: Map, label: 'Journey Mapping', color: '#22C55E' },
  { icon: LayoutGrid, label: 'Wireframes', color: '#2563EB' },
  { icon: Layers, label: 'Design System', color: '#7C3AED' },
  { icon: TestTube2, label: 'Usability Testing', color: '#EC4899' },
  { icon: RefreshCw, label: 'Iterations', color: '#8B5CF6' },
  { icon: TrendingUp, label: 'Results', color: '#22C55E' },
  { icon: Lightbulb, label: 'Lessons', color: '#F59E0B' },
]

const featuredProjects = projects.filter(p => p.featured)

export default function CaseStudies() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Deep Dives</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            Featured
            <span className="gradient-text"> Case Studies</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4" style={{ color: 'var(--muted)' }}>
            End-to-end design stories — from research and problem framing to launch and business impact measurement.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl glass border border-white/10 group cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setSelected(project)}
            >
              {/* Image side */}
              <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                    style={{ background: project.color }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                  {project.title}
                </h3>
                <p className="mb-5 leading-relaxed" style={{ color: 'var(--muted)' }}>{project.description}</p>

                {/* Impact metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.impact.map((imp, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      <BarChart2 className="w-3.5 h-3.5" />
                      {imp}
                    </div>
                  ))}
                </div>

                {/* Process phases mini */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {caseStudyPhases.slice(0, 6).map((phase, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg"
                      style={{ background: `${phase.color}12`, color: phase.color }}
                    >
                      <phase.icon className="w-3 h-3" />
                      {phase.label}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs mb-6" style={{ color: 'var(--muted)' }}>
                  <span>⏱ {project.duration}</span>
                  <span>👤 {project.role}</span>
                  <span>📅 {project.year}</span>
                </div>

                <button
                  className="flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all w-fit"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl border border-white/10 shadow-2xl no-scrollbar"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
            >
              <div className="relative h-64">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white mb-3 inline-block"
                    style={{ background: selected.color }}>
                    {selected.category}
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-white">{selected.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Overview */}
                <div className="grid sm:grid-cols-3 gap-4 text-sm" style={{ color: 'var(--muted)' }}>
                  <div className="p-3 rounded-xl text-center" style={{ background: 'var(--muted-bg)' }}>
                    <p className="font-bold" style={{ color: 'var(--foreground)' }}>{selected.role}</p>
                    <p>Role</p>
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: 'var(--muted-bg)' }}>
                    <p className="font-bold" style={{ color: 'var(--foreground)' }}>{selected.duration}</p>
                    <p>Duration</p>
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: 'var(--muted-bg)' }}>
                    <p className="font-bold" style={{ color: 'var(--foreground)' }}>{selected.year}</p>
                    <p>Year</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="p-5 rounded-2xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <h3 className="font-heading text-lg font-bold text-red-400 mb-2">The Challenge</h3>
                  <p style={{ color: 'var(--muted)' }}>{selected.problem}</p>
                </div>

                {/* Process Phases */}
                <div>
                  <h3 className="font-heading text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>Design Process Applied</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {caseStudyPhases.map((phase, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl text-center"
                        style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}20` }}>
                        <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                        <span className="text-xs font-semibold" style={{ color: phase.color }}>{phase.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div>
                  <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Business Impact
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selected.impact.map((imp, i) => (
                      <div key={i} className="p-4 rounded-2xl text-center"
                        style={{ background: `${selected.color}12`, border: `1px solid ${selected.color}25` }}>
                        <p className="font-heading text-xl font-bold" style={{ color: selected.color }}>{imp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-heading text-lg font-bold mb-3" style={{ color: 'var(--foreground)' }}>Tools & Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map(t => (
                      <span key={t} className="text-sm px-3 py-1.5 rounded-lg"
                        style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={selected.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary text-sm">
                    View Live Project
                  </a>
                  <a href={selected.caseStudyUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold glass border border-white/10 text-sm"
                    style={{ color: 'var(--foreground)' }}>
                    Full Case Study <ChevronRight className="w-4 h-4" />
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
