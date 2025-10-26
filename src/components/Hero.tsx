import { Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-elrow-black">
      <div className="absolute inset-0 bg-gradient-to-br from-elrow-purple/30 via-elrow-pink/20 to-elrow-orange/30">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const colors = ['bg-elrow-yellow', 'bg-elrow-purple', 'bg-elrow-orange', 'bg-elrow-pink'];
          const color = colors[i % colors.length];
          return (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 15}s`,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full ${color} opacity-40`}
                style={{
                  filter: 'blur(1px)',
                }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 pt-2">
          <span className="inline-block bg-elrow-yellow text-elrow-black px-6 py-2 rounded-full font-helvetica font-bold text-sm uppercase tracking-wider">
            World Tour 2025
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-woodburger text-elrow-cream mb-6 tracking-tight leading-none">
          LALALAND
          <span className="block text-elrow-yellow mt-2">
            FLEA MARKKET 
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-elrow-cream/90 mb-12 font-helvetica font-light max-w-3xl mx-auto leading-relaxed">
          The world's craziest party experience. Join thousands at our electrifying events worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-elrow-yellow text-elrow-black px-10 py-4 rounded-full font-helvetica font-bold text-base uppercase tracking-wide hover:bg-elrow-orange hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-elrow-yellow/50">
            Explore Events
          </button>
          <button className="flex items-center gap-3 bg-white/5 backdrop-blur-sm text-elrow-cream px-10 py-4 rounded-full font-helvetica font-bold text-base uppercase tracking-wide border-2 border-elrow-cream/30 hover:border-elrow-yellow hover:bg-white/10 transition-all">
            <Play size={18} fill="currentColor" />
            Watch Video
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-woodburger text-elrow-yellow mb-2">150+</div>
            <div className="text-sm font-helvetica text-elrow-cream/70 uppercase tracking-wide">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-woodburger text-elrow-yellow mb-2">2M+</div>
            <div className="text-sm font-helvetica text-elrow-cream/70 uppercase tracking-wide">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-woodburger text-elrow-yellow mb-2">15</div>
            <div className="text-sm font-helvetica text-elrow-cream/70 uppercase tracking-wide">Years</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="text-elrow-yellow" size={32} />
      </div>
    </section>
  );
}
