'use client'
import { motion } from 'framer-motion'
import { Search, Map, CheckCircle2, UserCircle, ShieldAlert, Sparkles, MonitorSmartphone, Palette } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

interface ProcessProps {
  caseStudy: CaseStudy;
}

export default function ProcessSection({ caseStudy }: ProcessProps) {
  const { discovery, research, personas, journey, uiExploration, challenge } = caseStudy;

  return (
    <section className="py-16 border-t border-white/5 relative bg-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold">The Challenge</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {challenge.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {challenge.keyIssues.map((issue, i) => (
              <div key={i} className="flex gap-3 p-4 glass rounded-xl border border-white/5">
                <span className="text-primary font-bold">{i + 1}.</span>
                <span className="text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Discovery & Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Search className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-heading font-bold">Discovery & Research</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground/90">Kickoff & Audit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{discovery.kickoff}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{discovery.audit}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl border-l-4 border-l-red-500 border-y border-y-white/5 border-r border-r-white/5">
                <h4 className="font-semibold mb-4 text-red-400">Key Pain Points</h4>
                <ul className="space-y-3">
                  {discovery.painPoints.map((pt, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6 rounded-2xl border-l-4 border-l-green-500 border-y border-y-white/5 border-r border-r-white/5">
                <h4 className="font-semibold mb-4 text-green-400">Opportunities</h4>
                <ul className="space-y-3">
                  {discovery.opportunities.map((opt, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background/40 p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-3">Research Methodology</h3>
              <p className="text-sm text-muted-foreground mb-6">{research.methodology}</p>
              
              <h4 className="font-medium text-sm text-foreground/80 mb-3">Key Insights:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {research.insights.map((insight, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground p-3 bg-white/5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* User Personas & Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <UserCircle className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-heading font-bold">Personas & Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {personas.map((persona, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <UserCircle className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold mb-1 relative z-10">{persona.name}</h3>
                <p className="text-sm text-primary mb-6 relative z-10">{persona.role}</p>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Goals</h4>
                    <ul className="text-sm space-y-1">
                      {persona.goals.map((g, j) => <li key={j}>• {g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Behaviors</h4>
                    <p className="text-sm">{persona.behaviors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-1 rounded-2xl">
            <div className="bg-background p-6 md:p-8 rounded-xl h-full">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Map className="w-5 h-5" /> User Journey Shift
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 items-stretch">
                <div className="flex-1 p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wider">Before</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{journey.current}</p>
                </div>
                
                <div className="flex-1 p-5 rounded-xl bg-green-500/5 border border-green-500/10">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wider">After</h4>
                  <p className="text-sm leading-relaxed text-foreground/90">{journey.future}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UI & Design System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold">Design Execution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="flex items-center gap-2 font-semibold mb-3">
                  <MonitorSmartphone className="w-4 h-4 text-muted-foreground" />
                  UI Exploration
                </h3>
                <div className="space-y-3">
                  <p className="text-sm"><span className="text-muted-foreground">Typography:</span> {uiExploration.typography}</p>
                  <p className="text-sm"><span className="text-muted-foreground">Colors:</span> {uiExploration.colorPalette}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="font-semibold mb-4">Design System Components</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.designSystem.components.map((comp, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
