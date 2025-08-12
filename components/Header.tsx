import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/70 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-zinc-200 hover:text-indigo-300 transition-colors">
            RB
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-zinc-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-block bg-indigo-400 text-zinc-900 font-bold py-2 px-4 rounded-md hover:bg-indigo-300 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;