import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'ELROW TOWN LONDON',
    date: 'August 24, 2025',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    theme: 'Sambodromo de Brasil',
    accentColor: 'elrow-yellow'
  },
  {
    id: 2,
    title: 'ELROW IBIZA',
    date: 'September 15, 2025',
    location: 'Ibiza, Spain',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg',
    theme: 'Rowlympic Games',
    accentColor: 'elrow-purple'
  },
  {
    id: 3,
    title: 'ELROW AMSTERDAM',
    date: 'October 5, 2025',
    location: 'Amsterdam, Netherlands',
    image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg',
    theme: 'Psychedelic Trip',
    accentColor: 'elrow-pink'
  },
  {
    id: 4,
    title: 'ELROW NEW YORK',
    date: 'November 12, 2025',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    theme: 'El Rowcio',
    accentColor: 'elrow-orange'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-elrow-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-elrow-yellow text-elrow-black px-6 py-2 rounded-full font-helvetica font-bold text-sm uppercase tracking-wider mb-6">
            2025 World Tour
          </span>
          <h2 className="text-6xl md:text-7xl font-woodburger text-elrow-black mb-6 tracking-tight">
            UPCOMING EVENTS
          </h2>
          <p className="text-xl text-elrow-black/70 max-w-2xl mx-auto font-helvetica">
            Experience the most immersive electronic music events around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elrow-black via-elrow-black/60 to-transparent"></div>

                <div className={`absolute top-4 right-4 bg-${event.accentColor} text-elrow-black px-4 py-1.5 rounded-full font-helvetica font-bold text-xs uppercase tracking-wide`}>
                  {event.theme}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-woodburger mb-3 group-hover:text-elrow-yellow transition-colors tracking-wide">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm mb-2 text-elrow-cream/90 font-helvetica">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-4 text-elrow-cream/90 font-helvetica">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <button className="w-full bg-elrow-yellow text-elrow-black py-3 rounded-full font-helvetica font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-elrow-orange hover:text-white transition-all">
                  Get Tickets
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-elrow-black font-helvetica font-bold text-base hover:text-elrow-pink transition-colors uppercase tracking-wide">
            View All Events
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
