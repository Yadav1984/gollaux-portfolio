'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { tools } from '@/lib/data'

const levelColor: Record<string, string> = {
  Expert: '#22C55E',
  Advanced: '#2563EB',
  Intermediate: '#F59E0B',
}

export default function Tools() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tools" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Tools & Tech</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            The
            <span className="gradient-text"> Design Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="group glass border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 card-hover text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg"
                style={{ background: tool.color === '#000000' ? '#1a1a1a' : tool.color }}
              >
                {tool.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>{tool.name}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{tool.category}</p>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${levelColor[tool.level]}20`, color: levelColor[tool.level] }}
              >
                {tool.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
