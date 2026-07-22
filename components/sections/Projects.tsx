'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealImage from '@/components/ui/RevealImage'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateX = ((mouseY / height) - 0.5) * -10;
    const rotateY = ((mouseX / width) - 0.5) * 10;
    
    x.set(rotateY);
    y.set(rotateX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
    >
      <Link 
        href={`/projects/${project.slug}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col h-full overflow-hidden rounded-2xl block"
      >
        <motion.div 
          className="relative flex flex-col h-full glass border border-white/10 rounded-2xl overflow-hidden"
          style={{ 
            rotateX: mouseYSpring, 
            rotateY: mouseXSpring,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Category Tag */}
            <span 
              className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
              style={{ background: project.color }}
            >
              {project.category}
            </span>

            {project.featured && (
              <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-md border border-yellow-400/50 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ transform: "translateZ(20px)" }}>
                Featured
              </div>
            )}
            {/* Animated Arrow */}
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ transform: "translateZ(30px)" }}>
              <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow relative z-10 bg-background/50 backdrop-blur-sm" style={{ transform: "translateZ(30px)" }}>
            <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
              {project.title}
            </h3>
            <p className="text-sm mb-5 line-clamp-2" style={{ color: 'var(--muted)' }}>{project.description}</p>

            <div className="mt-auto">
              {/* Impact */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.impact.slice(0, 2).map((imp, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                    {imp}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10" style={{ color: 'var(--muted)' }}>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{project.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{project.role}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Featured Work</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4" style={{ color: 'var(--foreground)' }}>
            Projects That
            <span className="gradient-text"> Create Impact</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A curated selection of enterprise products, FinTech platforms, and design systems that transformed how millions of users work.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass border border-white/10 hover:border-primary/30'
              }`}
              style={{ color: activeCategory === cat ? 'white' : 'var(--muted)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
