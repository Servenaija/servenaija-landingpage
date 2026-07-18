import showroomImage from '../assets/showroom.png'

type Props = { className?: string }

export default function HeroBody({ className }: Props) {
  return (
    <header className={`hero-header ${className ?? ''}`.trim()}>
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

          {/* Store buttons with real badge images */}
          <div className="hero-header__store-buttons" aria-label="Download links">
            <a href="#" aria-label="Get it on Google Play" style={{ textDecoration: 'none' }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                style={{ height: 52 }}
              />
            </a>
            <a href="#" aria-label="Download on the App Store" style={{ textDecoration: 'none' }}>
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store"
                style={{ height: 52 }}
              />
            </a>
          </div>

          <a href="#" className="hero-header__cta">
            Become a Business
            <span className="hero-header__cta-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" role="presentation">
                <path fill="currentColor" d="M3 8a.75.75 0 0 1 .75-.75h6.44L8.47 5.53a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H3.75A.75.75 0 0 1 3 8z" />
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