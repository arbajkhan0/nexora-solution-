import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Phone, Calendar } from 'lucide-react';

/**
 * Enhanced ChatBot Component - Interactive Q&A with booking and WhatsApp
 * Design: Cyberpunk Minimalism - Floating chat with cyan/magenta accents
 */

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
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
      text: 'Hi! 👋 Welcome to NEXORA. How can I help you today?\n\nYou can ask about:\n• Pricing & Plans\n• Our Services\n• Book a Demo\n• WhatsApp Support',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  // Pricing data
  const pricingInfo = {
    starter: { name: 'Starter Plan', price: '₹7,999', features: '1-3 pages, Mobile responsive, Basic UI' },
    growth: { name: 'Growth Plan', price: '₹21,999', features: '5-10 pages, Premium UI/UX, SEO optimization' },
    pro: { name: 'Pro Plan', price: '₹54,999', features: 'Full custom website, AI chatbot, CRM system' },
    premium: { name: 'Premium Plan', price: '₹135,999', features: 'Enterprise solution, Advanced AI, API integrations' },
  };

  // Services data
  const servicesInfo = {
    web: 'Website Development - Custom, responsive websites tailored to your business needs',
    ai: 'AI Automation - Streamline operations with intelligent automation workflows',
    chatbot: 'Chatbot Development - AI-powered chatbots for customer engagement',
    saas: 'SaaS Development - Build scalable software solutions',
    optimization: 'Performance Optimization - Speed, security, and SEO improvements',
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Pricing queries
    if (message.includes('pricing') || message.includes('price') || message.includes('cost')) {
      return `💰 **Our Pricing Plans:**\n\n1. ${pricingInfo.starter.name} - ${pricingInfo.starter.price}\n   ${pricingInfo.starter.features}\n\n2. ${pricingInfo.growth.name} - ${pricingInfo.growth.price}\n   ${pricingInfo.growth.features}\n\n3. ${pricingInfo.pro.name} - ${pricingInfo.pro.price}\n   ${pricingInfo.pro.features}\n\n4. ${pricingInfo.premium.name} - ${pricingInfo.premium.price}\n   ${pricingInfo.premium.features}\n\nWould you like to book a demo to discuss which plan suits you best?`;
    }

    if (message.includes('starter')) {
      return `🌟 **${pricingInfo.starter.name}** - ${pricingInfo.starter.price}\n\nFeatures:\n• ${pricingInfo.starter.features}\n• Contact form & WhatsApp integration\n• Basic support\n\nPerfect for small businesses! Ready to get started?`;
    }

    if (message.includes('growth')) {
      return `🚀 **${pricingInfo.growth.name}** - ${pricingInfo.growth.price}\n\nFeatures:\n• ${pricingInfo.growth.features}\n• Lead capture forms\n• Monthly analytics\n• Priority support\n\nOur most popular plan! Book a demo to learn more.`;
    }

    if (message.includes('pro')) {
      return `⚡ **${pricingInfo.pro.name}** - ${pricingInfo.pro.price}\n\nFeatures:\n• ${pricingInfo.pro.features}\n• Automation workflows\n• Dashboard & admin panel\n• Priority support\n\nGreat for serious businesses! Let's discuss your needs.`;
    }

    if (message.includes('premium')) {
      return `👑 **${pricingInfo.premium.name}** - ${pricingInfo.premium.price}\n\nFeatures:\n• ${pricingInfo.premium.features}\n• White-label options\n• Custom integrations\n• 24/7 priority support\n\nEnterprise-grade solutions! Book a consultation.`;
    }

    // Services queries
    if (message.includes('service') || message.includes('what do you offer')) {
      return `🎯 **Our Services:**\n\n1. ${servicesInfo.web}\n2. ${servicesInfo.ai}\n3. ${servicesInfo.chatbot}\n4. ${servicesInfo.saas}\n5. ${servicesInfo.optimization}\n\nWhich service interests you most?`;
    }

    if (message.includes('website') || message.includes('web development')) {
      return `🌐 ${servicesInfo.web}\n\nWe create:\n• Responsive, mobile-friendly sites\n• Fast-loading, SEO-optimized pages\n• Custom designs aligned with your brand\n• WhatsApp & email integration\n\nReady to build your website? Let's chat!`;
    }

    if (message.includes('ai') || message.includes('automation')) {
      return `🤖 ${servicesInfo.ai}\n\nWe automate:\n• Lead generation & nurturing\n• Customer support workflows\n• Data processing & analysis\n• Business process optimization\n\nLet's discuss your automation needs!`;
    }

    if (message.includes('chatbot')) {
      return `💬 ${servicesInfo.chatbot}\n\nOur chatbots:\n• Answer customer questions 24/7\n• Qualify and capture leads\n• Integrate with WhatsApp & email\n• Learn from interactions\n\nInterested in a chatbot for your business?`;
    }

    // Booking/Demo queries
    if (message.includes('book') || message.includes('demo') || message.includes('call') || message.includes('meeting')) {
      return `📅 **Book a Free Demo**\n\nWe'd love to discuss your project! Choose your preferred method:\n\n1. **WhatsApp Chat** - Quick discussion\n2. **Video Call** - In-depth consultation\n3. **Email** - Detailed proposal\n\nClick the button below to connect via WhatsApp or let me know your preference!`;
    }

    // WhatsApp/Contact queries
    if (message.includes('whatsapp') || message.includes('contact') || message.includes('support')) {
      return `📱 **Connect with Us**\n\nWhatsApp: +91 9519631505\nEmail: ak7852460@gmail.com\nLocation: Lucknow, India\n\nWe're available Monday-Friday, 9 AM - 6 PM IST.\n\nClick the WhatsApp button below to start chatting now!`;
    }

    // Default response
    return `Thanks for your question! 😊\n\nI can help you with:\n• 💰 Pricing information\n• 🎯 Service details\n• 📅 Demo booking\n• 📱 Contact information\n\nWhat would you like to know?`;
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
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleQuickReply = (query: string) => {
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
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: generateBotResponse(query),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
      }, 500);
    }, 100);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi NEXORA, I want to get a free website and AI automation demo project.');
    window.open(`https://wa.me/919519631505?text=${message}`, '_blank');
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
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all group"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
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
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-24px)] bg-background border border-border rounded-2xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border-b border-border px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">NEXORA Assistant</h3>
                  <p className="text-xs text-foreground/60">Always here to help</p>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96 bg-background/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-foreground'
                        : 'bg-magenta-500/10 border border-magenta-500/30 text-foreground/90'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
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

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="px-4 py-3 border-t border-border space-y-2">
                <p className="text-xs text-foreground/60 font-semibold">Quick replies:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickReply('Tell me about pricing')}
                    className="text-xs bg-cyan-500/10 border border-cyan-500/30 text-foreground/80 px-3 py-2 rounded hover:bg-cyan-500/20 transition-colors"
                  >
                    💰 Pricing
                  </button>
                  <button
                    onClick={() => handleQuickReply('What services do you offer')}
                    className="text-xs bg-magenta-500/10 border border-magenta-500/30 text-foreground/80 px-3 py-2 rounded hover:bg-magenta-500/20 transition-colors"
                  >
                    🎯 Services
                  </button>
                  <button
                    onClick={() => handleQuickReply('Book a demo')}
                    className="text-xs bg-lime-500/10 border border-lime-500/30 text-foreground/80 px-3 py-2 rounded hover:bg-lime-500/20 transition-colors"
                  >
                    📅 Demo
                  </button>
                  <button
                    onClick={() => handleQuickReply('Contact information')}
                    className="text-xs bg-foreground/5 border border-foreground/20 text-foreground/80 px-3 py-2 rounded hover:bg-foreground/10 transition-colors"
                  >
                    📱 Contact
                  </button>
                </div>
              </div>
            )}

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
                onClick={handleWhatsAppClick}
                className="w-full py-2 bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-semibold rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
