import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/shared/Hero';
import Services from '@/components/shared/Services';
import ContactForm from '@/components/shared/ContactForm';
import { BRAND_MESSAGING } from '@/lib/constants';

/**
 * Homepage component for Roo Petroleum
 * Features hero section with brand messaging and call-to-actions
 */
export default function Home() {
  return (
    <Layout>
      <Hero
        title={`Welcome to ${BRAND_MESSAGING.companyName}`}
        subtitle="Trusted Energy Partner"
        description={BRAND_MESSAGING.description}
        primaryAction={{
          label: "Explore Our Services",
          href: "/services",
        }}
        secondaryAction={{
          label: "Contact Us Today",
          href: "/contact",
        }}
      />
      
      {/* Services Section */}
      <Services />
      
      {/* Contact Form Section */}
      <ContactForm />
    </Layout>
  );
}
