"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className, once = false }: AnimatedTextProps) {
  const [scope, animate] = useState(false)

  // Split the text into words
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  useEffect(() => {
    // Only animate once or re-animate on scroll depending on the once prop
    const handleScroll = () => {
      if (once && scope) return
      animate(true)
    }

    handleScroll()
    if (!once) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (!once) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [once, scope])

  return (
    <motion.div
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate={scope ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1"
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  )
}