const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-pride-red text-white font-bold text-2xl px-4 py-2 rounded-lg inline-block mb-4">
              PRIDE
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all Chartered Accountant services. Professional, reliable, and committed to your financial success.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ITR Filing</li>
              <li>GST Filing</li>
              <li>TDS Returns</li>
              <li>Audit Services</li>
              <li>Accounting</li>
              <li>Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Client Portal</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@pride.ca</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 123 Finance Street, Mumbai, India</li>
              <li>🕐 Mon-Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 PRIDE Chartered Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

