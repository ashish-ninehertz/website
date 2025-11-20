import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At website, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect several types of information to provide and improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and student ID</li>
                <li><strong>Academic Information:</strong> Grades, assignments, course enrollments, and attendance records</li>
                <li><strong>Usage Data:</strong> Log data, device information, IP address, and browsing activity</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>To provide and maintain our educational services</li>
                <li>To manage user accounts and authentication</li>
                <li>To track academic progress and performance</li>
                <li>To communicate important updates and announcements</li>
                <li>To improve our platform and user experience</li>
                <li>To ensure platform security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>With Teachers and Administrators:</strong> To facilitate educational services</li>
                <li><strong>With Parents/Guardians:</strong> For students under 18, to keep them informed of academic progress</li>
                <li><strong>With Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                <li><strong>For Legal Compliance:</strong> When required by law or to protect rights and safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Student Privacy (FERPA Compliance)</h2>
              <p className="text-gray-600 leading-relaxed">
                We comply with the Family Educational Rights and Privacy Act (FERPA) and other applicable education privacy laws. Student education records are protected and only disclosed with proper consent or as permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of non-essential communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance user experience, analyze platform usage, and remember user preferences. You can control cookie settings through your browser, but disabling cookies may affect platform functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform is designed for educational use and may be used by minors. We comply with the Children's Online Privacy Protection Act (COPPA) and obtain parental consent when required. Parents have the right to review, delete, or refuse further collection of their child's information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. Academic records are typically retained according to institutional policies and legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of significant changes via email or platform notification. Your continued use of the platform after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: privacy@school.edu</p>
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
