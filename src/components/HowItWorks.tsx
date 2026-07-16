import React from 'react'
import './HowItWorks.css'

const steps = [
  {num: 1, title: 'Search', desc: 'Find products or professionals'},
  {num: 2, title: 'Compare', desc: 'Choose from verified businesses'},
  {num: 3, title: 'Book or Buy', desc: 'Make secure payments'},
  {num: 4, title: 'Receive', desc: 'Get your goods or services'}
]

const HowItWorks: React.FC = () => {
  return (
    <section className="how-section">
      <div className="container">
        <div className="how-grid">
          {steps.map((s) => (
            <div className="how-step" key={s.num}>
              <div className="how-num">{s.num}</div>
              <div className="how-body">
                <div className="how-title">{s.title}</div>
                <div className="how-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
