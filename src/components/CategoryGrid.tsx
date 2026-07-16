import React from 'react'
import './CategoryGrid.css'

const categories = [
  'E-Commerce',
  'Professional Services',
  'Home Services',
  'Digital Services',
  'Education',
  'Transportation',
  'Health',
  'Real Estate',
  'Agriculture',
  'Events',
  'Financial',
  'Tourism'
]

const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <h2>Everything You Need, All in One Place</h2>
        <div className="grid">
          {categories.map((c) => (
            <div key={c} className="card">
              <div className="icon" aria-hidden>🏷️</div>
              <div className="card-title">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
