import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand-col">
          <div className="logo">ServeNaija</div>
          <p>Connecting people and opportunities across Africa.</p>
        </div>

        <div className="links-col">
          <div>
            <h4>Marketplace</h4>
            <ul>
              <li>Services</li>
              <li>Vendors</li>
              <li>Agents</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} ServeNaija — All rights reserved</div>
    </footer>
  )
}

export default Footer
