import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

const Landing = () => {
  const services = [
    { icon: '📝', title: 'ITR Filing', desc: 'Professional income tax return filing services' },
    { icon: '🧾', title: 'GST Filing', desc: 'Timely GST return filing and compliance' },
    { icon: '💰', title: 'TDS Returns', desc: 'Accurate TDS filing and certificates' },
    { icon: '📊', title: 'Audit Services', desc: 'Comprehensive audit and assurance' },
    { icon: '📈', title: 'Accounting', desc: 'Complete bookkeeping and accounting' },
    { icon: '✅', title: 'Compliance', desc: 'All statutory compliance management' },
  ]

  const howItWorks = [
    { icon: '📞', step: '1', title: 'Contact Us', desc: 'Reach out to our expert team' },
    { icon: '📋', step: '2', title: 'Submit Details', desc: 'Share your documents securely' },
    { icon: '⚙️', step: '3', title: 'We Process', desc: 'Our CAs handle everything' },
    { icon: '✨', step: '4', title: 'Get Results', desc: 'Receive completed documents' },
  ]

  const features = [
    { icon: '🔒', title: 'Secure & Confidential', desc: 'Your data is completely secure' },
    { icon: '👥', title: 'Expert Team', desc: 'Qualified and experienced CAs' },
    { icon: '⚡', title: 'Fast Processing', desc: 'Quick turnaround time' },
    { icon: '💳', title: 'Transparent Pricing', desc: 'No hidden charges' },
    { icon: '📱', title: 'Online Portal', desc: '24/7 access to your documents' },
    { icon: '🎯', title: 'Personalized Service', desc: 'Dedicated CA for each client' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pride-red via-pride-dark-red to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">🏆 India's Trusted CA Firm</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              PRIDE — Your Trusted<br />Chartered Accountant Partner
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional CA services for ITR, GST, TDS, Audit, and complete financial compliance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/login" className="bg-white text-pride-red hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Go to Client Portal →
              </Link>
              <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive CA services for all your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How PRIDE Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PRIDE Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to get started</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-4 relative inline-block">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute -top-2 -right-2 bg-pride-red text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-pride-red text-4xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portal Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Portal Preview</h2>
            <p className="text-xl text-gray-600">Manage all your services in one place</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard</h3>
                <p className="text-sm text-gray-600">Track all your services and payments</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Documents</h3>
                <p className="text-sm text-gray-600">Access all your files anytime</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Billing</h3>
                <p className="text-sm text-gray-600">View invoices and payment status</p>
              </div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/login" className="btn-primary inline-block">
              Access Client Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PRIDE */}
      <section id="why-pride" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PRIDE?</h2>
            <p className="text-xl text-gray-600">We're committed to your financial success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pride-red to-pride-dark-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">Join hundreds of satisfied clients</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/login" className="bg-white text-pride-red hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all shadow-lg">
              Client Login
            </Link>
            <a href="tel:+919876543210" className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all">
              📞 Call +91 98765 43210
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80">📧 info@pride.ca | 📍 123 Finance Street, Mumbai, India</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing

