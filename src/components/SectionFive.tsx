import { useState } from 'react'
import footerMan from '../assets/footer.png'
import logoImage from '../assets/logo.png'
import wordmarkImage from '../assets/serveNaija-text.png'

type Props = { className?: string }

const faqs = [
  {
    question: 'How do I register on ServeNaija?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae massa id libero feugiat tincidunt, sed elementum dui suscipit. Mauris commodo nunc a lorem congue, non gravida nibh interdum.',
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
  'Products',
  'Services',
  'Businesses',
  'Professionals',
  'Categories',
]

const companyLinks = [
  'About Us',
  'Leadership',
  'Careers',
  'News & Media',
  'Contact Us',
]

const supportLinks = [
  'Help Center',
  'Privacy Policy',
  'Terms of Service',
  'FAQ',
  'Safety Center',
]

export default function FaqAndSiteFooterSection({ className }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

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
          <a href="#" className="section-five__cta-btn section-five__cta-btn--accent">
            Download App
          </a>
          <a href="#" className="section-five__cta-btn section-five__cta-btn--light">
            Register Your Business
          </a>
        </div>

        <img src={footerMan} alt="Happy ServeNaija customer" className="section-five__cta-image" />
      </div>

      <footer className="section-five__footer">
        <div className="section-five__brand-block">
          <a href="#" className="section-five__brand" aria-label="ServeNaija home">
            <img src={logoImage} alt="" aria-hidden="true" className="section-five__brand-logo" />
            <img src={wordmarkImage} alt="ServeNaija" className="section-five__brand-wordmark" />
          </a>
          <p>
            Africa&apos;s trusted digital marketplace connecting people, businesses,
            services and opportunities.
          </p>
          <div className="section-five__socials" aria-label="Social media links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="Email">@</a>
          </div>
        </div>

        <nav className="section-five__links-block" aria-label="Marketplace links">
          <h3>Marketplace</h3>
          <ul>
            {marketplaceLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="section-five__links-block" aria-label="Company links">
          <h3>Company</h3>
          <ul>
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="section-five__links-block" aria-label="Support links">
          <h3>Support</h3>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="section-five__download-block">
          <h3>Download app</h3>
          <a href="#" className="section-five__store-badge">Google Play</a>
          <a href="#" className="section-five__store-badge">App Store</a>
        </div>
      </footer>

      <p className="section-five__copyright">
        © 2026 ServeNaija Marketplace Limited. All Rights Reserved.
      </p>
    </section>
  )
}
