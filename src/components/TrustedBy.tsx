import React from 'react'
import './TrustedBy.css'

const logos = ['Dangote', 'Airtel', 'UBA', 'GTBank', 'Zenith']

const TrustedBy: React.FC = () => {
  return (
    <section className="trusted">
      <div className="container">
        <div className="trusted-inner">
          <div className="trusted-line">Trusted by thousands of businesses and professionals</div>
          <div className="logos">
            {logos.map((l) => (
              <div key={l} className="logo-item">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
