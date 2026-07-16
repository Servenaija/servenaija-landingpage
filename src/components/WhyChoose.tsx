import React from 'react'
import './WhyChoose.css'
import phoneImg from '../../sample.jpeg'

const WhyChoose: React.FC = () => {
  return (
    <section className="why-section">
      <div className="container why-inner">
        <div className="why-left">
          <h2>Empowering People. Connecting Opportunities.</h2>
          <p className="why-lead">One platform for products and services, verified businesses, secure payments, and nationwide access across Nigeria.</p>
          <ul className="why-list">
            <li>Verified businesses and professionals.</li>
            <li>Secure and transparent transactions.</li>
            <li>Multiple income opportunities for sellers and providers.</li>
            <li>Built for Africa — focused on local needs.</li>
          </ul>
        </div>

        <div className="why-right">
          <div className="stats-card">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-num">1M+</div>
                <div className="stat-label">Future Customers</div>
              </div>
              <div className="stat">
                <div className="stat-num">100K+</div>
                <div className="stat-label">Businesses</div>
              </div>
              <div className="stat">
                <div className="stat-num">50K+</div>
                <div className="stat-label">Professionals</div>
              </div>
              <div className="stat">
                <div className="stat-num">36</div>
                <div className="stat-label">States Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
