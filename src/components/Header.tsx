import { Menu, Search, User, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-elrow-black/98 backdrop-blur-sm z-40 border-b border-elrow-yellow/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left section: Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo-shiny-2048x688-removebg-preview.png" // ✅ Correct logo path
              alt="Elrow Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#events" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Events
            </a>
            <a href="#music" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Music
            </a>
            <a href="#sustainability" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Sustainability
            </a>
            <a href="#about" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              About
            </a>
          </nav>

          {/* Right section: Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-elrow-yellow text-elrow-black px-6 py-2.5 rounded-full font-helvetica font-bold text-sm uppercase tracking-wide hover:bg-elrow-orange hover:text-white transition-all transform hover:scale-105">
              Get Tickets
            </button>

            {/* Mobile Menu Button (Now on Right) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-elrow-cream hover:text-elrow-yellow transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-elrow-black border-t border-elrow-yellow/30">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a href="#events" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Events
            </a>
            <a href="#music" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Music
            </a>
            <a href="#sustainability" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              Sustainability
            </a>
            <a href="#about" className="text-elrow-cream hover:text-elrow-yellow transition-colors font-helvetica font-medium text-sm uppercase tracking-wide">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
