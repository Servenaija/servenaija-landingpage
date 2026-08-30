import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import middleTwoImage from '../assets/middle2.png';
import { Users, Building2, UserCog, MapPin, } from 'lucide-react';
const benefits = [
    'One platform for products and services.',
    'Verified businesses and professionals.',
    'Secure and transparent transactions.',
    'Nationwide access across Nigeria.',
    'Multiple income opportunities.',
    'Built for Africa, focused on you.',
];
const stats = [
    { icon: Users, value: '1M+', label: 'Future Customers' },
    { icon: Building2, value: '100K+', label: 'Businesses' },
    { icon: UserCog, value: '50K+', label: 'Professionals' },
    { icon: MapPin, value: '36', label: 'States Coverage' },
];
const steps = [
    { number: '1', title: 'Search', details: 'Find products or professionals.' },
    { number: '2', title: 'Compare', details: 'Choose from verified businesses.' },
    { number: '3', title: 'Book or Buy', details: 'Make secure payments.' },
    { number: '4', title: 'Receive', details: 'Get your products or services.' },
];
export default function WhyChooseSection({ className }) {
    return (_jsxs("section", { className: `section-two ${className ?? ''}`.trim(), children: [_jsxs("div", { className: "section-two__top", children: [_jsxs("div", { className: "section-two__info", children: [_jsx("div", { className: "section-two__visual", children: _jsx("img", { src: middleTwoImage, alt: "ServeNaija marketplace preview", className: "section-two__visual-image" }) }), _jsxs("div", { className: "section-two__copy", children: [_jsx("p", { className: "section-two__eyebrow", children: "Why choose ServeNaija?" }), _jsxs("h2", { children: ["Empowering People. ", _jsx("span", { children: "Connecting Opportunities." })] }), _jsx("ul", { children: benefits.map((benefit) => (_jsx("li", { children: benefit }, benefit))) })] })] }), _jsx("div", { className: "section-two__stats", "aria-label": "Marketplace stats", children: stats.map((item) => {
                            const Icon = item.icon;
                            return (_jsxs("article", { className: "section-two__stat-card", children: [_jsx("span", { className: "section-two__stat-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 20, strokeWidth: 2 }) }), _jsx("p", { className: "section-two__stat-value", children: item.value }), _jsx("p", { className: "section-two__stat-label", children: item.label })] }, item.label));
                        }) })] }), _jsx("div", { className: "section-two__steps", "aria-label": "How it works", children: steps.map((step, index) => (_jsxs("article", { className: "section-two__step", children: [_jsx("span", { className: "section-two__step-number", children: step.number }), _jsxs("div", { className: "section-two__step-body", children: [_jsx("h3", { children: step.title }), _jsx("p", { children: step.details })] }), index < steps.length - 1 ? (_jsx("span", { className: "section-two__step-arrow", "aria-hidden": "true", children: _jsx("svg", { viewBox: "0 0 16 16", role: "presentation", children: _jsx("path", { fill: "currentColor", d: "M3 8a.75.75 0 0 1 .75-.75h6.44L8.47 5.53a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H3.75A.75.75 0 0 1 3 8z" }) }) })) : null] }, step.number))) })] }));
}
