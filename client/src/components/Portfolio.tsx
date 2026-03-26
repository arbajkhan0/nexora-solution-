import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Portfolio Section - Showcase completed projects
 * Design: Cyberpunk Minimalism - Alternating layout with project cards
 */
export default function Portfolio() {
  const projects = [
    {
      title: 'TechFlow - AI Automation Platform',
      description: 'Enterprise AI automation platform that reduced manual workflows by 85% for a Fortune 500 company.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/services-bg-BgfRFX7gNgQLex7tewf2Ft.webp',
      tags: ['AI', 'Automation', 'Enterprise'],
      link: '#',
    },
    {
      title: 'CloudSync - SaaS Platform',
      description: 'Multi-tenant SaaS platform serving 10,000+ users with real-time collaboration features.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/cta-gradient-B6mUoGMNT7ChRTW3n8DMf7.webp',
      tags: ['SaaS', 'React', 'Node.js'],
      link: '#',
    },
    {
      title: 'ChatBot Pro - Customer Support AI',
      description: 'AI-powered chatbot handling 50,000+ customer interactions monthly with 95% satisfaction rate.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663475442123/WmDkCRp96DmbfdGoCksB9S/hero-gradient-StDHPMQtizTLwGTJ5REt8M.webp',
      tags: ['AI', 'Chatbot', 'NLP'],
      link: '#',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="portfolio" className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform with technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-16"
        >
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                variants={projectVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative h-64 md:h-80 rounded-2xl overflow-hidden border border-border ${
                    !isEven ? 'md:col-start-2' : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: isEven ? 10 : -10 }}
                  className={`space-y-4 ${!isEven ? 'md:col-start-1' : ''}`}
                >
                  <h3 className="text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-foreground/30 text-foreground font-bold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-foreground/60 mb-6">
            Want to see more projects?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
