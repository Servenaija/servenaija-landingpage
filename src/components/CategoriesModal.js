import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export default function CategoriesModal({ isOpen, categories, onClose, onSelectCategory }) {
    const closeButtonRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        if (!isOpen) {
            setSearchQuery('');
            return;
        }
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape')
                onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const filteredCategories = searchQuery
        ? categories.filter((cat) => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : categories;
    const handleSelect = (name) => {
        onSelectCategory(name);
        onClose();
    };
    return (_jsx("div", { className: "cat-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "cat-modal-title", onClick: onClose, children: _jsxs("div", { className: "cat-modal__card", onClick: (event) => event.stopPropagation(), children: [_jsx("button", { ref: closeButtonRef, type: "button", className: "cat-modal__close", "aria-label": "Close dialog", onClick: onClose, children: "\u00D7" }), _jsxs("div", { className: "cat-modal__header", children: [_jsx("h2", { className: "cat-modal__title", id: "cat-modal-title", children: "All Categories" }), _jsxs("p", { className: "cat-modal__subtitle", children: [categories.length, " categories available"] }), _jsx("input", { type: "text", className: "cat-modal__search", placeholder: "Search categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })] }), _jsx("div", { className: "cat-modal__grid", children: filteredCategories.map((category) => {
                        const Icon = category.icon;
                        return (_jsxs("button", { type: "button", className: "cat-modal__item", onClick: () => handleSelect(category.name), children: [_jsx("span", { className: "cat-modal__item-icon", "aria-hidden": "true", children: _jsx(Icon, { size: 20, strokeWidth: 2.2 }) }), _jsx("span", { className: "cat-modal__item-name", children: category.name })] }, category.name));
                    }) }), filteredCategories.length === 0 && (_jsx("p", { className: "cat-modal__empty", children: "No categories match your search." }))] }) }));
}
