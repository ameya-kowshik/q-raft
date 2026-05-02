'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import type { Design } from '@/data/standees'
import DesignDetailCard from './DesignDetailCard'

interface DesignGridProps {
  designs: Design[]
}

export default function DesignGrid({ designs }: DesignGridProps) {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Card
              className="h-full overflow-hidden cursor-pointer group"
              onClick={() => setSelectedDesign(design)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedDesign(design)
                }
              }}
              aria-label={`View details for ${design.name}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-muted">
                <Image
                  src={design.image}
                  alt={design.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover affordance overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 px-3 py-1.5 rounded-full">
                    View Details
                  </span>
                </div>
              </div>

              <CardContent className="flex flex-col gap-1.5 p-4">
                <h3 className="font-semibold text-foreground text-sm leading-snug">
                  {design.name}
                </h3>
                <p className="text-sm font-medium text-accent">{design.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <DesignDetailCard
        design={selectedDesign}
        open={selectedDesign !== null}
        onClose={() => setSelectedDesign(null)}
      />
    </>
  )
}
