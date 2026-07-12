import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, MessageCircle } from 'lucide-react';

export default function GeminiBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm the VCODE AI Assistant, powered by Gemini. How can we help you scale your business today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewAlert, setHasNewAlert] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const getBotResponse = (input) => {
    const query = input.toLowerCase();
    
    if (query.includes('service') || query.includes('offer') || query.includes('do you do') || query.includes('solution')) {
      return "VCODE Technologies offers AI-powered digital marketing, SEO+GEO+AEO search optimization, performance marketing (meta/google ads), custom web & app development, brand creative designs, and marketing automation. Check out our Solutions page for details!";
    }
    
    if (query.includes('education') || query.includes('school') || query.includes('college') || query.includes('institute') || query.includes('stanley')) {
      return "We specialize in scaling educational institutes! For example, we helped Stanley Bastin Educational Services scale overseas enrollments by 340% using custom local landers and AI-powered lead funnels. Let us know if you want a custom enrollment strategy!";
    }
    
    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('location') || query.includes('address') || query.includes('office') || query.includes('kochi') || query.includes('kerala') || query.includes('ernakulam')) {
      return "You can reach us at contact@vcode.in or call/WhatsApp +91 9526 9527 08. Our offices are located in Kochi, Kerala at Kakkanad (KC Arcade) and Infopark Campus (Thapasya Building).";
    }

    if (query.includes('price') || query.includes('cost') || query.includes('charge') || query.includes('rate') || query.includes('quote')) {
      return "Every project is customized! We design growth engineering roadmaps based on your target market (India, UAE, UK, or USA). Let's connect on WhatsApp (+91 9526 9527 08) or through our contact form to get a personalized proposal.";
    }
    
    return "Thanks for reaching out! I am the VCODE AI agent. I can tell you about our Services, Education sector success stories, or our Contact/Location details. What would you like to know?";
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMessage = {
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewAlert(false);
  };

  const quickReplies = [
    "What services do you offer?",
    "How can you scale my educational institute?",
    "What is your contact info & location?"
  ];

  return (
    <>
      {/* Floating Gemini Bot Button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
        <AnimatePresence>
          {hasNewAlert && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-xl border border-cyan-400/20 relative flex items-center space-x-2"
            >
              <span>VCODE AI is Online</span>
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleChat}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="h-14 w-14 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40 cursor-pointer border border-cyan-400/30 relative group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <span className="absolute -inset-1 rounded-full bg-indigo-500/30 opacity-70 animate-ping pointer-events-none group-hover:hidden" />
              <Sparkles className="w-6 h-6 fill-white/10 animate-pulse text-cyan-200" />
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 left-6 z-50 w-[340px] sm:w-[380px] h-[500px] bg-[#0b1329] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-blue-950 to-indigo-950 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center border border-cyan-400/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white flex items-center space-x-1.5">
                    <span>VCODE AI Assistant</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Powered by Gemini
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 custom-scrollbar bg-[#020817]/40">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3.5 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                        : 'bg-slate-800 border border-white/10 text-slate-100 rounded-tl-none shadow-md'
                    }`}
                  >
                    <p className="leading-relaxed font-normal">{msg.text}</p>
                    <span className="block text-[9px] text-slate-400 text-right mt-1.5 font-medium">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-white/10 text-slate-200 rounded-2xl rounded-tl-none p-3.5 flex items-center space-x-1.5">
                    <span className="text-xs text-slate-400 font-medium">Gemini is analyzing</span>
                    <span className="flex space-x-1">
                      <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-bounce delay-100" />
                      <span className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-bounce delay-200" />
                      <span className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce delay-300" />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="p-3 border-t border-white/5 bg-slate-900 space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold px-1">
                Suggested queries
              </span>
              <div className="flex flex-col space-y-1.5">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs text-left px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-white/5 bg-slate-950 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Gemini anything..."
                className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/30 transition"
              />
              <button
                type="submit"
                className="h-9 w-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition active:scale-95 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
