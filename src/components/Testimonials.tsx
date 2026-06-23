import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const testimonials = [
{
  name: 'Priya Sharma',
  role: 'Bridal Client',
  text: 'The team at Kumkum made my wedding day absolutely perfect. The artistry was flawless and I felt like royalty.'
},
{
  name: 'Sarah Jenkins',
  role: 'Regular Client',
  text: 'A true sanctuary in the city. The atmosphere is calming, and the staff is incredibly skilled and attentive.'
},
{
  name: 'Anita Desai',
  role: 'Spa Client',
  text: 'The Classic Pampering ritual is my ultimate indulgence. The environment is pure, unadulterated luxury.'
}];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-16 md:py-32 bg-kumkum-wine text-kumkum-parchment overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center gap-2 sm:gap-4 mb-12 md:mb-16 justify-center">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-gold font-medium">
            &mdash; 05 / Words
          </span>
        </div>

        <div className="relative h-[280px] sm:h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                y: 20
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
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-0 flex flex-col items-center justify-center">
              
              <p className="text-xl sm:text-3xl md:text-5xl font-heading italic font-light leading-tight mb-8 md:mb-10 text-kumkum-parchmentLight">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <h4 className="text-[10px] sm:text-[11px] uppercase tracking-widest font-medium text-kumkum-gold mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-kumkum-parchment/50">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-10 md:mt-12">
          {testimonials.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-kumkum-gold scale-150' : 'bg-kumkum-parchment/20'}`}
            aria-label={`Go to testimonial ${index + 1}`} />

          )}
        </div>
      </div>
    </section>);

}