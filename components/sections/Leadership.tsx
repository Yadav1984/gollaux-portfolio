'use client'
import { motion } from 'framer-motion'
import { Users2, Briefcase, Workflow, CheckCircle2 } from 'lucide-react'
import { leadership } from '@/lib/data'
import { useState } from 'react'

export default function Leadership() {
  const [activeTab, setActiveTab] = useState(leadership.pillars[0].id)

  const icons: Record<string, React.ReactNode> = {
    Users2: <Users2 className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Workflow: <Workflow className="w-6 h-6" />
  }

  const activePillar = leadership.pillars.find(p => p.id === activeTab) || leadership.pillars[0]

  return (
    <section id="leadership" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Seniority</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" style={{ color: 'var(--foreground)' }}>
            Leadership & <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {leadership.intro}
          </p>
        </motion.div>

        {/* Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Navigation/Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {leadership.pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === pillar.id 
                    ? 'glass border-white/20 shadow-lg scale-[1.02]' 
                    : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeTab === pillar.id ? 'text-white' : 'text-muted-foreground'
                    }`}
                    style={{ backgroundColor: activeTab === pillar.id ? pillar.color : 'rgba(255,255,255,0.05)' }}
                  >
                    {icons[pillar.icon]}
                  </div>
                  <h3 className={`font-bold text-lg ${activeTab === pillar.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {pillar.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass p-8 sm:p-10 rounded-3xl border border-white/10 h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: activePillar.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${activePillar.color}20`, color: activePillar.color }}>
                    {icons[activePillar.icon]}
                  </div>
                  <h3 className="text-3xl font-bold font-heading">{activePillar.title}</h3>
                </div>

                <div className="space-y-6">
                  {activePillar.items.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: activePillar.color }} />
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
