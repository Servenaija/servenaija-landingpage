import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDownloadApp } from '../context/useDownloadApp';
import { api } from '../lib/api';
import { CategoriesModal, SEO } from '../components';
const MAX_VISIBLE_CATEGORIES = 6;
const PAGE_SIZE = 20;
const bookingSteps = [
    { title: 'Choose a service', text: 'Tell us what you need and when you need it done.' },
    { title: 'Pick a verified pro', text: 'Compare ratings, rates and response times side by side.' },
    { title: 'Relax, we handle the rest', text: 'Pay in-app, track the job live and rate when it’s done.' },
];
export default function ServicesPage() {
    const { openDownloadApp } = useDownloadApp();
    const [categories, setCategories] = useState(null);
    const [categoriesError, setCategoriesError] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [providerPage, setProviderPage] = useState(null);
    const [providersLoading, setProvidersLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [providersError, setProvidersError] = useState(false);
    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
    // Per-category provider cache so switching back doesn't refetch
    const cacheRef = useRef(new Map());
    // Guards against out-of-order responses when switching categories quickly
    const requestRef = useRef(0);
    const fetchProviders = useCallback((category, page, append) => {
        const cached = !append ? cacheRef.current.get(category) : undefined;
        if (cached) {
            setProviderPage(cached);
            setProvidersError(false);
            return;
        }
        const requestId = ++requestRef.current;
        if (append) {
            setLoadingMore(true);
        }
        else {
            setProvidersLoading(true);
            setProvidersError(false);
        }
        api
            .getProvidersByCategory(category, page, PAGE_SIZE)
            .then((data) => {
            if (requestRef.current !== requestId)
                return; // stale response, ignore
            setProviderPage((current) => {
                const merged = append && current
                    ? {
                        providers: [...current.providers, ...data.providers],
                        total: data.total,
                        pages: data.pages,
                        page: data.page,
                    }
                    : data;
                cacheRef.current.set(category, merged);
                return merged;
            });
        })
            .catch(() => {
            if (requestRef.current === requestId)
                setProvidersError(true);
        })
            .finally(() => {
            if (requestRef.current === requestId) {
                setProvidersLoading(false);
                setLoadingMore(false);
            }
        });
    }, []);
    // Load categories once (single request — no per-category flooding)
    const loadCategories = useCallback(() => {
        setCategoriesError(false);
        api
            .getCategories()
            .then((cats) => {
            setCategories(cats);
            // Auto-select the first category so the page isn't empty
            setSelectedCategory((current) => current ?? cats[0]?.name ?? null);
        })
            .catch(() => setCategoriesError(true));
    }, []);
    useEffect(() => {
        void loadCategories();
    }, [loadCategories]);
    // Fetch providers only when a category is selected (20 per page)
    useEffect(() => {
        if (!selectedCategory) {
            requestRef.current++;
            setProviderPage(null);
            setProvidersError(false);
            setProvidersLoading(false);
            return;
        }
        fetchProviders(selectedCategory, 0, false);
    }, [selectedCategory, fetchProviders]);
    const serviceCategories = categories ?? [];
    const providerData = selectedCategory ? providerPage : null;
    const providers = providerData?.providers ?? [];
    // Show only first 6 categories on the page
    const visibleCategories = serviceCategories.slice(0, MAX_VISIBLE_CATEGORIES);
    const hiddenCategories = serviceCategories.slice(MAX_VISIBLE_CATEGORIES);
    const hasMoreCategories = hiddenCategories.length > 0;
    const hasMoreProviders = providerData != null && providerData.page + 1 < providerData.pages;
    const handleLoadMore = () => {
        if (!selectedCategory || !providerData)
            return;
        fetchProviders(selectedCategory, providerData.page + 1, true);
    };
    const retryProviders = () => {
        if (!selectedCategory)
            return;
        cacheRef.current.delete(selectedCategory);
        fetchProviders(selectedCategory, 0, false);
    };
    const toggleCategory = (name) => setSelectedCategory((current) => (current === name ? null : name));
    const handleSelectFromModal = (name) => {
        setSelectedCategory(name);
        document.getElementById('services-providers')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProviders = (event) => {
        event.preventDefault();
        document.getElementById('services-providers')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("main", { className: "page", children: [_jsx(SEO, { title: "Book Services", description: "Book trusted professionals near you. From plumbers to electricians, cleaners to beauticians \u2014 compare verified pros, see upfront prices and book in minutes.", keywords: "book services Nigeria, verified professionals, plumbers, electricians, cleaners, beauticians, home services", canonicalUrl: "/services" }), _jsx("section", { className: "page-hero page-hero--center", children: _jsx("div", { className: "page-hero__inner", children: _jsxs("div", { className: "page-hero__copy", children: [_jsx("p", { className: "page-eyebrow", children: "\uD83E\uDDF0 ServeNaija Services" }), _jsxs("h1", { className: "page-hero__title", children: ["Book trusted professionals ", _jsx("span", { children: "near you" })] }), _jsx("p", { className: "page-hero__text", children: "From plumbers to electricians, cleaners to beauticians \u2014 compare verified pros, see upfront prices and book in minutes. Backed by the ServeNaija Guarantee." }), _jsxs("div", { className: "page-hero__actions", children: [_jsx("a", { className: "btn btn--primary", href: "#services-providers", onClick: scrollToProviders, children: "Browse services" }), _jsx("button", { type: "button", className: "btn btn--ghost", onClick: () => openDownloadApp('booking a service'), children: "Get the app" })] })] }) }) }), _jsx("section", { className: "page-section", "aria-label": "Service categories", children: _jsxs("div", { className: "page-section__inner", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "section-eyebrow", children: "Popular categories" }), _jsx("h2", { className: "section-title", children: "What do you need done today?" }), _jsx("p", { className: "section-sub", children: "Tap a category to see available professionals." })] }), categoriesError ? (_jsxs("div", { className: "mk-state", children: [_jsx("strong", { children: "We couldn\u2019t load services just now." }), _jsx("button", { type: "button", className: "btn btn--ghost btn--sm", onClick: loadCategories, children: "Try again" })] })) : categories === null ? (_jsx("p", { className: "mk-state", children: "Loading services\u2026" })) : serviceCategories.length === 0 ? (_jsxs("div", { className: "mk-state", children: [_jsx("strong", { children: "No services available yet." }), _jsx("p", { children: "Check back soon \u2014 we\u2019re onboarding pros across Nigeria." })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "sv-cat-grid", children: visibleCategories.map((category) => {
                                        const Icon = category.icon;
                                        return (_jsxs("button", { type: "button", className: `sv-cat-card ${selectedCategory === category.name ? 'is-active' : ''}`.trim(), "aria-pressed": selectedCategory === category.name, onClick: () => toggleCategory(category.name), children: [_jsx("span", { className: "sv-cat-card__emoji", "aria-hidden": "true", children: _jsx(Icon, { size: 22, strokeWidth: 2.2 }) }), _jsx("h3", { children: category.name }), category.pros && _jsx("p", { children: category.pros }), category.from && (_jsxs("span", { className: "sv-cat-card__from", children: ["from ", category.from] }))] }, category.name));
                                    }) }), hasMoreCategories && (_jsxs("div", { className: "sv-cat-more", children: [_jsxs("button", { type: "button", className: "btn btn--ghost sv-cat-more__btn", onClick: () => setIsCategoriesModalOpen(true), children: ["View all ", serviceCategories.length, " categories", _jsx("span", { "aria-hidden": "true", children: " \u2192" })] }), _jsxs("p", { className: "sv-cat-more__hint", children: ["+", hiddenCategories.length, " more categories available"] })] }))] }))] }) }), _jsx("section", { className: "page-section page-section--alt", id: "services-providers", children: _jsxs("div", { className: "page-section__inner", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "section-eyebrow", children: selectedCategory ? `Showing: ${selectedCategory}` : 'Top-rated near you' }), _jsx("h2", { className: "section-title", children: "Meet some of our professionals" }), _jsx("p", { className: "section-sub", children: selectedCategory ? (_jsx("button", { type: "button", className: "chip", onClick: () => setSelectedCategory(null), children: "\u2715 Clear filter" })) : ('Ratings from real, verified customers across Nigeria.') })] }), providersLoading ? (_jsx("p", { className: "mk-state", children: "Loading professionals\u2026" })) : providersError ? (_jsxs("div", { className: "mk-state", children: [_jsx("strong", { children: "We couldn\u2019t load professionals just now." }), _jsx("button", { type: "button", className: "btn btn--ghost btn--sm", onClick: retryProviders, children: "Try again" })] })) : providers.length === 0 ? (_jsx("p", { className: "mk-empty", children: "No pros listed in this category yet \u2014 try another one." })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "sv-grid", children: providers.map((provider) => (_jsxs("article", { className: "sv-pro-card", children: [_jsxs("div", { className: "sv-pro-card__head", children: [_jsx("span", { className: "avatar avatar--lg", "aria-hidden": "true", children: provider.initials }), _jsxs("div", { children: [_jsx("h3", { children: provider.name }), _jsx("p", { className: "sv-pro-card__trade", children: provider.trade })] })] }), _jsxs("p", { className: "sv-pro-card__rating", children: [_jsxs("span", { children: [_jsxs("strong", { children: ["\u2605 ", provider.rating] }), " rating"] }), _jsxs("span", { children: [provider.jobs, " reviews"] }), _jsxs("span", { children: ["\uD83D\uDCCD ", provider.location] })] }), _jsx("div", { className: "sv-pro-card__tags", children: provider.tags.map((tag) => (_jsx("span", { className: `sv-tag ${tag.tone === 'gold' ? 'sv-tag--gold' : ''}`.trim(), children: tag.label }, tag.label))) }), _jsxs("div", { className: "sv-pro-card__foot", children: [_jsx("span", { className: "sv-pro-card__rate", children: provider.rate }), _jsx("button", { type: "button", className: "btn btn--primary btn--sm", onClick: () => openDownloadApp(`booking ${provider.trade.toLowerCase()} with ${provider.name}`), children: "Book now" })] })] }, provider.id))) }), hasMoreProviders && (_jsx("div", { className: "sv-load-more", children: _jsx("button", { type: "button", className: "btn btn--ghost", onClick: handleLoadMore, disabled: loadingMore, children: loadingMore
                                            ? 'Loading…'
                                            : `Load more professionals (${providers.length} of ${providerData?.total ?? 0})` }) }))] }))] }) }), _jsx("section", { className: "page-section", children: _jsxs("div", { className: "page-section__inner", children: [_jsxs("div", { className: "section-head", children: [_jsx("p", { className: "section-eyebrow", children: "How it works" }), _jsx("h2", { className: "section-title", children: "Booking is this easy" })] }), _jsx("ol", { className: "steps-grid", children: bookingSteps.map((step, index) => (_jsxs("li", { className: "step-card", children: [_jsx("span", { className: "step-card__num", "aria-hidden": "true", children: index + 1 }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.text })] }, step.title))) }), _jsxs("div", { className: "sv-guarantee", children: [_jsx("span", { className: "sv-guarantee__icon", "aria-hidden": "true", children: "\uD83D\uDEE1\uFE0F" }), _jsxs("div", { children: [_jsx("h3", { children: "Every booking is backed by the ServeNaija Guarantee" }), _jsx("p", { children: "Pros are ID-checked, prices are locked upfront and payments stay in escrow until the job is done right." })] }), _jsx("button", { type: "button", className: "btn btn--primary", onClick: () => openDownloadApp('booking with the ServeNaija Guarantee'), children: "Book with confidence" })] })] }) }), _jsx(CategoriesModal, { isOpen: isCategoriesModalOpen, categories: hiddenCategories, onClose: () => setIsCategoriesModalOpen(false), onSelectCategory: handleSelectFromModal })] }));
}
