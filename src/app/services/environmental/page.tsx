import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { Leaf, Recycle, Shield, Award, Phone, CheckCircle, Droplets, Wind, FileText, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EnvironmentalPage() {
  const benefits = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Protection",
      description: "Comprehensive environmental protection measures and sustainable practices."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Full compliance with Australian environmental regulations and standards."
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Waste Management",
      description: "Proper disposal and recycling of petroleum waste and contaminated materials."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Processes",
      description: "ISO 14001 certified environmental management systems and processes."
    }
  ];

  const environmentalServices = [
    {
      title: "Spill Response & Cleanup",
      description: "Rapid response and professional cleanup services for petroleum spills and contamination.",
      features: ["24/7 emergency response", "Certified cleanup crews", "Advanced containment systems", "Environmental impact assessment", "Regulatory reporting"],
      responseTime: "1-4 hours"
    },
    {
      title: "Soil Remediation",
      description: "Comprehensive soil treatment and remediation services for contaminated sites.",
      features: ["Site assessment", "Contamination analysis", "Treatment planning", "Bioremediation", "Progress monitoring"],
      responseTime: "Site dependent"
    },
    {
      title: "Groundwater Treatment",
      description: "Advanced groundwater monitoring and treatment for petroleum contamination.",
      features: ["Groundwater monitoring", "Contamination mapping", "Treatment systems", "Pump and treat", "Natural attenuation"],
      responseTime: "Ongoing monitoring"
    },
    {
      title: "Waste Management",
      description: "Proper handling, transportation, and disposal of petroleum waste materials.",
      features: ["Waste classification", "Secure transportation", "Licensed disposal", "Documentation", "Recycling programs"],
      responseTime: "Scheduled pickup"
    }
  ];

  const complianceAreas = [
    {
      regulation: "EPA Guidelines",
      description: "Environmental Protection Authority compliance for all petroleum operations",
      coverage: ["Spill prevention", "Waste management", "Air quality", "Water protection"]
    },
    {
      regulation: "NEPM Standards",
      description: "National Environment Protection Measures for contaminated site assessment",
      coverage: ["Site investigation", "Risk assessment", "Remediation criteria", "Validation"]
    },
    {
      regulation: "Dangerous Goods",
      description: "Australian Dangerous Goods Code compliance for petroleum products",
      coverage: ["Classification", "Packaging", "Transport", "Storage"]
    },
    {
      regulation: "Work Health Safety",
      description: "WHS regulations for environmental and cleanup operations",
      coverage: ["Worker safety", "PPE requirements", "Training", "Risk management"]
    }
  ];

  const remediationTechnologies = [
    {
      technology: "Bioremediation",
      description: "Natural biological processes to break down petroleum contaminants",
      applications: ["Soil treatment", "Groundwater cleanup", "In-situ treatment", "Ex-situ processing"],
      timeframe: "6-24 months"
    },
    {
      technology: "Chemical Oxidation",
      description: "Advanced oxidation processes for rapid contaminant destruction",
      applications: ["Dense contamination", "Source zone treatment", "Groundwater plumes", "Soil remediation"],
      timeframe: "3-12 months"
    },
    {
      technology: "Soil Vapor Extraction",
      description: "Vacuum extraction of volatile petroleum compounds from soil",
      applications: ["Vadose zone cleanup", "Vapor control", "Source removal", "Plume management"],
      timeframe: "6-18 months"
    },
    {
      technology: "Pump & Treat",
      description: "Groundwater extraction and treatment systems",
      applications: ["Plume containment", "Mass removal", "Hydraulic control", "Water treatment"],
      timeframe: "1-5 years"
    }
  ];

  const sustainabilityInitiatives = [
    "Carbon Footprint Reduction",
    "Renewable Energy Integration",
    "Waste Minimization Programs",
    "Water Conservation Measures",
    "Biodiversity Protection",
    "Green Technology Adoption",
    "Environmental Training",
    "Community Engagement"
  ];

  const certifications = [
    {
      name: "ISO 14001",
      description: "Environmental Management Systems",
      scope: "Company-wide environmental management"
    },
    {
      name: "NATA Accreditation",
      description: "National Association of Testing Authorities",
      scope: "Environmental testing and analysis"
    },
    {
      name: "EPA Licensing",
      description: "Environmental Protection Authority",
      scope: "Waste management and treatment"
    },
    {
      name: "Contaminated Land Consultant",
      description: "Certified contaminated land assessment",
      scope: "Site investigation and remediation"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/environmentalservices.png"
            alt="Environmental Services background"
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
              <Leaf className="w-12 h-12 mr-4 text-[#003666]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Environmental Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive environmental protection and remediation services for sustainable operations
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Our environmental services ensure responsible petroleum operations through spill response, soil remediation, groundwater treatment, and waste management, all while maintaining strict compliance with Australian environmental regulations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
                Emergency Response
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
                Environmental Assessment
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
              Why Choose Our Environmental Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protecting the environment while ensuring operational compliance and sustainability
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

      {/* Environmental Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Environmental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental solutions for petroleum industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {environmentalServices.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-2 text-sm font-semibold text-[#F2601A]">
                    Response Time: {service.responseTime}
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

      {/* Compliance & Regulations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full compliance with Australian environmental regulations and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} variant="default" padding="lg" className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <FileText className="w-8 h-8 text-[#F2601A] mr-3" />
                    <CardTitle className="text-xl text-[#003666]">{area.regulation}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">Coverage Areas:</h4>
                  <ul className="space-y-2">
                    {area.coverage.map((item, idx) => (
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

      {/* Remediation Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Remediation Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technologies for effective environmental remediation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remediationTechnologies.map((tech, index) => (
              <Card key={index} variant="default" padding="lg" className="h-full">
                <CardHeader>
                  <div className="text-center mb-4">
                    <Wind className="w-12 h-12 text-[#F2601A] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#003666]">{tech.technology}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-center">{tech.description}</CardDescription>
                  <div className="text-center mt-3">
                    <div className="text-sm font-semibold text-[#F2601A]">Timeframe: {tech.timeframe}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3 text-sm">Applications:</h4>
                  <ul className="space-y-1">
                    {tech.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-[#F2601A] mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Sustainability Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to environmental sustainability and responsible operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                <Leaf className="w-5 h-5 text-[#F2601A] mr-3" />
                <span className="text-[#003666] font-medium">{initiative}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognized certifications ensuring quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <div className="text-[#F2601A] mb-4 flex justify-center">
                  <Award className="w-12 h-12" />
                </div>
                <CardTitle className="text-lg mb-3 text-[#003666]">{cert.name}</CardTitle>
                <CardDescription className="mb-4 text-sm">{cert.description}</CardDescription>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="text-xs font-semibold text-[#003666] mb-1">Scope</div>
                  <div className="text-xs text-gray-600">{cert.scope}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Environmental Response Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to environmental incidents and remediation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Emergency Response</h3>
              <p className="text-gray-600 text-sm">
                Immediate response to environmental incidents and spill containment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Site Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive site investigation and contamination assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Remediation Plan</h3>
              <p className="text-gray-600 text-sm">
                Development of customized remediation strategy and implementation plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Execution of remediation activities with continuous monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Validation</h3>
              <p className="text-gray-600 text-sm">
                Final validation and regulatory approval for site closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Environmental Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact our environmental specialists for immediate response or to discuss your environmental compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Emergency Response
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
              <Phone className="w-5 h-5 mr-2" />
              24/7 Hotline: +61 1800 ROO ENV
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
  title: 'Environmental Services - Roo Petroleum | Spill Response & Remediation',
  description: 'Professional environmental services including spill response, soil remediation, groundwater treatment, and waste management. ISO 14001 certified environmental solutions.',
  keywords: ['environmental services', 'spill response', 'soil remediation', 'groundwater treatment', 'waste management', 'environmental compliance', 'Australia']
};