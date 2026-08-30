import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadApp } from '../context/useDownloadApp'
import { api } from '../lib/api'
import { SEO } from '../components'
import type { Product } from '../types'
import appUsersImage from '../assets/middle2.png'

const categories = ['All', 'Fashion', 'Groceries', 'Electronics', 'Home & Living', 'Beauty']

const trustStats = [
  { value: '25k+', label: 'Products listed' },
  { value: '3,400+', label: 'Verified sellers' },
  { value: '36', label: 'States covered' },
  { value: '4.8★', label: 'Buyer rating' },
]

const orderSteps = [
  { title: 'Pick your product', text: 'Browse verified sellers and add what you love to your cart.' },
  { title: 'Pay securely in-app', text: 'Card, transfer or USSD — your money stays in escrow until delivery.' },
  { title: 'Track to your doorstep', text: 'Follow your order live and confirm delivery to release payment.' },
]

export default function MarketplacePage() {
  const { openDownloadApp } = useDownloadApp()
  const [activeCategory, setActiveCategory] = useState('All')
  const [products, setProducts] = useState<Product[] | null>(null)
  const [loadError, setLoadError] = useState(false)

  const loadProducts = useCallback((category: string) => {
    api
      .getProducts(category)
      .then((list) => {
        setProducts(list)
        setLoadError(false)
      })
      .catch(() => setLoadError(true))
  }, [])

  useEffect(() => {
    void loadProducts(activeCategory)
  }, [activeCategory, loadProducts])

  const visibleProducts = products ?? []

  const scrollToProducts = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('marketplace-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="page">
      <SEO
        title="Marketplace"
        description="Shop trusted vendors for fashion, groceries, electronics and more. Escrow-protected payments and doorstep delivery anywhere in Nigeria."
        keywords="Nigeria marketplace, buy online Nigeria, fashion, groceries, electronics, home appliances, escrow payment"
        canonicalUrl="/marketplace"
      />
      <section className="page-hero">
        <div className="page-hero__inner page-hero__inner--split">
          <div className="page-hero__copy">
            <p className="page-eyebrow">🛍️ ServeNaija Marketplace</p>
            <h1 className="page-hero__title">Everything you need, <span>one marketplace</span></h1>
            <p className="page-hero__text">
              Shop trusted vendors for fashion, groceries, electronics and more — with
              escrow-protected payments and doorstep delivery anywhere in Nigeria.
            </p>
            <div className="page-hero__actions">
              <a className="btn btn--primary" href="#marketplace-grid" onClick={scrollToProducts}>
                Start shopping
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => openDownloadApp('shopping on ServeNaija')}
              >
                Get the app
              </button>
            </div>
          </div>
          <div className="page-hero__media" aria-hidden="true">
            <img src={appUsersImage} alt="" className="page-hero__image" />
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight" aria-label="Marketplace at a glance">
        <div className="page-section__inner">
          <ul className="stat-band">
            {trustStats.map((stat) => (
              <li key={stat.label} className="stat-band__item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section" id="marketplace-grid">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">Shop by category</p>
            <h2 className="section-title">Fresh picks from verified sellers</h2>
            <p className="section-sub">
              Every seller is ID-verified and every order is protected until delivery is confirmed.
            </p>
          </div>

          <div className="chip-row" role="tablist" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`chip ${activeCategory === category ? 'is-active' : ''}`.trim()}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {loadError ? (
            <div className="mk-state">
              <strong>We couldn’t load products just now.</strong>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => loadProducts(activeCategory)}
              >
                Try again
              </button>
            </div>
          ) : null}
          {!loadError && products === null ? <p className="mk-state">Loading fresh picks…</p> : null}
          {!loadError && products !== null && (
            <div className="mk-grid">
            {visibleProducts.map((product) => (
              <article key={product.id} className="mk-card">
                <div className="mk-card__media" style={{ background: product.gradient }}>
                  {product.emoji?.startsWith('http') ? (
                    <img src={product.emoji} alt={product.name} className="mk-card__image" />
                  ) : (
                    <span aria-hidden="true">{product.emoji}</span>
                  )}
                  {product.badge && <span className="mk-card__badge">{product.badge}</span>}
                </div>
                <div className="mk-card__body">
                  <p className="mk-card__category">{product.category}</p>
                  <h3 className="mk-card__name">{product.name}</h3>
                  <div className="mk-card__seller">
                    <span className="avatar" aria-hidden="true">{product.seller.slice(0, 1)}</span>
                    <span>{product.seller} · {product.location}</span>
                  </div>
                  <div className="mk-card__foot">
                    <p className="mk-card__price">
                      {product.price}
                      {product.oldPrice && <s>{product.oldPrice}</s>}
                    </p>
                    <span className="mk-card__rating">★ {product.rating}</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn--primary btn--block"
                    onClick={() => openDownloadApp(`ordering “${product.name}”`)}
                  >
                    Order now
                  </button>
                </div>
              </article>
            ))}
            </div>
          )}
          {products !== null && !loadError && visibleProducts.length === 0 && (
            <p className="mk-empty">No products in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">How ordering works</p>
            <h2 className="section-title">From tap to doorstep in three steps</h2>
          </div>
          <ol className="steps-grid">
            {orderSteps.map((step, index) => (
              <li key={step.title} className="step-card">
                <span className="step-card__num" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <div className="page-cta">
            <div className="page-cta__copy">
              <h2>Own a shop? Sell to thousands on ServeNaija</h2>
              <p>List your products free and start receiving orders from buyers near you today.</p>
            </div>
            <div className="page-cta__actions">
              <button
                type="button"
                className="btn btn--light"
                onClick={() => openDownloadApp('listing your products on ServeNaija')}
              >
                Become a seller
              </button>
              <Link className="btn btn--outline-light" to="/businesses">
                See verified businesses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}