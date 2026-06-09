import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Navbar Component - Sticky navigation with smooth animations
 * Design: Cyberpunk Minimalism - Dark background with cyan accents
 * Features: Mobile hamburger menu, smooth scroll links, premium styling
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/nexora-solution-logo-eM9BJyeEqyE45VssqsKz3Z.webp"
              alt="NEXORA Solution Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                whileHover={{ color: '#00d9ff', scale: 1.05 }}
                className="text-foreground/70 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#contact')}
              className="px-6 py-2 bg-cyan-500 text-background font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                whileHover={{ x: 5 }}
                className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-cyan-400 hover:bg-card/50 rounded-lg transition-colors text-sm"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#contact')}
              className="w-full mt-4 px-4 py-2 bg-cyan-500 text-background font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
