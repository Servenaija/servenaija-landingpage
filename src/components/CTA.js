import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Users, Store, Briefcase } from 'lucide-react';
const opportunities = [
    {
        icon: Users,
        title: 'Become an Agent',
        details: 'Register businesses and service providers and earn attractive commission.',
        action: 'Join as Agent',
        to: '/agents',
        tone: 'agent',
    },
    {
        icon: Store,
        title: 'Become a Vendor',
        details: 'List your products, reach more customers and grow your business.',
        action: 'Join as Vendor',
        to: '/marketplace',
        tone: 'vendor',
    },
    {
        icon: Briefcase,
        title: 'Become a Service Provider',
        details: 'Offer your services, get booked and grow your professional reputation.',
        action: 'Join as Provider',
        to: '/services',
        tone: 'provider',
    },
];
export default function EarningOpportunitiesSection({ className }) {
    return (_jsxs("section", { className: `section-three ${className ?? ''}`.trim(), children: [_jsx("p", { className: "section-three__eyebrow", children: "Earn with ServeNaija" }), _jsx("h2", { className: "section-three__title", children: "Multiple Ways to Earn. Unlimited Opportunities." }), _jsx("div", { className: "section-three__cards", children: opportunities.map((item) => {
                    const Icon = item.icon;
                    return (_jsxs("article", { className: `section-three__card section-three__card--${item.tone}`, children: [_jsx("span", { className: "section-three__icon", "aria-hidden": "true", children: _jsx(Icon, { size: 28, strokeWidth: 2 }) }), _jsxs("div", { className: "section-three__content", children: [_jsx("h3", { children: item.title }), _jsx("p", { children: item.details }), _jsx(Link, { to: item.to, children: item.action })] })] }, item.title));
                }) })] }));
}
