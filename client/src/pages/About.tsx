import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

/**
 * About Us Page - Company information and mission
 * Design: Cyberpunk Minimalism
 */
export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-foreground">
                About
                <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
                  NEXORA Solution
                </span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Empowering businesses with cutting-edge web development and AI automation solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Info */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background/50 border border-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                At NEXORA Solution, we believe every business deserves access to world-class technology. Our mission is to transform businesses through innovative web development and intelligent AI automation, enabling startups and enterprises to scale faster, work smarter, and achieve unprecedented growth.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background/50 border border-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To become the most trusted partner for businesses seeking digital transformation. We envision a future where every organization, regardless of size, has access to premium technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/50 border border-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Innovation</h3>
                  <p className="text-foreground/80 text-sm">We stay ahead of technology trends to deliver cutting-edge solutions that give our clients competitive advantage.</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Excellence</h3>
                  <p className="text-foreground/80 text-sm">We maintain the highest standards in code quality, design, and customer service across every project.</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Integrity</h3>
                  <p className="text-foreground/80 text-sm">We build lasting relationships through transparency, honesty, and delivering on our promises.</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Partnership</h3>
                  <p className="text-foreground/80 text-sm">We view our clients as partners, invested in their success and committed to their long-term growth.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
              <div className="space-y-2">
                <p className="text-foreground/80">
                  📧 Email: <span className="text-cyan-400 font-semibold">ak7852460@gmail.com</span>
                </p>
                <p className="text-foreground/80">
                  📱 Phone: <span className="text-cyan-400 font-semibold">+91 9519631505</span>
                </p>
                <p className="text-foreground/80">
                  📍 Location: <span className="text-cyan-400 font-semibold">Lucknow, India</span>
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
