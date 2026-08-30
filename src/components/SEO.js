import { useEffect } from 'react';
const DEFAULT_TITLE = "ServeNaija - Africa's Trusted Digital Marketplace";
const DEFAULT_DESCRIPTION = "ServeNaija connects people, businesses, services and opportunities across Nigeria. Shop products, book verified professionals, and grow your business.";
const SITE_URL = 'https://servenaija.com';
export default function SEO({ title, description, keywords, canonicalUrl, ogImage = `${SITE_URL}/og-image.png`, ogType = 'website', }) {
    useEffect(() => {
        // Update document title
        const fullTitle = title ? `${title} | ServeNaija` : DEFAULT_TITLE;
        document.title = fullTitle;
        // Update or create meta tags
        updateMetaTag('description', description || DEFAULT_DESCRIPTION);
        updateMetaTag('keywords', keywords || '');
        // Update Open Graph tags
        updateMetaProperty('og:title', fullTitle);
        updateMetaProperty('og:description', description || DEFAULT_DESCRIPTION);
        updateMetaProperty('og:image', ogImage);
        updateMetaProperty('og:type', ogType);
        updateMetaProperty('og:url', canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL);
        // Update Twitter tags
        updateMetaName('twitter:title', fullTitle);
        updateMetaName('twitter:description', description || DEFAULT_DESCRIPTION);
        updateMetaName('twitter:image', ogImage);
        // Update canonical URL
        if (canonicalUrl) {
            updateCanonicalUrl(`${SITE_URL}${canonicalUrl}`);
        }
    }, [title, description, keywords, canonicalUrl, ogImage, ogType]);
    return null;
}
function updateMetaTag(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!content)
        return;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}
function updateMetaProperty(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!content)
        return;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}
function updateMetaName(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!content)
        return;
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}
function updateCanonicalUrl(url) {
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'canonical');
        document.head.appendChild(tag);
    }
    tag.setAttribute('href', url);
}
