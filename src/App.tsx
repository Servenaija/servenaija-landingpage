import {
  EarningOpportunitiesSection,
  FaqAndSiteFooterSection,
  HeroSection,
  LeadershipTestimonialsSection,
  MarketplaceCategoriesSection,
  ScrollRevealSection,
  WhyChooseSection,
} from './components'
import './App.css'

function App() {
  return (
    <>
      <ScrollRevealSection delay={0}>
        <HeroSection />
      </ScrollRevealSection>

      <ScrollRevealSection delay={80}>
        <MarketplaceCategoriesSection />
      </ScrollRevealSection>

      <ScrollRevealSection delay={110}>
        <WhyChooseSection />
      </ScrollRevealSection>

      <ScrollRevealSection delay={140}>
        <EarningOpportunitiesSection />
      </ScrollRevealSection>

      <ScrollRevealSection delay={170}>
        <LeadershipTestimonialsSection />
      </ScrollRevealSection>

      <ScrollRevealSection delay={200}>
        <FaqAndSiteFooterSection />
      </ScrollRevealSection>
    </>
  )
}

export default App
