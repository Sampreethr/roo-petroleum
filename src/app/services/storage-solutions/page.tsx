import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Factory, Shield, Wrench, BarChart3, Phone, CheckCircle, AlertTriangle, Settings, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StorageSolutionsPage() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Compliance",
      description: "All storage solutions meet Australian safety standards and environmental regulations."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Design",
      description: "Tailored storage systems designed to meet your specific capacity and operational needs."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Advanced monitoring systems for real-time inventory tracking and management."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Full Service",
      description: "Complete installation, maintenance, and decommissioning services included."
    }
  ];

  const storageTypes = [
    {
      title: "Above Ground Storage Tanks (AST)",
      description: "Durable above-ground fuel storage solutions for easy access and maintenance.",
      features: ["Double-wall construction", "Leak detection systems", "Easy maintenance access", "Various capacities available"],
      capacity: "1,000L - 100,000L"
    },
    {
      title: "Underground Storage Tanks (UST)",
      description: "Space-saving underground storage with advanced environmental protection.",
      features: ["Corrosion resistant", "Environmental monitoring", "Space efficient", "Enhanced security"],
      capacity: "5,000L - 200,000L"
    },
    {
      title: "Portable Storage Solutions",
      description: "Mobile fuel storage for temporary sites and flexible operations.",
      features: ["Quick deployment", "Self-contained units", "Transport ready", "Temporary installations"],
      capacity: "500L - 10,000L"
    }
  ];

  const services = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Tank Installation",
      description: "Professional installation of new storage tanks with full compliance certification.",
      details: ["Site preparation", "Tank positioning", "Piping installation", "System testing", "Compliance certification"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Inspection",
      description: "Regular maintenance and inspection services to ensure optimal performance.",
      details: ["Scheduled inspections", "Preventive maintenance", "Leak testing", "System upgrades", "Emergency repairs"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Environmental Monitoring",
      description: "Continuous environmental monitoring and compliance management.",
      details: ["Leak detection", "Groundwater monitoring", "Soil testing", "Compliance reporting", "Remediation services"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Tank Decommissioning",
      description: "Safe and compliant tank removal and site restoration services.",
      details: ["Tank cleaning", "Safe removal", "Soil remediation", "Site restoration", "Waste disposal"]
    }
  ];

  const features = [
    "Australian Standards Compliance (AS 1940, AS 4897)",
    "Environmental Protection Authority (EPA) Approved",
    "24/7 Leak Detection and Monitoring",
    "Automated Inventory Management Systems",
    "Remote Monitoring Capabilities",
    "Emergency Spill Response Systems",
    "Corrosion Protection Systems",
    "Fire Suppression Integration"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/storagesolution.png"
            alt="Storage Solutions background"
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
              <Factory className="w-12 h-12 mr-4 text-[#F2601A]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Storage Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete fuel storage systems designed for safety, efficiency, and compliance
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              From design and installation to maintenance and decommissioning, our comprehensive storage solutions ensure your fuel is stored safely and efficiently while meeting all Australian regulatory requirements.
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
              Why Choose Our Storage Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional fuel storage systems
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

      {/* Storage Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Storage Tank Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of storage solutions designed for different applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {storageTypes.map((storage, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-[#003666]">{storage.title}</CardTitle>
                  <CardDescription className="text-base">{storage.description}</CardDescription>
                  <div className="mt-2 text-sm font-semibold text-[#F2601A]">
                    Capacity: {storage.capacity}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {storage.features.map((feature, idx) => (
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Complete Storage Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end storage solutions from installation to decommissioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="text-[#F2601A] mr-4">{service.icon}</div>
                    <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Advanced Features & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our storage systems include the latest technology and meet all regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#F2601A] mr-3" />
                <span className="text-[#003666] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to safe and compliant storage installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Site Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive site evaluation and regulatory compliance review.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Design & Planning</h3>
              <p className="text-gray-600 text-sm">
                Custom storage system design and detailed installation planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation by certified technicians with safety protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Testing & Commissioning</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive system testing and commissioning procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring, maintenance, and compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Storage System?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today to discuss your fuel storage requirements and discover how our solutions can improve your operations while ensuring full compliance.
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
  title: 'Storage Solutions - Roo Petroleum | Fuel Storage Systems & Tank Installation',
  description: 'Professional fuel storage solutions including above ground and underground tanks, installation, maintenance, and compliance services across Australia.',
  keywords: ['fuel storage', 'storage tanks', 'tank installation', 'underground storage', 'above ground tanks', 'fuel storage systems', 'Australia']
};