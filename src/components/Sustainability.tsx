import { Leaf, Recycle, Users, Heart } from 'lucide-react';

const metrics = [
  {
    icon: Recycle,
    value: '87%',
    label: 'Waste Recycled',
    color: 'text-elrow-purple'
  },
  {
    icon: Users,
    value: '2M+',
    label: 'People Reached',
    color: 'text-elrow-pink'
  },
  {
    icon: Leaf,
    value: '100%',
    label: 'Renewable Energy',
    color: 'text-elrow-yellow'
  },
  {
    icon: Heart,
    value: '50K+',
    label: 'Trees Planted',
    color: 'text-elrow-orange'
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-elrow-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-elrow-purple text-white px-6 py-2 rounded-full font-helvetica font-bold text-sm uppercase tracking-wider mb-6">
            Making a Difference
          </span>
          <h2 className="text-6xl md:text-7xl font-woodburger text-elrow-black mb-6 tracking-tight">
            OUR COMMITMENT
          </h2>
          <p className="text-xl text-elrow-black/70 max-w-2xl mx-auto font-helvetica">
            Creating unforgettable experiences while protecting our planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-elrow-black/5"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-elrow-cream flex items-center justify-center">
                  <metric.icon className={metric.color} size={36} strokeWidth={2} />
                </div>
              </div>
              <div className={`text-5xl font-woodburger mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-elrow-black/60 font-helvetica font-medium text-sm uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-elrow-purple rounded-3xl p-10 md:p-12 text-white">
            <Leaf size={48} className="text-elrow-yellow mb-6" />
            <h3 className="text-4xl font-woodburger mb-4 tracking-wide">
              ZERO WASTE MISSION
            </h3>
            <p className="text-white/90 text-base font-helvetica leading-relaxed mb-6">
              We're committed to achieving zero waste at all our events by 2026. Through innovative recycling programs, biodegradable materials, and conscious partnerships, we're leading the way in sustainable entertainment.
            </p>
            <button className="bg-elrow-yellow text-elrow-black px-6 py-3 rounded-full font-helvetica font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-elrow-pink rounded-3xl p-10 md:p-12 text-white">
            <Heart size={48} className="text-elrow-yellow mb-6" />
            <h3 className="text-4xl font-woodburger mb-4 tracking-wide">
              COMMUNITY IMPACT
            </h3>
            <p className="text-white/90 text-base font-helvetica leading-relaxed mb-6">
              Beyond the music, we're building a global community dedicated to positive change. From local charity partnerships to global environmental initiatives, every event makes a difference.
            </p>
            <button className="bg-elrow-yellow text-elrow-black px-6 py-3 rounded-full font-helvetica font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
