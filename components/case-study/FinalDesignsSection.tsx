'use client'
import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'
import Image from 'next/image'

interface FinalDesignsProps {
  finalDesignImage?: string;
}

export default function FinalDesignsSection({ finalDesignImage }: FinalDesignsProps) {
  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold">Final Design Execution</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A high-fidelity look at the final polished interfaces, components, and key interactions that were successfully handed off to engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl flex items-center justify-center group"
        >
          {finalDesignImage ? (
            <Image 
              src={finalDesignImage} 
              alt="Final Design Mockups" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/20" />
              
              <Image 
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1600&q=80" 
                alt="Final Design Mockups Placeholder" 
                fill 
                className="object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              
              <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center max-w-lg bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                  <Layers className="w-8 h-8 text-gray-700 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-3">High-Fidelity Mockups</h3>
                  <p className="text-sm text-gray-300">
                    (Placeholder: Insert actual Dribbble-style composite shots, device mockups, or Figma exports here showcasing the beautiful final UI screens and visual design.)
                  </p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
