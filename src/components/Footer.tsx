import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-elrow-black border-t border-elrow-yellow/20 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-4xl font-woodburger text-elrow-yellow mb-4 tracking-wider">
              ELROW
            </h3>
            <p className="text-elrow-cream/70 mb-6 font-helvetica text-sm leading-relaxed">
              The world's most immersive party experience. Creating unforgettable moments since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-elrow-cream/10 rounded-full flex items-center justify-center text-elrow-cream hover:bg-elrow-yellow hover:text-elrow-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-elrow-cream/10 rounded-full flex items-center justify-center text-elrow-cream hover:bg-elrow-yellow hover:text-elrow-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-elrow-cream/10 rounded-full flex items-center justify-center text-elrow-cream hover:bg-elrow-yellow hover:text-elrow-black transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-elrow-cream/10 rounded-full flex items-center justify-center text-elrow-cream hover:bg-elrow-yellow hover:text-elrow-black transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-elrow-cream font-helvetica font-bold text-sm uppercase tracking-wider mb-4">Events</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Upcoming Events</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Past Events</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Private Events</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Festivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-elrow-cream font-helvetica font-bold text-sm uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Our Story</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Sustainability</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Press</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-elrow-cream font-helvetica font-bold text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">FAQ</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Contact Us</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Ticket Info</a></li>
              <li><a href="#" className="text-elrow-cream/70 hover:text-elrow-yellow transition-colors font-helvetica text-sm">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-elrow-yellow/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-elrow-cream/50 text-sm font-helvetica">
              © 2025 ELROW. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-helvetica">
              <a href="#" className="text-elrow-cream/50 hover:text-elrow-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="text-elrow-cream/50 hover:text-elrow-yellow transition-colors">Cookie Policy</a>
              <a href="#" className="text-elrow-cream/50 hover:text-elrow-yellow transition-colors">Legal Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
