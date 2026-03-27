import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * ChatBot Component - Floating chatbot UI with interactive messages
 * Design: Cyberpunk Minimalism - Minimalist chat interface with glow effects
 */
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! 👋 How can we help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Tell me about pricing',
    'How does AI automation work?',
    'Schedule a demo',
    'View portfolio',
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, userMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: 'Thanks for your message! Our team will get back to you shortly. 🚀',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 500);
    }
  };

  const handleQuickReply = (reply: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: 'Great question! Let me provide you with more information about that. 💡',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-card border-2 border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border-b border-border p-4">
              <h3 className="font-bold text-foreground text-lg">NEXORA Assistant</h3>
              <p className="text-sm text-foreground/60">We typically reply in minutes</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-cyan-500/30 text-foreground border border-cyan-500/50'
                        : 'bg-background/50 text-foreground/80 border border-border'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 border-t border-border space-y-2"
              >
                <p className="text-xs text-foreground/60 font-semibold">Quick replies:</p>
                <div className="space-y-2">
                  {quickReplies.map((reply, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => handleQuickReply(reply)}
                      className="w-full text-left px-3 py-2 text-sm bg-background/50 hover:bg-cyan-500/20 text-foreground/70 hover:text-cyan-400 rounded-lg border border-border/50 hover:border-cyan-500/50 transition-all"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-400 transition-colors"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="text-xs text-foreground/40 text-center">
                Powered by AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
