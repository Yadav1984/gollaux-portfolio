'use client'
import { motion } from 'framer-motion'
import { Heart, Linkedin, Dribbble, Github, Globe, Mail, ArrowUpRight, FileText } from 'lucide-react'
import { personal } from '@/lib/data'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Dribbble, href: personal.dribbble, label: 'Dribbble' },
  { icon: Globe, href: personal.behance, label: 'Behance' },
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 pb-8 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-sm">GD</span>
              </div>
              <div>
                <span className="font-heading font-bold" style={{ color: 'var(--foreground)' }}>{personal.name}</span>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{personal.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'var(--muted)' }}>
              Creating enterprise products that solve complex business problems through user-centered design, strategic thinking, and cross-functional leadership.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4" style={{ color: 'var(--foreground)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                    style={{ color: 'var(--muted)' }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4" style={{ color: 'var(--foreground)' }}>Contact</h4>
            <div className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
              <p>{personal.email}</p>
              <p>{personal.phone}</p>
              <p>{personal.location}</p>
            </div>
            <motion.a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg w-fit"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-center pt-8 border-t text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
        >
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personal.name}. Crafted with
            <Heart className="w-3 h-3 text-red-400 inline fill-red-400 mx-0.5" />
            and attention to detail.
          </p>

        </div>
      </div>
    </footer>
  )
}
