'use client';

import React, { ReactNode } from 'react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import Button from './Button';
import { WithClassName } from '@/types';
import { cn } from '@/lib/utils';
import { Fuel, Factory, BarChart3, Wrench, CheckCircle } from 'lucide-react';


export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string | ReactNode;
  image?: string;
}

export interface ServicesProps extends WithClassName {
  title?: string;
  subtitle?: string;
  services?: Service[];
  variant?: 'grid' | 'list';
  showCTA?: boolean;
}

const defaultServices: Service[] = [
  {
    id: 'fuel-supply',
    title: 'Fuel Supply & Distribution',
    description: 'Reliable fuel supply and distribution services for businesses and industrial operations.',
    features: [
      'Bulk fuel delivery',
      '24/7 emergency supply',
      'Fleet management solutions',
      'Competitive pricing'
    ],
    icon: <Fuel className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    description: 'Comprehensive fuel storage and tank management services for optimal efficiency.',
    features: [
      'Tank installation & maintenance',
      'Inventory management',
      'Safety compliance',
      'Environmental monitoring'
    ],
    icon: <Factory className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'consulting',
    title: 'Energy Consulting',
    description: 'Expert consulting services to optimize your energy consumption and reduce costs.',
    features: [
      'Energy audits',
      'Cost optimization',
      'Sustainability planning',
      'Regulatory compliance'
    ],
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'maintenance',
    title: 'Equipment Maintenance',
    description: 'Professional maintenance services for fuel systems and related equipment.',
    features: [
      'Preventive maintenance',
      'Emergency repairs',
      'Equipment upgrades',
      'Technical support'
    ],
    icon: <Wrench className="w-8 h-8 text-blue-600" />
  }
];

/**
 * Services component showcasing Roo Petroleum's service offerings
 * Displays services in a grid or list layout with detailed information
 */
const Services: React.FC<ServicesProps> = ({
  title = 'Our Services',
  subtitle = 'Comprehensive petroleum solutions tailored to your business needs',
  services = defaultServices,
  variant = 'grid',
  showCTA = true,
  className
}) => {
  return (
    <section className={cn('py-16 bg-gray-50', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Grid/List */}
        <div className={cn(
          variant === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            : 'space-y-6'
        )}>
          {services.map((service) => (
            <Card
              key={service.id}
              variant="elevated"
              hover
              className="h-full"
            >
              <CardHeader>
                {service.icon && (
                  <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                )}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {showCTA && (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Need a custom solution? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Get Quote
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

// Individual Service Card component for more granular use
export const ServiceCard: React.FC<{ service: Service; className?: string }> = ({ 
  service, 
  className 
}) => (
  <Card variant="elevated" hover className={cn('h-full', className)}>
    <CardHeader>
      {service.icon && (
        <div className="mb-4 flex justify-center">
          {typeof service.icon === 'string' ? (
            <div className="text-4xl">{service.icon}</div>
          ) : (
            service.icon
          )}
        </div>
      )}
      <CardTitle>{service.title}</CardTitle>
      <CardDescription>{service.description}</CardDescription>
    </CardHeader>
    
    <CardContent>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2 mt-1 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);