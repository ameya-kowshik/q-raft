'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import type { StandeeType } from '@/data/standees'

interface StandeeGridProps {
  standees: StandeeType[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}

export default function StandeeGrid({ standees }: StandeeGridProps) {
  return (
    <section id="standees" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Standees
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pick the standee type that fits your space, then browse its designs.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {standees.map((standee) => (
            <motion.div key={standee.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-muted">
                  <Image
                    src={standee.coverImage}
                    alt={standee.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="flex flex-col gap-3 p-5">
                  <h3 className="font-semibold text-foreground">
                    {standee.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {standee.description}
                  </p>
                  <Link
                    href={`/standees/${standee.slug}`}
                    className="mt-auto inline-flex items-center text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    View Designs →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
