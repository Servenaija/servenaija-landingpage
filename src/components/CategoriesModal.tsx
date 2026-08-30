import { useEffect, useRef, useState } from 'react'
import type { ServiceCategory } from '../types'

type Props = {
  isOpen: boolean
  categories: ServiceCategory[]
  onClose: () => void
  onSelectCategory: (name: string) => void
}

export default function CategoriesModal({ isOpen, categories, onClose, onSelectCategory }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('')
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredCategories = searchQuery
    ? categories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories

  const handleSelect = (name: string) => {
    onSelectCategory(name)
    onClose()
  }

  return (
    <div
      className="cat-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cat-modal-title"
      onClick={onClose}
    >
      <div className="cat-modal__card" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="cat-modal__close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>

        <div className="cat-modal__header">
          <h2 className="cat-modal__title" id="cat-modal-title">
            All Categories
          </h2>
          <p className="cat-modal__subtitle">
            {categories.length} categories available
          </p>
          <input
            type="text"
            className="cat-modal__search"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="cat-modal__grid">
          {filteredCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                type="button"
                className="cat-modal__item"
                onClick={() => handleSelect(category.name)}
              >
                <span className="cat-modal__item-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <span className="cat-modal__item-name">{category.name}</span>
              </button>
            )
          })}
        </div>

        {filteredCategories.length === 0 && (
          <p className="cat-modal__empty">No categories match your search.</p>
        )}
      </div>
    </div>
  )
}