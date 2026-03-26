import { motion } from 'framer-motion';
import { Code2, Zap, MessageSquare, Rocket, Plug, Brain } from 'lucide-react';

/**
 * Services Section - Showcase agency services with animated cards
 * Design: Cyberpunk Minimalism - Staggered card grid with glow effects
 */
export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Custom, high-performance websites built with modern technologies. Responsive, fast, and SEO-optimized.',
      color: 'cyan',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline workflows and reduce manual tasks by up to 80%.',
      color: 'magenta',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots that handle customer support 24/7 with natural language processing.',
      color: 'lime',
    },
    {
      icon: Rocket,
      title: 'SaaS Development',
      description: 'Scalable SaaS platforms with multi-tenant architecture and enterprise-grade security.',
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and optimized performance across all devices and browsers.',
      color: 'lime',
    },
  ];

  const colorMap = {
    cyan: { border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:border-cyan-400' },
    magenta: { border: 'border-magenta-500/30', text: 'text-magenta-400', hover: 'hover:border-magenta-400' },
    lime: { border: 'border-lime-500/30', text: 'text-lime-400', hover: 'hover:border-lime-400' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/services-bg-BgfRFX7gNgQLex7tewf2Ft.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs. From web development to AI automation, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const colors = colorMap[service.color as keyof typeof colorMap];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-8 bg-card/50 backdrop-blur-sm border-2 ${colors.border} ${colors.hover} rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 flex items-center justify-center ${colors.text}`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm pt-4`}
                  >
                    Learn More →
                  </motion.div>
                </div>

                {/* Border glow effect */}
                <div className={`absolute inset-0 border-2 ${colors.border} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Diagonal Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-card"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
