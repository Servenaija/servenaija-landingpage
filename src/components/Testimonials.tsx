import React from 'react'
import './Testimonials.css'

const testimonials = [
  {text: 'I found a trusted electrician within minutes. Great platform!', name: 'Chinedu M., Lagos'},
  {text: 'Our business has gained hundreds of customers since joining ServeNaija.', name: 'Blessing G., Abuja'},
  {text: 'The best marketplace for finding and hiring professionals.', name: 'Emeka O., Enugu'}
]

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h3 style={{textAlign:'center'}}>What Our Users Say</h3>
        <div className="test-grid">
          {testimonials.map((t,i) => (
            <div className="test-card" key={i}>
              <div className="stars">★★★★★</div>
              <div className="test-text">"{t.text}"</div>
              <div className="test-author">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
