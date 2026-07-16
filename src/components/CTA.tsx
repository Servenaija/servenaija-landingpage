import React from 'react'
import './CTA.css'
import DownloadButton from './DownloadButton'
import phoneImg from '../../sample.jpeg'

const CTA: React.FC = () => {
  return (
    <section className="cta-band dark-cta">
      <div className="container cta-inner">
        <div className="cta-left">
          <h3>Take ServeNaija Everywhere</h3>
          <p>Get the app and connect with customers, professionals and businesses near you.</p>
          <div className="cta-badges">
            <img src="/google-play-badge.svg" alt="Google Play" style={{height:40}} />
            <img src="/app-store-badge.svg" alt="App Store" style={{height:40}} />
          </div>
        </div>

        <div className="cta-right">
          <div className="phone-preview">
            <img src={phoneImg} alt="phone preview" />
          </div>
          <div className="download-now">
            <DownloadButton>Download Now!</DownloadButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
