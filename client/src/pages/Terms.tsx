import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

/**
 * Terms of Service Page
 * Design: Cyberpunk Minimalism
 */
export default function Terms() {
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
              <h1 className="text-5xl font-bold text-foreground">Terms of Service</h1>
              <p className="text-foreground/60">Last updated: March 2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background/50 border border-border rounded-2xl p-8 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Agreement to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using NEXORA Solution's website and services, you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. Use License</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on NEXORA Solution's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-foreground/80 text-sm mt-3 space-y-2 ml-4">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The materials on NEXORA Solution's website are provided on an 'as is' basis. NEXORA Solution makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Limitations</h2>
                <p className="text-foreground/80 leading-relaxed">
                  In no event shall NEXORA Solution or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NEXORA Solution's website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Accuracy of Materials</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The materials appearing on NEXORA Solution's website could include technical, typographical, or photographic errors. NEXORA Solution does not warrant that any of the materials on its website are accurate, complete, or current. NEXORA Solution may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Links</h2>
                <p className="text-foreground/80 leading-relaxed">
                  NEXORA Solution has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by NEXORA Solution of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Modifications</h2>
                <p className="text-foreground/80 leading-relaxed">
                  NEXORA Solution may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">8. Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3">9. Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at ak7852460@gmail.com or call +91 9519631505.
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
