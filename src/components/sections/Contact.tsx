import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="relative">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
          
          {isSubmitted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-3xl">
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 text-center animate-fade-in">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;