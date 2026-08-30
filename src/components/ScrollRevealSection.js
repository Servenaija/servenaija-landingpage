import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export default function ScrollRevealSection({ children, className, delay = 0 }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const element = sectionRef.current;
        if (!element)
            return;
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.18,
            rootMargin: '0px 0px -8% 0px',
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    return (_jsx("div", { ref: sectionRef, className: `scroll-reveal ${isVisible ? 'is-visible' : 'is-hidden'} ${className ?? ''}`.trim(), style: { '--reveal-delay': `${delay}ms` }, children: children }));
}
