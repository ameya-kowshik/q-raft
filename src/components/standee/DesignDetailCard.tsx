'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Design } from '@/data/standees'
import { CONTACT } from '@/lib/contact'

interface DesignDetailCardProps {
  design: Design | null
  open: boolean
  onClose: () => void
}

export default function DesignDetailCard({
  design,
  open,
  onClose,
}: DesignDetailCardProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose()
      }}
    >
      <AnimatePresence>
        {open && design && (
          <DialogContent
            key="design-detail"
            className="sm:max-w-lg overflow-y-auto max-h-[90vh] p-0"
            // Disable the built-in CSS animation so Framer Motion controls it
            data-framer
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex flex-col gap-4 p-4"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={design.image}
                  alt={design.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>

              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  {design.name}
                </DialogTitle>
              </DialogHeader>

              {/* Details */}
              <div className="flex flex-col gap-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {design.description}
                </p>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Dimensions
                    </dt>
                    <dd className="mt-0.5 text-foreground">{design.dimensions}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Material
                    </dt>
                    <dd className="mt-0.5 text-foreground">{design.material}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Price
                    </dt>
                    <dd className="mt-0.5 font-semibold text-accent">
                      {design.price}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact links */}
              <div className="border-t pt-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Enquire about this design
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <MessageCircle className="size-4 shrink-0" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <Mail className="size-4 shrink-0" />
                    {CONTACT.email}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    <Phone className="size-4 shrink-0" />
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
