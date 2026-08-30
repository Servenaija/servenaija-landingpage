import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShoppingCart, Briefcase, Wrench, Monitor, GraduationCap, Truck, HeartPulse, Home, Sprout, Music, Landmark, Luggage, } from 'lucide-react';
// const trustedBrands = [
//   'Dangote',
//   'MTN',
//   'FirstBank',
//   'Airtel',
//   'UBA',
//   'Jumia',
//   'Konga',
//   'DHL',
//   'Access',
//   'Interswitch',
// ]
const categories = [
    { icon: ShoppingCart, title: 'E-Commerce Marketplace', details: 'Electronics, Fashion, Groceries, Home Appliances, Furniture' },
    { icon: Briefcase, title: 'Professional Services', details: 'Lawyers, Accountants, Consultants, Architects, Engineers' },
    { icon: Wrench, title: 'Home Services', details: 'Plumbers, Electricians, Carpenters, Painters, Cleaners' },
    { icon: Monitor, title: 'Digital Services', details: 'Web Development, Design, Marketing, SEO, Content, Video Editing' },
    { icon: GraduationCap, title: 'Education Services', details: 'Tutors, Training Institutes, ICT, Vocational Training, Coaching' },
    { icon: Truck, title: 'Transportation Services', details: 'Logistics, Delivery, Courier, Car Hire, Bus Booking, Moving' },
    { icon: HeartPulse, title: 'Health Services', details: 'Hospitals, Clinics, Pharmacies, Diagnostics, Home Care' },
    { icon: Home, title: 'Real Estate Services', details: 'Property Sales, Rentals, Estate Agents, Facility Management' },
    { icon: Sprout, title: 'Agriculture Marketplace', details: 'Farm Produce, Livestock, Equipment, Fertilizers, Consultancy' },
    { icon: Music, title: 'Events & Entertainment', details: 'MCs, DJs, Decorators, Photographers, Caterers, Event Planning' },
    { icon: Landmark, title: 'Financial Services', details: 'Loan Consultants, Insurance, Investment, Cooperatives, Advisers' },
    { icon: Luggage, title: 'Tourism & Hospitality', details: 'Hotels, Resorts, Travel Agencies, Tour Operators, Vacation Rentals' },
];
export default function MarketplaceCategoriesSection({ className }) {
    return (_jsxs("section", { className: `section-one ${className ?? ''}`.trim(), children: [_jsx("p", { className: "section-one__trusted-title", children: "Trusted by thousands of businesses and professionals" }), _jsxs("h2", { className: "section-one__title", children: ["Everything You Need, ", _jsx("span", { children: "All in One Place" })] }), _jsx("div", { className: "section-one__cards", children: categories.map((category) => {
                    const Icon = category.icon; // get the component
                    return (_jsxs("article", { className: "section-one__card", children: [_jsx("span", { className: "section-one__card-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 28, strokeWidth: 2 }) }), _jsx("h3", { children: category.title }), _jsx("p", { children: category.details })] }, category.title));
                }) })] }));
}
