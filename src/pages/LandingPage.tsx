import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import CategoryGrid from '../components/CategoryGrid'
import WhyChoose from '../components/WhyChoose'
import HowItWorks from '../components/HowItWorks'
import EarnWays from '../components/EarnWays'
import CTA from '../components/CTA'
import Leadership from '../components/Leadership'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-root">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <CategoryGrid />
        <WhyChoose />
        <HowItWorks />
        <EarnWays />
        <CTA />
        <Leadership />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
