import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useDownloadApp } from '../context/useDownloadApp'
import { FacebookIcon, XIcon, TikTokIcon, YouTubeIcon, TelegramIcon, WhatsAppIcon } from './SocialIcons'
import footerMan from '../assets/footer.png'
import logoImage from '../assets/logo.png'
import wordmarkImage from '../assets/serveNaija-text.png'

type Props = { className?: string }

const faqs = [
  {
    question: 'How do I register on ServeNaija?',
    answer:
      'Download the ServeNaija app from Google Play or App Store, sign up with your email or phone number, and choose whether you are joining as a customer, service provider, or business. Complete your profile and start exploring services or listing your business.',
  },
  {
    question: 'How are businesses verified?',
    answer:
      'Businesses are reviewed through submitted documents, identity checks and profile quality standards before verification is granted.',
  },
  {
    question: 'Is payment on ServeNaija secure?',
    answer:
      'Yes, transactions are handled through secure channels with clear payment tracking and support for dispute resolution.',
  },
  {
    question: 'Can I become an agent?',
    answer:
      'Yes. You can apply as an agent, complete onboarding and begin earning from verified referrals and marketplace activities.',
  },
  {
    question: 'How much does registration cost?',
    answer:
      'Basic registration is free, while advanced listing or promotional features may have optional paid plans.',
  },
]

const marketplaceLinks = [
  { label: 'Products', to: '/marketplace' },
  { label: 'Services', to: '/services' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'Professionals', to: '/services' },
  { label: 'Categories', to: '/marketplace' },
]

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Leadership', to: '/about' },
  { label: 'Careers', to: '/about' },
  { label: 'News & Media', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

const supportLinks = [
  { label: 'Help Center', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'FAQ', to: '/contact' },
  { label: 'Safety Center', to: '/contact' },
]

export default function FaqAndSiteFooterSection({ className }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const { openDownloadApp } = useDownloadApp()

  const openStoreModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    openDownloadApp()
  }

  return (
    <section className={`section-five ${className ?? ''}`.trim()}>
      <p className="section-five__eyebrow">Frequently asked questions</p>

      <div className="section-five__faq-row" role="tablist" aria-label="Frequently asked questions">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index
          const answerId = `section-five-faq-answer-${index}`
          const isFeatured = index === 0

          return (
            <article
              key={faq.question}
              className={`section-five__faq-card ${isOpen ? 'is-open' : ''}`.trim()}
            >
              <button
                type="button"
                className="section-five__faq-item"
                onClick={() => setActiveFaq((current) => (current === index ? null : index))}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="section-five__faq-text">
                  <span className="section-five__faq-question">{faq.question}</span>
                  {isFeatured ? <span className="section-five__faq-tag">Popular</span> : null}
                </span>
                <span className="section-five__faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen ? (
                <p id={answerId} className="section-five__faq-answer">
                  {faq.answer}
                </p>
              ) : null}
            </article>
          )
        })}
      </div>

      <div className="section-five__cta-band">
        <div className="section-five__cta-copy">
          <h2>Ready to Grow with ServeNaija?</h2>
          <p>
            Whether you&apos;re buying, selling, hiring or growing your business,
            ServeNaija connects you with opportunities.
          </p>
        </div>

        <div className="section-five__cta-actions">
          <a href="#" className="section-five__cta-btn section-five__cta-btn--accent" onClick={openStoreModal}>
            Download App
          </a>
          <Link to="/businesses" className="section-five__cta-btn section-five__cta-btn--light">
            Register Your Business
          </Link>
        </div>

        <img src={footerMan} alt="Happy ServeNaija customer" className="section-five__cta-image" />
      </div>

      <footer className="section-five__footer">
        <div className="section-five__brand-block">
          <Link to="/" className="section-five__brand" aria-label="ServeNaija home">
            <img src={logoImage} alt="" aria-hidden="true" className="section-five__brand-logo" />
            <img src={wordmarkImage} alt="ServeNaija" className="section-five__brand-wordmark" />
          </Link>
          <p>
            Africa&apos;s trusted digital marketplace connecting people, businesses,
            services and opportunities.
          </p>
          <div className="section-five__socials" aria-label="Social media links">
            <a href="https://www.facebook.com/share/1BWRL4ZQHa/" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://x.com/Serve_Naija" aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="https://tiktok.com/@servenaija" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://youtube.com/@servenaija?si=4Y8P0XeGNqJlbQI0" aria-label="YouTube">
              <YouTubeIcon />
            </a>
            <a href="https://t.me/+vgGXTkUpPy1jMTY0" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="https://whatsapp.com/channel/0029VbBRH0160eBZRLMBy51c" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="mailto:support@servenaija.com" aria-label="Email">
              <Mail size={14} strokeWidth={2.4} />
            </a>
          </div>
        </div>

        <nav className="section-five__links-block" aria-label="Marketplace links">
          <h3>Marketplace</h3>
          <ul>
            {marketplaceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="section-five__links-block" aria-label="Company links">
          <h3>Company</h3>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="section-five__links-block" aria-label="Support links">
          <h3>Support</h3>
          <ul>
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="section-five__download-block">
          <h3>Download app</h3>
          <a href="#" className="section-five__store-badge" onClick={openStoreModal}>Google Play</a>
          <a href="#" className="section-five__store-badge" onClick={openStoreModal}>App Store</a>
        </div>
      </footer>

      <p className="section-five__copyright">
        © 2026 ServeNaija Marketplace Limited. All Rights Reserved.
      </p>
    </section>
  )
}
