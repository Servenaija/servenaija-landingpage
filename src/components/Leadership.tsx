import React from 'react'
import './Leadership.css'

const leaders = [
  {name: 'Dr. John A. Eze', title: 'Chief Executive Officer (CEO)'},
  {name: 'Mrs. Chioma Okafor', title: 'Managing Director (MD)'},
  {name: 'Mr. Tunde Adeyemi', title: 'Chief Financial Officer (CFO)'}
]

const Leadership: React.FC = () => {
  return (
    <section className="leadership">
      <div className="container">
        <h3 style={{textAlign:'center'}}>Meet Our Leadership</h3>
        <div className="lead-grid">
          {leaders.map((l) => (
            <div className="lead-card" key={l.name}>
              <div className="avatar">{l.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
              <div className="lead-info">
                <div className="lead-name">{l.name}</div>
                <div className="lead-title">{l.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
