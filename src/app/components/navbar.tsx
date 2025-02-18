"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navSections = ['about', 'gallery', 'projects', 'achievements'];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition === 0) {
        setSelectedSection(null);
        return;
      }

      let found = false;
      for (const section of [...navSections, 'contact']) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
            setSelectedSection(section);
            found = true;
            break;
          }
        }
      }

      if (!found) {
        setSelectedSection(null);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [navSections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.querySelector('header')?.offsetHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setSelectedSection(id);
      setIsMenuOpen(false);
    }
  };

  const getButtonStyles = (sectionId: string) => {
    const baseStyles = "transition-all duration-300 ease-in-out";
    return `${
      selectedSection === sectionId
        ? "border-red text-red"
        : "border-white text-white hover:border-red hover:text-red"
    } ${baseStyles}`;
  };

  return (
    <header className="bg-bg text-white sticky top-0 z-50 font-monument-extended font-ultrabold overflow-x-hidden">
      <nav className="w-full mx-auto px-3 py-2 sm:py-3 lg:py-4">
        {/* Mobile Navigation */}
        <div className="flex justify-between items-center md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1.5 focus:outline-none shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center justify-center space-x-1.5 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={32}
              height={38}
              className="w-7 h-auto"
              priority
            />
            <Link href="/" className="text-xs sm:text-sm text-red tracking-wider">
              VIMAANAS
            </Link>
          </div>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-red text-white border border-white rounded-full px-2 py-1 text-[10px] sm:text-xs tracking-wider whitespace-nowrap hover:bg-red-700 transition-colors duration-300 shrink-0"
          >
            Connect
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-2 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={60}
              className="w-10 lg:w-12 h-auto"
              priority
            />
            <Link href="/" className="text-base lg:text-lg text-red tracking-wider">
              VIMAANAS
            </Link>
          </div>

          <div className="flex space-x-1.5 lg:space-x-3 px-2 overflow-x-auto">
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${getButtonStyles(section)} border rounded-full px-2 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm tracking-wider capitalize whitespace-nowrap shrink-0`}
              >
                {section === 'about' ? 'About Team' : section}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-red text-white border border-white rounded-full px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm tracking-wider hover:bg-red-700 transition-colors duration-300 shrink-0"
          >
            Connect Us
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#2A2929] z-40 mt-[3.5rem] sm:mt-[4rem]">
          <div className="flex flex-col items-center space-y-4 p-6 pt-10">
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${getButtonStyles(section)} w-full max-w-sm border rounded-full px-4 py-2 text-sm tracking-wider capitalize text-center`}
              >
                {section === 'about' ? 'About Team' : section}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;