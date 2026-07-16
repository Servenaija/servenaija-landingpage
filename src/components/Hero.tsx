import React from 'react'
import './Hero.css'
import phoneImg from '../../sample.jpeg'
import DownloadButton from './DownloadButton'

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="eyebrow">NIGERIA'S ALL-IN-ONE MARKETPLACE</div>
          <h1>
            Africa's Trusted
            <br />
            <span className="highlight">Digital Marketplace</span>
            <br />for Products, Services & Opportunities
          </h1>
          <p className="lede">
            Discover verified businesses, hire trusted professionals, shop quality products, and grow your business—all from one secure platform.
          </p>

          <div className="hero-ctas">
            <DownloadButton />
            <button className="btn outline">Become a Business</button>
          </div>

          <div className="store-links">
            <a className="store google" href="#">
              <span className="badge">Google Play</span>
            </a>
            <a className="store apple" href="#"> 
              <span className="badge">App Store</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone-wrap">
            <img src={phoneImg} alt="app preview" />
          </div>

          <div className="phone-decor">
            <div className="float-card verified">
              <div className="fc-icon">✓</div>
              <div className="fc-text"><strong>Verified</strong><br />Business</div>
            </div>

            <div className="float-card secure">
              <div className="fc-icon">🔒</div>
              <div className="fc-text"><strong>Secure</strong><br />Payments</div>
            </div>

            <div className="float-card trusted">
              <div className="fc-icon">⭐</div>
              <div className="fc-text"><strong>Trusted</strong><br />Professionals</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
