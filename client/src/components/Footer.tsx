import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer Component - Premium footer with contact info and social links
 * Design: Cyberpunk Minimalism - Minimal layout with accent colors
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: ['Web Development', 'AI Automation', 'Chatbot Development', 'SaaS Development'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WN</span>
              </div>
              <span className="font-bold text-lg text-foreground">Webnox</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              Building smart websites and AI automation solutions that grow your business.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: '#00d9ff' }}
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#00d9ff' }}
                      className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:hello@starai.agency" className="flex items-center gap-2 text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                <Mail size={16} />
                <span>hello@starai.agency</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2 text-foreground/60 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Webnox. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
