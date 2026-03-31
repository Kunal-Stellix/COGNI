"use client";

import { useState, useEffect } from 'react';

export const useNavbarLogic = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: 'products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '#support' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Handle scroll state for padding adjustments
      setIsScrolled(currentScrollY > 20);

      // 2. Handle Hide/Show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
        setMobileMenuOpen(false); 
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return {
    isScrolled,
    isVisible,
    mobileMenuOpen,
    navLinks,
    toggleMobileMenu
  };
};