import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Phone, Calendar, CheckCircle } from 'lucide-react';

/**
 * Enhanced ChatBot Component - NEXORA Assistant
 * Design: Cyberpunk Minimalism - Intelligent customer service chatbot
 * Features: Smart Q&A, lead capture, demo booking, WhatsApp integration
 */

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  actions?: Array<{ label: string; action: string }>;
}

interface ChatBotProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function EnhancedChatBot({ isOpen: initialOpen = false, onOpen, onClose }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: '👋 Hi there! Welcome to NEXORA!\n\nI\'m your AI Assistant, and I\'m here to help you find the perfect solution for your business.\n\n✨ What brings you here today?',
      timestamp: new Date(),
      actions: [
        { label: '💰 View Pricing', action: 'pricing' },
        { label: '🎯 Our Services', action: 'services' },
        { label: '📅 Book Demo', action: 'demo' },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (initialOpen !== isOpen) {
      setIsOpen(initialOpen);
    }
  }, [initialOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  // Comprehensive knowledge base
  const knowledgeBase = {
    pricing: {
      starter: {
        name: 'Starter Plan',
        price: '₹7,999',
        features: ['1-3 pages', 'Mobile responsive', 'Basic UI design', 'Contact form', 'WhatsApp integration'],
        best_for: 'Small businesses & local shops',
        description: 'Perfect entry-level solution to establish your online presence',
      },
      growth: {
        name: 'Growth Plan',
        price: '₹21,999',
        features: ['5-10 pages', 'Premium UI/UX', 'SEO optimization', 'Fast loading', 'Lead capture forms', 'Email integration'],
        best_for: 'Growing businesses & startups',
        description: 'Our most popular plan - ideal for scaling your business',
      },
      pro: {
        name: 'Pro Plan',
        price: '₹54,999',
        features: ['Full custom website', 'Advanced UI/UX', 'AI chatbot', 'CRM system', 'SEO setup', 'Performance optimization'],
        best_for: 'Serious businesses',
        description: 'Comprehensive solution with automation and advanced features',
      },
      premium: {
        name: 'Premium Plan',
        price: '₹135,999',
        features: ['Enterprise website', 'Advanced AI chatbot', 'Automation workflows', 'Dashboard/admin panel', 'API integrations', '24/7 priority support'],
        best_for: 'Enterprise & high-ticket clients',
        description: 'Ultimate solution with full customization and priority support',
      },
    },
    services: {
      web: {
        name: 'Website Development',
        icon: '🌐',
        description: 'Custom, responsive websites tailored to your business',
        features: ['Modern design', 'Mobile-first approach', 'SEO optimized', 'Fast loading speeds', 'Security focused'],
      },
      ai: {
        name: 'AI Automation',
        icon: '🤖',
        description: 'Streamline operations with intelligent automation',
        features: ['Lead automation', 'Customer workflows', 'Data processing', 'Business optimization', 'Cost reduction'],
      },
      chatbot: {
        name: 'Chatbot Development',
        icon: '💬',
        description: 'AI-powered chatbots for customer engagement',
        features: ['24/7 availability', 'Lead qualification', 'Customer support', 'WhatsApp integration', 'Multi-language support'],
      },
      saas: {
        name: 'SaaS Development',
        icon: '⚙️',
        description: 'Build scalable software solutions',
        features: ['Cloud-based', 'Scalable architecture', 'User management', 'Analytics dashboard', 'API ready'],
      },
      optimization: {
        name: 'Performance Optimization',
        icon: '⚡',
        description: 'Speed, security, and SEO improvements',
        features: ['Page speed optimization', 'Security hardening', 'SEO enhancement', 'Mobile optimization', 'Analytics setup'],
      },
    },
  };

  const generateBotResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();
    const timestamp = new Date();

    // Pricing queries
    if (message.includes('pricing') || message.includes('price') || message.includes('cost') || message.includes('plan')) {
      const pricingText = `💰 **Our Pricing Plans:**\n\n` +
        `**1. ${knowledgeBase.pricing.starter.name}** - ${knowledgeBase.pricing.starter.price}\n` +
        `   ${knowledgeBase.pricing.starter.best_for}\n` +
        `   Features: ${knowledgeBase.pricing.starter.features.join(', ')}\n\n` +
        `**2. ${knowledgeBase.pricing.growth.name}** - ${knowledgeBase.pricing.growth.price}\n` +
        `   ${knowledgeBase.pricing.growth.best_for}\n` +
        `   Features: ${knowledgeBase.pricing.growth.features.join(', ')}\n\n` +
        `**3. ${knowledgeBase.pricing.pro.name}** - ${knowledgeBase.pricing.pro.price}\n` +
        `   ${knowledgeBase.pricing.pro.best_for}\n` +
        `   Features: ${knowledgeBase.pricing.pro.features.join(', ')}\n\n` +
        `**4. ${knowledgeBase.pricing.premium.name}** - ${knowledgeBase.pricing.premium.price}\n` +
        `   ${knowledgeBase.pricing.premium.best_for}\n` +
        `   Features: ${knowledgeBase.pricing.premium.features.join(', ')}\n\n` +
        `Which plan interests you? Or would you like to book a demo to discuss?`;

      return {
        id: Date.now().toString(),
        type: 'bot',
        text: pricingText,
        timestamp,
        actions: [
          { label: '📅 Book Demo', action: 'demo' },
          { label: '❓ Ask More', action: 'help' },
        ],
      };
    }

    if (message.includes('starter')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `🌟 **${knowledgeBase.pricing.starter.name}** - ${knowledgeBase.pricing.starter.price}\n\n${knowledgeBase.pricing.starter.description}\n\n✅ Includes:\n• ${knowledgeBase.pricing.starter.features.join('\n• ')}\n\n👉 Perfect for getting started! Ready to begin?`,
        timestamp,
        actions: [
          { label: '📅 Book Demo', action: 'demo' },
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
        ],
      };
    }

    if (message.includes('growth')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `🚀 **${knowledgeBase.pricing.growth.name}** - ${knowledgeBase.pricing.growth.price}\n\n${knowledgeBase.pricing.growth.description}\n\n✅ Includes:\n• ${knowledgeBase.pricing.growth.features.join('\n• ')}\n\n⭐ This is our most popular choice!`,
        timestamp,
        actions: [
          { label: '📅 Book Demo', action: 'demo' },
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
        ],
      };
    }

    if (message.includes('pro')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `⚡ **${knowledgeBase.pricing.pro.name}** - ${knowledgeBase.pricing.pro.price}\n\n${knowledgeBase.pricing.pro.description}\n\n✅ Includes:\n• ${knowledgeBase.pricing.pro.features.join('\n• ')}\n\n🎯 Great for serious businesses!`,
        timestamp,
        actions: [
          { label: '📅 Book Demo', action: 'demo' },
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
        ],
      };
    }

    if (message.includes('premium')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `👑 **${knowledgeBase.pricing.premium.name}** - ${knowledgeBase.pricing.premium.price}\n\n${knowledgeBase.pricing.premium.description}\n\n✅ Includes:\n• ${knowledgeBase.pricing.premium.features.join('\n• ')}\n\n🏆 Enterprise-grade solutions!`,
        timestamp,
        actions: [
          { label: '📅 Book Demo', action: 'demo' },
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
        ],
      };
    }

    // Services queries
    if (message.includes('service') || message.includes('what do you offer') || message.includes('what can you do')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `🎯 **Our Services:**\n\n` +
          `${knowledgeBase.services.web.icon} **${knowledgeBase.services.web.name}** - ${knowledgeBase.services.web.description}\n\n` +
          `${knowledgeBase.services.ai.icon} **${knowledgeBase.services.ai.name}** - ${knowledgeBase.services.ai.description}\n\n` +
          `${knowledgeBase.services.chatbot.icon} **${knowledgeBase.services.chatbot.name}** - ${knowledgeBase.services.chatbot.description}\n\n` +
          `${knowledgeBase.services.saas.icon} **${knowledgeBase.services.saas.name}** - ${knowledgeBase.services.saas.description}\n\n` +
          `${knowledgeBase.services.optimization.icon} **${knowledgeBase.services.optimization.name}** - ${knowledgeBase.services.optimization.description}\n\nWhich service interests you?`,
        timestamp,
        actions: [
          { label: '🌐 Web Dev', action: 'web' },
          { label: '🤖 AI Automation', action: 'ai' },
          { label: '💬 Chatbot', action: 'chatbot' },
        ],
      };
    }

    if (message.includes('website') || message.includes('web development')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `🌐 **${knowledgeBase.services.web.name}**\n\n${knowledgeBase.services.web.description}\n\n✨ We create:\n• ${knowledgeBase.services.web.features.join('\n• ')}\n\n💡 Perfect for establishing your online presence!`,
        timestamp,
        actions: [
          { label: '💰 View Pricing', action: 'pricing' },
          { label: '📅 Book Demo', action: 'demo' },
        ],
      };
    }

    if (message.includes('ai') || message.includes('automation')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `🤖 **${knowledgeBase.services.ai.name}**\n\n${knowledgeBase.services.ai.description}\n\n🔧 We automate:\n• ${knowledgeBase.services.ai.features.join('\n• ')}\n\n⚡ Save time and increase efficiency!`,
        timestamp,
        actions: [
          { label: '💰 View Pricing', action: 'pricing' },
          { label: '📅 Book Demo', action: 'demo' },
        ],
      };
    }

    if (message.includes('chatbot')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `💬 **${knowledgeBase.services.chatbot.name}**\n\n${knowledgeBase.services.chatbot.description}\n\n🎯 Our chatbots:\n• ${knowledgeBase.services.chatbot.features.join('\n• ')}\n\n📞 Interested in a chatbot for your business?`,
        timestamp,
        actions: [
          { label: '💰 View Pricing', action: 'pricing' },
          { label: '📅 Book Demo', action: 'demo' },
        ],
      };
    }

    // Demo/Booking queries
    if (message.includes('book') || message.includes('demo') || message.includes('call') || message.includes('meeting') || message.includes('schedule')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `📅 **Book Your Free Demo**\n\nI'd love to discuss your project and show you how NEXORA can help!\n\n✨ Choose your preferred method:\n\n1️⃣ **WhatsApp Chat** - Quick discussion (recommended)\n2️⃣ **Video Call** - In-depth consultation\n3️⃣ **Email** - Detailed proposal\n\n📱 WhatsApp: +91 9519631505\n📧 Email: ak7852460@gmail.com\n📍 Location: Lucknow, India\n\nLet's get started! 🚀`,
        timestamp,
        actions: [
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
          { label: '❓ Ask More', action: 'help' },
        ],
      };
    }

    // Contact/Support queries
    if (message.includes('contact') || message.includes('support') || message.includes('whatsapp') || message.includes('email')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: `📱 **Get in Touch with NEXORA**\n\n✅ Multiple ways to reach us:\n\n📱 **WhatsApp**: +91 9519631505\n   (Best for quick chats)\n\n📧 **Email**: ak7852460@gmail.com\n   (For detailed inquiries)\n\n📍 **Location**: Lucknow, India\n\n⏰ **Hours**: Monday-Friday, 9 AM - 6 PM IST\n\nWe're here to help! 🎯`,
        timestamp,
        actions: [
          { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
          { label: '💰 View Pricing', action: 'pricing' },
        ],
      };
    }

    // Default helpful response
    return {
      id: Date.now().toString(),
      type: 'bot',
      text: `Thanks for your question! 😊\n\nI can help you with:\n\n💰 **Pricing** - View our plans and pricing\n🎯 **Services** - Learn what we offer\n📅 **Demo** - Book a free consultation\n📱 **Contact** - Get in touch with us\n❓ **Help** - General assistance\n\nWhat would you like to know?`,
      timestamp,
      actions: [
        { label: '💰 Pricing', action: 'pricing' },
        { label: '🎯 Services', action: 'services' },
        { label: '📅 Demo', action: 'demo' },
      ],
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const handleQuickAction = (action: string) => {
    const actionMap: { [key: string]: string } = {
      pricing: 'Tell me about pricing',
      services: 'What services do you offer',
      demo: 'Book a demo',
      help: 'Can you help me',
      web: 'Tell me about website development',
      ai: 'Tell me about AI automation',
      chatbot: 'Tell me about chatbot development',
      whatsapp: 'whatsapp',
    };

    if (action === 'whatsapp') {
      const message = encodeURIComponent('Hi NEXORA, I want to get a free website and AI automation demo project.');
      window.open(`https://wa.me/919519631505?text=${message}`, '_blank');
      return;
    }

    const query = actionMap[action] || action;
    setInputValue(query);
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: query,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      setTimeout(() => {
        const botResponse = generateBotResponse(query);
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
      }, 800);
    }, 100);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all group"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-24px)] bg-background border border-border rounded-2xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border-b border-border px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">NEXORA Assistant</h3>
                  <p className="text-xs text-foreground/60">🟢 Online & Ready to Help</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-background/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-72 bg-background/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-foreground'
                        : 'bg-magenta-500/10 border border-magenta-500/30 text-foreground/90'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    {message.actions && message.actions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.actions.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickAction(action.action)}
                            className="w-full text-left text-xs bg-cyan-500/10 border border-cyan-500/30 text-foreground/80 px-3 py-2 rounded hover:bg-cyan-500/20 transition-colors"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-magenta-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-3 bg-background/50 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-background/50 border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleQuickAction('whatsapp')}
                className="w-full py-2 bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-semibold rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                💬 Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
