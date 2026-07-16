'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, CheckCircle, Quote } from 'lucide-react'
import { about } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag mx-auto w-fit">About Me</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" style={{ color: 'var(--foreground)' }}>
            Design-led. Research-driven.
            <br />
            <span className="gradient-text">Impact-focused.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            {about.intro}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
              <div className="pl-8 space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>My Story</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{about.story}</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Mission</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{about.mission}</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Leadership Philosophy</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{about.philosophy}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 rounded-2xl glass border border-white/10 relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary opacity-40" />
              <p className="font-heading text-lg font-semibold italic" style={{ color: 'var(--foreground)' }}>
                &ldquo;Design is a conversation between the product and the person. My role is to make sure that conversation is meaningful.&rdquo;
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>— Golla</p>
            </div>
          </motion.div>

          {/* Education + Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {about.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-xl glass border border-white/10 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{edu.degree}</p>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{edu.school}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}>{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                <Award className="w-5 h-5 text-secondary" />
                Certifications
              </h3>
              <div className="space-y-3">
                {about.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl glass border border-white/10"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{cert.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{cert.issuer} · {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-5" style={{ color: 'var(--foreground)' }}>Key Achievements</h3>
              <div className="space-y-2">
                {about.achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary mt-1">→</span>
                    <span style={{ color: 'var(--muted)' }}>{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
