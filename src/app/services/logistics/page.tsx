import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Truck, MapPin, Shield, Clock, Phone, CheckCircle, Navigation, Package, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LogisticsPage() {
  const benefits = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Route Optimization",
      description: "Advanced route planning to minimize delivery times and reduce transportation costs."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS Tracking",
      description: "Real-time tracking and monitoring of all deliveries for complete visibility."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Compliance",
      description: "Hazmat certified drivers and full compliance with transportation regulations."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Delivery",
      description: "On-time delivery with flexible scheduling to meet your operational needs."
    }
  ];

  const logisticsServices = [
    {
      title: "Bulk Fuel Transportation",
      description: "Large-volume petroleum product transportation for industrial and commercial clients.",
      features: ["Specialized tanker trucks", "Volume capacity up to 50,000L", "Multi-product capability", "Temperature controlled transport", "Emergency response equipped"],
      capacity: "5,000L - 50,000L"
    },
    {
      title: "Cross-Docking Services",
      description: "Efficient transfer and distribution services to optimize your supply chain.",
      features: ["Strategic distribution points", "Inventory consolidation", "Just-in-time delivery", "Reduced storage costs", "Streamlined operations"],
      capacity: "Any volume"
    },
    {
      title: "Emergency Delivery",
      description: "Rapid response fuel delivery for critical situations and emergency requirements.",
      features: ["24/7 emergency response", "Priority dispatch", "Rapid deployment", "Emergency equipment", "Critical supply support"],
      capacity: "500L - 20,000L"
    },
    {
      title: "Scheduled Distribution",
      description: "Regular delivery schedules tailored to your consumption patterns and requirements.",
      features: ["Customized schedules", "Automated ordering", "Inventory management", "Predictive delivery", "Cost optimization"],
      capacity: "1,000L - 100,000L"
    }
  ];

  const fleetCapabilities = [
    {
      vehicle: "Light Delivery Trucks",
      capacity: "500L - 2,000L",
      ideal: "Small businesses, remote locations",
      features: ["Urban delivery", "Tight access areas", "Quick turnaround"]
    },
    {
      vehicle: "Medium Tanker Trucks",
      capacity: "5,000L - 15,000L",
      ideal: "Commercial operations, construction sites",
      features: ["Multi-compartment", "Pump systems", "Flexible delivery"]
    },
    {
      vehicle: "Heavy Tanker Trucks",
      capacity: "20,000L - 50,000L",
      ideal: "Industrial facilities, bulk operations",
      features: ["High volume", "Specialized equipment", "Efficient transfer"]
    },
    {
      vehicle: "Specialized Transport",
      capacity: "Custom",
      ideal: "Aviation fuel, marine fuel, specialty products",
      features: ["Product specific", "Specialized handling", "Compliance certified"]
    }
  ];

  const safetyFeatures = [
    "Hazmat Certified Drivers",
    "DOT Compliant Vehicles",
    "Emergency Response Equipment",
    "Spill Prevention Systems",
    "Real-time Monitoring",
    "Insurance Coverage",
    "Safety Training Programs",
    "Incident Response Protocols"
  ];

  const coverageAreas = [
    {
      region: "Sydney Metro",
      coverage: "Greater Sydney area including Western Sydney, North Shore, and Southern suburbs",
      responseTime: "2-4 hours"
    },
    {
      region: "Melbourne Metro",
      coverage: "Melbourne metropolitan area and surrounding regions",
      responseTime: "2-4 hours"
    },
    {
      region: "Brisbane Metro",
      coverage: "Brisbane city and Gold Coast corridor",
      responseTime: "3-5 hours"
    },
    {
      region: "Regional Australia",
      coverage: "Major regional centers and industrial areas",
      responseTime: "4-24 hours"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/logisticstransportation.png"
            alt="Logistics & Transportation background"
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
              <Truck className="w-12 h-12 mr-4 text-[#003666]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Logistics & Transportation
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Efficient logistics solutions ensuring timely and safe delivery of petroleum products
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Our comprehensive logistics and transportation services provide reliable, safe, and efficient delivery of petroleum products across Australia, with advanced tracking, route optimization, and emergency response capabilities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
                Request Delivery
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
                Track Shipment
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
              Why Choose Our Logistics Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of our professional transportation and logistics solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <div className="text-[#003666] mb-4 flex justify-center">{benefit.icon}</div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Transportation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions for all your petroleum transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {logisticsServices.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-2 text-sm font-semibold text-[#F2601A]">
                    Capacity: {service.capacity}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Service Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#003666] mr-2" />
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

      {/* Fleet Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Fleet Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern fleet equipped to handle deliveries of all sizes and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetCapabilities.map((fleet, index) => (
              <Card key={index} variant="default" padding="lg" className="h-full">
                <CardHeader>
                  <div className="text-center mb-4">
                    <Truck className="w-12 h-12 text-[#003666] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#003666]">{fleet.vehicle}</CardTitle>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F2601A] mb-2">{fleet.capacity}</div>
                    <CardDescription className="text-sm">{fleet.ideal}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {fleet.features.map((feature, idx) => (
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

      {/* Safety & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Safety & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety measures and regulatory compliance for secure transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4">
                <Shield className="w-5 h-5 text-[#003666] mr-3" />
                <span className="text-[#003666] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Service Coverage Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extensive coverage across Australia with reliable delivery times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageAreas.map((area, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <div className="text-[#003666] mb-4 flex justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl mb-3 text-[#003666]">{area.region}</CardTitle>
                <CardDescription className="mb-4">{area.coverage}</CardDescription>
                <div className="bg-[#F2601A] text-white rounded-lg p-2">
                  <div className="text-sm font-semibold">Response Time</div>
                  <div className="text-lg font-bold">{area.responseTime}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Delivery Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined process ensuring efficient and safe petroleum product delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Order Processing</h3>
              <p className="text-gray-600 text-sm">
                Order verification, scheduling, and route optimization planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Dispatch</h3>
              <p className="text-gray-600 text-sm">
                Certified driver assignment and vehicle preparation with safety checks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Transportation</h3>
              <p className="text-gray-600 text-sm">
                Real-time tracking and monitoring throughout the delivery journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Safe product transfer and delivery confirmation with documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Confirmation</h3>
              <p className="text-gray-600 text-sm">
                Delivery confirmation and customer satisfaction verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Fuel Logistics?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today to discuss your transportation needs and discover how our logistics solutions can optimize your fuel supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Request Delivery Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +61 2 9876 5432
            </Button>
          </div>
          <Link href="/services" className="text-[#F2601A] hover:text-white transition-colors flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'Logistics & Transportation - Roo Petroleum | Fuel Delivery & Transportation Services',
  description: 'Professional petroleum logistics and transportation services across Australia. GPS tracking, route optimization, and hazmat certified drivers for safe fuel delivery.',
  keywords: ['fuel logistics', 'petroleum transportation', 'fuel delivery', 'logistics services', 'transportation', 'GPS tracking', 'Australia']
};