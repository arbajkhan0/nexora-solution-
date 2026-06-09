import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

/**
 * Pricing Section - Four professional pricing tiers
 * Design: Cyberpunk Minimalism - Tiered pricing with clear value proposition
 */
export default function Pricing() {
  const plans = [
    {
      name: 'Starter Plan',
      subtitle: 'Basic Website',
      priceRange: '₹7,999',
      description: 'Perfect for small businesses and local shops',
      bestFor: 'Small businesses, local shops',
      features: [
        '1–3 pages website',
        'Mobile responsive design',
        'Basic UI design',
        'Contact form',
        'WhatsApp integration',
        'Basic support',
      ],
      cta: 'Get Started',
      highlighted: false,
      icon: '🌟',
    },
    {
      name: 'Growth Plan',
      subtitle: 'Professional Website',
      priceRange: '₹21,999',
      description: 'Ideal for growing businesses and startups',
      bestFor: 'Growing businesses, startups',
      features: [
        '5–10 pages website',
        'Premium UI/UX design',
        'SEO optimization (basic)',
        'Fast loading speed',
        'Lead capture forms',
        'WhatsApp + email integration',
        'Monthly analytics',
        'Priority support',
      ],
      cta: 'Most Popular',
      highlighted: true,
      icon: '🚀',
    },
    {
      name: 'Pro Plan',
      subtitle: 'Business + Automation',
      priceRange: '₹54,999',
      description: 'For serious businesses ready to scale',
      bestFor: 'Serious businesses',
      features: [
        'Full custom website',
        'Advanced UI/UX design',
        'AI chatbot (basic automation)',
        'CRM / lead system',
        'SEO setup & optimization',
        'Speed + performance optimization',
        'Advanced analytics dashboard',
        'Dedicated support',
        'Monthly optimization reviews',
      ],
      cta: 'Unlock Growth',
      highlighted: false,
      icon: '⚡',
    },
    {
      name: 'Premium Plan',
      subtitle: 'AI Automation Agency Level',
      priceRange: '₹135,999',
      description: 'Enterprise-grade solutions for high-ticket clients',
      bestFor: 'High-ticket clients, enterprises',
      features: [
        'Fully custom website',
        'Advanced AI chatbot',
        'Automation workflows',
        'Dashboard / admin panel',
        'API integrations',
        'Priority 24/7 support',
        'Custom features & modules',
        'Advanced security setup',
        'Quarterly strategy reviews',
        'White-label options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
      icon: '👑',
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

  const planVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            💰 Best Pricing
            <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              For Your Website
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Scale up anytime as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={planVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                  : 'border border-border hover:border-cyan-500/30'
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-cyan-500/10 via-magenta-500/5 to-background'
                    : 'bg-background/50'
                }`}
              />

              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Content */}
              <div className="relative p-6 space-y-6 h-full flex flex-col">
                {/* Icon & Title */}
                <div>
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-cyan-400 font-semibold">
                    {plan.subtitle}
                  </p>
                  <p className="text-foreground/60 text-xs mt-2">
                    {plan.bestFor}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                    {plan.priceRange}
                  </div>
                  <p className="text-xs text-foreground/60">
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/919519631505?text=Hi%20NEXORA%20Solution%2C%20I%20am%20interested%20in%20your%20pricing%20plans"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-2 px-4 rounded-lg font-bold transition-all text-center cursor-pointer text-sm ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white hover:from-cyan-400 hover:to-magenta-400'
                      : 'border-2 border-foreground/30 text-foreground hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {plan.cta}
                </motion.a>

                {/* Features */}
                <div className="space-y-2 border-t border-border pt-6 flex-1">
                  {plan.features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fidx * 0.03 }}
                      className="flex items-start gap-2"
                    >
                      <Check size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-xs">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-background/50 border border-border rounded-2xl">
            <p className="text-foreground/80 mb-4">
              Not sure which plan is right for you?
            </p>
            <motion.a
              href="https://wa.me/919519631505?text=Hi%20NEXORA%20Solution%2C%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Get a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
