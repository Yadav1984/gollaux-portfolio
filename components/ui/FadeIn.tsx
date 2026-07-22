'use client'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  duration = 0.6
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: { x: 0, y: 0 }
  };

  const initialOffset = shouldReduceMotion ? { x: 0, y: 0 } : directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
