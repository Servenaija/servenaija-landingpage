import { useEffect } from 'react'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  appStoreUrl?: string
  googlePlayUrl?: string
}

const DEFAULT_TITLE = "ServeNaija - Africa's Trusted Digital Marketplace"
const DEFAULT_DESCRIPTION =
  "ServeNaija connects people, businesses, services and opportunities across Nigeria. Shop products, book verified professionals, and grow your business."
const SITE_URL = 'https://servenaija.com'

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = `${SITE_URL}/og-image.png`,
  ogType = 'website',
  appStoreUrl,
  googlePlayUrl,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    const fullTitle = title ? `${title} | ServeNaija` : DEFAULT_TITLE
    document.title = fullTitle

    // Update or create meta tags
    updateMetaTag('description', description || DEFAULT_DESCRIPTION)
    updateMetaTag('keywords', keywords || '')

    // Update Open Graph tags
    updateMetaProperty('og:title', fullTitle)
    updateMetaProperty('og:description', description || DEFAULT_DESCRIPTION)
    updateMetaProperty('og:image', ogImage)
    updateMetaProperty('og:type', ogType)
    updateMetaProperty('og:url', canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL)

    // Update Twitter tags
    updateMetaName('twitter:title', fullTitle)
    updateMetaName('twitter:description', description || DEFAULT_DESCRIPTION)
    updateMetaName('twitter:image', ogImage)

    // Update canonical URL
    if (canonicalUrl) {
      updateCanonicalUrl(`${SITE_URL}${canonicalUrl}`)
    }

    // App store smart banner meta tags
    if (appStoreUrl) {
      const appId = appStoreUrl.match(/id(\d+)/)?.[1]
      if (appId) {
        updateMetaName(
          'apple-itunes-app',
          `app-id=${appId}, app-argument=${SITE_URL}`
        )
      }
    }
    if (googlePlayUrl) {
      const packageName = googlePlayUrl.match(/id=([^&]+)/)?.[1]
      if (packageName) {
        updateMetaName('google-play-app', `app-id=${packageName}`)
      }
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, appStoreUrl, googlePlayUrl])

  return null
}

function updateMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!content) return
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!content) return
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateMetaName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!content) return
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateCanonicalUrl(url: string) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', url)
}