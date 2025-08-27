import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { BarChart3, TrendingDown, Leaf, FileText, Phone, CheckCircle, Calculator, Target, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ConsultingPage() {
  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Identify opportunities to reduce energy costs and improve operational efficiency."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Develop sustainable energy strategies that reduce environmental impact."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Compliance",
      description: "Ensure full compliance with Australian energy regulations and standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Planning",
      description: "Long-term energy planning aligned with your business objectives."
    }
  ];

  const consultingServices = [
    {
      title: "Energy Audits & Assessments",
      description: "Comprehensive analysis of your current energy consumption and efficiency.",
      features: ["Detailed energy consumption analysis", "Equipment efficiency assessment", "Cost-benefit analysis", "ROI calculations", "Benchmarking against industry standards"],
      duration: "2-4 weeks"
    },
    {
      title: "Cost Optimization Strategies",
      description: "Develop strategies to reduce energy costs and improve budget planning.",
      features: ["Fuel procurement strategies", "Contract negotiation support", "Budget forecasting", "Risk management", "Market analysis and trends"],
      duration: "1-2 weeks"
    },
    {
      title: "Sustainability Planning",
      description: "Create comprehensive sustainability programs for your organization.",
      features: ["Carbon footprint assessment", "Renewable energy integration", "Environmental impact reduction", "Sustainability reporting", "Green certification support"],
      duration: "3-6 weeks"
    },
    {
      title: "Regulatory Compliance",
      description: "Navigate complex energy regulations and ensure full compliance.",
      features: ["Regulatory requirement analysis", "Compliance gap assessment", "Documentation support", "Audit preparation", "Ongoing compliance monitoring"],
      duration: "1-3 weeks"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Energy optimization for production facilities and industrial operations.",
      savings: "15-30%"
    },
    {
      name: "Transportation",
      description: "Fleet efficiency and fuel management consulting for logistics companies.",
      savings: "10-25%"
    },
    {
      name: "Construction",
      description: "Project-based energy planning and equipment efficiency consulting.",
      savings: "12-28%"
    },
    {
      name: "Agriculture",
      description: "Farm energy management and equipment optimization strategies.",
      savings: "8-20%"
    },
    {
      name: "Mining",
      description: "Heavy equipment energy efficiency and operational optimization.",
      savings: "18-35%"
    },
    {
      name: "Marine",
      description: "Port operations and vessel fuel efficiency consulting services.",
      savings: "10-22%"
    }
  ];

  const deliverables = [
    "Comprehensive Energy Assessment Report",
    "Cost Optimization Recommendations",
    "Implementation Roadmap with Timelines",
    "ROI Analysis and Financial Projections",
    "Regulatory Compliance Checklist",
    "Sustainability Action Plan",
    "Ongoing Monitoring Framework",
    "Training and Support Documentation"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/energyconsulting.png"
            alt="Energy Consulting background"
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
              <BarChart3 className="w-12 h-12 mr-4 text-[#F2601A]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Energy Consulting
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert consulting services to optimize energy consumption and reduce costs
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Our experienced energy consultants help businesses across Australia develop strategic energy management plans, reduce operational costs, and achieve sustainability goals while ensuring regulatory compliance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003666]">
                Download Brochure
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
              Why Choose Our Energy Consulting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your energy management with expert guidance and proven strategies
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

      {/* Consulting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy consulting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003666]">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-2 text-sm font-semibold text-[#F2601A]">
                    Typical Duration: {service.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#003666] mb-3">What&apos;s Included:</h4>
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

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Industry Expertise & Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven results across diverse industry sectors with measurable cost savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} variant="default" padding="lg" className="text-center h-full">
                <CardTitle className="text-xl mb-3 text-[#003666]">{industry.name}</CardTitle>
                <CardDescription className="mb-4">{industry.description}</CardDescription>
                <div className="bg-[#F2601A] text-white rounded-lg p-3">
                  <div className="text-2xl font-bold">{industry.savings}</div>
                  <div className="text-sm">Average Cost Savings</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables to guide your energy management strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#F2601A] mr-3" />
                <span className="text-[#003666] font-medium">{deliverable}</span>
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
              Our Consulting Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to energy optimization and strategic planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business needs, goals, and current energy challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Data Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of energy consumption patterns and costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Strategy Development</h3>
              <p className="text-gray-600 text-sm">
                Creating customized strategies and recommendations for optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Report Delivery</h3>
              <p className="text-gray-600 text-sm">
                Detailed reports with actionable recommendations and implementation plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2601A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#003666] mb-3">Implementation Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support to help implement recommendations and achieve goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Energy Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Schedule a consultation with our energy experts today and discover how we can help reduce your energy costs while improving efficiency and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#F2601A] hover:bg-[#E5551A] text-white">
              Schedule Free Consultation
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
  title: 'Energy Consulting - Roo Petroleum | Energy Optimization & Cost Reduction',
  description: 'Expert energy consulting services to optimize consumption, reduce costs, and improve efficiency. Comprehensive energy audits and sustainability planning across Australia.',
  keywords: ['energy consulting', 'energy audit', 'cost optimization', 'sustainability planning', 'energy efficiency', 'regulatory compliance', 'Australia']
};