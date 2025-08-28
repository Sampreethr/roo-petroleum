'use client';

import React from 'react';
import Image from 'next/image';
import { HeroProps } from '@/types';

import { cn } from '@/lib/utils';
import Button from './Button';

/**
 * Hero component for homepage and landing pages
 * Features responsive design with brand messaging
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center text-white overflow-hidden',
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/roopet.png"
          alt="Hero background"
          fill
          className="object-cover blur-sm"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          {/* Subtitle */}
          {subtitle && (
            <p className="text-[#F2601A] font-semibold text-sm sm:text-base uppercase tracking-wider mb-4 fade-in drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight slide-up drop-shadow-lg">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed fade-in drop-shadow-md">
              {description}
            </p>
          )}

          {/* Trust Quotation */}
          <div className="mb-8 fade-in">
            <blockquote className="text-lg sm:text-xl font-light text-white italic max-w-2xl mx-auto drop-shadow-md">
              &ldquo;Your trusted partner for reliable energy solutions.&rdquo;
            </blockquote>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
            {primaryAction && (
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = primaryAction.href}
                className="w-full sm:w-auto min-w-[200px] text-lg font-semibold"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = secondaryAction.href}
                className="w-full sm:w-auto min-w-[200px] text-lg font-semibold border-white text-white hover:bg-white hover:text-[#003666]"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2601A] mb-2 drop-shadow-lg">100%</div>
              <div className="text-white text-sm uppercase tracking-wide drop-shadow-md">Quality Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2601A] mb-2 drop-shadow-lg">100%</div>
              <div className="text-white text-sm uppercase tracking-wide drop-shadow-md">Eco-Friendly Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2601A] mb-2 drop-shadow-lg">24/7</div>
              <div className="text-white text-sm uppercase tracking-wide drop-shadow-md">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center text-white/90 hover:text-white transition-colors duration-300 cursor-pointer drop-shadow-md"
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs uppercase tracking-wider mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements - REMOVE THIS ENTIRE SECTION */}
      {/* 
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-[#F2601A]/30 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-[#F2601A]/30 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-[#F2601A]/50 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-[#F2601A]/50 rounded-full hidden lg:block" />
      */}
    </section>
  );
};

export default Hero;