'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types';
import { LAYOUT } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Home, User, Briefcase, Phone } from 'lucide-react';

/**
 * Header component with navigation and branding
 * Features responsive design and smooth scrolling effects
 */
const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Icon mapping for navigation items
  const getNavigationIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'home':
        return <Home className="w-5 h-5" />;
      case 'about':
        return <User className="w-5 h-5" />;
      case 'services':
        return <Briefcase className="w-5 h-5" />;
      case 'contact':
        return <Phone className="w-5 h-5" />;
      default:
        return null;
    }
  };



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
          <nav className="hidden lg:flex items-center space-x-12 z-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 text-base font-semibold transition-all duration-200 relative group',
                    'drop-shadow-md hover:scale-105',
                    isActive
                      ? 'text-[#F2601A] scale-105'
                      : 'text-white hover:text-[#F2601A]',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5',
                    'after:bg-[#F2601A] after:transition-all after:duration-200',
                    isActive
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  )}
                >
                  <span className={cn(
                    'transition-all duration-200',
                    isActive ? 'text-[#F2601A]' : 'group-hover:rotate-12'
                  )}>
                    {getNavigationIcon(item.label)}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions - Removed sign-in functionality */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            {/* Sign-in functionality removed as requested */}
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
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 font-medium py-2 border-b border-[#002244] last:border-b-0 transition-all duration-200 relative',
                  isActive
                    ? 'text-[#F2601A] bg-[#F2601A]/10 px-3 rounded-lg border-[#F2601A]/30'
                    : 'text-white hover:text-[#F2601A] hover:bg-white/5 hover:px-3 hover:rounded-lg'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={cn(
                  'transition-all duration-200',
                  isActive ? 'text-[#F2601A]' : ''
                )}>
                  {getNavigationIcon(item.label)}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-[#F2601A] rounded-full" />
                )}
              </Link>
            );
          })}
          {/* Sign-in functionality removed as requested */}
        </div>
      </div>
    </header>
  );
};

export default Header;