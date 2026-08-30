import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import ceo from '../assets/ceo.png';
import GMD from '../assets/gmd.png';
import coo from '../assets/coo.png';
const leaders = [
    {
        name: 'Ibor Saviour Enang',
        role: 'Chief Executive Officer (CEO)',
        bio: 'Visionary leader with expertise in business strategy, innovation, and digital transformation. He is responsible for setting the overall direction, driving growth, and leading ServeNaija\'s mission to revolutionize the service industry in Nigeria.',
        initials: 'JE',
        image: ceo,
    },
    {
        name: 'Lucky Emeka Joseph',
        role: 'General Managing Director (GMD)',
        bio: 'Seasoned professional passionate about operational excellence and business growth. He oversees the day-to-day management, strategic execution, and ensures alignment with the company\'s long-term vision and goals.',
        initials: 'CO',
        image: GMD,
    },
    {
        name: 'Victoria Ekene N.',
        role: 'Chief Operating Officer (COO)',
        bio: 'Operations strategist with expertise in process optimization, operational efficiency, and business scaling. She is responsible for driving seamless service delivery and ensuring ServeNaija\'s operations run at peak performance.',
        initials: 'TA',
        image: coo,
    },
];
const testimonials = [
    {
        id: 'adebayo-lagos',
        quote: 'I found a trusted electrician within minutes. ServeNaija is awesome!',
        author: 'Adebayo T.',
        location: 'Lagos',
        initials: 'AT',
        avatar: '/images/testimonials/adebayo.jpg',
    },
    {
        id: 'blessing-abuja',
        quote: 'Our business has gained hundreds of customers since we joined ServeNaija.',
        author: 'Blessing E.',
        location: 'Abuja',
        initials: 'BE',
        avatar: '/images/testimonials/blessing.jpg',
    },
    {
        id: 'chinedu-enugu',
        quote: 'The best marketplace for finding and hiring professionals in Nigeria.',
        author: 'Chinedu M.',
        location: 'Enugu',
        initials: 'CM',
        avatar: '/images/testimonials/chinedu.jpg',
    },
    {
        id: 'halimat-kano',
        quote: 'As a vendor, my weekly sales doubled after listing products on ServeNaija.',
        author: 'Halimat R.',
        location: 'Kano',
        initials: 'HR',
        avatar: '/images/testimonials/halimat.jpg',
    },
];
export default function LeadershipTestimonialsSection({ className }) {
    const [startIndex, setStartIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [imageErrors, setImageErrors] = useState({});
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth <= 640) {
                setSlidesToShow(1);
                return;
            }
            if (window.innerWidth <= 1100) {
                setSlidesToShow(2);
                return;
            }
            setSlidesToShow(3);
        };
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);
    const canSlide = testimonials.length > slidesToShow;
    const visibleTestimonials = useMemo(() => {
        const count = Math.min(slidesToShow, testimonials.length);
        return Array.from({ length: count }, (_, offset) => {
            const index = (startIndex + offset) % testimonials.length;
            return testimonials[index];
        });
    }, [startIndex, slidesToShow]);
    const handlePrev = () => {
        if (!canSlide)
            return;
        setStartIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };
    const handleNext = () => {
        if (!canSlide)
            return;
        setStartIndex((current) => (current + 1) % testimonials.length);
    };
    const handleImageError = (id) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };
    return (_jsxs("section", { className: `section-four ${className ?? ''}`.trim(), children: [_jsx("p", { className: "section-four__eyebrow", children: "Meet our leadership" }), _jsx("div", { className: "section-four__leaders", children: leaders.map((leader) => (_jsxs("article", { className: "section-four__leader-card", children: [_jsx("div", { className: "section-four__leader-photo", "aria-hidden": "true", children: !imageErrors[leader.name] && leader.image ? (_jsx("img", { src: leader.image, alt: leader.name, className: "section-four__leader-image", onError: () => handleImageError(leader.name), loading: "lazy" })) : (_jsx("span", { children: leader.initials })) }), _jsxs("div", { className: "section-four__leader-content", children: [_jsx("h3", { children: leader.name }), _jsx("p", { className: "section-four__leader-role", children: leader.role }), _jsx("p", { className: "section-four__leader-bio", children: leader.bio }), _jsxs("div", { className: "section-four__leader-socials", "aria-label": "Social links", children: [_jsx("a", { href: "#", "aria-label": `${leader.name} on LinkedIn`, children: "in" }), _jsx("a", { href: "#", "aria-label": `Email ${leader.name}`, children: "@" })] })] })] }, leader.name))) }), _jsx("p", { className: "section-four__eyebrow section-four__eyebrow--gap", children: "What our users say" }), _jsx("div", { className: "section-four__testimonials-wrap", children: _jsx("div", { className: "section-four__testimonials", children: visibleTestimonials.map((item) => (_jsxs("article", { className: "section-four__testimonial-card", children: [_jsx("p", { className: "section-four__stars", "aria-label": "5 out of 5 stars", children: "\u2605\u2605\u2605\u2605\u2605" }), _jsxs("p", { className: "section-four__quote", children: ["\u201C", item.quote, "\u201D"] }), _jsxs("div", { className: "section-four__author", children: [_jsx("span", { className: "section-four__author-avatar", "aria-hidden": "true", children: !imageErrors[item.id] && item.avatar ? (_jsx("img", { src: item.avatar, alt: item.author, className: "section-four__author-image", onError: () => handleImageError(item.id), loading: "lazy" })) : (item.initials) }), _jsxs("div", { children: [_jsx("p", { className: "section-four__author-name", children: item.author }), _jsx("p", { className: "section-four__author-location", children: item.location })] })] })] }, item.id))) }) }), _jsxs("div", { className: "section-four__carousel-controls", "aria-label": "Testimonials carousel controls", children: [_jsx("button", { type: "button", className: "section-four__nav-btn", "aria-label": "Previous testimonials", onClick: handlePrev, disabled: !canSlide, children: "\u2039" }), _jsx("div", { className: "section-four__dots", role: "tablist", "aria-label": "Select testimonial slide", children: testimonials.map((item, index) => (_jsx("button", { type: "button", className: `section-four__dot ${startIndex === index ? 'is-active' : ''}`.trim(), onClick: () => setStartIndex(index), "aria-label": `Show testimonial ${index + 1}`, "aria-pressed": startIndex === index }, item.id))) }), _jsx("button", { type: "button", className: "section-four__nav-btn", "aria-label": "Next testimonials", onClick: handleNext, disabled: !canSlide, children: "\u203A" })] })] }));
}
