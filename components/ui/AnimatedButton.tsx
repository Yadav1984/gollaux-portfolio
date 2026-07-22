'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: AnimatedButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/25",
    secondary: "bg-secondary text-white hover:bg-purple-600 shadow-lg shadow-secondary/25",
    outline: "border border-white/20 glass hover:bg-white/5 text-foreground",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
