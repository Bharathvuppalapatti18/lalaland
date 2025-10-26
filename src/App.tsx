import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Music from './components/Music';
import Sustainability from './components/Sustainability';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { X } from 'lucide-react';

function App() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="min-h-screen bg-elrow-black">
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 bg-gradient-to-br from-elrow-orange to-elrow-pink text-white p-6 rounded-2xl shadow-2xl max-w-sm animate-slide-in border-2 border-white/20">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-3 right-3 text-white hover:text-elrow-yellow transition-colors"
          >
            <X size={20} />
          </button>
          <h3 className="font-woodburger text-2xl mb-2 tracking-wide">STAY UPDATED!</h3>
          <p className="text-sm mb-4 font-helvetica text-white/90">Get notified about upcoming events</p>
          <button className="w-full bg-white text-elrow-black px-4 py-2.5 rounded-full font-helvetica font-bold text-sm hover:bg-elrow-yellow transition-colors uppercase tracking-wide">
            Enable Notifications
          </button>
        </div>
      )}
      <Header />
      <Hero />
      <About />
      <Events />
      <Music />
      <Sustainability />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
