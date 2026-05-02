'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          QR Standees for{' '}
          <span className="text-accent">Indian Businesses</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
          Showcase your brand with premium QR standees. Choose from 8 standee
          types and dozens of designs — then place your order offline.
        </p>
        <div className="mt-10">
          <a
            href="#standees"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Explore Standees
          </a>
        </div>
      </motion.div>
    </section>
  )
}
