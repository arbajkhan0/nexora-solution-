import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Section - Client reviews and success stories
 * Design: Cyberpunk Minimalism - Card-based testimonials with ratings
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Inc',
      content: 'NEXORA transformed our business operations. Their AI automation solutions reduced our manual work by 80% and saved us $500K annually.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, CloudSync',
      content: 'The team at NEXORA built our entire SaaS platform from scratch. Their expertise in scalable architecture is unmatched.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, RetailCo',
      content: 'Their chatbot solution handles 50,000+ customer interactions monthly with 95% satisfaction. Absolutely game-changing.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Park',
      role: 'CTO, FinanceHub',
      content: 'Working with NEXORA was seamless. They delivered our project on time, under budget, and exceeded expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Jessica Lee',
      role: 'Product Manager, HealthTech',
      content: 'The level of professionalism and technical expertise is exceptional. Highly recommend for any serious project.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Alex Thompson',
      role: 'Founder, StartupXYZ',
      content: 'From concept to launch, NEXORA guided us through every step. They\'re not just developers, they\'re strategic partners.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real feedback from real clients who've transformed their business with StarAI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={testimonialVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="text-cyan-400"
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-cyan-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-bold text-cyan-400">500+</div>
            <div className="text-foreground/60">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magenta-400">98%</div>
            <div className="text-foreground/60">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-lime-400">50+</div>
            <div className="text-foreground/60">Team Members</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
