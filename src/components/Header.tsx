import { useState } from 'react'
import logoImage from '../assets/logo.png'
import wordmarkImage from '../assets/serveNaija-text.png'
import showroomImage from '../assets/showroom.png'

type Props = { className?: string }

export default function HeroSection({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`hero-header ${className ?? ''}`.trim()}>
      <nav className="top-nav" aria-label="Main navigation">
        <a
          href="#"
          className="top-nav__brand"
          aria-label="ServeNaija home"
          onClick={closeMenu}
        >
          <img src={logoImage} alt="" aria-hidden="true" className="top-nav__logo" />
          <img src={wordmarkImage} alt="ServeNaija" className="top-nav__wordmark" />
        </a>

        <button
          type="button"
          className="top-nav__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="top-nav__toggle-line" aria-hidden="true"></span>
          <span className="top-nav__toggle-line" aria-hidden="true"></span>
          <span className="top-nav__toggle-line" aria-hidden="true"></span>
        </button>

        <div
          id="main-nav-menu"
          className={`top-nav__menu ${isMenuOpen ? 'is-open' : ''}`.trim()}
        >
          <ul className="top-nav__links">
            <li>
              <a href="#" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Businesses
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Agents
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="top-nav__actions">
            <a href="#" className="top-nav__download" onClick={closeMenu}>
              Download App
            </a>
            <a href="#" className="top-nav__signin" onClick={closeMenu}>
              Sign In
            </a>
          </div>
        </div>
      </nav>

      <div className="hero-header__body">
        <div className="hero-header__content">
          <p className="hero-header__eyebrow">Nigeria's all-in-one marketplace</p>
          <h1>
            Africa&apos;s Trusted <span>Digital Marketplace</span> for Products,
            Services &amp; Opportunities
          </h1>
          <p className="hero-header__description">
            Discover verified businesses, hire trusted professionals, and shop
            quality products all from one secure platform.
          </p>

          <div className="hero-header__store-buttons" aria-label="Download links">
            <a href="#" className="store-btn" aria-label="Get it on Google Play">
              <span className="store-btn__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    fill="currentColor"
                    d="M3.5 2.8l10.4 10.4-10.4 10V2.8zm12 11.9l2.8 2.8c.7-.4 1.3-.8 2-1.2 1.5-.9 1.5-2.4 0-3.3-.7-.4-1.3-.8-2-1.2l-2.8 2.9zm-1.3-1.3l-2.6-2.6 4.4-2.6 1.8 1.1-3.6 4.1zm0 1.7l3.6 4.1-1.8 1.1-4.4-2.6 2.6-2.6z"
                  />
                </svg>
              </span>
              <span className="store-btn__text">
                <strong>Get it on</strong>
                <span>Google Play</span>
              </span>
            </a>
            <a
              href="#"
              className="store-btn"
              aria-label="Download on the App Store"
            >
              <span className="store-btn__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    fill="currentColor"
                    d="M16.5 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.6-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2-.7 1.2-1.4 3.4-.6 5.5.4 1 1.6 3.3 2.9 3.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 2-1.1 2.4-2.1.5-1.2.7-1.9.7-2-.1 0-2.3-.9-2.3-2.9zm-2.2-6c.4-.5.8-1.3.7-2.1-.6 0-1.4.4-1.8.9-.4.4-.8 1.2-.7 2 .7.1 1.4-.3 1.8-.8z"
                  />
                </svg>
              </span>
              <span className="store-btn__text">
                <strong>Download on the</strong>
                <span>App Store</span>
              </span>
            </a>
          </div>

          <a href="#" className="hero-header__cta">
            Become a Business
            <span className="hero-header__cta-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" role="presentation">
                <path
                  fill="currentColor"
                  d="M3 8a.75.75 0 0 1 .75-.75h6.44L8.47 5.53a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H3.75A.75.75 0 0 1 3 8z"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="hero-header__visual">
          <img
            src={showroomImage}
            alt="ServeNaija marketplace app preview"
            className="hero-header__image"
          />
        </div>
      </div>
    </header>
  )
}
