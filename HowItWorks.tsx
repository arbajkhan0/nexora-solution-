import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

/**
 * How It Works Section - Process steps with animated timeline
 * Design: Cyberpunk Minimalism - Vertical timeline with step cards
 */
export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We understand your goals, challenges, and vision through in-depth discovery sessions.',
      number: '01',
    },
    {
      icon: Lightbulb,
      title: 'Planning',
      description: 'Our team creates a detailed roadmap and strategy tailored to your specific needs.',
      number: '02',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build your solution using cutting-edge technologies and best practices.',
      number: '03',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support and optimization.',
      number: '04',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="how-it-works" className="relative py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery from start to finish.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-magenta-500 to-lime-500 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400"
                        >
                          <Icon size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-foreground/60 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Circle with Number */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="hidden md:flex justify-center"
                  >
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-cyan-500/50 z-10">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Mobile Number */}
                  <div className="md:hidden flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
