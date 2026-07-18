import {
  MarketplaceCategoriesSection,
  WhyChooseSection,
  EarningOpportunitiesSection,
  LeadershipTestimonialsSection,
  FaqAndSiteFooterSection,
  ScrollRevealSection,
} from '../components'
import HeroBody from '../components/showroom'

export default function LandingPage() {
  return (
    <main className="landing-page">
      <ScrollRevealSection delay={0}>
        <HeroBody />
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
    </main>
  )
}