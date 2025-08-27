import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Fuel, Clock, Shield, Truck, BarChart3, Phone, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FuelSupplyPage() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock fuel delivery services to keep your operations running without interruption."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous fuel testing and quality control measures ensure you receive premium petroleum products."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Flexible Delivery",
      description: "Customizable delivery schedules and volumes to match your specific operational requirements."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Competitive pricing with volume discounts and fuel management programs to reduce costs."
    }
  ];

  const serviceTypes = [
    {
      title: "Bulk Fuel Delivery",
      description: "Large-volume fuel deliveries for industrial facilities, construction sites, and commercial operations.",
      features: ["Scheduled deliveries", "Emergency supply", "Volume discounts", "Real-time tracking"]
    },
    {
      title: "Fleet Fuel Cards",
      description: "Comprehensive fuel card programs for fleet management with detailed reporting and controls.",
      features: ["Driver controls", "Purchase limits", "Detailed reporting", "Multiple locations"]
    },
    {
      title: "On-Site Fueling",
      description: "Direct fueling services at your location for equipment, vehicles, and machinery.",
      features: ["Mobile fuel trucks", "Scheduled visits", "Equipment fueling", "Safety compliance"]
    }
  ];

  const industries = [
    "Construction & Heavy Equipment",
    "Transportation & Logistics",
    "Manufacturing & Industrial",
    "Agriculture & Farming",
    "Mining & Excavation",
    "Emergency Services",
    "Marine & Maritime",
    "Aviation & Airports"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fuelsupplyanddistribution.png"
            alt="Fuel Supply and Distribution background"
            fill
            className="object-cover blur-[1px]"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Fuel className="w-12 h-12 mr-4 text-[#F2601A]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Fuel Supply & Distribution
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Reliable, efficient fuel supply solutions for businesses across Australia
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              From small operations to large industrial facilities, our comprehensive fuel supply and distribution services ensure your business never runs out of the energy it needs to operate efficiently.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Why Choose Our Fuel Supply Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional fuel supply and distribution services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <div className="text-[#F2601A] mb-4 flex justify-center">{benefit.icon}</div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Fuel Supply Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive fuel supply options tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized fuel supply solutions for diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-[#003666] font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Fuel Supply Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to reliable fuel delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Assessment</h3>
              <p className="text-gray-600">
                We evaluate your fuel requirements, consumption patterns, and delivery preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Planning</h3>
              <p className="text-gray-600">
                Custom delivery schedules and fuel management plans are developed for your operation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Delivery</h3>
              <p className="text-gray-600">
                Professional delivery teams ensure safe, timely fuel supply to your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Monitoring</h3>
              <p className="text-gray-600">
                Ongoing monitoring and optimization to ensure efficient fuel management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Fuel Supply?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today to discuss your fuel supply needs and discover how our reliable delivery services can keep your operations running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +61 2 9876 5432
            </Button>
          </div>
          <Link href="/services" className="text-[#F2601A] hover:text-white transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'Fuel Supply & Distribution - Roo Petroleum | Reliable Fuel Delivery Services',
  description: 'Professional fuel supply and distribution services across Australia. 24/7 delivery, fleet fuel cards, and on-site fueling solutions for all industries.',
  keywords: ['fuel supply', 'fuel delivery', 'bulk fuel', 'fleet fuel cards', 'on-site fueling', 'petroleum distribution', 'Australia']
};