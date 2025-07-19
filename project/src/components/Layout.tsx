import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center">
                <span className="text-gold font-bold text-xl">BV</span>
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-burgundy">Bella Vista</h1>
                <p className="text-sm text-gray-600 -mt-1">Italian Restaurant</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-burgundy border-b-2 border-burgundy pb-1'
                      : 'text-gray-700 hover:text-burgundy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-burgundy bg-cream-100 font-medium'
                        : 'text-gray-700 hover:text-burgundy hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark-burgundy text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-burgundy font-bold text-lg">BV</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">Bella Vista</h3>
                  <p className="text-cream-200 text-sm">Italian Restaurant</p>
                </div>
              </div>
              <p className="text-cream-200 mb-4 max-w-md">
                Experience authentic Italian cuisine in an elegant atmosphere. From traditional pasta dishes to contemporary interpretations of classic recipes, every meal is crafted with passion and the finest ingredients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-cream-200 hover:text-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-cream-200 hover:text-gold transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-cream-200 hover:text-gold transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
              <div className="space-y-3 text-cream-200">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>123 Little Italy St<br />New York, NY 10013</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Mon-Sun: 5:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-cream-200 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-burgundy pt-8 mt-8 text-center text-cream-200">
            <p>&copy; 2025 Bella Vista Italian Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;