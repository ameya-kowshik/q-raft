import { MessageCircleIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { CONTACT } from '@/lib/contact'

const contactOptions = [
  {
    icon: MessageCircleIcon,
    label: 'WhatsApp',
    display: CONTACT.phone,
    href: `https://wa.me/${CONTACT.whatsapp}`,
  },
  {
    icon: MailIcon,
    label: 'Email',
    display: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    display: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to order? Reach out and we will take it from there.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.label === 'WhatsApp' ? '_blank' : undefined}
              rel={option.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option.icon className="size-5 text-accent shrink-0" aria-hidden="true" />
              <span>{option.display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
