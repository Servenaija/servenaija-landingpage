import middleTwoImage from '../assets/middle2.png'
import {
  Users,
  Building2,
  UserCog,
  MapPin,
} from 'lucide-react'

type Props = { className?: string }

const benefits = [
  'One platform for products and services.',
  'Verified businesses and professionals.',
  'Secure and transparent transactions.',
  'Nationwide access across Nigeria.',
  'Multiple income opportunities.',
  'Built for Africa, focused on you.',
]

const stats = [
  { icon: Users, value: '1M+', label: 'Future Customers' },
  { icon: Building2, value: '100K+', label: 'Businesses' },
  { icon: UserCog, value: '50K+', label: 'Professionals' },
  { icon: MapPin, value: '36', label: 'States Coverage' },
]

const steps = [
  { number: '1', title: 'Search', details: 'Find products or professionals.' },
  { number: '2', title: 'Compare', details: 'Choose from verified businesses.' },
  { number: '3', title: 'Book or Buy', details: 'Make secure payments.' },
  { number: '4', title: 'Receive', details: 'Get your products or services.' },
]

export default function WhyChooseSection({ className }: Props) {
  return (
    <section className={`section-two ${className ?? ''}`.trim()}>
      <div className="section-two__top">
        <div className="section-two__info">
          <div className="section-two__visual">
            <img
              src={middleTwoImage}
              alt="ServeNaija marketplace preview"
              className="section-two__visual-image"
            />
          </div>

          <div className="section-two__copy">
            <p className="section-two__eyebrow">Why choose ServeNaija?</p>
            <h2>
              Empowering People. <span>Connecting Opportunities.</span>
            </h2>

            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-two__stats" aria-label="Marketplace stats">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.label} className="section-two__stat-card">
                <span className="section-two__stat-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="section-two__stat-value">{item.value}</p>
                <p className="section-two__stat-label">{item.label}</p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="section-two__steps" aria-label="How it works">
        {steps.map((step, index) => (
          <article key={step.number} className="section-two__step">
            <span className="section-two__step-number">{step.number}</span>
            <div className="section-two__step-body">
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>

            {index < steps.length - 1 ? (
              <span className="section-two__step-arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" role="presentation">
                  <path
                    fill="currentColor"
                    d="M3 8a.75.75 0 0 1 .75-.75h6.44L8.47 5.53a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H3.75A.75.75 0 0 1 3 8z"
                  />
                </svg>
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
