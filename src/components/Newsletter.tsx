import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-elrow-black relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-elrow-yellow/20 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-elrow-orange to-elrow-pink rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Mail size={40} className="text-white" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-woodburger text-white mb-6 tracking-tight">
              NEVER MISS A BEAT
            </h2>
            <p className="text-xl text-white/90 mb-10 font-helvetica max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new events, exclusive releases, and special offers
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full text-base font-helvetica focus:outline-none focus:ring-4 focus:ring-white/50 transition-all bg-white text-elrow-black placeholder:text-elrow-black/50"
              />
              <button
                type="submit"
                className="bg-elrow-black text-white px-8 py-4 rounded-full font-helvetica font-bold text-sm uppercase tracking-wide hover:bg-elrow-yellow hover:text-elrow-black transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>

            <p className="text-white/70 text-sm font-helvetica">
              Join over 500,000 subscribers worldwide. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
