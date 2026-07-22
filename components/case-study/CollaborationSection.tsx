'use client'
import { motion } from 'framer-motion'
import { Users2, CheckCircle2 } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

interface CollaborationProps {
  caseStudy: CaseStudy;
}

export default function CollaborationSection({ caseStudy }: CollaborationProps) {
  const { collaboration } = caseStudy;

  if (!collaboration || collaboration.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/5 relative bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users2 className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-heading font-bold">4. Cross-Functional Collaboration</h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Enterprise design requires alignment across multiple disciplines. Here is how I partnered with key stakeholders to bring this product to life:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {collaboration.map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">{item.role}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
