'use client';

import React from 'react';
import { LayoutProps, NavigationItem, CompanyInfo, SocialLink } from '@/types';
import { LAYOUT } from '@/lib/constants';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout component that wraps all pages
 * Provides consistent header, footer, and spacing
 */
const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  // Navigation items for the website
  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  // Company information for footer
  const companyInfo: CompanyInfo = {
    name: 'Roo Petroleum',
    tagline: 'Fueling Your Journey with Reliability and Care',
    description: 'Your trusted partner for quality petroleum products and exceptional service.',
    address: {
      street: 'Unit 41/2 Fastline Rd',
      city: 'Truganina',
      state: 'VIC',
      zipCode: '3029',
      country: 'Australia',
    },
    contact: {
      phone: '+61 3 9876 5432',
      email: 'melbourne@roopetroleum.com.au',
      website: 'https://roopetroleum.com.au',
    },
  };

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/roopetroleum-au',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/roopetroleum_au',
      icon: 'twitter',
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/roopetroleum.au',
      icon: 'facebook',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header navigation={navigationItems} />
      
      {/* Main Content */}
      <main 
        className={`flex-1 ${className || ''}`}
        style={{ paddingTop: LAYOUT.headerHeight }}
      >
        {children}
      </main>
      
      {/* Footer */}
      <Footer 
        companyInfo={companyInfo}
        navigation={navigationItems}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default Layout;