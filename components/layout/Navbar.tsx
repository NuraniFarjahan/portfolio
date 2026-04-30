'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const NavLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Service', href: '#service' },
  { name: 'Resume', href: '#resume' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${
        scrolled ? 'top-2' : ''
      }`}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between border border-white/10"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xs">J</span>
          </div>
          <span className="text-white font-bold tracking-wider text-xl">JCREA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.name === 'Home' ? 'text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full hidden md:block">
          Contact
        </button>
        
        {/* Mobile menu button could go here */}
      </motion.div>
    </nav>
  );
}
