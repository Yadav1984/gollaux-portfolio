'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star, Mic, Award, Zap, Users, Sparkles } from 'lucide-react'
import { awards } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Mic: <Mic className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
}

const categoryColor: Record<string, string> = {
  Award: '#F59E0B',
  Speaking: '#2563EB',
  Certification: '#06B6D4',
  Hackathon: '#22C55E',
  Mentoring: '#EC4899',
}

export default function Awards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="awards" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Recognition</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            Awards &
            <span className="gradient-text"> Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              className="glass border border-white/10 rounded-2xl p-5 card-hover group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                  style={{ background: `${award.color}20`, color: award.color, border: `1px solid ${award.color}30` }}
                >
                  {iconMap[award.icon]}
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${categoryColor[award.category] || award.color}15`, color: categoryColor[award.category] || award.color }}
                >
                  {award.category}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold mb-1" style={{ color: 'var(--foreground)' }}>{award.title}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: award.color }}>{award.organization}</p>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>{award.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>{award.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
