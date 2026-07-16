'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Testimonials</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            What
            <span className="gradient-text"> Leaders Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Featured testimonial */}
          <div className="relative mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 opacity-5 text-primary" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-heading text-lg sm:text-xl font-medium leading-relaxed mb-8 italic" style={{ color: 'var(--foreground)' }}>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold" style={{ color: 'var(--foreground)' }}>{testimonials[current].name}</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{testimonials[current].role} · {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" style={{ color: 'var(--foreground)' }} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" style={{ color: 'var(--foreground)' }} />
              </motion.button>
            </div>
          </div>

          {/* All testimonials mini grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setCurrent(i)}
                className={`p-4 rounded-2xl text-left transition-all glass border ${i === current ? 'border-primary/40' : 'border-white/10'}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.company}</p>
                  </div>
                </div>
                <p className="text-xs line-clamp-2" style={{ color: 'var(--muted)' }}>&ldquo;{t.text.substring(0, 80)}...&rdquo;</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
