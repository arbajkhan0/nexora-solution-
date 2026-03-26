import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * Pricing Section - Three pricing tiers with feature comparison
 * Design: Cyberpunk Minimalism - Elevated "Pro" plan with glow effect
 */
export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 5 pages',
        'Basic SEO optimization',
        'Mobile responsive',
        'SSL certificate',
        'Monthly updates',
        'Email support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$7,999',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Unlimited pages',
        'Advanced SEO & analytics',
        'AI-powered features',
        'API integrations',
        'Weekly updates',
        'Priority support',
        'Custom domain',
        'Performance optimization',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'Real-time support',
        'Custom training',
        'SLA guarantee',
        'White-label options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="pricing" className="relative py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={planVariants}
              whileHover={plan.highlighted ? { y: -20 } : { y: -5 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 ring-2 ring-cyan-500/50'
                  : ''
              }`}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-cyan-500/10 to-magenta-500/10'
                    : 'bg-background/50'
                }`}
              />

              {/* Border */}
              <div
                className={`absolute inset-0 border-2 rounded-2xl ${
                  plan.highlighted
                    ? 'border-cyan-500/50'
                    : 'border-border'
                }`}
              />

              {/* Badge */}
              {plan.highlighted && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Plan Name */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-cyan-400">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 font-bold rounded-lg transition-colors ${
                    plan.highlighted
                      ? 'bg-cyan-500 text-background hover:bg-cyan-400'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20 border border-foreground/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIdx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-cyan-400" />
                      </div>
                      <span className="text-foreground/70 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60">
            Have questions? <span className="text-cyan-400 font-semibold cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
