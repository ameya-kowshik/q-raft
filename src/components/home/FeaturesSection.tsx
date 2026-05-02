'use client'

import { motion } from 'framer-motion'
import { QrCodeIcon, ZapIcon, PaletteIcon, TruckIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: QrCodeIcon,
    title: 'Instant QR Scanning',
    description:
      'High-contrast QR codes that scan reliably in any lighting — no app required.',
  },
  {
    icon: PaletteIcon,
    title: 'Dozens of Designs',
    description:
      'Choose from a wide range of finishes, materials, and layouts to match your brand.',
  },
  {
    icon: ZapIcon,
    title: 'Quick Turnaround',
    description:
      'Fast production and delivery so your standees are ready when you need them.',
  },
  {
    icon: TruckIcon,
    title: 'Pan-India Delivery',
    description:
      'We ship across India. Order from anywhere and receive at your doorstep.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why choose QRaft?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to put your QR code front and centre.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4 p-6">
                  <feature.icon
                    className="size-8 text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
