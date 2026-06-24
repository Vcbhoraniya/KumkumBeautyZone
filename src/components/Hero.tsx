import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '../images/Logo.jpeg';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
      
      {/* Vertical text accent */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-180 hidden xl:block"
        style={{
          writingMode: 'vertical-rl'
        }}>
        
        <span className="text-[10px] uppercase tracking-[0.3em] text-kumkum-gold font-medium">
          &mdash; Issue No. 01 &middot; The Beauty Zone
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-7 z-10">
            
            <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-inkLight font-medium">
                Est. 2020
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-kumkum-gold"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[110px] font-light text-kumkum-ink leading-[0.9] tracking-tight mb-6 sm:mb-10">
              Timeless <br />
              <span className="font-heading italic text-kumkum-wine pr-2 sm:pr-4">
                Beauty,
              </span>{' '}
              <br />
              Crafted{' '}
              <span className="font-heading italic text-kumkum-gold">
                &amp;
              </span>{' '}
              <br />
              Curated.
            </h1>

            <div className="max-w-md ml-auto lg:ml-0 lg:pl-24">
              <p className="text-xs sm:text-sm md:text-base text-kumkum-inkLight mb-6 sm:mb-10 leading-relaxed font-light">
                Experience the perfect blend of traditional Indian beauty
                secrets and modern aesthetic care. Step into Kumkum beauty zone and discover
                your most radiant self.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-kumkum-wine">
                  
                  <span className="relative">
                    Reserve your appointment
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-kumkum-wine/30 transition-all duration-500 group-hover:bg-kumkum-wine"></span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-2"
                    strokeWidth={1.5} />
                  
                </a>
                <a
                  href="#services"
                  className="text-[11px] uppercase tracking-widest font-medium text-kumkum-inkLight hover:text-kumkum-ink transition-colors">
                  
                  Explore Rituals
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-5 relative">
            
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto overflow-hidden">
              <img
                src= {Logo}
                alt="Elegant salon interior"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
              
              {/* Subtle overlay for editorial feel */}
              <div className="absolute inset-0 bg-kumkum-ink/5 mix-blend-multiply"></div>
            </div>

            {/* Image Caption */}
            {/* <div className="absolute -bottom-6 right-0 lg:right-auto lg:-left-12 bg-kumkum-parchment p-4 hairline-t hairline-b">
              <p className="font-heading italic text-kumkum-wine text-lg">
                The Sanctuary
              </p>
              <p className="text-[9px] uppercase tracking-widest text-kumkum-inkLight mt-1">
                Mumbai, India
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>);

}