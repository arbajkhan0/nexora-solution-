import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Contact form and information
 * Design: Cyberpunk Minimalism - Form with validation and WhatsApp CTA
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@webnox.agency',
      href: 'mailto:hello@webnox.agency',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+12345678900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/1234567890"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500/50 text-green-400 font-bold rounded-lg hover:border-green-400 hover:bg-green-500/10 transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-background/50 border border-border rounded-lg hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60 mb-1">
                          {info.label}
                        </div>
                        <div className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Response Time */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                <span className="font-semibold text-foreground">We're Online</span>
              </div>
              <p className="text-foreground/70 text-sm">
                Typically respond within 2 hours during business hours (9 AM - 6 PM PST)
              </p>
            </motion.div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-cyan-500/20 flex items-center justify-center text-foreground hover:text-cyan-400 transition-colors font-semibold text-sm"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
