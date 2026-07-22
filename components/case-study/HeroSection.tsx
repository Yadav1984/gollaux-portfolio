'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Wrench, Layout } from 'lucide-react'
import Link from 'next/link'

interface HeroProps {
  title: string;
  industry: string;
  duration: string;
  role: string;
  teamSize: string;
  toolsUsed: string[];
  platform: string;
}

export default function HeroSection({ hero }: { hero: HeroProps }) {
  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {hero.industry}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-700 dark:text-white border border-white/10">
              {hero.platform}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
            {hero.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl glass border border-white/10">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Clock className="w-3.5 h-3.5" /> Duration</span>
              <p className="font-medium text-sm text-foreground">{hero.duration}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Users className="w-3.5 h-3.5" /> Role</span>
              <p className="font-medium text-sm text-foreground">{hero.role}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Layout className="w-3.5 h-3.5" /> Team</span>
              <p className="font-medium text-sm text-foreground">{hero.teamSize}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Wrench className="w-3.5 h-3.5" /> Tools</span>
              <div className="flex flex-wrap gap-1">
                {hero.toolsUsed.map((tool, i) => (
                  <span key={i} className="text-xs text-foreground font-medium bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
