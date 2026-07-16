import React, { useState } from 'react'
import './Header.css'
import DownloadButton from './DownloadButton'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect width="20" height="16" x="2" y="4" rx="3" fill="var(--brand)" />
            <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand">ServeNaija</span>
        </div>

        <nav className={`nav ${open ? 'open' : ''}`} aria-hidden={!open}>
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setOpen(false)}>Marketplace</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <DownloadButton className="small" />
          <button className="btn sign-in">Sign In</button>
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="Open menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
    </header>
  )
}

export default Header
