import { useState } from 'react'
import logoImage from '../../assets/logo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import wordmarkImage from '../../assets/serveNaija-text.png'
import { useDownloadApp } from '../../context/useDownloadApp'

type Props = { className?: string }

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Marketplace', to: '/marketplace', end: false },
  { label: 'Services', to: '/services', end: false },
  { label: 'Businesses', to: '/businesses', end: false },
  { label: 'Agents', to: '/agents', end: false },
  { label: 'About Us', to: '/about', end: false },
  { label: 'Contact', to: '/contact', end: false },
]

const legalItems = [
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Delete Account', to: '/delete-account' },
]

export default function Navbar({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const { openDownloadApp } = useDownloadApp()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? 'is-active' : ''}`.trim()

  return (
    <>
      <nav className={`top-nav ${className ?? ''}`.trim()} aria-label="Main navigation">
        <Link to="/" className="top-nav__brand" aria-label="ServeNaija home" onClick={closeMenu}>
          <img src={logoImage} alt="" aria-hidden="true" className="top-nav__logo" />
          <img src={wordmarkImage} alt="ServeNaija" className="top-nav__wordmark" />
        </Link>

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
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={navLinkClass} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Legal links in mobile menu */}
            {legalItems.map((item) => (
              <li className="top-nav__mobile-legal" key={item.to}>
                <Link to={item.to} onClick={closeMenu}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Buttons for desktop */}
          <div className="top-nav__actions">
            <Link to="/terms" className="top-nav__signin" onClick={closeMenu}>Terms</Link>
            <Link to="/refund-policy" className="top-nav__signin" onClick={closeMenu}>Refunds</Link>
            <Link to="/privacy" className="top-nav__signin" onClick={closeMenu}>Privacy</Link>
            <button
              type="button"
              className="top-nav__download"
              onClick={() => { closeMenu(); openDownloadApp() }}
            >
              Download App
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}