
import React, { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">roofing</span>
            <span className="font-display text-xl font-bold tracking-tight">
              WEST POINT <span className="text-primary">ROOFING</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#analysis">
              <span className="material-symbols-outlined text-xs">auto_awesome</span> Health Check
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#gallery">Gallery</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#estimate">Contact</a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded font-semibold text-sm transition-all shadow-lg shadow-primary/20" href="#estimate">
              Get a Quote
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <span className="material-symbols-outlined">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/10 py-6 px-4 space-y-4 shadow-xl">
          <a className="block text-lg font-medium hover:text-primary" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="block text-lg font-medium hover:text-primary" href="#analysis" onClick={() => setIsMenuOpen(false)}>Roof Health Check</a>
          <a className="block text-lg font-medium hover:text-primary" href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a className="block text-lg font-medium hover:text-primary" href="#estimate" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a className="block w-full bg-primary text-white text-center px-5 py-3 rounded font-bold shadow-lg" href="#estimate" onClick={() => setIsMenuOpen(false)}>
            Get a Free Estimate
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
