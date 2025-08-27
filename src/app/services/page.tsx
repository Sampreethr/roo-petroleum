import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Service } from '@/components/shared/Services';
import { Fuel, Factory, BarChart3, Wrench, Truck, Globe, Construction, Truck as TruckIcon, Building2, Tractor, Anchor, Plane, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const detailedServices: Service[] = [
    {
      id: 'fuel-supply',
      title: 'Fuel Supply & Distribution',
      description: 'Comprehensive fuel supply solutions for businesses of all sizes, from small operations to large industrial facilities.',
      features: [
        'Bulk fuel delivery with flexible scheduling',
        '24/7 emergency fuel supply services',
        'Fleet management and fuel card programs',
        'Competitive pricing with volume discounts',
        'Real-time delivery tracking and notifications',
        'Quality assurance and fuel testing'
      ],
      icon: <Fuel className="w-8 h-8" />
    },
    {
      id: 'storage-solutions',
      title: 'Storage Solutions',
      description: 'Complete fuel storage systems designed for safety, efficiency, and regulatory compliance.',
      features: [
        'Above and underground tank installation',
        'Tank maintenance and inspection services',
        'Inventory management systems',
        'Environmental compliance monitoring',
        'Leak detection and prevention systems',
        'Tank cleaning and decommissioning'
      ],
      icon: <Factory className="w-8 h-8" />
    },
    {
      id: 'consulting',
      title: 'Energy Consulting',
      description: 'Expert consulting services to optimize your energy consumption, reduce costs, and improve efficiency.',
      features: [
        'Comprehensive energy audits and assessments',
        'Cost optimization and budget planning',
        'Sustainability and environmental planning',
        'Regulatory compliance guidance',
        'Energy efficiency recommendations',
        'Alternative fuel solutions consulting'
      ],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: 'maintenance',
      title: 'Equipment Maintenance',
      description: 'Professional maintenance services to keep your fuel systems running safely and efficiently.',
      features: [
        'Preventive maintenance programs',
        'Emergency repair services',
        'Equipment upgrades and modernization',
        '24/7 technical support hotline',
        'Certified technician services',
        'Warranty and service agreements'
      ],
      icon: <Wrench className="w-8 h-8" />
    },
    {
      id: 'logistics',
      title: 'Logistics & Transportation',
      description: 'Efficient logistics solutions ensuring timely and safe delivery of petroleum products.',
      features: [
        'Route optimization and planning',
        'GPS tracking and monitoring',
        'Specialized transportation equipment',
        'Hazmat certified drivers',
        'Insurance and safety compliance',
        'Cross-docking and distribution services'
      ],
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'environmental',
      title: 'Environmental Services',
      description: 'Environmental compliance and remediation services to protect your business and the environment.',
      features: [
        'Environmental site assessments',
        'Soil and groundwater remediation',
        'Waste management and disposal',
        'Regulatory compliance monitoring',
        'Environmental impact assessments',
        'Sustainability program development'
      ],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const industries = [
    {
      name: 'Construction',
      description: 'Reliable fuel supply for construction equipment and job sites.',
      icon: <Construction className="w-8 h-8" />
    },
    {
      name: 'Transportation',
      description: 'Fleet fueling solutions for trucking and logistics companies.',
      icon: <TruckIcon className="w-8 h-8" />
    },
    {
      name: 'Manufacturing',
      description: 'Industrial fuel solutions for manufacturing operations.',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: 'Agriculture',
      description: 'Farm and agricultural equipment fueling services.',
      icon: <Tractor className="w-8 h-8" />
    },
    {
      name: 'Marine',
      description: 'Marine fuel supply for ports and waterway operations.',
      icon: <Anchor className="w-8 h-8" />
    },
    {
      name: 'Aviation',
      description: 'Aviation fuel services for airports and aircraft operators.',
      icon: <Plane className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services.png"
            alt="Services background"
            fill
            className="object-cover blur-sm"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive petroleum solutions tailored to your business needs
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              From fuel supply and storage to consulting and maintenance, we provide 
              end-to-end petroleum services that keep your operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Complete Petroleum Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of services covers every aspect of petroleum supply and management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedServices.map((service) => (
              <Card key={service.id} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Link href={`/services/${service.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized petroleum solutions for diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} variant="default" padding="lg" hover className="text-center">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <CardTitle className="text-xl mb-3">{industry.name}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional petroleum services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Consultation</h3>
              <p className="text-gray-600">
                We assess your specific needs and develop a customized solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Planning</h3>
              <p className="text-gray-600">
                Our experts create a detailed implementation plan and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Implementation</h3>
              <p className="text-gray-600">
                We execute the plan with precision and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Support</h3>
              <p className="text-gray-600">
                Ongoing support and maintenance to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today to discuss your petroleum service needs and discover 
            how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'Services - Roo Petroleum | Comprehensive Petroleum Solutions',
  description: 'Explore Roo Petroleum\'s complete range of services including fuel supply, storage solutions, consulting, maintenance, and more. Serving multiple industries across Australia.',
  keywords: ['petroleum services', 'fuel supply', 'storage solutions', 'energy consulting', 'equipment maintenance', 'logistics', 'environmental services']
};