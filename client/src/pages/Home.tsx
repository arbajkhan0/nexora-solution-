import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EnhancedChatBot from '@/components/EnhancedChatBot';

/**
 * Home Page - Main landing page integrating all sections
 * Design: Cyberpunk Minimalism with smooth scroll and animations
 */
export default function Home() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const openChatBot = () => {
    setIsChatBotOpen(true);
  };

  const closeChatBot = () => {
    setIsChatBotOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onChatBotOpen={openChatBot} />

        {/* Services Section */}
        <Services />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTA />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot */}
      <EnhancedChatBot isOpen={isChatBotOpen} onOpen={openChatBot} onClose={closeChatBot} />
    </div>
  );
}
