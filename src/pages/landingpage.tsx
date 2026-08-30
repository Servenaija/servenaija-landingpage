import {
  MarketplaceCategoriesSection,
  WhyChooseSection,
  EarningOpportunitiesSection,
  LeadershipTestimonialsSection,
  FaqAndSiteFooterSection,
  ScrollRevealSection,
  SEO,
} from '../components'
import HeroBody from '../components/showroom'

export default function LandingPage() {
  return (
    <main className="landing-page">
      <SEO
        title="Home"
        description="ServeNaija - Africa's trusted digital marketplace. Shop products, book verified professionals, and grow your business. Connecting people, businesses, services and opportunities across Nigeria."
        keywords="ServeNaija, Nigeria marketplace, buy and sell, book services, verified professionals, African marketplace, online shopping Nigeria"
        canonicalUrl="/"
      />

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