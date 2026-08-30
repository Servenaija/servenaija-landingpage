import { useCallback, useEffect, useRef, useState } from 'react'
import { useDownloadApp } from '../context/useDownloadApp'
import { api } from '../lib/api'
import { CategoriesModal, SEO } from '../components'
import type { Provider, ServiceCategory } from '../types'

const MAX_VISIBLE_CATEGORIES = 6
const PAGE_SIZE = 20

type ProviderPage = { providers: Provider[]; total: number; pages: number; page: number }

const bookingSteps = [
  { title: 'Choose a service', text: 'Tell us what you need and when you need it done.' },
  { title: 'Pick a verified pro', text: 'Compare ratings, rates and response times side by side.' },
  { title: 'Relax, we handle the rest', text: 'Pay in-app, track the job live and rate when it’s done.' },
]

export default function ServicesPage() {
  const { openDownloadApp } = useDownloadApp()
  const [categories, setCategories] = useState<ServiceCategory[] | null>(null)
  const [categoriesError, setCategoriesError] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [providerPage, setProviderPage] = useState<ProviderPage | null>(null)
  const [providersLoading, setProvidersLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [providersError, setProvidersError] = useState(false)
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false)

  // Per-category provider cache so switching back doesn't refetch
  const cacheRef = useRef<Map<string, ProviderPage>>(new Map())
  // Guards against out-of-order responses when switching categories quickly
  const requestRef = useRef(0)

  const fetchProviders = useCallback((category: string, page: number, append: boolean) => {
    const cached = !append ? cacheRef.current.get(category) : undefined
    if (cached) {
      setProviderPage(cached)
      setProvidersError(false)
      return
    }
    const requestId = ++requestRef.current
    if (append) {
      setLoadingMore(true)
    } else {
      setProvidersLoading(true)
      setProvidersError(false)
    }
    api
      .getProvidersByCategory(category, page, PAGE_SIZE)
      .then((data) => {
        if (requestRef.current !== requestId) return // stale response, ignore
        setProviderPage((current) => {
          const merged: ProviderPage = append && current
            ? {
                providers: [...current.providers, ...data.providers],
                total: data.total,
                pages: data.pages,
                page: data.page,
              }
            : data
          cacheRef.current.set(category, merged)
          return merged
        })
      })
      .catch(() => {
        if (requestRef.current === requestId) setProvidersError(true)
      })
      .finally(() => {
        if (requestRef.current === requestId) {
          setProvidersLoading(false)
          setLoadingMore(false)
        }
      })
  }, [])

  // Load categories once (single request — no per-category flooding)
  const loadCategories = useCallback(() => {
    setCategoriesError(false)
    api
      .getCategories()
      .then((cats) => {
        setCategories(cats)
        // Auto-select the first category so the page isn't empty
        setSelectedCategory((current) => current ?? cats[0]?.name ?? null)
      })
      .catch(() => setCategoriesError(true))
  }, [])

  useEffect(() => {
    void loadCategories()
  }, [loadCategories])

  // Fetch providers only when a category is selected (20 per page)
  useEffect(() => {
    if (!selectedCategory) {
      requestRef.current++
      setProviderPage(null)
      setProvidersError(false)
      setProvidersLoading(false)
      return
    }
    fetchProviders(selectedCategory, 0, false)
  }, [selectedCategory, fetchProviders])

  const serviceCategories = categories ?? []
  const providerData = selectedCategory ? providerPage : null
  const providers = providerData?.providers ?? []

  // Show only first 6 categories on the page
  const visibleCategories = serviceCategories.slice(0, MAX_VISIBLE_CATEGORIES)
  const hiddenCategories = serviceCategories.slice(MAX_VISIBLE_CATEGORIES)
  const hasMoreCategories = hiddenCategories.length > 0

  const hasMoreProviders =
    providerData != null && providerData.page + 1 < providerData.pages

  const handleLoadMore = () => {
    if (!selectedCategory || !providerData) return
    fetchProviders(selectedCategory, providerData.page + 1, true)
  }

  const retryProviders = () => {
    if (!selectedCategory) return
    cacheRef.current.delete(selectedCategory)
    fetchProviders(selectedCategory, 0, false)
  }

  const toggleCategory = (name: string) =>
    setSelectedCategory((current) => (current === name ? null : name))

  const handleSelectFromModal = (name: string) => {
    setSelectedCategory(name)
    document.getElementById('services-providers')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProviders = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('services-providers')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="page">
      <SEO
        title="Book Services"
        description="Book trusted professionals near you. From plumbers to electricians, cleaners to beauticians — compare verified pros, see upfront prices and book in minutes."
        keywords="book services Nigeria, verified professionals, plumbers, electricians, cleaners, beauticians, home services"
        canonicalUrl="/services"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">🧰 ServeNaija Services</p>
            <h1 className="page-hero__title">Book trusted professionals <span>near you</span></h1>
            <p className="page-hero__text">
              From plumbers to electricians, cleaners to beauticians — compare verified pros,
              see upfront prices and book in minutes. Backed by the ServeNaija Guarantee.
            </p>
            <div className="page-hero__actions">
              <a className="btn btn--primary" href="#services-providers" onClick={scrollToProviders}>
                Browse services
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => openDownloadApp('booking a service')}
              >
                Get the app
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" aria-label="Service categories">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">Popular categories</p>
            <h2 className="section-title">What do you need done today?</h2>
            <p className="section-sub">Tap a category to see available professionals.</p>
          </div>
          {categoriesError ? (
            <div className="mk-state">
              <strong>We couldn’t load services just now.</strong>
              <button type="button" className="btn btn--ghost btn--sm" onClick={loadCategories}>
                Try again
              </button>
            </div>
          ) : categories === null ? (
            <p className="mk-state">Loading services…</p>
          ) : serviceCategories.length === 0 ? (
            <div className="mk-state">
              <strong>No services available yet.</strong>
              <p>Check back soon — we’re onboarding pros across Nigeria.</p>
            </div>
          ) : (
            <>
              <div className="sv-cat-grid">
              {visibleCategories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.name}
                    type="button"
                    className={`sv-cat-card ${selectedCategory === category.name ? 'is-active' : ''}`.trim()}
                    aria-pressed={selectedCategory === category.name}
                    onClick={() => toggleCategory(category.name)}
                  >
                    <span className="sv-cat-card__emoji" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </span>
                    <h3>{category.name}</h3>
                    {category.pros && <p>{category.pros}</p>}
                    {category.from && (
                      <span className="sv-cat-card__from">from {category.from}</span>
                    )}
                  </button>
                )
              })}
              </div>

              {hasMoreCategories && (
                <div className="sv-cat-more">
                  <button
                    type="button"
                    className="btn btn--ghost sv-cat-more__btn"
                    onClick={() => setIsCategoriesModalOpen(true)}
                  >
                    View all {serviceCategories.length} categories
                    <span aria-hidden="true"> →</span>
                  </button>
                  <p className="sv-cat-more__hint">
                    +{hiddenCategories.length} more categories available
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="page-section page-section--alt" id="services-providers">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">
              {selectedCategory ? `Showing: ${selectedCategory}` : 'Top-rated near you'}
            </p>
            <h2 className="section-title">Meet some of our professionals</h2>
            <p className="section-sub">
              {selectedCategory ? (
                <button type="button" className="chip" onClick={() => setSelectedCategory(null)}>
                  ✕ Clear filter
                </button>
              ) : (
                'Ratings from real, verified customers across Nigeria.'
              )}
            </p>
          </div>

          {providersLoading ? (
            <p className="mk-state">Loading professionals…</p>
          ) : providersError ? (
            <div className="mk-state">
              <strong>We couldn’t load professionals just now.</strong>
              <button type="button" className="btn btn--ghost btn--sm" onClick={retryProviders}>
                Try again
              </button>
            </div>
          ) : providers.length === 0 ? (
            <p className="mk-empty">No pros listed in this category yet — try another one.</p>
          ) : (
            <>
              <div className="sv-grid">
                {providers.map((provider) => (
                  <article key={provider.id} className="sv-pro-card">
                    <div className="sv-pro-card__head">
                      <span className="avatar avatar--lg" aria-hidden="true">{provider.initials}</span>
                      <div>
                        <h3>{provider.name}</h3>
                        <p className="sv-pro-card__trade">{provider.trade}</p>
                      </div>
                    </div>
                    <p className="sv-pro-card__rating">
                      <span><strong>★ {provider.rating}</strong> rating</span>
                      <span>{provider.jobs} reviews</span>
                      <span>📍 {provider.location}</span>
                    </p>
                    <div className="sv-pro-card__tags">
                      {provider.tags.map((tag) => (
                        <span key={tag.label} className={`sv-tag ${tag.tone === 'gold' ? 'sv-tag--gold' : ''}`.trim()}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="sv-pro-card__foot">
                      <span className="sv-pro-card__rate">{provider.rate}</span>
                      <button
                        type="button"
                        className="btn btn--primary btn--sm"
                        onClick={() => openDownloadApp(`booking ${provider.trade.toLowerCase()} with ${provider.name}`)}
                      >
                        Book now
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              {hasMoreProviders && (
                <div className="sv-load-more">
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                  >
                    {loadingMore
                      ? 'Loading…'
                      : `Load more professionals (${providers.length} of ${providerData?.total ?? 0})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <div className="section-head">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title">Booking is this easy</h2>
          </div>
          <ol className="steps-grid">
            {bookingSteps.map((step, index) => (
              <li key={step.title} className="step-card">
                <span className="step-card__num" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="sv-guarantee">
            <span className="sv-guarantee__icon" aria-hidden="true">🛡️</span>
            <div>
              <h3>Every booking is backed by the ServeNaija Guarantee</h3>
              <p>Pros are ID-checked, prices are locked upfront and payments stay in escrow until the job is done right.</p>
            </div>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => openDownloadApp('booking with the ServeNaija Guarantee')}
            >
              Book with confidence
            </button>
          </div>
        </div>
      </section>

      <CategoriesModal
        isOpen={isCategoriesModalOpen}
        categories={hiddenCategories}
        onClose={() => setIsCategoriesModalOpen(false)}
        onSelectCategory={handleSelectFromModal}
      />
    </main>
  )
}