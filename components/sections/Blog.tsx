'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-tag w-fit mb-3">Insights</div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
              Design
              <span className="gradient-text"> Thinking</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="group glass border border-white/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: post.color }}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'var(--muted)' }}>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-base font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ color: 'var(--foreground)' }}>
                  {post.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>{post.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'var(--muted-bg)', color: 'var(--muted)' }}>
                      #{tag.toLowerCase().replace(' ', '')}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
