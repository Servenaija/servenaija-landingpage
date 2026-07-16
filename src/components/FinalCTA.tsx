import React from 'react'
import './FinalCTA.css'
import DownloadButton from './DownloadButton'
import phoneImg from '../../sample.jpeg'

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <div className="final-left">
          <h2>Ready to Grow with ServeNaija?</h2>
          <p>Whether you’re buying, selling, hiring or growing your business, ServeNaija connects you with opportunities.</p>
          <div className="final-actions">
            <DownloadButton>Download App</DownloadButton>
            <button className="btn outline">Register Your Business</button>
          </div>
        </div>
        <div className="final-right">
          <div className="phone-hero"><img src={phoneImg} alt="phone"/></div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
