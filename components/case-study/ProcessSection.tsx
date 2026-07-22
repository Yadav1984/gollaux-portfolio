'use client'
import { motion } from 'framer-motion'
import { Search, Map, CheckCircle2, UserCircle, Sparkles, MonitorSmartphone, Palette, Layers, GitBranch, PenTool, MousePointerClick } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

interface ProcessProps {
  caseStudy: CaseStudy;
}

export default function ProcessSection({ caseStudy }: ProcessProps) {
  const { discovery, research, personas, journey, informationArchitecture, userFlow, wireframes, prototype, uiExploration, designSystem } = caseStudy;

  return (
    <section className="py-16 border-t border-white/5 relative bg-accent/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DISCOVERY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Search className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-heading font-bold">1. Discovery & Research</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground/90">Kickoff, Audit & Competitor Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <strong>Kickoff:</strong> {discovery.kickoff}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <strong>Competitor Analysis:</strong> {discovery.competitorAnalysis}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong>Audit:</strong> {discovery.audit}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl border-l-4 border-l-red-500 border-y border-y-white/5 border-r border-r-white/5">
                <h4 className="font-semibold mb-4 text-red-400">User Pain Points</h4>
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
              <h3 className="text-lg font-semibold mb-3">User Interviews & Methodology</h3>
              <p className="text-sm text-muted-foreground mb-6">{research.methodology}</p>
              
              <h4 className="font-medium text-sm text-foreground/80 mb-3">Key Research Insights:</h4>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {research.insights.map((insight, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground p-3 bg-white/5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-muted-foreground">{research.summary}</p>
            </div>

            {/* Personas */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-secondary" /> Personas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {personas.map((persona, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <UserCircle className="w-24 h-24" />
                    </div>
                    <h4 className="text-lg font-bold mb-1 relative z-10">{persona.name}</h4>
                    <p className="text-sm text-primary mb-4 relative z-10">{persona.role}</p>
                    
                    <div className="space-y-4 relative z-10">
                      <div>
                        <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Goals</h5>
                        <ul className="text-sm space-y-1">
                          {persona.goals.map((g, j) => <li key={j}>• {g}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Behaviors & Devices</h5>
                        <p className="text-sm">{persona.behaviors} ({persona.devices.join(', ')})</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Maps */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-1 rounded-2xl">
              <div className="bg-background p-6 md:p-8 rounded-xl h-full">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                  <Map className="w-5 h-5" /> Journey Mapping
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
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-2">Success Moments:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {journey.successMoments.map((sm, i) => (
                      <li key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full">{sm}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UX PROCESS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold">2. UX Process</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <Layers className="w-5 h-5 text-muted-foreground" /> Information Architecture
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{informationArchitecture.description}</p>
              <ul className="space-y-2">
                {informationArchitecture.hierarchy.map((h, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <GitBranch className="w-5 h-5 text-muted-foreground" /> User Flows
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{userFlow.description}</p>
              <ul className="space-y-2">
                {userFlow.keyDecisions.map((d, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background/40 p-6 rounded-2xl border border-white/10">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <PenTool className="w-5 h-5 text-muted-foreground" /> Wireframes & Exploration
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{wireframes.description}</p>
              <div className="space-y-2">
                {wireframes.iterations.map((iter, i) => (
                  <p key={i} className="text-sm text-foreground/70 italic">- {iter}</p>
                ))}
              </div>
            </div>

            <div className="bg-background/40 p-6 rounded-2xl border border-white/10">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <MousePointerClick className="w-5 h-5 text-muted-foreground" /> Interaction Decisions
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{prototype.description}</p>
              <div className="flex flex-wrap gap-2">
                {prototype.interactions.map((int, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-muted-foreground">
                    {int}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* UI DESIGN SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-heading font-bold">3. UI Design</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="flex items-center gap-2 font-semibold text-lg mb-4">
                  <MonitorSmartphone className="w-5 h-5 text-primary" />
                  Visual Design & Accessibility
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Typography</span>
                    <p className="text-sm text-foreground/90">{uiExploration.typography}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Color Palette</span>
                    <p className="text-sm text-foreground/90">{uiExploration.colorPalette}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Accessibility & Responsiveness</span>
                    <p className="text-sm text-foreground/90">{uiExploration.accessibility}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-4">Component Decisions & Design System</h3>
                <div className="mb-6">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Core Components</span>
                  <div className="flex flex-wrap gap-2">
                    {designSystem.components.map((comp, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Design Tokens</span>
                  <div className="flex flex-wrap gap-2">
                    {designSystem.tokens.map((token, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
