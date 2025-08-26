import Layout from '@/components/layout/Layout';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/Card';
import { BRAND_MESSAGING } from '@/lib/constants';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      experience: '25+ years in petroleum industry',
      description: 'Leading Roo Petroleum with vision and expertise in energy solutions.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      experience: '20+ years in logistics',
      description: 'Ensuring seamless operations and timely delivery across all services.'
    },
    {
      name: 'Michael Chen',
      position: 'Technical Manager',
      experience: '15+ years in engineering',
      description: 'Overseeing technical operations and safety compliance standards.'
    }
  ];

  const milestones = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Roo Petroleum was established with a vision to provide reliable fuel solutions.'
    },
    {
      year: '2005',
      title: 'Regional Expansion',
      description: 'Expanded operations to serve customers across multiple states.'
    },
    {
      year: '2012',
      title: 'Technology Integration',
      description: 'Implemented advanced logistics and inventory management systems.'
    },
    {
      year: '2018',
      title: 'Sustainability Initiative',
      description: 'Launched environmental sustainability programs and green energy solutions.'
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Modernized operations with digital platforms and enhanced customer experience.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003666] to-[#004080] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Roo Petroleum
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {BRAND_MESSAGING.tagline}
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              For over 25 years, Roo Petroleum has been a trusted partner in the energy industry, 
              providing reliable fuel solutions and exceptional service to businesses nationwide.
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
              <div className="text-4xl mb-4">🛡️</div>
              <CardTitle className="text-lg mb-3">Reliability</CardTitle>
              <CardDescription>
                Consistent, dependable service you can count on, every time.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <CardTitle className="text-lg mb-3">Sustainability</CardTitle>
              <CardDescription>
                Committed to environmental stewardship and sustainable practices.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle className="text-lg mb-3">Excellence</CardTitle>
              <CardDescription>
                Striving for the highest quality in products and services.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">🤝</div>
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company&apos;s growth and evolution
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
              Meet the experienced professionals leading Roo Petroleum forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">👤</span>
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
  title: 'About Us - Roo Petroleum | Reliable Fuel Solutions Since 1998',
  description: 'Learn about Roo Petroleum&apos;s 25+ year history, mission, values, and leadership team. Discover why we&apos;re the trusted choice for petroleum solutions.',
  keywords: ['about roo petroleum', 'company history', 'petroleum industry experience', 'fuel solutions provider', 'energy company leadership']
};