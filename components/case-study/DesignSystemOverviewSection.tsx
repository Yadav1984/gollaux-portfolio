'use client'
import { motion } from 'framer-motion'
import { Component, ShieldCheck, Users2, Lightbulb } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

interface DSOverviewProps {
  caseStudy: CaseStudy;
}

export default function DesignSystemOverviewSection({ caseStudy }: DSOverviewProps) {
  const ds = caseStudy.designSystemDetails?.overview;
  if (!ds) return null;

  return (
    <section className="py-16 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-6">Building the Foundation</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.overview.briefIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Why It Matters</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {ds.whyItMatters}
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-secondary/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Component className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">My Contribution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {ds.contribution}
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-accent/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Governance Model</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {ds.governance}
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-green-500/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold">Collaboration</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {ds.collaborationModel}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
