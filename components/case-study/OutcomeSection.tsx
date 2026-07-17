'use client'
import { motion } from 'framer-motion'
import { Trophy, Lightbulb, TrendingUp } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

interface OutcomeProps {
  caseStudy: CaseStudy;
}

export default function OutcomeSection({ caseStudy }: OutcomeProps) {
  const { businessImpact, learnings } = caseStudy;

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-xl shadow-primary/20">
              <Trophy className="w-8 h-8 text-gray-700 dark:text-white" />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6">Final Outcome & Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {businessImpact.summary}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {businessImpact.metrics.map((metric, i) => {
              const valueMatch = metric.match(/([↑↓]\s*\d+%?|100%|\d+[A-Z\+]*)/);
              const value = valueMatch ? valueMatch[0] : '';
              const text = metric.replace(value, '').trim();

              return (
                <div key={i} className="glass p-8 rounded-3xl text-center border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="text-4xl font-bold font-heading mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {text}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold">Key Learnings</h3>
              </div>
              <ul className="space-y-4">
                {learnings.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-yellow-500/50 mt-1">•</span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Future Improvements</h3>
              </div>
              <ul className="space-y-4">
                {learnings.futureImprovements.map((improvement, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent/50 mt-1">•</span>
                    <span className="leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
