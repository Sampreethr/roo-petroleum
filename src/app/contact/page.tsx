import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/shared/ContactForm';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Phone, Mail, AlertTriangle, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      primary: '+61 2 8765 4321',
      secondary: 'Monday - Friday: 8:00 AM - 6:00 PM AEST',
      action: 'tel:+61-2-8765-4321'
    },
    {
      title: 'Email',
      icon: <Mail className="w-6 h-6" />,
      primary: 'office@roopetroleum.com.au',
      secondary: 'We respond within 24 hours',
      action: 'mailto:office@roopetroleum.com.au'
    },
    {
      title: 'Emergency',
      icon: <AlertTriangle className="w-6 h-6" />,
      primary: '+61 1800 ROO FUEL',
      secondary: '24/7 emergency support',
      action: 'tel:+61-1800-766-3835'
    }
  ];

  const serviceAreas = [
    {
      name: 'Metropolitan Areas',
      coverage: 'Sydney, Melbourne, Brisbane',
      description: 'Comprehensive fuel supply and distribution services for major metropolitan areas',
      features: ['24/7 Emergency Support', 'Bulk Delivery', 'Fleet Management']
    },
    {
      name: 'Regional Centers',
      coverage: 'Newcastle, Wollongong, Gold Coast',
      description: 'Reliable fuel solutions for regional business and industrial operations',
      features: ['Scheduled Delivery', 'Storage Solutions', 'Technical Support']
    },
    {
      name: 'Industrial Zones',
      coverage: 'Mining, Manufacturing, Agriculture',
      description: 'Specialized fuel services for industrial and commercial applications',
      features: ['Custom Solutions', 'Equipment Maintenance', 'Consulting Services']
    }
  ];

  const faqs = [
    {
      question: 'What types of fuel do you supply?',
      answer: 'We supply a comprehensive range of petroleum products including diesel, gasoline, heating oil, jet fuel, and specialty fuels for various industrial applications.'
    },
    {
      question: 'Do you offer emergency fuel delivery?',
      answer: 'Yes, we will provide 24/7 emergency fuel delivery services once operations begin. Contact our emergency hotline for immediate assistance.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We plan to serve clients across Australia including all major cities and regional areas. Contact us to confirm planned service availability in your specific location.'
    },
    {
      question: 'How do I request a quote?',
      answer: 'You can request a quote by filling out our contact form, calling our main number, or emailing us directly. We typically respond within 24 hours.'
    },
    {
      question: 'Do you provide tank installation services?',
      answer: 'Yes, we offer complete tank installation, maintenance, and decommissioning services. Our certified technicians ensure all work meets safety and regulatory standards.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.png"
            alt="Contact background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
              Get in touch with our petroleum experts
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto drop-shadow-md">
              Ready to discuss your fuel needs? Our dedicated team is here to provide 
              personalized solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} variant="elevated" padding="lg" hover clickable>
                <div className="text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-xl mb-3">{method.title}</CardTitle>
                  <div className="space-y-2">
                    <p className="font-semibold text-[#F2601A]">
                      <a href={method.action} className="hover:underline">
                        {method.primary}
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm showCompanyInfo={false} />

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Planned coverage areas for our comprehensive fuel solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} variant="default" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#003666]">{area.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700">Coverage:</p>
                    <p className="text-gray-600">{area.coverage}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Description:</p>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Key Features:</p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#003666]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our Melbourne office in Truganina
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Address Card */}
            <Card variant="elevated" padding="lg" className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#003666] mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003666]">Melbourne Office</h3>
                  <p className="text-gray-600">Unit 41/2 Fastline Rd, Truganina VIC 3029</p>
                </div>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <Card variant="elevated" padding="none" className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.73532!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65bb7e3f5c5c5%3A0x5045675218ce6e0!2sUnit%2041%2F2%20Fastline%20Rd%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sau!4v1703123456789!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Roo Petroleum Melbourne Office Location"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don&apos;t wait - contact our petroleum experts today and discover how we can 
            help optimize your fuel supply and operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-555-123-4567" 
              className="bg-[#F2601A] hover:bg-[#E5551A] text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Call Now: (555) 123-4567
            </a>
            <a 
              href="mailto:info@roopetroleum.com" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#003666] px-8 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'Contact Us - Roo Petroleum | Get Your Fuel Quote Today',
  description: 'Contact Roo Petroleum for reliable fuel solutions. Call +61 2 8765 4321, email office@roopetroleum.com.au, or visit our Australian locations. 24/7 emergency service available.',
  keywords: ['contact roo petroleum', 'fuel quote', 'petroleum services contact', 'emergency fuel delivery', 'australian fuel supplier']
};