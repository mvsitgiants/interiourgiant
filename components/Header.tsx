import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeLinkStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-brand-dark sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold text-brand-light">
          Interior Giant
        </Link>
        
        {/* Desktop Navigation - Updated By Bhushan on 15_01_2025 */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="text-brand-light py-2 px-4 rounded-full text-sm hover:bg-white/20 transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
          <NavLink to="/about" className="text-brand-gray hover:text-brand-light transition-colors text-sm py-2 px-4 rounded-full hover:bg-white/20" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
          <NavLink to="/services" className="text-brand-gray hover:text-brand-light transition-colors text-sm py-2 px-4 rounded-full hover:bg-white/20" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Services</NavLink>
        </nav>
        
        <Link to="/contact" className="hidden md:block bg-brand-gold text-brand-dark font-bold py-2 px-5 rounded-full text-sm hover:bg-opacity-90 transition-all">
          Contact
        </Link>
        
        {/* Mobile Menu Button - Updated By Bhushan on 15_01_2025 */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-brand-light focus:outline-none transition-transform duration-200"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Added By Bhushan on 15_01_2025 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <nav className="container mx-auto px-6 py-4 space-y-2">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu}
              className="block text-brand-light py-3 px-4 rounded-lg text-sm hover:bg-white/20 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMobileMenu}
              className="block text-brand-gray hover:text-brand-light py-3 px-4 rounded-lg text-sm hover:bg-white/20 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={closeMobileMenu}
              className="block text-brand-gray hover:text-brand-light py-3 px-4 rounded-lg text-sm hover:bg-white/20 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMobileMenu}
              className="block text-brand-gray hover:text-brand-light py-3 px-4 rounded-lg text-sm hover:bg-white/20 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Contact
            </NavLink>
            <div className="pt-4">
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className="block w-full bg-brand-gold text-brand-dark font-bold py-3 px-5 rounded-lg text-sm text-center hover:bg-opacity-90 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;