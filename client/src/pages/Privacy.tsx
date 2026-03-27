import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

/**
 * Privacy Policy Page
 * Design: Cyberpunk Minimalism
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-foreground/60">Last updated: March 2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background/50 border border-border rounded-2xl p-8 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, phone number, and project details through our contact forms and booking systems. We also collect usage data through cookies and analytics tools to improve our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Your information is used to respond to inquiries, provide services, send updates about our offerings, and improve our website functionality. We never sell or share your personal data with third parties without explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Cookies & Tracking</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies to enhance user experience and analyze website traffic. You can control cookie settings through your browser. Our analytics tools collect anonymous data about how visitors interact with our site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may use third-party services for analytics, email delivery, and payment processing. These services have their own privacy policies. We encourage you to review them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at ak7852460@gmail.com. We will respond to your request within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at ak7852460@gmail.com or call +91 9519631505.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
