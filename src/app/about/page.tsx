import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import { BRAND_MESSAGING } from '@/lib/constants';
import { Shield, Leaf, Target, User, Handshake } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      experience: 'MBA in Business Administration',
      description: 'Leading Roo Petroleum with vision and expertise in energy solutions.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      experience: 'Certified Logistics Professional',
      description: 'Ensuring seamless operations and timely delivery across all services.'
    },
    {
      name: 'Michael Chen',
      position: 'Technical Manager',
      experience: 'Licensed Professional Engineer',
      description: 'Overseeing technical operations and safety compliance standards.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Establishment',
      description: 'Roo Petroleum was established with a vision to provide reliable fuel solutions.'
    },
    {
      year: 'Q2',
      title: 'Infrastructure Setup',
      description: 'Building state-of-the-art facilities and establishing supply chain partnerships.'
    },
    {
      year: 'Q3',
      title: 'Technology Integration',
      description: 'Implementing advanced logistics and inventory management systems.'
    },
    {
      year: 'Q4',
      title: 'Service Launch',
      description: 'Launching comprehensive fuel solutions and customer service operations.'
    },
    {
      year: '2025',
      title: 'Market Expansion',
      description: 'Expanding operations to serve clients across multiple Australian regions.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.png"
            alt="About Roo Petroleum background"
            fill
            className="object-cover blur-[1px]"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Roo Petroleum
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {BRAND_MESSAGING.tagline}
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Roo Petroleum is committed to becoming a trusted partner in the energy industry,
              providing reliable fuel solutions and exceptional service to businesses across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide reliable, high-quality petroleum products and services that power 
                  businesses and communities while maintaining the highest standards of safety, 
                  environmental responsibility, and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading petroleum solutions provider, recognized for innovation, 
                  sustainability, and exceptional customer service, while contributing to a 
                  cleaner and more efficient energy future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="w-12 h-12 text-[#003666]" />
              </div>
              <CardTitle className="text-lg mb-3">Reliability</CardTitle>
              <CardDescription>
                Consistent, dependable service you can count on, every time.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <Leaf className="w-12 h-12 text-[#003666]" />
              </div>
              <CardTitle className="text-lg mb-3">Sustainability</CardTitle>
              <CardDescription>
                Committed to environmental stewardship and sustainable practices.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <Target className="w-12 h-12 text-[#003666]" />
              </div>
              <CardTitle className="text-lg mb-3">Excellence</CardTitle>
              <CardDescription>
                Striving for the highest quality in products and services.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <Handshake className="w-12 h-12 text-[#003666]" />
              </div>
              <CardTitle className="text-lg mb-3">Integrity</CardTitle>
              <CardDescription>
                Honest, transparent business practices built on trust.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company&apos;s development and launch strategy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#F2601A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <Card variant="outlined" padding="lg" className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the qualified professionals leading Roo Petroleum forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-[#F2601A] font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover how Roo Petroleum can provide the reliable fuel solutions your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#F2601A] hover:bg-[#E5551A] text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Contact Us Today
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#003666] px-8 py-3 rounded-md font-semibold transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'About Us - Roo Petroleum | Reliable Fuel Solutions Provider',
  description: 'Learn about Roo Petroleum&apos;s mission, values, and leadership team. Discover why we&apos;re committed to being your trusted choice for petroleum solutions.',
  keywords: ['about roo petroleum', 'company mission', 'fuel solutions provider', 'energy company leadership', 'petroleum services']
};