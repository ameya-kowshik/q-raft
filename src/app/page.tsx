import { standees } from '@/data/standees'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import StandeeGrid from '@/components/home/StandeeGrid'
import HowItWorks from '@/components/home/HowItWorks'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StandeeGrid standees={standees} />
      <HowItWorks />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
