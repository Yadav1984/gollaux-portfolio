'use client'
import { motion } from 'framer-motion'
import { Layers, Box, PenTool, BookOpen, GitBranch, Code2, CheckSquare, Rocket, Figma, ShieldAlert, Trophy, TrendingUp, Sparkles, Image as ImageIcon } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'
import Image from 'next/image'

interface DSProcessProps {
  caseStudy: CaseStudy;
}

export default function DesignSystemProcessSection({ caseStudy }: DSProcessProps) {
  const ds = caseStudy.designSystemDetails;
  if (!ds) return null;

  const processIcons: Record<string, React.ReactNode> = {
    componentCreation: <PenTool className="w-5 h-5 text-primary" />,
    documentation: <BookOpen className="w-5 h-5 text-secondary" />,
    versioning: <GitBranch className="w-5 h-5 text-accent" />,
    developerHandoff: <Code2 className="w-5 h-5 text-green-500" />,
    designQA: <CheckSquare className="w-5 h-5 text-yellow-500" />,
    crossTeamAdoption: <Rocket className="w-5 h-5 text-purple-500" />,
    figmaLibraries: <Figma className="w-5 h-5 text-pink-500" />,
    governance: <ShieldAlert className="w-5 h-5 text-red-500" />
  };

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="bg-accent/5">
      {/* FOUNDATIONS & COMPONENTS */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Layers className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold">Architecture & Assets</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" /> Core Foundations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ds.foundations.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Box className="w-5 h-5 text-accent" /> UI Components
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ds.components.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 border-t border-white/5 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">The Process Engine</h2>
              <p className="text-lg text-muted-foreground">How we built, documented, and scaled the system across the enterprise.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(ds.process).map(([key, value], i) => (
                <div key={key} className="glass p-6 rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    {processIcons[key]}
                  </div>
                  <h4 className="font-bold mb-2">{formatKey(key)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL DESIGN SHOWCASE (if exists) */}
      {caseStudy.finalDesignImage && (
        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-xl shadow-primary/20">
                <ImageIcon className="w-8 h-8 text-gray-700 dark:text-white" />
              </div>
              <h2 className="text-4xl font-heading font-bold mb-12">System Artifacts</h2>
              
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={caseStudy.finalDesignImage}
                  alt="Design System Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* IMPACT & OUTCOMES */}
      <section className="py-20 border-t border-white/5 relative bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <h2 className="text-4xl font-heading font-bold">Business Impact</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Object.entries(ds.impact).map(([key, value]) => (
                <div key={key} className="glass p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <h3 className="font-bold">{formatKey(key)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
