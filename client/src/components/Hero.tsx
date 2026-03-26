import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

/**
 * Hero Section - Premium hero with animated gradient and strong CTA
 * Design: Cyberpunk Minimalism - Asymmetric layout with diagonal gradient background
 * Features: Animated headline, trust badges, dual CTA buttons
 */
export default function Hero() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const trustBadges = [
    { label: '500+', desc: 'Projects Delivered' },
    { label: '50+', desc: 'Team Members' },
    { label: '10M+', desc: 'Revenue Generated' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-background">
      {/* Background Gradient Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/hero-gradient-StDHPMQtizTLwGTJ5REt8M.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
              >
                We Build Smart
                <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
                  Websites & AI
                </span>
                <span className="block">That Grows Your</span>
                <span className="block text-cyan-400">Business</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl"
              >
                From custom web development to intelligent AI automation, we help startups and enterprises scale faster with cutting-edge technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#00d9ff' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-foreground/30 text-foreground font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Play size={20} fill="currentColor" />
                Book Demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {badge.label}
                  </div>
                  <div className="text-sm text-foreground/60 mt-1">
                    {badge.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Elements */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-96"
            >
              {/* Floating cards with glow effect */}
              <motion.div
                className="absolute top-0 right-0 w-48 h-32 bg-card border border-cyan-500/30 rounded-xl p-4 backdrop-blur-sm"
                animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-cyan-400 font-bold text-sm mb-2">AI Automation</div>
                <div className="text-foreground/70 text-xs">Intelligent workflows that save time</div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-48 h-32 bg-card border border-magenta-500/30 rounded-xl p-4 backdrop-blur-sm"
                animate={{ y: [0, 30, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-magenta-400 font-bold text-sm mb-2">Web Development</div>
                <div className="text-foreground/70 text-xs">Modern, fast, and scalable websites</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-md"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
