'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Globe, CheckCircle, Send, Dribbble, Github } from 'lucide-react'
import { personal } from '@/lib/data'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/gollayerriswamy-uiux', href: personal.linkedin },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto w-fit">Get In Touch</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--foreground)' }}>
            Let&apos;s Build
            <span className="gradient-text"> Something Great</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mt-4" style={{ color: 'var(--muted)' }}>
            Open to senior design roles, consulting engagements, and speaking opportunities. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Let&apos;s Connect</h3>
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                Whether you&apos;re looking for a lead designer to join your team, need UX strategy consultation, or want to discuss enterprise design challenges — I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-primary/30 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Dribbble, href: personal.dribbble, label: 'Dribbble' },
                { icon: Globe, href: personal.behance, label: 'Behance' },
                { icon: Github, href: personal.github, label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"
                  style={{ color: 'var(--muted)' }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass border border-white/10 rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Message Sent!</h3>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-sm text-primary font-semibold hover:underline">Send another message</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--foreground)' }}>Name *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Priya Sharma"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--foreground)' }}>Email *</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="priya@company.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--foreground)' }}>Subject *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Lead Designer Role at Acme Corp"
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--foreground)' }}>Message *</label>
                      <textarea
                        className="form-input resize-none"
                        rows={5}
                        placeholder="Tell me about the opportunity or project you have in mind..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        required
                      />
                    </div>
                    {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-70"
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
