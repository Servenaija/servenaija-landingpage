import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useDownloadApp } from '../context/useDownloadApp';
import { api } from '../lib/api';
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.png';
import logo from '../assets/logo.png';
const perks = [
    { icon: '🛡️', text: 'Verified businesses & professionals' },
    { icon: '🔒', text: 'Secure in-app payments & escrow' },
    { icon: '⚡', text: 'Instant confirmations & live tracking' },
];
function preventNavigation(event) {
    event.preventDefault();
}
export default function DownloadAppModal() {
    const { isOpen, contextLabel, closeDownloadApp } = useDownloadApp();
    const closeButtonRef = useRef(null);
    useEffect(() => {
        if (!isOpen)
            return;
        // Best-effort conversion tracking — the backend records the interest.
        api.trackLead('download_intent', contextLabel);
    }, [isOpen, contextLabel]);
    useEffect(() => {
        if (!isOpen)
            return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape')
                closeDownloadApp();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeDownloadApp]);
    if (!isOpen)
        return null;
    const phoneItem = contextLabel ?? 'Home Cleaning';
    return (_jsx("div", { className: "dl-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "dl-modal-title", onClick: closeDownloadApp, children: _jsxs("div", { className: "dl-modal__card", onClick: (event) => event.stopPropagation(), children: [_jsx("button", { ref: closeButtonRef, type: "button", className: "dl-modal__close", "aria-label": "Close dialog", onClick: closeDownloadApp, children: "\u00D7" }), _jsxs("div", { className: "dl-modal__content", children: [_jsx("p", { className: "dl-modal__eyebrow", children: "ServeNaija Mobile" }), _jsx("h2", { className: "dl-modal__title", id: "dl-modal-title", children: "Almost there!" }), _jsxs("p", { className: "dl-modal__text", children: ["You\u2019re one tap away from ", _jsx("strong", { children: contextLabel ?? 'completing your booking' }), ". Bookings, orders and sign-ups happen instantly inside the ServeNaija app."] }), _jsx("ul", { className: "dl-modal__perks", children: perks.map((perk) => (_jsxs("li", { children: [_jsx("span", { className: "dl-modal__perk-icon", "aria-hidden": "true", children: perk.icon }), perk.text] }, perk.text))) }), _jsxs("div", { className: "dl-modal__stores", children: [_jsxs("a", { className: "store-btn", href: "#", onClick: preventNavigation, children: [_jsx("span", { className: "store-btn__icon", children: _jsx("img", { src: googlePlay, alt: "", "aria-hidden": "true" }) }), _jsxs("span", { className: "store-btn__text", children: [_jsx("strong", { children: "Get it on" }), _jsx("span", { children: "Google Play" })] })] }), _jsxs("a", { className: "store-btn", href: "#", onClick: preventNavigation, children: [_jsx("span", { className: "store-btn__icon", children: _jsx("img", { src: appStore, alt: "", "aria-hidden": "true" }) }), _jsxs("span", { className: "store-btn__text", children: [_jsx("strong", { children: "Download on the" }), _jsx("span", { children: "App Store" })] })] })] }), _jsx("p", { className: "dl-modal__hint", children: "Free download \u00B7 Android & iOS \u00B7 \u2605 4.8 from 12k+ reviews" })] }), _jsxs("div", { className: "dl-modal__visual", "aria-hidden": "true", children: [_jsxs("div", { className: "dl-phone", children: [_jsx("span", { className: "dl-phone__notch" }), _jsxs("div", { className: "dl-phone__bar", children: [_jsx("img", { src: logo, alt: "" }), _jsx("span", { children: "ServeNaija" }), _jsx("i", { className: "dl-phone__bell", children: "\uD83D\uDD14" })] }), _jsxs("div", { className: "dl-phone__body", children: [_jsx("p", { className: "dl-phone__location", children: "\uD83D\uDCCD Lagos, Nigeria" }), _jsxs("div", { className: "dl-phone__card", children: [_jsx("span", { className: "dl-phone__check", children: "\u2713" }), _jsx("p", { className: "dl-phone__status", children: "Booking confirmed" }), _jsx("p", { className: "dl-phone__item", children: phoneItem }), _jsx("p", { className: "dl-phone__meta", children: "Today \u00B7 2:00 PM \u00B7 \u20A68,500" }), _jsx("span", { className: "dl-phone__track", children: "Track your booking \u2192" })] })] })] }), _jsx("span", { className: "dl-modal__chip dl-modal__chip--1", children: "\uD83D\uDEE1\uFE0F Verified pros" }), _jsx("span", { className: "dl-modal__chip dl-modal__chip--2", children: "\u26A1 Instant booking" })] })] }) }));
}
