export type Design = {
  id: string
  name: string
  image: string
  price: string
  dimensions: string
  material: string
  description: string
}

export type StandeeType = {
  id: number
  slug: string
  title: string
  description: string
  coverImage: string
  designs: Design[]
}

const placeholder = "/images/placeholder.png"

export const standees: StandeeType[] = [
  {
    id: 1,
    slug: "1-qr-standee",
    title: "1 QR Standee",
    description: "A compact single-QR standee ideal for small counters and reception desks.",
    coverImage: placeholder,
    designs: [
      { id: "1-1", name: "Classic White", image: placeholder, price: "₹ ---", dimensions: "15cm × 20cm", material: "Acrylic", description: "Clean white finish with bold QR placement." },
      { id: "1-2", name: "Matte Black", image: placeholder, price: "₹ ---", dimensions: "15cm × 20cm", material: "Acrylic", description: "Sleek matte black for a premium look." },
      { id: "1-3", name: "Brushed Gold", image: placeholder, price: "₹ ---", dimensions: "15cm × 20cm", material: "Metal", description: "Brushed gold finish for upscale venues." },
      { id: "1-4", name: "Frosted Clear", image: placeholder, price: "₹ ---", dimensions: "15cm × 20cm", material: "Acrylic", description: "Frosted transparent acrylic with subtle branding." },
    ],
  },
  {
    id: 2,
    slug: "2-qr-standee",
    title: "2 QR Standee",
    description: "Dual-QR standee perfect for businesses offering two payment or menu options.",
    coverImage: placeholder,
    designs: [
      { id: "2-1", name: "Split White", image: placeholder, price: "₹ ---", dimensions: "20cm × 25cm", material: "Acrylic", description: "Two QR codes side by side on a white base." },
      { id: "2-2", name: "Dark Duo", image: placeholder, price: "₹ ---", dimensions: "20cm × 25cm", material: "Acrylic", description: "Dark background with high-contrast QR codes." },
      { id: "2-3", name: "Gradient Blue", image: placeholder, price: "₹ ---", dimensions: "20cm × 25cm", material: "Acrylic", description: "Blue gradient background with white QR codes." },
      { id: "2-4", name: "Wooden Finish", image: placeholder, price: "₹ ---", dimensions: "20cm × 25cm", material: "Wood Laminate", description: "Natural wood-look laminate for a warm aesthetic." },
    ],
  },
  {
    id: 3,
    slug: "3-qr-standee",
    title: "3 QR Standee",
    description: "Triple-QR standee for restaurants, hotels, or multi-service businesses.",
    coverImage: placeholder,
    designs: [
      { id: "3-1", name: "Tri-White", image: placeholder, price: "₹ ---", dimensions: "25cm × 30cm", material: "Acrylic", description: "Three QR codes in a clean white layout." },
      { id: "3-2", name: "Charcoal Trio", image: placeholder, price: "₹ ---", dimensions: "25cm × 30cm", material: "Acrylic", description: "Charcoal grey with neon-accented QR codes." },
      { id: "3-3", name: "Rose Gold", image: placeholder, price: "₹ ---", dimensions: "25cm × 30cm", material: "Metal", description: "Rose gold metallic finish for boutique settings." },
      { id: "3-4", name: "Marble Print", image: placeholder, price: "₹ ---", dimensions: "25cm × 30cm", material: "Acrylic", description: "Marble-effect print for luxury interiors." },
    ],
  },
  {
    id: 4,
    slug: "4-qr-standee",
    title: "4 QR Standee",
    description: "Four-QR standee suited for large menus, multi-branch businesses, or events.",
    coverImage: placeholder,
    designs: [
      { id: "4-1", name: "Grid White", image: placeholder, price: "₹ ---", dimensions: "30cm × 35cm", material: "Acrylic", description: "2×2 grid layout on a crisp white base." },
      { id: "4-2", name: "Midnight Grid", image: placeholder, price: "₹ ---", dimensions: "30cm × 35cm", material: "Acrylic", description: "Dark midnight background with glowing QR codes." },
      { id: "4-3", name: "Saffron", image: placeholder, price: "₹ ---", dimensions: "30cm × 35cm", material: "Acrylic", description: "Vibrant saffron colour with white QR codes." },
      { id: "4-4", name: "Steel Brushed", image: placeholder, price: "₹ ---", dimensions: "30cm × 35cm", material: "Metal", description: "Industrial brushed steel look for modern offices." },
    ],
  },
  {
    id: 5,
    slug: "5-qr-standee",
    title: "5 QR Standee",
    description: "Five-QR standee for comprehensive service listings or multi-department use.",
    coverImage: placeholder,
    designs: [
      { id: "5-1", name: "Penta White", image: placeholder, price: "₹ ---", dimensions: "35cm × 40cm", material: "Acrylic", description: "Five QR codes in a balanced white layout." },
      { id: "5-2", name: "Ocean Blue", image: placeholder, price: "₹ ---", dimensions: "35cm × 40cm", material: "Acrylic", description: "Ocean blue gradient with white QR codes." },
      { id: "5-3", name: "Forest Green", image: placeholder, price: "₹ ---", dimensions: "35cm × 40cm", material: "Acrylic", description: "Deep forest green for eco-conscious brands." },
      { id: "5-4", name: "Ivory Linen", image: placeholder, price: "₹ ---", dimensions: "35cm × 40cm", material: "Acrylic", description: "Soft ivory linen texture for a refined look." },
    ],
  },
  {
    id: 6,
    slug: "6-qr-standee",
    title: "6 QR Standee",
    description: "Six-QR standee ideal for trade shows, expos, and high-traffic retail spaces.",
    coverImage: placeholder,
    designs: [
      { id: "6-1", name: "Hex White", image: placeholder, price: "₹ ---", dimensions: "40cm × 45cm", material: "Acrylic", description: "Six QR codes in a 2×3 grid on white." },
      { id: "6-2", name: "Carbon Black", image: placeholder, price: "₹ ---", dimensions: "40cm × 45cm", material: "Acrylic", description: "Carbon fibre texture with white QR codes." },
      { id: "6-3", name: "Coral Burst", image: placeholder, price: "₹ ---", dimensions: "40cm × 45cm", material: "Acrylic", description: "Coral and white for vibrant retail displays." },
      { id: "6-4", name: "Slate Grey", image: placeholder, price: "₹ ---", dimensions: "40cm × 45cm", material: "Metal", description: "Slate grey metal finish for corporate environments." },
    ],
  },
  {
    id: 7,
    slug: "7-qr-standee",
    title: "7 QR Standee",
    description: "Seven-QR standee for complex service menus or multi-location brand displays.",
    coverImage: placeholder,
    designs: [
      { id: "7-1", name: "Septet White", image: placeholder, price: "₹ ---", dimensions: "45cm × 50cm", material: "Acrylic", description: "Seven QR codes in an asymmetric white layout." },
      { id: "7-2", name: "Deep Navy", image: placeholder, price: "₹ ---", dimensions: "45cm × 50cm", material: "Acrylic", description: "Deep navy with gold-accented QR codes." },
      { id: "7-3", name: "Terracotta", image: placeholder, price: "₹ ---", dimensions: "45cm × 50cm", material: "Acrylic", description: "Warm terracotta tones for artisan businesses." },
      { id: "7-4", name: "Monochrome", image: placeholder, price: "₹ ---", dimensions: "45cm × 50cm", material: "Acrylic", description: "Pure black and white for maximum contrast." },
    ],
  },
  {
    id: 8,
    slug: "8-qr-standee",
    title: "8 QR Standee",
    description: "Eight-QR standee — the ultimate display for large-scale events and enterprises.",
    coverImage: placeholder,
    designs: [
      { id: "8-1", name: "Octet White", image: placeholder, price: "₹ ---", dimensions: "50cm × 60cm", material: "Acrylic", description: "Eight QR codes in a 2×4 grid on white." },
      { id: "8-2", name: "Obsidian", image: placeholder, price: "₹ ---", dimensions: "50cm × 60cm", material: "Acrylic", description: "Obsidian black with luminous QR codes." },
      { id: "8-3", name: "Champagne", image: placeholder, price: "₹ ---", dimensions: "50cm × 60cm", material: "Metal", description: "Champagne gold metal for gala and event use." },
      { id: "8-4", name: "Arctic White", image: placeholder, price: "₹ ---", dimensions: "50cm × 60cm", material: "Acrylic", description: "Crisp arctic white with minimal branding." },
    ],
  },
]
