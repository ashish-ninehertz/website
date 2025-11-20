import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-white/90">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the website platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our platform is designed for educational purposes. Users agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Use the platform only for lawful educational purposes</li>
                <li>Maintain the confidentiality of their account credentials</li>
                <li>Not share account access with unauthorized individuals</li>
                <li>Respect intellectual property rights of all content</li>
                <li>Not engage in any activity that disrupts or interferes with the platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed">
                Users are responsible for maintaining the security of their accounts and passwords. The school cannot and will not be liable for any loss or damage from failure to comply with this security obligation. Users must notify us immediately of any unauthorized use of their account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Content and Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content provided on this platform, including but not limited to text, graphics, logos, images, and software, is the property of the school or its content suppliers and is protected by intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to protecting your privacy. Our collection and use of personal information is governed by our Privacy Policy. By using our platform, you consent to the collection and use of information as outlined in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Academic Integrity</h2>
              <p className="text-gray-600 leading-relaxed">
                Students are expected to maintain academic integrity in all their work. Plagiarism, cheating, or any form of academic dishonesty is strictly prohibited and may result in disciplinary action, including suspension or expulsion from the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                The school shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the platform. We do not guarantee that the platform will be uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification. Continued use of the platform after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our platform immediately, without prior notice, for any reason, including but not limited to breach of these terms. Upon termination, your right to use the platform will immediately cease.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: legal@school.edu</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Education Street, Learning City, ST 12345</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
