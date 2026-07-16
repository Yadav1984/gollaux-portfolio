'use client'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, ChevronDown } from 'lucide-react'
import { experiences } from '@/lib/data'
import { useState } from 'react'

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>('exp-1')

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Experience</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            14+ Years of
            <span className="gradient-text"> Enterprise Design</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-6 sm:gap-8">
                  {/* Timeline dot */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-lg z-10 mt-1"
                      style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-6">
                    <button
                      className="w-full text-left p-5 rounded-2xl glass border border-white/10 hover:border-primary/20 transition-colors card-hover"
                      onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${exp.color}20`, color: exp.color }}>
                              {exp.companyType}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-bold" style={{ color: 'var(--foreground)' }}>{exp.role}</h3>
                          <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.duration}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${expanded === exp.id ? 'rotate-180' : ''}`}
                          style={{ color: 'var(--muted)' }}
                        />
                      </div>

                      {/* Impact summary always visible */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.impact.map((imp, j) => (
                          <span key={j} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: `${exp.color}15`, color: exp.color }}>
                            {imp}
                          </span>
                        ))}
                      </div>
                    </button>

                    {/* Expanded */}
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 p-5 rounded-2xl glass border border-white/10"
                      >
                        <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Responsibilities</h4>
                        <ul className="space-y-2 mb-5">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                              <span className="text-primary mt-1 shrink-0">•</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>Tools & Tech</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(t => (
                            <span key={t} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>{t}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
