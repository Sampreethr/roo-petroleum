import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/shared/ContactForm';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/shared/Card';

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'Phone',
      icon: '📞',
      primary: '+1 (555) 123-4567',
      secondary: 'Monday - Friday: 8:00 AM - 6:00 PM',
      action: 'tel:+1-555-123-4567'
    },
    {
      title: 'Email',
      icon: '✉️',
      primary: 'info@roopetroleum.com',
      secondary: 'We respond within 24 hours',
      action: 'mailto:info@roopetroleum.com'
    },
    {
      title: 'Emergency',
      icon: '🚨',
      primary: '+1 (555) EMERGENCY',
      secondary: '24/7 for existing customers',
      action: 'tel:+1-555-362-7436'
    }
  ];

  const offices = [
    {
      name: 'Headquarters',
      address: '123 Petroleum Drive',
      city: 'Houston, TX 77001',
      phone: '+1 (555) 123-4567',
      email: 'houston@roopetroleum.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      name: 'Regional Office',
      address: '456 Energy Boulevard',
      city: 'Dallas, TX 75201',
      phone: '+1 (555) 234-5678',
      email: 'dallas@roopetroleum.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
    },
    {
      name: 'Distribution Center',
      address: '789 Industrial Parkway',
      city: 'Austin, TX 78701',
      phone: '+1 (555) 345-6789',
      email: 'austin@roopetroleum.com',
      hours: 'Mon-Sat: 7:00 AM - 7:00 PM'
    }
  ];

  const faqs = [
    {
      question: 'What types of fuel do you supply?',
      answer: 'We supply a comprehensive range of petroleum products including diesel, gasoline, heating oil, jet fuel, and specialty fuels for various industrial applications.'
    },
    {
      question: 'Do you offer emergency fuel delivery?',
      answer: 'Yes, we provide 24/7 emergency fuel delivery services for existing customers. Contact our emergency hotline for immediate assistance.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve customers across Texas and surrounding states. Contact us to confirm service availability in your specific location.'
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
      <section className="bg-gradient-to-r from-[#003666] to-[#004080] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get in touch with our petroleum experts
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Ready to discuss your fuel needs? Our experienced team is here to provide 
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

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our convenient locations across Texas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} variant="default" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#003666]">{office.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700">Address:</p>
                    <p className="text-gray-600">
                      {office.address}<br />
                      {office.city}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Phone:</p>
                    <p className="text-gray-600">
                      <a href={`tel:${office.phone}`} className="hover:text-[#F2601A]">
                        {office.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Email:</p>
                    <p className="text-gray-600">
                      <a href={`mailto:${office.email}`} className="hover:text-[#F2601A]">
                        {office.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Hours:</p>
                    <p className="text-gray-600">{office.hours}</p>
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

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Locate our offices and service areas
            </p>
          </div>

          <Card variant="elevated" padding="none" className="max-w-4xl mx-auto">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Interactive map coming soon<br />
                  <span className="text-sm">Contact us for directions to our locations</span>
                </p>
              </div>
            </div>
          </Card>
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
  description: 'Contact Roo Petroleum for reliable fuel solutions. Call (555) 123-4567, email info@roopetroleum.com, or visit our Texas locations. 24/7 emergency service available.',
  keywords: ['contact roo petroleum', 'fuel quote', 'petroleum services contact', 'emergency fuel delivery', 'texas fuel supplier']
};