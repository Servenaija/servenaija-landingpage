import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadApp } from '../context/useDownloadApp'
import { api } from '../lib/api'
import { SEO } from '../components'
import type { Business } from '../types'
import promoImage from '../assets/showroom.png'

const featuredPerks = [
  'Get a verified badge customers trust instantly',
  'Reach thousands of nearby customers in the app',
  'Receive orders and bookings with secure payouts',
  'Track views, orders and growth with free insights',
]

export default function BusinessesPage() {
  const { openDownloadApp } = useDownloadApp()
  const [activeFilter, setActiveFilter] = useState('All')
  const [businesses, setBusinesses] = useState<Business[] | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [loadError, setLoadError] = useState(false)

  const loadBusinesses = useCallback(() => {
    api
      .getBusinesses()
      .then((list) => {
        setBusinesses(list)
        setLoadError(false)
        const uniqueCategories = Array.from(
          new Set(list.map((b) => b.category).filter((c): c is string => Boolean(c))),
        )
        setCategories(uniqueCategories)
      })
      .catch(() => setLoadError(true))
  }, [])

  useEffect(() => {
    void loadBusinesses()
  }, [loadBusinesses])

  const visibleBusinesses = (businesses ?? []).filter(
    (business) => activeFilter === 'All' || business.category === activeFilter,
  )

  return (
    <main className="page">
      <SEO
        title="Verified Businesses"
        description="Discover verified local businesses across Nigeria. From kitchens to pharmacies, find trusted businesses around you — check opening hours, read reviews and contact them directly."
        keywords="Nigeria business directory, verified businesses, local businesses, shops near me, business listings Nigeria"
        canonicalUrl="/businesses"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">🏪 ServeNaija Businesses</p>
            <h1 className="page-hero__title">Discover verified <span>local businesses</span></h1>
            <p className="page-hero__text">
              From kitchens to pharmacies, find trusted businesses around you — check opening
              hours, read reviews and contact them directly in the app.
            </p>
            <div className="page-hero__actions">
              <a className="btn btn--primary" href="#businesses-grid" onClick={(event) => { event.preventDefault(); document.getElementById('businesses-grid')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Explore businesses
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => openDownloadApp('exploring local businesses')}
              >
                Get the app
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="businesses-grid">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">Around you</p>
            <h2 className="section-title">Businesses you can trust</h2>
            <p className="section-sub">Filter by category to find what you need nearby.</p>
          </div>

          <div className="chip-row" role="tablist" aria-label="Filter businesses by category">
            <button
              key="All"
              type="button"
              role="tab"
              aria-selected={activeFilter === 'All'}
              className={`chip ${activeFilter === 'All' ? 'is-active' : ''}`.trim()}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            {categories.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`chip ${activeFilter === filter ? 'is-active' : ''}`.trim()}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {loadError ? (
            <div className="mk-state">
              <strong>We couldn’t load businesses just now.</strong>
              <button type="button" className="btn btn--ghost btn--sm" onClick={loadBusinesses}>
                Try again
              </button>
            </div>
          ) : businesses === null ? (
            <p className="mk-state">Loading businesses…</p>
          ) : (
            <div className="bz-grid">
            {visibleBusinesses.map((business) => (
              <article key={business.id} className="bz-card">
                <div className="bz-card__cover" style={{ background: business.gradient }}>
                  {business.emoji?.startsWith('http') ? (
                    <img src={business.emoji} alt={business.name} className="bz-card__image" />
                  ) : (
                    <span aria-hidden="true">{business.emoji}</span>
                  )}
                  <span className={`bz-card__status ${business.isOpen ? '' : 'bz-card__status--closed'}`.trim()}>
                    {business.isOpen ? 'Open now' : 'Closed'}
                  </span>
                </div>
                <div className="bz-card__body">
                  <h3>{business.name}</h3>
                  <p className="bz-card__meta">{business.category} · 📍 {business.location}</p>
                  <p className="bz-card__rating">★ {business.rating} <span>({business.reviews} reviews)</span></p>
                  <div className="bz-card__tags">
                    {business.tags.map((tag) => (
                      <span key={tag} className="sv-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="bz-card__actions">
                    <button
                      type="button"
                      className="btn btn--primary btn--sm"
                      onClick={() => openDownloadApp(`contacting ${business.name}`)}
                    >
                      Contact business
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost btn--sm"
                      onClick={() => openDownloadApp(`viewing ${business.name}’s profile`)}
                    >
                      View profile
                    </button>
                  </div>
                </div>
              </article>
            ))}
            </div>
          )}
          {businesses !== null && !loadError && visibleBusinesses.length === 0 && (
            <p className="mk-empty">No businesses in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="page-section__inner bz-featured">
          <div className="bz-featured__copy">
            <div className="section-head section-head--left">
              <p className="section-eyebrow">For business owners</p>
              <h2 className="section-title">Run a business? Get verified on ServeNaija</h2>
            </div>
            <ul className="check-list">
              {featuredPerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <div className="page-hero__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => openDownloadApp('listing your business on ServeNaija')}
              >
                List your business
              </button>
              <Link className="btn btn--ghost" to="/contact">Talk to our team</Link>
            </div>
          </div>
          <div className="bz-featured__media" aria-hidden="true">
            <img src={promoImage} alt="" className="page-hero__image" />
          </div>
        </div>
      </section>
    </main>
  )
}