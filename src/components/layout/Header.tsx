import { useState } from 'react'
import logoImage from '../../assets/logo.png'
import { Outlet } from 'react-router-dom'
import wordmarkImage from '../../assets/serveNaija-text.png'
type Props = { className?: string }

export default function Navbar({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className={`top-nav ${className ?? ''}`.trim()} aria-label="Main navigation">
        <a href="#" className="top-nav__brand" aria-label="ServeNaija home" onClick={closeMenu}>
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
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#" onClick={closeMenu}>Marketplace</a></li>
            <li><a href="#" onClick={closeMenu}>Services</a></li>
            <li><a href="#" onClick={closeMenu}>Businesses</a></li>
            <li><a href="#" onClick={closeMenu}>Agents</a></li>
            <li><a href="#" onClick={closeMenu}>About Us</a></li>
            <li><a href="#" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="top-nav__actions">
            <a href="#" className="top-nav__download" onClick={closeMenu}>Download App</a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}