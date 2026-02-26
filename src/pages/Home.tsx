import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import { getFAQsBySlug } from '../data/faqs'
import CTA from '../components/CTA'

export default function Home() {
  const faqItems = getFAQsBySlug('home')

  return (
    <>
      <Hero />
      <HowItWorks />
      <TrustedBy />
      <Services />
      <WhyUs />
      <Stats />
      <FAQ items={faqItems} />
      <CTA />
    </>
  )
}
