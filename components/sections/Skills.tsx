'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Palette, Target, Code } from 'lucide-react'
import { skills } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Expertise</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            Skills &
            <span className="gradient-text"> Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, gi) => (
            <motion.div
              key={gi}
              className="glass border border-white/10 rounded-2xl p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${skillGroup.color}20`, color: skillGroup.color }}>
                  {iconMap[skillGroup.icon]}
                </div>
                <h3 className="font-heading text-lg font-bold" style={{ color: 'var(--foreground)' }}>{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{skill.name}</span>
                      <span className="text-xs font-semibold" style={{ color: skillGroup.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--muted-bg)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skillGroup.color}, ${skillGroup.color}99)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: si * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
