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
      links: [
        { label: 'Web Development', href: '/#services' },
        { label: 'AI Automation', href: '/#services' },
        { label: 'Chatbot Development', href: '/#services' },
        { label: 'SaaS Development', href: '/#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
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
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/pasted_file_A35DcS_image_ecb8c62b.png"
              alt="NEXORA Logo"
              className="h-20 w-auto mb-4"
            />
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
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4, color: '#00d9ff' }}
                      className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}


        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} NEXORA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
