import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * CTA Section - Strong call-to-action with conversion focus
 * Design: Cyberpunk Minimalism - Full-width gradient with compelling copy
 */
export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient Image */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/cta-gradient-B6mUoGMNT7ChRTW3n8DMf7.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Ready to Automate Your
            <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-lime-400 bg-clip-text text-transparent">
              Business?
            </span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies that have transformed their operations with StarAI. Let's build something amazing together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-magenta-400 transition-all flex items-center justify-center gap-2 group text-lg"
          >
            Get Started Now
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#00d9ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-foreground/30 text-foreground font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors text-lg"
          >
            Schedule Demo
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-foreground/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-magenta-400" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
