import { motion } from 'framer-motion';
import henna24 from '../images/henna24.jpeg';
import bride34 from '../images/bride34.jpg';
import bride40 from '../images/bride40.jpg';
import nail7 from '../images/nail7.jpeg';

const images = [
{
      src: henna24,
      alt: 'Henna Design 24',
      caption: 'Intricate Henna Artistry',
      className: 'col-span-12 md:col-span-4 aspect-square md:aspect-[3/4]'
},
{
      src: bride34,
      alt: 'Makeup Look 1',
      caption: 'Elegant Hairstyle Artistry',
      className: 'col-span-12 md:col-span-8 aspect-[16/10]'
},
{
  src: bride40,
      alt: 'Bride 40',
      caption: 'Elegant Bridal Style',
  className: 'col-span-12 md:col-span-5 aspect-[4/5]'
},
{
      src: nail7,
      alt: 'Nail Art 7',
      caption: 'Creative Nail Design',
      className: 'col-span-12 md:col-span-7 aspect-[16/9]'
},
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-4 md:gap-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}>
            
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-gold font-medium">
                &mdash; 03 / Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-kumkum-ink">
              Visual{' '}
              <span className="font-heading italic text-kumkum-wine">
                Essays
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-12">
          {images.map((img, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`${img.className} group`}>
            
              <div className="w-full h-full overflow-hidden bg-kumkum-ink/5">
                <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              
              </div>
              <p className="mt-4 text-[11px] font-heading italic text-kumkum-inkLight">
                {img.caption}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}