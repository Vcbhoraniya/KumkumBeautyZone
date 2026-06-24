import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Hairstyle12 from '../images/Hairstyle12.jpg.jpeg';
import Hairstyle13 from '../images/Hairstyle13.jpg.jpeg';
import Hairstyle14 from '../images/Hairstyle14.jpg.jpeg';
import Hairstyle15 from '../images/Hairstyle15.jpg.jpeg';
import Hairstyle16 from '../images/Hairstyle16.jpg.jpeg';
import Hairstyle17 from '../images/Hairstyle17.jpg.jpeg';
import Hairstyle18 from '../images/Hairstyle18.jpg.jpeg';
import Hairstyle19 from '../images/Hairstyle19.jpg.jpeg';

const services = [
{
  num: '01',
  name: 'Hair Styling',
  description:
'Trendy and personalized hairstyles designed to enhance your look.',
 photos: [
    {
      src: Hairstyle12,
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle2.jpg.jpeg',
      alt: 'Hair Styling 2',
    },
    {
      src: 'src/images/Hairstyle3.jpg.jpeg',
      alt: 'Makeup Look 1',
    },
    {
      src: 'src/images/Hairstyle5.jpg.jpeg',
      alt: 'Hair & Makeup 2',
    },
    {
      src: 'src/images/Hairstyle6.jpg.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle9.jpg.jpeg',
      alt: 'Hair Styling 1',
    },
     {
      src: 'src/images/Hairstyle10.jpg.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle14.jpg.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle1.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle13,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle14,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle16,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle17,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle18,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle19,
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle20.jpg.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle21.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle23.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle24.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle25.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle26.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle27.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle28.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle29.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle30.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle31.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle32.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle33.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle34.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle35.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle36.jpeg',
      alt: 'Hair Styling 1',
    },
    {
      src: 'src/images/Hairstyle37.jpeg',
      alt: 'Hair Styling 1',
    },



  ]
},

{
  num: '02',
  name: 'Mackup',
  description:
  'Traditional and contemporary bridal looks to make your special day unforgettable.',

  photos: [
   {
      src: 'src/images/Makeup1.jpeg',
      alt: 'Makeup Look 1',
    },
    {
      src: 'src/images/Makeup2.jpeg',
      alt: 'Makeup Look 2',
    },
    {
      src: 'src/images/Makeup3.jpeg',
      alt: 'Makeup Look 3',
    },
    {
      src: 'src/images/Makeup4.jpeg',
      alt: 'Makeup Look 4',
    },
    {
      src: 'src/images/Makeup5.jpeg',
      alt: 'Makeup Look 5',
    },
    {
      src: 'src/images/Makeup6.jpeg',
      alt: 'Makeup Look 6',
    },
    {
      src: 'src/images/Makeup7.jpeg',
      alt: 'Makeup Look 7',
    },
    {
      src: 'src/images/Makeup8.jpeg',
      alt: 'Makeup Look 8',
    },
    {
      src: 'src/images/Makeup9.jpeg',
      alt: 'Makeup Look 9',
    },
    {
      src: 'src/images/Makeup10.jpeg',
      alt: 'Makeup Look 10',
    },
    {
      src: 'src/images/Makeup11.jpeg',
      alt: 'Makeup Look 11',
    },
    {
      src: 'src/images/Makeup12.jpeg',
      alt: 'Makeup Look 12',
    },
    {
      src: 'src/images/Makeup13.jpeg',
      alt: 'Makeup Look 13',
    },
    {
      src: 'src/images/Makeup14.jpeg',
      alt: 'Makeup Look 14',
    },
    {
      src: 'src/images/Makeup15.jpeg',
      alt: 'Makeup Look 15',
    },
    {
      src: 'src/images/Makeup16.jpeg',
      alt: 'Makeup Look 16',
    },
  ]
},

{
  num: '03',
  name: 'Bridal & Ceremonial',
  description:
  'Traditional and contemporary bridal looks to make your special day unforgettable.',

  photos: [
    {
      src: 'src/images/bride1.jpg',
      alt: 'Bride 1',
    },
    {
      src: 'src/images/bride2.jpg',
      alt: 'Bride 2',
    },
    {
      src: 'src/images/bride3.jpg',
      alt: 'Bride 3',
    },
    {
      src: 'src/images/bride4.jpg',
      alt: 'Bride 4',
    },
    {
      src: 'src/images/bride5.jpg',
      alt: 'Bride 5',
    },
    {
      src: 'src/images/bride6.jpg',
      alt: 'Bride 6',
    },
    {
      src: 'src/images/bride7.jpg',
      alt: 'Bride 7',
    },
    {
      src: 'src/images/bride8.jpg',
      alt: 'Bride 8',
    },
    {
      src: 'src/images/bride9.jpg',
      alt: 'Bride 9',
    },
    {
      src: 'src/images/bride10.jpg',
      alt: 'Bride 10',
    },
    {
      src: 'src/images/bride11.jpg',
      alt: 'Bride 11',
    },
    {
      src: 'src/images/bride12.jpg',
      alt: 'Bride 12',
    },
    {
      src: 'src/images/bride13.jpg',
      alt: 'Bride 13',
    },
    {
      src: 'src/images/bride14.jpg',
      alt: 'Bride 14',
    },
    {
      src: 'src/images/bride15.jpg',
      alt: 'Bride 15',
    },
    {
      src: 'src/images/bride16.jpg',
      alt: 'Bride 16',
    },
    {
      src: 'src/images/bride17.jpg',
      alt: 'Bride 17',
    },
    {
      src: 'src/images/bride18.jpg',
      alt: 'Bride 18',
    },
    {
      src: 'src/images/bride19.jpg',
      alt: 'Bride 19',
    },
    {
      src: 'src/images/bride20.jpg',
      alt: 'Bride 20',
    },
    {
      src: 'src/images/bride21.jpg',
      alt: 'Bride 21',
    },
    {
      src: 'src/images/bride22.jpg',
      alt: 'Bride 22',
    },
    {
      src: 'src/images/bride23.jpg',
      alt: 'Bride 23',
    },
    {
      src: 'src/images/bride24.jpg',
      alt: 'Bride 24',
    },
    {
      src: 'src/images/bride25.jpg',
      alt: 'Bride 25',
    },
    {
      src: 'src/images/bride26.jpg',
      alt: 'Bride 26',
    },
    {
      src: 'src/images/bride27.jpg',
      alt: 'Bride 27',
    },
    {
      src: 'src/images/bride28.jpg',
      alt: 'Bride 28',
    },
    {
      src: 'src/images/bride29.jpg',
      alt: 'Bride 29',
    },
    {
      src: 'src/images/bride30.jpg',
      alt: 'Bride 30',
    },
    {
      src: 'src/images/bride31.jpg',
      alt: 'Bride 31',
    },
    {
      src: 'src/images/bride32.jpg',
      alt: 'Bride 32',
    },
    {
      src: 'src/images/bride33.jpg',
      alt: 'Bride 33',
    },
    {
      src: 'src/images/bride34.jpg',
      alt: 'Bride 34',
    },
    {
      src: 'src/images/bride35.jpg',
      alt: 'Bride 35',
    },
    {
      src: 'src/images/bride36.jpg',
      alt: 'Bride 36',
    },
    {
      src: 'src/images/bride37.jpg',
      alt: 'Bride 37',
    },
    // {
    //   src: 'src/images/bride38.jpg',
    //   alt: 'Bride 38',
    // },
    {
      src: 'src/images/bride39.jpg',
      alt: 'Bride 39',
    },
    {
      src: 'src/images/bride40.jpg',
      alt: 'Bride 40',
    },
    {
      src: 'src/images/bride41.jpg',
      alt: 'Bride 41',
    },
    {
      src: 'src/images/bride42.jpg',
      alt: 'Bride 42',
    },
    {
      src: 'src/images/bride43.jpg',
      alt: 'Bride 43',
    },
    {
      src: 'src/images/bride44.jpg',
      alt: 'Bride 44',
    },
    {
      src: 'src/images/bride45.jpg',
      alt: 'Bride 45',
    },
    {
      src: 'src/images/bride46.jpg',
      alt: 'Bride 46',
    },
    {
      src: 'src/images/bride47.jpg',
      alt: 'Bride 47',
    },
    {
      src: 'src/images/bride48.jpg',
      alt: 'Bride 48',
    },
    {
      src: 'src/images/bride49.jpg',
      alt: 'Bride 49',
    },
    {
      src: 'src/images/bride50.jpg',
      alt: 'Bride 50',
    },
    {
      src: 'src/images/bride51.jpg',
      alt: 'Bride 51',
    },
    {
      src: 'src/images/bride52.jpg',
      alt: 'Bride 52',
    },
    {
      src: 'src/images/bride53.jpg',
      alt: 'Bride 53',
    },
    {
      src: 'src/images/bride54.jpg',
      alt: 'Bride 54',
    },
    {
      src: 'src/images/bride55.jpg',
      alt: 'Bride 55',
    },
    {
      src: 'src/images/bride56.jpg',
      alt: 'Bride 56',
    },
    {
      src: 'src/images/bride57.jpg',
      alt: 'Bride 57',
    },
    {
      src: 'src/images/bride58.jpg',
      alt: 'Bride 58',
    },
    {
      src: 'src/images/bride59.jpg',
      alt: 'Bride 59',
    },
    {
      src: 'src/images/bride60.jpg',
      alt: 'Bride 60',
    },
    {
      src: 'src/images/bride61.jpg',
      alt: 'Bride 61',
    },
    {
      src: 'src/images/bride62.jpg',
      alt: 'Bride 62',
    },
  ]
},

{
  num: '04',
  name: 'Mehndi & Henna',
  description:
  'Intricate, beautiful henna designs for weddings, festivals, and special occasions.',

  photos: [
    {
      src: 'src/images/henna1.jpeg',
      alt: 'Henna Design 1',
    },
    {
      src: 'src/images/henna2.jpeg',
      alt: 'Henna Design 2',
    },
    {
      src: 'src/images/henna3.jpeg',
      alt: 'Henna Design 3',
    },
    {
      src: 'src/images/henna4.jpeg',
      alt: 'Henna Design 4',
    },
    {
      src: 'src/images/henna5.jpeg',
      alt: 'Henna Design 5',
    },
    {
      src: 'src/images/henna6.jpeg',
      alt: 'Henna Design 6',
    },
    {
      src: 'src/images/henna28.jpeg',
      alt: 'Henna Design 28',
    },
    {
      src: 'src/images/henna29.jpeg',
      alt: 'Henna Design 29',
    },
    {
      src: 'src/images/henna9.jpeg',
      alt: 'Henna Design 9',
    },
    {
      src: 'src/images/henna10.jpeg',
      alt: 'Henna Design 10',
    },
    {
      src: 'src/images/henna11.jpeg',
      alt: 'Henna Design 11',
    },
    {
      src: 'src/images/henna12.jpeg',
      alt: 'Henna Design 12',
    },
    {
      src: 'src/images/henna13.jpeg',
      alt: 'Henna Design 13',
    },
    {
      src: 'src/images/henna14.jpeg',
      alt: 'Henna Design 14',
    },
    {
      src: 'src/images/henna15.jpeg',
      alt: 'Henna Design 15',
    },
    {
      src: 'src/images/henna16.jpeg',
      alt: 'Henna Design 16',
    },
    {
      src: 'src/images/henna17.jpeg',
      alt: 'Henna Design 17',
    },
    {
      src: 'src/images/henna18.jpeg',
      alt: 'Henna Design 18',
    },
    {
      src: 'src/images/henna19.jpeg',
      alt: 'Henna Design 19',
    },
    {
      src: 'src/images/henna20.jpeg',
      alt: 'Henna Design 20',
    },
    {
      src: 'src/images/henna21.jpeg',
      alt: 'Henna Design 21',
    },
    {
      src: 'src/images/henna22.jpeg',
      alt: 'Henna Design 22',
    },
    {
      src: 'src/images/henna23.jpeg',
      alt: 'Henna Design 23',
    },
    {
      src: 'src/images/henna24.jpeg',
      alt: 'Henna Design 24',
    },
    {
      src: 'src/images/henna30.jpeg',
      alt: 'Henna Design 30',
    },

     {
      src: 'src/images/henna31.jpeg',
      alt: 'Henna Design 31',
    },
    {
      src: 'src/images/henna26.jpeg',
      alt: 'Henna Design 26',
    },
    {
      src: 'src/images/henna27.jpeg',
      alt: 'Henna Design 27',
    }
  ]
},
{
  num: '05',
  name: 'Nail Art',
  description:
  'Intricate, beautiful nail art designs for special occasions and everyday wear.',

  photos: [
    {
      src: 'src/images/nail1.jpeg',
      alt: 'Nail Art 1',
    },
    {
      src: 'src/images/nail2.jpeg',
      alt: 'Nail Art 2',
    },
    {
      src: 'src/images/nail3.jpeg',
      alt: 'Nail Art 3',
    },
    {
      src: 'src/images/nail4.jpeg',
      alt: 'Nail Art 4',
    },
    {
      src: 'src/images/nail5.jpeg',
      alt: 'Nail Art 5',
    },
    {
      src: 'src/images/nail6.jpeg',
      alt: 'Nail Art 6',
    },
    {
      src: 'src/images/nail7.jpeg',
      alt: 'Nail Art 7',
    },
    {
      src: 'src/images/nail8.jpeg',
      alt: 'Nail Art 8',
    },
    {
      src: 'src/images/nail9.jpeg',
      alt: 'Nail Art 9',
    },
    {
      src: 'src/images/nail10.jpeg',
      alt: 'Nail Art 10',
    },
    {
      src: 'src/images/nail11.jpeg',
      alt: 'Nail Art 11',
    },
    {
      src: 'src/images/nail12.jpeg',
      alt: 'Nail Art 12',
    },
    {
      src: 'src/images/nail13.jpeg',
      alt: 'Nail Art 13',
    },
    {
      src: 'src/images/nail14.jpeg',
      alt: 'Nail Art 14',
    },
    {
      src: 'src/images/nail15.jpeg',
      alt: 'Nail Art 15',
    },
    {
      src: 'src/images/nail16.jpeg',
      alt: 'Nail Art 16',
    },
    {
      src: 'src/images/nail17.jpeg',
      alt: 'Nail Art 17',
    },
    {
      src: 'src/images/nail18.jpeg',
      alt: 'Nail Art 18',
    }
  ]
}];

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
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
                &mdash; 01 / Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-kumkum-ink">
              Our{' '}
              <span className="font-heading italic text-kumkum-wine">
                Offerings
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="max-w-sm">
            
            <p className="text-sm text-kumkum-inkLight leading-relaxed font-light">
              A curated selection of beauty rituals designed to pamper, enhance,
              and celebrate your natural elegance.
            </p>
          </motion.div>
        </div>

        {/* Services Index */}
        <div className="hairline-t">
          {services.map((service, index) =>
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={() => setSelectedService(index)}
            className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-12 hairline-b hover:bg-kumkum-wine/[0.02] transition-colors cursor-pointer">
            
              <div className="flex items-start lg:items-center gap-8 md:gap-16 lg:w-1/2">
                <span className="text-[11px] font-medium text-kumkum-gold tracking-widest pt-2 lg:pt-0">
                  {service.num}
                </span>
                <h3 className="text-3xl md:text-5xl font-heading text-kumkum-ink group-hover:text-kumkum-wine transition-colors duration-500">
                  {service.name}
                </h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between lg:w-1/2 mt-6 lg:mt-0 pl-12 lg:pl-0 gap-6">
                <p className="text-sm text-kumkum-inkLight font-light max-w-xs leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-8">
        
                  <div className="w-10 h-10 rounded-full border border-kumkum-gold/30 flex items-center justify-center group-hover:bg-kumkum-wine group-hover:border-kumkum-wine transition-all duration-500">
                    <ArrowRight
                    size={16}
                    className="text-kumkum-gold group-hover:text-kumkum-parchment transition-colors"
                    strokeWidth={1} />
                  
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-kumkum-parchment rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-kumkum-parchment border-b border-kumkum-gold/20 p-6 flex items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-heading text-kumkum-ink">
                {services[selectedService].name}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-kumkum-wine/10 rounded-full transition-colors">
                <X size={24} className="text-kumkum-ink" />
              </button>
            </div>

            {/* Photos Grid */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services[selectedService].photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group">
                    
                    <div className="overflow-hidden rounded-lg bg-kumkum-ink/5 aspect-square md:aspect-[4/5]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    </div>
            
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>);

}