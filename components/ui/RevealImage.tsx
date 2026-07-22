'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'

interface RevealImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function RevealImage({ wrapperClassName = '', ...props }: RevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${wrapperClassName}`}
      initial={{ 
        opacity: 0, 
        filter: shouldReduceMotion ? 'none' : 'blur(10px)',
        scale: shouldReduceMotion ? 1 : 1.05
      }}
      animate={{ 
        opacity: 1, 
        filter: 'blur(0px)',
        scale: 1
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <Image {...props} unoptimized />
    </motion.div>
  )
}
