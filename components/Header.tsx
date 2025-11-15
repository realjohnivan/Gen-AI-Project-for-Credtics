
import React, { useState, useEffect } from 'react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="#ff8600"/>
      <path d="M12 6L15.5 10H8.5L12 6Z" fill="#FFFDF9"/>
      <path d="M12 18L8.5 14H15.5L12 18Z" fill="#FFFDF9"/>
    </svg>
    <span className="text-2xl font-bold text-[#160578]">Credtics.com</span>
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Problem', href: '#about' },
    { name: 'Our Solution', href: '#product' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-[#ff8600] font-bold' : 'text-[#160578] hover:text-[#ff8600]'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
         <a href="#contact" className="hidden md:inline-block bg-[#ff8600] text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all">
            Get Started
          </a>
      </div>
    </header>
  );
};

export default Header;