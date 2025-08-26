import Layout from '@/components/layout/Layout';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

export default function SignInPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003666] to-[#004080] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Access your account and manage your fuel services
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Sign in to view your orders, track deliveries, manage billing, and access exclusive customer resources.
            </p>
          </div>
        </div>
      </section>

      {/* Sign In Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-[#F2601A] focus:ring-[#F2601A] border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="text-sm">
                      <a href="#" className="text-[#F2601A] hover:text-[#E5551A] font-medium">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Sign In
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter>
                <div className="text-center w-full">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="text-[#F2601A] hover:text-[#E5551A] font-medium">
                      Contact us to get started
                    </a>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-4">
              Customer Portal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manage your fuel services efficiently with our comprehensive customer portal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <CardTitle className="text-xl mb-3">Order Management</CardTitle>
              <CardDescription>
                View order history, track current deliveries, and schedule future fuel deliveries with ease.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <CardTitle className="text-xl mb-3">Billing & Invoices</CardTitle>
              <CardDescription>
                Access invoices, view payment history, and manage billing preferences in one convenient location.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <CardTitle className="text-xl mb-3">Mobile Access</CardTitle>
              <CardDescription>
                Access your account from any device with our mobile-responsive customer portal.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <CardTitle className="text-xl mb-3">Usage Analytics</CardTitle>
              <CardDescription>
                Monitor fuel consumption patterns and optimize your usage with detailed analytics and reports.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">🔔</div>
              <CardTitle className="text-xl mb-3">Notifications</CardTitle>
              <CardDescription>
                Receive real-time updates on deliveries, account changes, and important service announcements.
              </CardDescription>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle className="text-xl mb-3">Priority Support</CardTitle>
              <CardDescription>
                Get priority customer support and direct access to your dedicated account manager.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Account Setup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003666] mb-6">
                  New Customer?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join thousands of satisfied customers who trust Roo Petroleum for their fuel needs. 
                  Setting up your account is quick and easy.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#F2601A] mr-2 mt-1">•</span>
                    <span className="text-gray-600">Instant access to online ordering and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2601A] mr-2 mt-1">•</span>
                    <span className="text-gray-600">Dedicated account manager for personalized service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2601A] mr-2 mt-1">•</span>
                    <span className="text-gray-600">Competitive pricing and volume discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2601A] mr-2 mt-1">•</span>
                    <span className="text-gray-600">24/7 emergency fuel delivery service</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="primary">
                    Contact Sales
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Setup Process</CardTitle>
                  <CardDescription>
                    Get started with Roo Petroleum in just a few simple steps
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2601A] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#003666]">Contact Our Team</h4>
                        <p className="text-sm text-gray-600">Reach out to discuss your fuel requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2601A] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#003666]">Account Setup</h4>
                        <p className="text-sm text-gray-600">Complete the simple account registration process</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2601A] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#003666]">Start Ordering</h4>
                        <p className="text-sm text-gray-600">Begin placing orders and managing your fuel services</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-[#003666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our customer support team is here to assist you with account access, 
            technical issues, or any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-555-123-4567" 
              className="bg-[#F2601A] hover:bg-[#E5551A] text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Call Support: (555) 123-4567
            </a>
            <a 
              href="mailto:support@roopetroleum.com" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#003666] px-8 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata = {
  title: 'Sign In - Roo Petroleum Customer Portal',
  description: 'Access your Roo Petroleum customer account to manage orders, track deliveries, view invoices, and get priority support. New customers welcome.',
  keywords: ['roo petroleum login', 'customer portal', 'fuel account', 'order management', 'customer sign in']
};