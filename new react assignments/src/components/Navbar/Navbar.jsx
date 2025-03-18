import React, { useState, useEffect } from "react";
import "./Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar_container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar_content">
        <div className="navbar_logo">
          <img src="https://www.freepnglogos.com/uploads/audi-logo-2.png" alt="Audi Logo" className="logo-image" />
          <h2>Audi</h2>
        </div>

        <div className={`navbar_right ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav_items">
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">Cars</a></li>
            <li><a href="#" className="nav-link">Services</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>

          <div className="navbar_buttons">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="cart-btn">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </button>
            <button className="login-btn">Login</button>
          </div>
        </div>

        <div className="mobile_menu_toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
