'use client'
import { motion } from 'framer-motion'
import { Target, TrendingUp, AlertCircle, Building2 } from 'lucide-react'

import type { CaseStudy } from '@/lib/case-studies'

interface OverviewProps {
  caseStudy: CaseStudy;
}

export default function OverviewSection({ caseStudy }: OverviewProps) {
  const { overview, challenge, responsibilities } = caseStudy;
  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Project Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {overview.briefIntro}
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">My Responsibilities</h3>
              <div className="flex flex-wrap gap-2">
                {responsibilities.map((resp, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-muted-foreground">
                    {resp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-heading font-bold mb-8">Problem Statement</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Business Problem</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {overview.businessBackground} {overview.problemStatement}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Existing Challenges & Pain Points</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {challenge.description}
                </p>
                <ul className="space-y-2">
                  {challenge.keyIssues.map((issue, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h4 className="flex items-center gap-2 font-semibold text-lg mb-4">
                <Target className="w-5 h-5 text-accent" />
                Objectives
              </h4>
              <ul className="space-y-3">
                {overview.businessObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10">
              <h4 className="flex items-center gap-2 font-semibold text-lg mb-4">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Success Metrics
              </h4>
              <ul className="space-y-3">
                {overview.successMetrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: metric.replace(/([↑↓]\s*\d+%?)/g, '<strong class="text-foreground">$1</strong>') }} />
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
