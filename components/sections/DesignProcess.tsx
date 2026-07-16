'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Search, Target, Lightbulb, Layout, Zap, FlaskConical, RefreshCw, Rocket, BarChart2 } from 'lucide-react'
import { designProcess } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
}

export default function DesignProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Design Process</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            From
            <span className="gradient-text"> Empathy</span> to
            <span className="gradient-text"> Impact</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4" style={{ color: 'var(--muted)' }}>
            A structured, research-led process that consistently delivers measurable results across enterprise products.
          </p>
        </motion.div>

        {/* Desktop: horizontal scroll */}
        <div className="hidden lg:flex gap-0 overflow-x-auto no-scrollbar pb-4">
          {designProcess.map((step, i) => (
            <motion.div
              key={i}
              className="group relative flex-shrink-0 w-48 xl:w-52"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {/* Connector */}
              {i < designProcess.length - 1 && (
                <div className="absolute top-8 right-0 w-full h-px" style={{ background: `linear-gradient(90deg, ${step.color}, ${designProcess[i+1].color})`, opacity: 0.3 }} />
              )}
              <div className="pr-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: `${step.color}20`, color: step.color, border: `1px solid ${step.color}30` }}
                >
                  {iconMap[step.icon]}
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: step.color }}>{step.step}</div>
                <h3 className="font-heading text-base font-bold mb-2" style={{ color: 'var(--foreground)' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>{step.description}</p>
                <div className="space-y-1">
                  {step.activities.map((a, j) => (
                    <span key={j} className="block text-xs px-2 py-0.5 rounded" style={{ background: `${step.color}10`, color: step.color }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {designProcess.map((step, i) => (
            <motion.div
              key={i}
              className="glass border border-white/10 rounded-2xl p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${step.color}20`, color: step.color }}
              >
                {iconMap[step.icon]}
              </div>
              <div className="text-xs font-bold mb-1" style={{ color: step.color }}>{step.step}</div>
              <h3 className="font-heading text-sm font-bold" style={{ color: 'var(--foreground)' }}>{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
