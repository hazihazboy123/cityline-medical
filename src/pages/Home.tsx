import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import EMRCallout from '../components/EMRCallout'
import WhyUs from '../components/WhyUs'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TrustedBy />
      <Services />
      <EMRCallout />
      <WhyUs />
      <Stats />
      <CTA />
    </>
  )
}
