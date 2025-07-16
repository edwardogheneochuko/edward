import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container container">
            <h1 className="footer-title">Edward</h1>
            <ul className="footer-list">
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-link">
                  Projects
                </a>
              </li>
            </ul>
            <div className="footer-social">
              <a
                href="https://github.com/edwardogheneochuko"
                className="footer-social-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/edward-ogheneochuko/"
                className="footer-social-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                className="footer-social-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
            <span className="footer-copy">
                 Edward. All rights reserved &#169; {new Date().getFullYear()} 
            </span>
          </div>
        </footer>
      );
}

export default Footer