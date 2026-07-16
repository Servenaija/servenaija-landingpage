import React from 'react'
import './EarnWays.css'

const cards = [
  {title: 'Become an Agent', desc: 'Register and earn commissions for leads and sales.'},
  {title: 'Become a Vendor', desc: 'Sell your products to customers across Nigeria.'},
  {title: 'Become a Service Provider', desc: 'Offer services and grow your professional profile.'}
]

const EarnWays: React.FC = () => {
  return (
    <section className="earn-section">
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Multiple Ways to Earn. Unlimited Opportunities.</h2>
        <div className="earn-grid">
          {cards.map((c) => (
            <div className="earn-card" key={c.title}>
              <div className="earn-icon">📈</div>
              <div className="earn-title">{c.title}</div>
              <div className="earn-desc">{c.desc}</div>
              <button className="btn outline">Join now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarnWays
