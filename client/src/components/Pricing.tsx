import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * Pricing Section - Two pricing models with feature comparison
 * Design: Cyberpunk Minimalism - Monthly/Annual and One-Time Lifetime options
 */
export default function Pricing() {
  const plans = [
    {
      name: 'Monthly/Annual',
      price: '₹10,000',
      period: '/year',
      description: 'Flexible subscription for ongoing support and updates',
      features: [
        'Unlimited pages',
        'Advanced SEO optimization',
        'Mobile responsive design',
        'SSL certificate included',
        'Monthly updates & maintenance',
        'Priority email support',
        'Custom domain setup',
        'Performance optimization',
        'Monthly analytics reports',
      ],
      cta: 'Subscribe Now',
      highlighted: true,
    },
    {
      name: 'One-Time Lifetime',
      price: '₹50,000',
      period: 'per project',
      description: 'One-time payment for lifetime ownership and updates',
      features: [
        'Everything in Monthly/Annual',
        'Lifetime ownership',
        'Unlimited future updates',
        'Lifetime technical support',
        'Free hosting migration',
        'Advanced security features',
        'Custom integrations',
        'Priority support channel',
        'Quarterly optimization reviews',
        'No recurring fees',
      ],
      cta: 'Get Lifetime Access',
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
            Simple, Transparent
            <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the plan that works best for your business. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={planVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
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
                <div className="absolute top-4 right-4 px-4 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 space-y-8">
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
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60 text-lg">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/919519631505?text=Hi%20NEXORA%2C%20I%20am%20interested%20in%20the%20pricing%20plan%20-%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-center cursor-pointer ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white hover:from-cyan-400 hover:to-magenta-400'
                      : 'border-2 border-foreground/30 text-foreground hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {plan.cta}
                </motion.a>

                {/* Features */}
                <div className="space-y-3 border-t border-border pt-8">
                  {plan.features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fidx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-cyan-400" />
                      </div>
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Both plans include full technical support, unlimited revisions, and access to our team of experts. 
            <br />
            <span className="text-cyan-400 font-semibold">Contact us for custom enterprise solutions.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
