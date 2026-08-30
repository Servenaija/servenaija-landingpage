import { useEffect, useRef } from 'react'
import { useDownloadApp } from '../context/useDownloadApp'
import { api } from '../lib/api'
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'
import logo from '../assets/logo.png'

const perks = [
  { icon: '🛡️', text: 'Verified businesses & professionals' },
  { icon: '🔒', text: 'Secure in-app payments & escrow' },
  { icon: '⚡', text: 'Instant confirmations & live tracking' },
]

function preventNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function DownloadAppModal() {
  const { isOpen, contextLabel, closeDownloadApp } = useDownloadApp()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Best-effort conversion tracking — the backend records the interest.
    api.trackLead('download_intent', contextLabel)
  }, [isOpen, contextLabel])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDownloadApp()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeDownloadApp])

  if (!isOpen) return null

  const phoneItem = contextLabel ?? 'Home Cleaning'

  return (
    <div
      className="dl-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dl-modal-title"
      onClick={closeDownloadApp}
    >
      <div className="dl-modal__card" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="dl-modal__close"
          aria-label="Close dialog"
          onClick={closeDownloadApp}
        >
          ×
        </button>

        <div className="dl-modal__content">
          <p className="dl-modal__eyebrow">ServeNaija Mobile</p>
          <h2 className="dl-modal__title" id="dl-modal-title">Almost there!</h2>
          <p className="dl-modal__text">
            You’re one tap away from <strong>{contextLabel ?? 'completing your booking'}</strong>.
            Bookings, orders and sign-ups happen instantly inside the ServeNaija app.
          </p>

          <ul className="dl-modal__perks">
            {perks.map((perk) => (
              <li key={perk.text}>
                <span className="dl-modal__perk-icon" aria-hidden="true">{perk.icon}</span>
                {perk.text}
              </li>
            ))}
          </ul>

          <div className="dl-modal__stores">
            <a className="store-btn" href="#" onClick={preventNavigation}>
              <span className="store-btn__icon">
                <img src={googlePlay} alt="" aria-hidden="true" />
              </span>
              <span className="store-btn__text">
                <strong>Get it on</strong>
                <span>Google Play</span>
              </span>
            </a>
            <a className="store-btn" href="#" onClick={preventNavigation}>
              <span className="store-btn__icon">
                <img src={appStore} alt="" aria-hidden="true" />
              </span>
              <span className="store-btn__text">
                <strong>Download on the</strong>
                <span>App Store</span>
              </span>
            </a>
          </div>

          <p className="dl-modal__hint">Free download · Android &amp; iOS · ★ 4.8 from 12k+ reviews</p>
        </div>

        <div className="dl-modal__visual" aria-hidden="true">
          <div className="dl-phone">
            <span className="dl-phone__notch" />
            <div className="dl-phone__bar">
              <img src={logo} alt="" />
              <span>ServeNaija</span>
              <i className="dl-phone__bell">🔔</i>
            </div>
            <div className="dl-phone__body">
              <p className="dl-phone__location">📍 Lagos, Nigeria</p>
              <div className="dl-phone__card">
                <span className="dl-phone__check">✓</span>
                <p className="dl-phone__status">Booking confirmed</p>
                <p className="dl-phone__item">{phoneItem}</p>
                <p className="dl-phone__meta">Today · 2:00 PM · ₦8,500</p>
                <span className="dl-phone__track">Track your booking →</span>
              </div>
            </div>
          </div>
          <span className="dl-modal__chip dl-modal__chip--1">🛡️ Verified pros</span>
          <span className="dl-modal__chip dl-modal__chip--2">⚡ Instant booking</span>
        </div>
      </div>
    </div>
  )
}