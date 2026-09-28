import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useDownloadApp } from '../context/useDownloadApp';
import { FacebookIcon, XIcon, TikTokIcon, YouTubeIcon, TelegramIcon, WhatsAppIcon } from './SocialIcons';
import footerMan from '../assets/footer.png';
import logoImage from '../assets/logo.png';
import wordmarkImage from '../assets/serveNaija-text.png';
const faqs = [
    {
        question: 'How do I register on ServeNaija?',
        answer: 'Download the ServeNaija app from Google Play or App Store, sign up with your email or phone number, and choose whether you are joining as a customer, service provider, or business. Complete your profile and start exploring services or listing your business.',
    },
    {
        question: 'How are businesses verified?',
        answer: 'Businesses are reviewed through submitted documents, identity checks and profile quality standards before verification is granted.',
    },
    {
        question: 'Is payment on ServeNaija secure?',
        answer: 'Yes, transactions are handled through secure channels with clear payment tracking and support for dispute resolution.',
    },
    {
        question: 'Can I become an agent?',
        answer: 'Yes. You can apply as an agent, complete onboarding and begin earning from verified referrals and marketplace activities.',
    },
    {
        question: 'How much does registration cost?',
        answer: 'Basic registration is free, while advanced listing or promotional features may have optional paid plans.',
    },
];
const marketplaceLinks = [
    { label: 'Products', to: '/marketplace' },
    { label: 'Services', to: '/services' },
    { label: 'Businesses', to: '/businesses' },
    { label: 'Professionals', to: '/services' },
    { label: 'Categories', to: '/marketplace' },
];
const companyLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Leadership', to: '/about' },
    { label: 'Careers', to: '/about' },
    { label: 'News & Media', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
];
const supportLinks = [
    { label: 'Help Center', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Delete Account', to: '/delete-account' },
    { label: 'FAQ', to: '/contact' },
    { label: 'Safety Center', to: '/contact' },
];
export default function FaqAndSiteFooterSection({ className }) {
    const [activeFaq, setActiveFaq] = useState(null);
    const { openDownloadApp } = useDownloadApp();
    const openStoreModal = (event) => {
        event.preventDefault();
        openDownloadApp();
    };
    return (_jsxs("section", { className: `section-five ${className ?? ''}`.trim(), children: [_jsx("p", { className: "section-five__eyebrow", children: "Frequently asked questions" }), _jsx("div", { className: "section-five__faq-row", role: "tablist", "aria-label": "Frequently asked questions", children: faqs.map((faq, index) => {
                    const isOpen = activeFaq === index;
                    const answerId = `section-five-faq-answer-${index}`;
                    const isFeatured = index === 0;
                    return (_jsxs("article", { className: `section-five__faq-card ${isOpen ? 'is-open' : ''}`.trim(), children: [_jsxs("button", { type: "button", className: "section-five__faq-item", onClick: () => setActiveFaq((current) => (current === index ? null : index)), "aria-expanded": isOpen, "aria-controls": answerId, children: [_jsxs("span", { className: "section-five__faq-text", children: [_jsx("span", { className: "section-five__faq-question", children: faq.question }), isFeatured ? _jsx("span", { className: "section-five__faq-tag", children: "Popular" }) : null] }), _jsx("span", { className: "section-five__faq-icon", "aria-hidden": "true", children: isOpen ? '−' : '+' })] }), isOpen ? (_jsx("p", { id: answerId, className: "section-five__faq-answer", children: faq.answer })) : null] }, faq.question));
                }) }), _jsxs("div", { className: "section-five__cta-band", children: [_jsxs("div", { className: "section-five__cta-copy", children: [_jsx("h2", { children: "Ready to Grow with ServeNaija?" }), _jsx("p", { children: "Whether you're buying, selling, hiring or growing your business, ServeNaija connects you with opportunities." })] }), _jsxs("div", { className: "section-five__cta-actions", children: [_jsx("a", { href: "#", className: "section-five__cta-btn section-five__cta-btn--accent", onClick: openStoreModal, children: "Download App" }), _jsx(Link, { to: "/businesses", className: "section-five__cta-btn section-five__cta-btn--light", children: "Register Your Business" })] }), _jsx("img", { src: footerMan, alt: "Happy ServeNaija customer", className: "section-five__cta-image" })] }), _jsxs("footer", { className: "section-five__footer", children: [_jsxs("div", { className: "section-five__brand-block", children: [_jsxs(Link, { to: "/", className: "section-five__brand", "aria-label": "ServeNaija home", children: [_jsx("img", { src: logoImage, alt: "", "aria-hidden": "true", className: "section-five__brand-logo" }), _jsx("img", { src: wordmarkImage, alt: "ServeNaija", className: "section-five__brand-wordmark" })] }), _jsx("p", { children: "Africa's trusted digital marketplace connecting people, businesses, services and opportunities." }), _jsxs("div", { className: "section-five__socials", "aria-label": "Social media links", children: [_jsx("a", { href: "https://www.facebook.com/share/1BWRL4ZQHa/", "aria-label": "Facebook", children: _jsx(FacebookIcon, {}) }), _jsx("a", { href: "https://x.com/Serve_Naija", "aria-label": "X (Twitter)", children: _jsx(XIcon, {}) }), _jsx("a", { href: "https://tiktok.com/@servenaija", "aria-label": "TikTok", children: _jsx(TikTokIcon, {}) }), _jsx("a", { href: "https://youtube.com/@servenaija?si=4Y8P0XeGNqJlbQI0", "aria-label": "YouTube", children: _jsx(YouTubeIcon, {}) }), _jsx("a", { href: "https://t.me/+vgGXTkUpPy1jMTY0", "aria-label": "Telegram", children: _jsx(TelegramIcon, {}) }), _jsx("a", { href: "https://whatsapp.com/channel/0029VbBRH0160eBZRLMBy51c", "aria-label": "WhatsApp", children: _jsx(WhatsAppIcon, {}) }), _jsx("a", { href: "mailto:support@servenaija.com", "aria-label": "Email", children: _jsx(Mail, { size: 14, strokeWidth: 2.4 }) })] })] }), _jsxs("nav", { className: "section-five__links-block", "aria-label": "Marketplace links", children: [_jsx("h3", { children: "Marketplace" }), _jsx("ul", { children: marketplaceLinks.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.to, children: link.label }) }, link.label))) })] }), _jsxs("nav", { className: "section-five__links-block", "aria-label": "Company links", children: [_jsx("h3", { children: "Company" }), _jsx("ul", { children: companyLinks.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.to, children: link.label }) }, link.label))) })] }), _jsxs("nav", { className: "section-five__links-block", "aria-label": "Support links", children: [_jsx("h3", { children: "Support" }), _jsx("ul", { children: supportLinks.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.to, children: link.label }) }, link.label))) })] }), _jsxs("div", { className: "section-five__download-block", children: [_jsx("h3", { children: "Download app" }), _jsx("a", { href: "#", className: "section-five__store-badge", onClick: openStoreModal, children: "Google Play" }), _jsx("a", { href: "#", className: "section-five__store-badge", onClick: openStoreModal, children: "App Store" })] })] }), _jsx("p", { className: "section-five__copyright", children: "\u00A9 2026 ServeNaija Marketplace Limited. All Rights Reserved." })] }));
}
