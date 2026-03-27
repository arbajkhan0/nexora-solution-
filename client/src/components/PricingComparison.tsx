import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Pricing Comparison Component - Interactive table showing feature differences
 * Design: Cyberpunk Minimalism - Detailed comparison with toggle views
 */
export default function PricingComparison() {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const comparisonFeatures = [
    {
      category: 'Website Features',
      features: [
        { name: 'Number of Pages', starter: '1–3', growth: '5–10', pro: 'Unlimited', premium: 'Unlimited' },
        { name: 'UI/UX Design', starter: 'Basic', growth: 'Premium', pro: 'Advanced', premium: 'Fully Custom' },
        { name: 'Mobile Responsive', starter: true, growth: true, pro: true, premium: true },
        { name: 'SSL Certificate', starter: true, growth: true, pro: true, premium: true },
        { name: 'Custom Domain', starter: false, growth: true, pro: true, premium: true },
      ],
    },
    {
      category: 'SEO & Performance',
      features: [
        { name: 'SEO Optimization', starter: false, growth: 'Basic', pro: 'Advanced', premium: 'Enterprise' },
        { name: 'Speed Optimization', starter: false, growth: true, pro: true, premium: true },
        { name: 'Performance Monitoring', starter: false, growth: false, pro: true, premium: true },
        { name: 'Analytics Dashboard', starter: false, growth: 'Basic', pro: 'Advanced', premium: 'Advanced' },
      ],
    },
    {
      category: 'Integration & Automation',
      features: [
        { name: 'WhatsApp Integration', starter: true, growth: true, pro: true, premium: true },
        { name: 'Email Integration', starter: false, growth: true, pro: true, premium: true },
        { name: 'Contact Forms', starter: 'Basic', growth: 'Advanced', pro: 'Advanced', premium: 'Custom' },
        { name: 'Lead Capture System', starter: false, growth: true, pro: true, premium: true },
        { name: 'AI Chatbot', starter: false, growth: false, pro: 'Basic', premium: 'Advanced' },
        { name: 'CRM Integration', starter: false, growth: false, pro: true, premium: true },
        { name: 'API Integrations', starter: false, growth: false, pro: 'Limited', premium: 'Unlimited' },
        { name: 'Automation Workflows', starter: false, growth: false, pro: 'Basic', premium: 'Advanced' },
      ],
    },
    {
      category: 'Support & Maintenance',
      features: [
        { name: 'Email Support', starter: true, growth: true, pro: true, premium: true },
        { name: 'Priority Support', starter: false, growth: true, pro: true, premium: true },
        { name: 'Dedicated Support', starter: false, growth: false, pro: false, premium: true },
        { name: 'Monthly Updates', starter: 'Limited', growth: true, pro: true, premium: true },
        { name: 'Free Hosting Migration', starter: false, growth: false, pro: false, premium: true },
        { name: 'Quarterly Reviews', starter: false, growth: false, pro: true, premium: true },
      ],
    },
    {
      category: 'Advanced Features',
      features: [
        { name: 'Admin Dashboard', starter: false, growth: false, pro: false, premium: true },
        { name: 'Advanced Security', starter: false, growth: false, pro: false, premium: true },
        { name: 'White-Label Options', starter: false, growth: false, pro: false, premium: true },
        { name: 'Custom Features', starter: false, growth: false, pro: false, premium: true },
      ],
    },
  ];

  const plans = [
    { name: 'Starter', price: '₹4,999 – ₹9,999', icon: '🌟' },
    { name: 'Growth', price: '₹12,999 – ₹24,999', icon: '🚀', popular: true },
    { name: 'Pro', price: '₹29,999 – ₹59,999', icon: '⚡' },
    { name: 'Premium', price: '₹75,000 – ₹2,00,000+', icon: '👑' },
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={20} className="text-cyan-400 mx-auto" />
      ) : (
        <X size={20} className="text-foreground/30 mx-auto" />
      );
    }
    return <span className="text-sm text-foreground/80">{value}</span>;
  };

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

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Detailed Feature
            <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              Comparison
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            See exactly what's included in each plan. Choose the perfect fit for your business.
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setViewMode('table')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              viewMode === 'table'
                ? 'bg-cyan-500 text-background'
                : 'border border-foreground/30 text-foreground hover:border-cyan-400'
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              viewMode === 'cards'
                ? 'bg-cyan-500 text-background'
                : 'border border-foreground/30 text-foreground hover:border-cyan-400'
            }`}
          >
            Card View
          </button>
        </motion.div>

        {/* Table View */}
        {viewMode === 'table' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="min-w-full border border-border rounded-2xl overflow-hidden bg-background/30 backdrop-blur-sm">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border-b border-border">
                <div className="font-bold text-foreground">Features</div>
                {plans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`text-center font-bold ${plan.popular ? 'text-cyan-400' : 'text-foreground'}`}
                  >
                    <div className="text-2xl mb-1">{plan.icon}</div>
                    <div>{plan.name}</div>
                    <div className="text-xs text-foreground/60 mt-1">{plan.price}</div>
                    {plan.popular && (
                      <div className="text-xs text-cyan-400 mt-2 font-semibold">MOST POPULAR</div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Table Rows */}
              {comparisonFeatures.map((category, catIdx) => (
                <div key={catIdx}>
                  {/* Category Header */}
                  <div className="grid grid-cols-5 gap-4 p-4 bg-background/50 border-b border-border">
                    <div className="font-bold text-cyan-400 text-sm">{category.category}</div>
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>

                  {/* Features */}
                  {category.features.map((feature, feaIdx) => (
                    <motion.div
                      key={feaIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: feaIdx * 0.02 }}
                      className="grid grid-cols-5 gap-4 p-4 border-b border-border/50 hover:bg-background/30 transition-colors"
                    >
                      <div className="text-foreground/80 text-sm font-medium">{feature.name}</div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.starter)}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.growth)}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.pro)}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.premium)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}

              {/* CTA Row */}
              <div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border-t border-border">
                <div />
                {plans.map((plan, idx) => (
                  <motion.a
                    key={idx}
                    href="https://wa.me/919519631505?text=Hi%20NEXORA%2C%20I%20am%20interested%20in%20your%20pricing%20plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded-lg font-bold transition-all text-center text-sm cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white hover:from-cyan-400 hover:to-magenta-400'
                        : 'border-2 border-foreground/30 text-foreground hover:border-cyan-400 hover:text-cyan-400'
                    }`}
                  >
                    Choose Plan
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Card View */}
        {viewMode === 'cards' && (
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl overflow-hidden border transition-all ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                    : 'border-border hover:border-cyan-500/30'
                }`}
              >
                <div className="bg-background/50 p-6 space-y-4">
                  <div>
                    <div className="text-4xl mb-2">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mt-1">{plan.price}</p>
                    {plan.popular && (
                      <p className="text-xs text-cyan-400 mt-2 font-bold">MOST POPULAR</p>
                    )}
                  </div>

                  <div className="space-y-3 border-t border-border pt-4">
                    {comparisonFeatures.map((category, catIdx) =>
                      category.features.map((feature, feaIdx) => {
                        const planKey = plan.name.toLowerCase() as 'starter' | 'growth' | 'pro' | 'premium';
                        const value = feature[planKey];
                        return (
                          <div key={`${catIdx}-${feaIdx}`} className="flex items-center gap-2">
                            {typeof value === 'boolean' ? (
                              value ? (
                                <Check size={16} className="text-cyan-400 flex-shrink-0" />
                              ) : (
                                <X size={16} className="text-foreground/30 flex-shrink-0" />
                              )
                            ) : (
                              <Check size={16} className="text-cyan-400 flex-shrink-0" />
                            )}
                            <span className="text-xs text-foreground/80">{feature.name}</span>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <motion.a
                    href="https://wa.me/919519631505?text=Hi%20NEXORA%2C%20I%20am%20interested%20in%20your%20pricing%20plans"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 px-4 rounded-lg font-bold transition-all text-center text-sm cursor-pointer block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-magenta-500 text-white hover:from-cyan-400 hover:to-magenta-400'
                        : 'border-2 border-foreground/30 text-foreground hover:border-cyan-400 hover:text-cyan-400'
                    }`}
                  >
                    Choose Plan
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
