'use client';

import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Card, { CardHeader, CardTitle, CardContent } from './Card';
import { ContactFormData, WithClassName } from '@/types';
import { cn } from '@/lib/utils';

export interface ContactFormProps extends WithClassName {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  showCompanyInfo?: boolean;
}

/**
 * Contact form component for Roo Petroleum
 * Handles user inquiries with validation and submission
 */
const ContactForm: React.FC<ContactFormProps> = ({
  title = 'Get In Touch',
  subtitle = 'Ready to discuss your petroleum needs? Contact us today.',
  onSubmit,
  showCompanyInfo = true,
  className
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceTypes = [
    'Fuel Supply & Distribution',
    'Storage Solutions',
    'Energy Consulting',
    'Equipment Maintenance',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        serviceType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn('py-16 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" padding="lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        error={errors.name}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        error={errors.email}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        error={errors.phone}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Service Type and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2601A]/20 focus:border-[#F2601A]"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={cn(
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2601A]/20 focus:border-[#F2601A] resize-vertical',
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      )}
                      placeholder="Tell us about your petroleum needs, project requirements, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Company Information */}
            {showCompanyInfo && (
              <div className="space-y-6">
                <Card variant="filled" padding="lg">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-2">Address</h4>
                      <p className="text-gray-600 text-sm">
                        Unit 41/2 Fastline Rd<br />
                        Truganina VIC 3029<br />
                        Australia
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-2">Phone</h4>
                      <p className="text-gray-600 text-sm">
                        <a href="tel:+61-3-9876-5432" className="hover:text-[#F2601A]">
                          +61 3 9876 5432
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-2">Email</h4>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:melbourne@roopetroleum.com.au" className="hover:text-[#F2601A]">
                          melbourne@roopetroleum.com.au
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003666] mb-2">Business Hours</h4>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM AEST<br />
                        Saturday: 9:00 AM - 4:00 PM AEST<br />
                        Sunday: Emergency only
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="elevated" padding="lg">
                  <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      For urgent fuel supply needs or emergencies:
                    </p>
                    <p className="font-semibold text-[#F2601A]">
                      <a href="tel:+61-1800-766-3835" className="hover:underline">
                        +61 1800 ROO FUEL
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Available 24/7 emergency support
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;