import { LayoutGridIcon, SwatchBookIcon, PhoneCallIcon } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: LayoutGridIcon,
    title: 'Choose Your Standee',
    description:
      'Browse our 8 standee types and pick the one that suits your counter, desk, or display area.',
  },
  {
    number: 2,
    icon: SwatchBookIcon,
    title: 'Pick a Design',
    description:
      'Each standee comes in multiple finishes and layouts. Find the design that matches your brand.',
  },
  {
    number: 3,
    icon: PhoneCallIcon,
    title: 'Place Your Order',
    description:
      'Reach out via WhatsApp, email, or phone. We handle the rest — production and delivery included.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Three simple steps to get your QR standee.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg">
                {step.number}
              </div>
              <step.icon className="size-8 text-accent" aria-hidden="true" />
              <h3 className="font-semibold text-foreground text-lg">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
