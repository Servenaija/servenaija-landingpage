import { Link } from 'react-router-dom'
import { LeadershipTestimonialsSection, SEO } from '../components'
import { useDownloadApp } from '../context/useDownloadApp'
import missionImage from '../assets/showroom.png'

const stats = [
  { value: '25k+', label: 'Active listings' },
  { value: '3,400+', label: 'Verified businesses' },
  { value: '12k+', label: 'Pros & agents' },
  { value: '36 + FCT', label: 'States covered' },
]

const timeline = [
  { year: '2026', text: 'ServeNaija is founded in Lagos with one goal: make trusted help one tap away.' },
  { year: 'Launching', text: 'Marketplace and Services go live with the first wave of verified professionals.' },
  { year: 'Growing', text: 'The ServeNaija Agent network opens, bringing earning opportunities to every state.' },
  { year: 'Scaling', text: 'Thousands of listings, pros and agents across Nigeria — and we’re just getting started.' },
]

const values = [
  { emoji: '🛡️', title: 'Trust first', text: 'Every pro, vendor and agent is ID-verified before they serve you.' },
  { emoji: '💚', title: 'People power', text: 'We exist to move money and opportunity into everyday Nigerian hands.' },
  { emoji: '⭐', title: 'Excellence', text: 'Ratings, escrow and guarantees keep quality high on every job.' },
  { emoji: '💡', title: 'Innovation', text: 'One app for services, shopping and earning — built for how Nigeria works.' },
]

export default function AboutPage() {
  const { openDownloadApp } = useDownloadApp()

  return (
    <main className="page">
      <SEO
        title="About Us"
        description="Learn about ServeNaija — Africa's trusted digital marketplace. Our mission, values, and journey connecting people, businesses, services and opportunities across Nigeria."
        keywords="about ServeNaija, company story, mission, values, Nigeria marketplace, leadership team"
        canonicalUrl="/about"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">💚 About ServeNaija</p>
            <h1 className="page-hero__title">Connecting Nigeria, <span>one service at a time</span></h1>
            <p className="page-hero__text">
              We’re building the platform where Nigerians find trusted help, discover local
              businesses and earn — all in one app.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner ab-story">
          <div className="ab-story__media" aria-hidden="true">
            <img src={missionImage} alt="" className="page-hero__image" />
          </div>
          <div>
            <div className="section-head section-head--left">
              <p className="section-eyebrow">Our story</p>
              <h2 className="section-title">Empowering people. Connecting opportunities.</h2>
            </div>
            <p className="ab-story__text">
              ServeNaija started with a simple frustration: finding a reliable artisan, vendor
              or helper in Nigeria took too many calls, too many risks and too much luck. So we
              built the trusted layer — verified profiles, secure in-app payments and real
              reviews — and put it in one app.
            </p>
            <blockquote className="ab-quote">
              “Whether you need a plumber at midnight, fresh produce for your shop, or a new
              way to earn — ServeNaija is the bridge between hustle and help.”
            </blockquote>
            <ul className="ab-timeline">
              {timeline.map((item) => (
                <li key={item.year}>
                  <span className="ab-timeline__year">{item.year}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight" aria-label="ServeNaija in numbers">
        <div className="page-section__inner">
          <ul className="stat-band">
            {stats.map((stat) => (
              <li key={stat.label} className="stat-band__item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">What we stand for</p>
            <h2 className="section-title">Our values</h2>
          </div>
          <div className="ab-values">
            {values.map((value) => (
              <article key={value.title} className="ag-perk-card">
                <span className="ag-perk-card__emoji" aria-hidden="true">{value.emoji}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadershipTestimonialsSection />

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <div className="page-cta">
            <div className="page-cta__copy">
              <h2>Join the movement</h2>
              <p>Book a service, shop local or start earning — be part of the ServeNaija story.</p>
            </div>
            <div className="page-cta__actions">
              <Link className="btn btn--light" to="/contact">Get in touch</Link>
              <button
                type="button"
                className="btn btn--outline-light"
                onClick={() => openDownloadApp('downloading the ServeNaija app')}
              >
                Download the app
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}