'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '@/types';
import { LAYOUT } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Button from '@/components/shared/Button';

/**
 * Header component with navigation and branding
 * Features responsive design and smooth scrolling effects
 */
const Header: React.FC<HeaderProps> = ({ navigation, showSignIn = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[9999] transition-all duration-300',
        'bg-[#003666] shadow-lg border-b border-[#002244]'
      )}
      style={{ height: LAYOUT.headerHeight }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 z-10">
            <div className="relative w-20 h-20 flex-shrink-0 bg-transparent">
              <Image
                src="/logo.png"
                alt="Roo Petroleum Logo"
                fill
                className="object-contain drop-shadow-lg bg-transparent"
                style={{ backgroundColor: 'transparent' }}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Roo Petroleum
              </h1>
              <p className="text-sm text-[#F2601A] font-medium drop-shadow-sm brightness-110">
                Fueling Your Journey
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 z-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-all duration-200 relative',
                  'text-white hover:text-[#F2601A] hover:scale-105 drop-shadow-md',
                  'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5',
                  'after:bg-[#F2601A] after:transition-all after:duration-200',
                  'hover:after:w-full'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            {showSignIn && (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-semibold transition-all duration-200 text-white hover:text-[#F2601A] hover:scale-105 drop-shadow-md"
                >
                  Sign In
                </Link>
                <Button 
                  variant="primary" 
                  size="sm"
                  className="shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md transition-all duration-200 z-20 hover:bg-white/10 active:scale-95"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-5 h-0.5 transition-all duration-300 drop-shadow-sm bg-white',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 mt-1 transition-all duration-300 drop-shadow-sm bg-white',
                  isMobileMenuOpen ? 'opacity-0' : ''
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 mt-1 transition-all duration-300 drop-shadow-sm bg-white',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-[#003666] shadow-xl border-t border-[#002244] transition-all duration-300 z-[9998]',
          isMobileMenuOpen
            ? 'opacity-100 visible transform translate-y-0'
            : 'opacity-0 invisible transform -translate-y-2'
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white font-medium py-2 border-b border-[#002244] last:border-b-0 hover:text-[#F2601A] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {showSignIn && (
            <div className="pt-4 space-y-3">
              <Link
                href="/signin"
                className="block text-white font-medium py-2 hover:text-[#F2601A] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Button variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;