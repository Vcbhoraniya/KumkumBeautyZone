import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinksLeft = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Atelier',
    href: '#about'
  }];

  const navLinksRight = [
  {
    name: 'Gallery',
    href: '#gallery'
  },
  {
    name: 'Rituals',
    href: '#pricing'
  }];

  return (
    <>
      {/* Top Metadata Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-kumkum-ink text-kumkum-parchment text-[10px] uppercase tracking-widest font-medium">
        <span>&mdash; Est. 2020</span>
        <span>Neknam</span>
        <span>A Beauty Zone</span>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-0 bg-kumkum-parchment/95 backdrop-blur-md hairline-b py-4' : 'top-0 md:top-8 bg-transparent py-6'}`}>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-kumkum-ink"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <X size={24} strokeWidth={1} /> :

              <Menu size={24} strokeWidth={1} />
              }
            </button>

            {/* Desktop Left Nav */}
            <nav className="hidden md:flex items-center gap-10 flex-1">
              {navLinksLeft.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest font-medium text-kumkum-inkLight hover:text-kumkum-wine transition-colors relative group">
                
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-kumkum-gold transition-all duration-500 group-hover:w-full"></span>
                </a>
              )}
            </nav>

            {/* Center Logo */}
            <a href="#home" className="flex-shrink-0 text-center md:mx-8">
              <span className="font-heading text-3xl md:text-4xl font-medium text-kumkum-wine tracking-widest uppercase">
                Kumkum Beauty Zone
              </span>
            </a>

            {/* Desktop Right Nav */}
            <nav className="hidden md:flex items-center justify-end gap-10 flex-1">
              {navLinksRight.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-widest font-medium text-kumkum-inkLight hover:text-kumkum-wine transition-colors relative group">
                
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-kumkum-gold transition-all duration-500 group-hover:w-full"></span>
                </a>
              )}
              <a
                href="#contact"
                className="group flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-kumkum-wine">
                
                Reserve
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.5} />
                
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute top-full left-0 w-full bg-kumkum-parchment hairline-b shadow-2xl md:hidden">
            
              <div className="px-6 py-8 flex flex-col gap-6">
                {[...navLinksLeft, ...navLinksRight].map((link) =>
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading text-kumkum-ink hover:text-kumkum-wine transition-colors">
                
                    {link.name}
                  </a>
              )}
                <div className="hairline-t pt-6 mt-2">
                  <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[11px] uppercase tracking-widest font-medium text-kumkum-wine">
                  
                    Reserve Appointment
                    <ArrowRight size={16} strokeWidth={1} />
                  </a>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>
    </>);

}