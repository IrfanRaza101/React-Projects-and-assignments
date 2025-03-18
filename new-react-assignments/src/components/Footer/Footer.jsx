import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Hamari Website</h3>
            <p className="footer-description">
              Aapka trusted partner for amazing digital solutions. Hamari quality products aur services se aap 100% satisfied rahenge.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#"><span className="footer-link-arrow">→</span> Home</a></li>
              <li><a href="#"><span className="footer-link-arrow">→</span> About Us</a></li>
              <li><a href="#"><span className="footer-link-arrow">→</span> Services</a></li>
              <li><a href="#"><span className="footer-link-arrow">→</span> Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">E-Commerce Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-details">
              <p className="contact-item">
                <span className="contact-icon">📍</span> 123 Business Road, Karachi, Pakistan
              </p>
              <p className="contact-item">
                <span className="contact-icon">📧</span> info@hamariwebsite.com
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span> +92 123 456 7890
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hamari Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 