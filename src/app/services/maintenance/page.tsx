import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Wrench, Clock, Shield, Phone, CheckCircle, AlertTriangle, Calendar, Settings, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MaintenancePage() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock emergency repair services and technical support hotline."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Technicians",
      description: "Highly trained and certified technicians specializing in petroleum equipment."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Preventive Programs",
      description: "Scheduled maintenance programs to prevent costly breakdowns and extend equipment life."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Equipment Upgrades",
      description: "Modernization services to improve efficiency and comply with latest standards."
    }
  ];

  const maintenanceServices = [
    {
      title: "Preventive Maintenance Programs",
      description: "Scheduled maintenance to prevent equipment failures and extend operational life.",
      features: ["Regular inspection schedules", "Component replacement planning", "Performance monitoring", "Maintenance documentation", "Compliance tracking"],
      frequency: "Monthly/Quarterly"
    },
    {
      title: "Emergency Repair Services",
      description: "24/7 emergency response for critical equipment failures and breakdowns.",
      features: ["Rapid response teams", "Emergency parts inventory", "Temporary solutions", "Priority scheduling", "Minimal downtime"],
      frequency: "On-demand"
    },
    {
      title: "Equipment Upgrades & Modernization",
      description: "Upgrade existing equipment with latest technology and safety features.",
      features: ["Technology assessments", "Upgrade planning", "Installation services", "Training programs", "Warranty coverage"],
      frequency: "As needed"
    },
    {
      title: "Compliance & Safety Inspections",
      description: "Regular inspections to ensure equipment meets safety and regulatory standards.",
      features: ["Safety audits", "Regulatory compliance", "Certification services", "Documentation support", "Corrective actions"],
      frequency: "Annual/Bi-annual"
    }
  ];

  const equipmentTypes = [
    {
      category: "Storage Systems",
      equipment: ["Above ground storage tanks", "Underground storage tanks", "Fuel dispensers", "Piping systems", "Leak detection systems"]
    },
    {
      category: "Pumping Equipment",
      equipment: ["Fuel transfer pumps", "Submersible pumps", "Dispensing pumps", "Pressure systems", "Flow meters"]
    },
    {
      category: "Safety Systems",
      equipment: ["Fire suppression systems", "Vapor recovery systems", "Spill containment", "Emergency shutoffs", "Monitoring systems"]
    },
    {
      category: "Control Systems",
      equipment: ["Fuel management systems", "Inventory monitoring", "Access control", "Payment systems", "Remote monitoring"]
    }
  ];

  const serviceAgreements = [
    {
      tier: "Basic",
      price: "From $299/month",
      features: ["Quarterly inspections", "Basic maintenance", "Emergency support", "Parts discounts", "Service reports"],
      ideal: "Small operations"
    },
    {
      tier: "Professional",
      price: "From $599/month",
      features: ["Monthly inspections", "Preventive maintenance", "Priority emergency response", "Equipment monitoring", "Compliance support"],
      ideal: "Medium operations",
      popular: true
    },
    {
      tier: "Enterprise",
      price: "Custom pricing",
      features: ["Weekly inspections", "Comprehensive maintenance", "Dedicated technician", "24/7 monitoring", "Full compliance management"],
      ideal: "Large operations"
    }
  ];

  const responseTimes = [
    { priority: "Critical Emergency", time: "2-4 hours", description: "Equipment failure affecting safety or operations" },
    { priority: "High Priority", time: "4-8 hours", description: "Significant operational impact" },
    { priority: "Standard", time: "24-48 hours", description: "Routine maintenance and repairs" },
    { priority: "Scheduled", time: "Planned", description: "Preventive maintenance and upgrades" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/equipmentmaintainance.png"
            alt="Equipment Maintenance background"
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
              <Wrench className="w-12 h-12 mr-4 text-[#F2601A]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Equipment Maintenance
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional maintenance services to keep your fuel systems running safely and efficiently
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Our certified technicians provide comprehensive maintenance services for all types of petroleum equipment, ensuring optimal performance, safety compliance, and maximum uptime for your operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
                Schedule Service
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
                Emergency Hotline
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
              Why Choose Our Maintenance Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable maintenance services that keep your equipment running at peak performance
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

      {/* Maintenance Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Maintenance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance solutions for all your petroleum equipment needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-2 text-sm font-semibold text-[#F2601A]">
                    Frequency: {service.frequency}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-[#003666] mr-3" />
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

      {/* Equipment Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Equipment We Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance for all types of petroleum equipment and systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentTypes.map((type, index) => (
              <Card key={index} variant="default" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-[#003666] mb-4">{type.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.equipment.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Agreements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Service Agreement Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your operational needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceAgreements.map((agreement, index) => (
              <Card key={index} variant={agreement.popular ? "elevated" : "default"} padding="lg" className={`h-full text-center ${agreement.popular ? 'border-[#F2601A] border-2' : ''}`}>
                {agreement.popular && (
                  <div className="bg-[#F2601A] text-white text-sm font-semibold py-2 px-4 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{agreement.tier}</CardTitle>
                  <div className="text-3xl font-bold text-[#F2601A] my-4">{agreement.price}</div>
                  <CardDescription className="text-base">Ideal for {agreement.ideal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {agreement.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F2601A] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${agreement.popular ? 'bg-[#F2601A] hover:bg-[#E5551A] text-white' : ''}`} variant={agreement.popular ? 'primary' : 'outline'}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Response Times
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast response times to minimize downtime and keep your operations running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((response, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <div className="flex items-center justify-center mb-4">
                  {response.priority === "Critical Emergency" && <AlertTriangle className="w-8 h-8 text-red-500" />}
                  {response.priority === "High Priority" && <Clock className="w-8 h-8 text-orange-500" />}
                  {response.priority === "Standard" && <Wrench className="w-8 h-8 text-blue-500" />}
                  {response.priority === "Scheduled" && <Calendar className="w-8 h-8 text-green-500" />}
                </div>
                <CardTitle className="text-lg mb-2 text-[#003666]">{response.priority}</CardTitle>
                <div className="text-2xl font-bold text-[#F2601A] mb-3">{response.time}</div>
                <CardDescription className="text-sm">{response.description}</CardDescription>
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
              Our Maintenance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to equipment maintenance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of equipment condition and maintenance needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Scheduling</h3>
              <p className="text-gray-600">
                Development of customized maintenance schedules and service plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Execution</h3>
              <p className="text-gray-600">
                Professional maintenance services performed by certified technicians.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003666] mb-3">Monitoring</h3>
              <p className="text-gray-600">
                Ongoing monitoring and optimization to ensure peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Keep Your Equipment Running Smoothly
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don&apos;t wait for equipment failure. Contact us today to schedule maintenance services and ensure your petroleum systems operate safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Schedule Maintenance
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +61 2 9876 5432
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
  title: 'Equipment Maintenance - Roo Petroleum | Professional Petroleum Equipment Services',
  description: 'Professional equipment maintenance services for petroleum systems. 24/7 emergency support, preventive maintenance programs, and certified technicians across Australia.',
  keywords: ['equipment maintenance', 'petroleum equipment', 'preventive maintenance', 'emergency repair', 'equipment service', 'fuel system maintenance', 'Australia']
};