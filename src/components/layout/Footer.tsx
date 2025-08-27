'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterProps } from '@/types';
import { BRAND_MESSAGING } from '@/lib/constants';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * Footer component with company information, navigation, and social links
 * Follows Roo Petroleum brand guidelines
 */
const Footer: React.FC<FooterProps> = ({ companyInfo, navigation, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003666] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Roo Petroleum Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{BRAND_MESSAGING.companyName}</h3>
                <p className="text-[#F2601A] text-sm font-medium">
                  {BRAND_MESSAGING.tagline}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {BRAND_MESSAGING.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F2601A]" />
                <span className="text-gray-300">{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#F2601A]" />
                <span className="text-gray-300">{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#F2601A] mt-0.5" />
                <div className="text-gray-300">
                  <div>{companyInfo.address.street}</div>
                  <div>
                    {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zipCode}
                  </div>
                  <div>{companyInfo.address.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#fuel-supply"
                  className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                >
                  Fuel Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services#distribution"
                  className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                >
                  Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/services#logistics"
                  className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialLinks.map((social) => {
                const getSocialIcon = (platform: string) => {
                  const iconProps = { className: "w-5 h-5" };
                  switch (platform.toLowerCase()) {
                    case 'facebook':
                      return <Facebook {...iconProps} />;
                    case 'twitter':
                      return <Twitter {...iconProps} />;
                    case 'linkedin':
                      return <Linkedin {...iconProps} />;
                    case 'instagram':
                      return <Instagram {...iconProps} />;
                    default:
                      return <div className="w-5 h-5 rounded-full border border-current" />;
                  }
                };
                
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#F2601A] transition-colors duration-200"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2601A] text-sm"
              />
              <button className="px-4 py-2 bg-[#F2601A] text-white rounded-md hover:bg-[#D4501A] transition-colors duration-200 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {BRAND_MESSAGING.companyName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#F2601A] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#F2601A] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-[#F2601A] transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;