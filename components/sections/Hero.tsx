'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin, Dribbble } from 'lucide-react'
import { personal, stats } from '@/lib/data'
import { TypeAnimation } from 'react-type-animation'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#2563EB', '#7C3AED', '#06B6D4', '#8B5CF6']
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 120) * 0.15
            ctx.strokeStyle = p.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40 dark:opacity-60" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="section-tag w-fit mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for exciting opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span style={{ color: 'var(--foreground)' }}>Hi, I&apos;m Golla</span>
              <br />
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'Lead UI/UX Designer', 2500,
                    'Enterprise Product Designer', 2500,
                    'UX Strategist', 2500,
                    'Design System Architect', 2500,
                  ]}
                  repeat={Infinity}
                  speed={50}
                  deletionSpeed={60}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl mb-8 max-w-xl leading-relaxed"
              style={{ color: 'var(--muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personal.subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-primary/30 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Portfolio
              </motion.button>
              <motion.a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 glass border border-white/10 hover:border-primary/30 transition-colors"
                style={{ color: 'var(--foreground)' }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border transition-colors"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
                whileHover={{ scale: 1.03, y: -2, borderColor: '#2563EB' }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Dribbble, href: personal.dribbble, label: 'Dribbble' },
                { icon: Github, href: personal.github, label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"
                  style={{ color: 'var(--muted)' }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
              <span className="text-xs ml-2" style={{ color: 'var(--muted)' }}>{personal.location}</span>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            className="relative flex justify-center"
            style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-primary/20 animate-spin-slow" />
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-secondary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            </div>

            {/* Portrait */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl glow-primary animate-morphing">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 mix-blend-overlay z-10" />
              <Image
                src={personal.avatar}
                alt="Golla - Lead UI/UX Designer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -left-4 sm:-left-8 top-10 glass rounded-xl px-3 py-2 border border-white/10 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>14+ Years</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 sm:-right-8 bottom-12 glass rounded-xl px-3 py-2 border border-white/10 shadow-xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>100+ Projects</div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>Delivered</div>
            </motion.div>

            <motion.div
              className="absolute -top-4 right-8 glass rounded-xl px-3 py-2 border border-white/10 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-xs font-semibold gradient-text">Lead Designer</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-16 border-t"
          style={{ borderColor: 'var(--border)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {statsInView ? (
                  <CountUp end={stat.value} duration={2.5} delay={0.2 * i} suffix={stat.suffix} />
                ) : '0'}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: 'var(--muted)' }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 group-hover:text-primary transition-colors" />
      </motion.button>
    </section>
  )
}
