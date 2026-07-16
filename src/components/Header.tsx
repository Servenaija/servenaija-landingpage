import React from 'react'
import './Header.css'
import DownloadButton from './DownloadButton'

const Header: React.FC = () => {
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

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#categories">Marketplace</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <DownloadButton className="small" />
          <button className="btn sign-in">Sign In</button>
        </div>
      </div>
    </header>
  )
}

export default Header
