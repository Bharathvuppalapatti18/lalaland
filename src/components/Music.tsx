import { Music as MusicIcon, Play } from 'lucide-react';

const tracks = [
  {
    id: 1,
    title: 'Summer Madness',
    artist: 'Elrow Residents',
    cover: 'https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg',
    accentColor: 'elrow-orange'
  },
  {
    id: 2,
    title: 'Psychedelic Dreams',
    artist: 'Various Artists',
    cover: 'https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg',
    accentColor: 'elrow-purple'
  },
  {
    id: 3,
    title: 'Rowlympic Beats',
    artist: 'Elrow Records',
    cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    accentColor: 'elrow-pink'
  },
  {
    id: 4,
    title: 'Brasil Carnival',
    artist: 'DJ Collective',
    cover: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    accentColor: 'elrow-yellow'
  }
];

export default function Music() {
  return (
    <section id="music" className="py-24 bg-elrow-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MusicIcon className="text-elrow-yellow" size={40} />
          </div>
          <h2 className="text-6xl md:text-7xl font-woodburger text-elrow-cream mb-6 tracking-tight">
            LATEST RELEASES
          </h2>
          <p className="text-xl text-elrow-cream/70 max-w-2xl mx-auto font-helvetica">
            Dive into our carefully curated collection of electronic beats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative overflow-hidden rounded-3xl bg-elrow-black/50 cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 border-elrow-cream/10 hover:border-elrow-yellow"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-elrow-black/60 group-hover:bg-elrow-black/40 transition-colors"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-elrow-yellow rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110">
                    <Play size={24} fill="#101010" className="text-elrow-black ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-elrow-cream font-helvetica font-bold text-lg mb-1 group-hover:text-elrow-yellow transition-colors">
                  {track.title}
                </h3>
                <p className="text-elrow-cream/60 text-sm font-helvetica">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-elrow-purple to-elrow-pink rounded-3xl p-12 md:p-16 text-center">
          <h3 className="text-4xl md:text-5xl font-woodburger text-white mb-4 tracking-wide">
            STREAM ON YOUR FAVORITE PLATFORM
          </h3>
          <p className="text-white/90 mb-10 text-lg font-helvetica">
            Available on Spotify, Apple Music, SoundCloud, and more
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-elrow-black px-8 py-3 rounded-full font-helvetica font-bold uppercase tracking-wide hover:bg-elrow-yellow transition-colors text-sm">
              Spotify
            </button>
            <button className="bg-white text-elrow-black px-8 py-3 rounded-full font-helvetica font-bold uppercase tracking-wide hover:bg-elrow-yellow transition-colors text-sm">
              Apple Music
            </button>
            <button className="bg-white text-elrow-black px-8 py-3 rounded-full font-helvetica font-bold uppercase tracking-wide hover:bg-elrow-yellow transition-colors text-sm">
              SoundCloud
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
