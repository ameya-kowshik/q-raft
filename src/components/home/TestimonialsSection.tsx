import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote:
      'Our customers love scanning the QR code at the counter. The standee looks premium and fits perfectly with our café decor.',
    name: 'Priya Sharma',
    business: 'Brew & Bloom Café, Pune',
  },
  {
    quote:
      'Ordered 3 standees for our retail outlets. Fast delivery, great quality, and the designs are exactly what we needed.',
    name: 'Rahul Mehta',
    business: 'Mehta Textiles, Surat',
  },
  {
    quote:
      'The acrylic finish is really sturdy. We have been using it at our reception desk for months with no issues at all.',
    name: 'Anita Nair',
    business: 'Nair Wellness Clinic, Kochi',
  },
  {
    quote:
      'Simple ordering process and the standee arrived well-packaged. Highly recommend QRaft for any small business.',
    name: 'Deepak Joshi',
    business: 'Joshi Electronics, Nagpur',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Businesses across India trust QRaft for their QR standee needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardContent className="flex flex-col gap-4 p-6">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
