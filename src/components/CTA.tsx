import { Users, Store, Briefcase } from 'lucide-react'

type Props = { className?: string }

const opportunities = [
  {
    icon: Users,
    title: 'Become an Agent',
    details: 'Register businesses and service providers and earn attractive commission.',
    action: 'Join as Agent',
    tone: 'agent',
  },
  {
    icon: Store,
    title: 'Become a Vendor',
    details: 'List your products, reach more customers and grow your business.',
    action: 'Join as Vendor',
    tone: 'vendor',
  },
  {
    icon: Briefcase,
    title: 'Become a Service Provider',
    details: 'Offer your services, get booked and grow your professional reputation.',
    action: 'Join as Provider',
    tone: 'provider',
  },
]

export default function EarningOpportunitiesSection({ className }: Props) {
  return (
    <section className={`section-three ${className ?? ''}`.trim()}>
      <p className="section-three__eyebrow">Earn with ServeNaija</p>
      <h2 className="section-three__title">Multiple Ways to Earn. Unlimited Opportunities.</h2>

      <div className="section-three__cards">
        {opportunities.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.title}
              className={`section-three__card section-three__card--${item.tone}`}
            >
              <span className="section-three__icon" aria-hidden="true">
                <Icon size={28} strokeWidth={2} />
              </span>
              <div className="section-three__content">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <a href="#">{item.action}</a>
              </div>
            </article>
          )
        })}   
      </div>
    </section>
  )
}