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
import Hairstyle2 from '../images/Hairstyle2.jpg.jpeg';
import Hairstyle3 from '../images/Hairstyle3.jpg.jpeg';
import Hairstyle5 from '../images/Hairstyle5.jpg.jpeg';
import Hairstyle6 from '../images/Hairstyle6.jpg.jpeg';
import Hairstyle9 from '../images/Hairstyle9.jpg.jpeg';
import Hairstyle10 from '../images/Hairstyle10.jpg.jpeg';
import Hairstyle11 from '../images/Hairstyle11.jpg.jpeg';
import Hairstyle1 from '../images/Hairstyle1.jpeg';
import Hairstyle20 from '../images/Hairstyle20.jpg.jpeg';
import Hairstyle21 from '../images/Hairstyle21.jpeg';
import Hairstyle22 from '../images/Hairstyle22.jpeg';
import Hairstyle23 from '../images/Hairstyle23.jpeg';
import Hairstyle24 from '../images/Hairstyle24.jpeg';
import Hairstyle25 from '../images/Hairstyle25.jpeg';
import Hairstyle26 from '../images/Hairstyle26.jpeg';
import Hairstyle27 from '../images/Hairstyle27.jpeg';
import Hairstyle28 from '../images/Hairstyle28.jpeg';
import Hairstyle29 from '../images/Hairstyle29.jpeg';
import Hairstyle30 from '../images/Hairstyle30.jpeg';
import Hairstyle31 from '../images/Hairstyle31.jpeg';
import Hairstyle32 from '../images/Hairstyle32.jpeg';
import Hairstyle33 from '../images/Hairstyle33.jpeg';
import Hairstyle34 from '../images/Hairstyle34.jpeg';
import Hairstyle35 from '../images/Hairstyle35.jpeg';
import Hairstyle36 from '../images/Hairstyle36.jpeg';
import Hairstyle37 from '../images/Hairstyle37.jpeg';
import Makeup1 from '../images/Makeup1.jpeg';
import Makeup2 from '../images/Makeup2.jpeg';
import Makeup3 from '../images/Makeup3.jpeg';
import Makeup4 from '../images/Makeup4.jpeg';
import Makeup5 from '../images/Makeup5.jpeg';
import Makeup6 from '../images/Makeup6.jpeg';
import Makeup7 from '../images/Makeup7.jpeg';
import Makeup8 from '../images/Makeup8.jpeg';
import Makeup9 from '../images/Makeup9.jpeg';
import Makeup10 from '../images/Makeup10.jpeg';
import Makeup11 from '../images/Makeup11.jpeg'; 
import Makeup12 from '../images/Makeup12.jpeg';
import Makeup13 from '../images/Makeup13.jpeg';
import Makeup14 from '../images/Makeup14.jpeg';
import Makeup15 from '../images/Makeup15.jpeg';
import Makeup16 from '../images/Makeup16.jpeg';
import bride1 from '../images/bride1.jpg';
import bride2 from '../images/bride2.jpg';
import bride3 from '../images/bride3.jpg';
import bride4 from '../images/bride4.jpg';
import bride5 from '../images/bride5.jpg';
import bride6 from '../images/bride6.jpg';
import bride7 from '../images/bride7.jpg';
import bride8 from '../images/bride8.jpg';
import bride9 from '../images/bride9.jpg';
import bride10 from '../images/bride10.jpg';
import bride11 from '../images/bride11.jpg';
import bride12 from '../images/bride12.jpg';
import bride13 from '../images/bride13.jpg';
import bride14 from '../images/bride14.jpg';
import bride15 from '../images/bride15.jpg';
import bride16 from '../images/bride16.jpg';
import bride17 from '../images/bride17.jpg';
import bride18 from '../images/bride18.jpg';
import bride19 from '../images/bride19.jpg';
import bride20 from '../images/bride20.jpg';
import bride21 from '../images/bride21.jpg';
import bride22 from '../images/bride22.jpg';
import bride23 from '../images/bride23.jpg';
import bride24 from '../images/bride24.jpg';
import bride25 from '../images/bride25.jpg';
import bride26 from '../images/bride26.jpg';
import bride27 from '../images/bride27.jpg';
import bride28 from '../images/bride28.jpg';
import bride29 from '../images/bride29.jpg';
import bride30 from '../images/bride30.jpg';
import bride31 from '../images/bride31.jpg';
import bride32 from '../images/bride32.jpg';
import bride33 from '../images/bride33.jpg';
import bride34 from '../images/bride34.jpg';
import bride35 from '../images/bride35.jpg';
import bride36 from '../images/bride36.jpg';
import bride37 from '../images/bride37.jpg';
import bride39 from '../images/bride39.jpg';
import bride40 from '../images/bride40.jpg';
import bride41 from '../images/bride41.jpg';
import bride42 from '../images/bride42.jpg';
import bride43 from '../images/bride43.jpg';
import bride44 from '../images/bride44.jpg';
import bride45 from '../images/bride45.jpg';
import bride46 from '../images/bride46.jpg';
import bride47 from '../images/bride47.jpg';
import bride48 from '../images/bride48.jpg';
import bride49 from '../images/bride49.jpg';
import bride50 from '../images/bride50.jpg';
import bride51 from '../images/bride51.jpg';
import bride52 from '../images/bride52.jpg';
import bride53 from '../images/bride53.jpg';
import bride54 from '../images/bride54.jpg';
import bride55 from '../images/bride55.jpg';
import bride56 from '../images/bride56.jpg';
import bride57 from '../images/bride57.jpg';
import bride58 from '../images/bride58.jpg';
import bride59 from '../images/bride59.jpg';
import bride60 from '../images/bride60.jpg';
import bride61 from '../images/bride61.jpg';
import bride62 from '../images/bride62.jpg';
import henna1 from '../images/henna1.jpeg';
import henna2 from '../images/henna2.jpeg';
import henna3 from '../images/henna3.jpeg';
import henna4 from '../images/henna4.jpeg';
import henna5 from '../images/henna5.jpeg';
import henna6 from '../images/henna6.jpeg';
import henna9 from '../images/henna9.jpeg';
import henna10 from '../images/henna10.jpeg';
import henna11 from '../images/henna11.jpeg';
import henna12 from '../images/henna12.jpeg';
import henna13 from '../images/henna13.jpeg';
import henna14 from '../images/henna14.jpeg';
import henna15 from '../images/henna15.jpeg';
import henna16 from '../images/henna16.jpeg';
import henna17 from '../images/henna17.jpeg';
import henna18 from '../images/henna18.jpeg';
import henna19 from '../images/henna19.jpeg';
import henna20 from '../images/henna20.jpeg';
import henna21 from '../images/henna21.jpeg';
import henna22 from '../images/henna22.jpeg';
import henna23 from '../images/henna23.jpeg';
import henna24 from '../images/henna24.jpeg';
import henna26 from '../images/henna26.jpeg';
import henna27 from '../images/henna27.jpeg';
import henna28 from '../images/henna28.jpeg';
import henna29 from '../images/henna29.jpeg';
import henna30 from '../images/henna30.jpeg';
import henna31 from '../images/henna31.jpeg';
import nail1 from '../images/nail1.jpeg';
import nail2 from '../images/nail2.jpeg';
import nail3 from '../images/nail3.jpeg';
import nail4 from '../images/nail4.jpeg';
import nail5 from '../images/nail5.jpeg';
import nail6 from '../images/nail6.jpeg';
import nail7 from '../images/nail7.jpeg';
import nail8 from '../images/nail8.jpeg';
import nail9 from '../images/nail9.jpeg';
import nail10 from '../images/nail10.jpeg';
import nail11 from '../images/nail11.jpeg';
import nail12 from '../images/nail12.jpeg';
import nail13 from '../images/nail13.jpeg';
import nail14 from '../images/nail14.jpeg';
import nail15 from '../images/nail15.jpeg';
import nail16 from '../images/nail16.jpeg';
import nail17 from '../images/nail17.jpeg';
import nail18 from '../images/nail18.jpeg';
import nail19 from '../images/nail19.jpeg';



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
      src: Hairstyle2,
      alt: 'Hair Styling 2',
    },
    {
      src: Hairstyle3,
      alt: 'Makeup Look 1',
    },
    {
      src: Hairstyle5,
      alt: 'Hair & Makeup 2',
    },
    {
      src: Hairstyle6,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle9,
      alt: 'Hair Styling 1',
    },
     {
      src: Hairstyle10,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle14,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle1,
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
      src: Hairstyle20,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle21,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle23,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle24,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle25,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle26,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle27,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle28,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle29,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle30,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle31,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle32,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle33,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle34,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle35,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle36,
      alt: 'Hair Styling 1',
    },
    {
      src: Hairstyle37,
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
      src: Makeup1,
      alt: 'Makeup Look 1',
    },
    {
      src: Makeup2,
      alt: 'Makeup Look 2',
    },
    {
      src: Makeup3,
      alt: 'Makeup Look 3',
    },
    {
      src: Makeup4,
      alt: 'Makeup Look 4',
    },
    {
      src: Makeup5,
      alt: 'Makeup Look 5',
    },
    {
      src: Makeup6,
      alt: 'Makeup Look 6',
    },
    {
      src: Makeup7,
      alt: 'Makeup Look 7',
    },
    {
      src: Makeup8,
      alt: 'Makeup Look 8',
    },
    {
      src: Makeup9,
      alt: 'Makeup Look 9',
    },
    {
      src: Makeup10,
      alt: 'Makeup Look 10',
    },
    {
      src: Makeup11,
      alt: 'Makeup Look 11',
    },
    {
      src: Makeup12,
      alt: 'Makeup Look 12',
    },
    {
      src: Makeup13,
      alt: 'Makeup Look 13',
    },
    {
      src: Makeup14,
      alt: 'Makeup Look 14',
    },
    {
      src: Makeup15,
      alt: 'Makeup Look 15',
    },
    {
      src: Makeup16,
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
      src: bride1,
      alt: 'Bride 1',
    },
    {
      src: bride2,
      alt: 'Bride 2',
    },
    {
      src: bride3,
      alt: 'Bride 3',
    },
    {
      src: bride4,
      alt: 'Bride 4',
    },
    {
      src: bride5,
      alt: 'Bride 5',
    },
    {
      src: bride6,
      alt: 'Bride 6',
    },
    {
      src: bride7,
      alt: 'Bride 7',
    },
    {
      src: bride8,
      alt: 'Bride 8',
    },
    {
      src: bride9,
      alt: 'Bride 9',
    },
    {
      src: bride10,
      alt: 'Bride 10',
    },
    {
      src: bride11,
      alt: 'Bride 11',
    },
    {
      src: bride12,
      alt: 'Bride 12',
    },
    {
      src: bride13,
      alt: 'Bride 13',
    },
    {
      src: bride14,
      alt: 'Bride 14',
    },
    {
      src: bride15,
      alt: 'Bride 15',
    },
    {
      src: bride16,
      alt: 'Bride 16',
    },
    {
      src: bride17,
      alt: 'Bride 17',
    },
    {
      src: bride18,
      alt: 'Bride 18',
    },
    {
      src: bride19,
      alt: 'Bride 19',
    },
    {
      src: bride20,
      alt: 'Bride 20',
    },
    {
      src: bride21,
      alt: 'Bride 21',
    },
    {
      src: bride22,
      alt: 'Bride 22',
    },
    {
      src: bride23,
      alt: 'Bride 23',
    },
    {
      src: bride24,
      alt: 'Bride 24',
    },
    {
      src: bride25,
      alt: 'Bride 25',
    },
    {
      src: bride26,
      alt: 'Bride 26',
    },
    {
      src: bride27,
      alt: 'Bride 27',
    },
    {
      src: bride28,
      alt: 'Bride 28',
    },
    {
      src: bride29,
      alt: 'Bride 29',
    },
    {
      src: bride30,
      alt: 'Bride 30',
    },
    {
      src: bride31,
      alt: 'Bride 31',
    },
    {
      src: bride32,
      alt: 'Bride 32',
    },
    {
      src: bride33,
      alt: 'Bride 33',
    },
    {
      src: bride34,
      alt: 'Bride 34',
    },
    {
      src: bride35,
      alt: 'Bride 35',
    },
    {
      src: bride36,
      alt: 'Bride 36',
    },
    {
      src: bride37,
      alt: 'Bride 37',
    },
    // {
    //   src: 'src/images/bride38.jpg',
    //   alt: 'Bride 38',
    // },
    {
      src: bride39,
      alt: 'Bride 39',
    },
    {
      src: bride40,
      alt: 'Bride 40',
    },
    {
      src: bride41,
      alt: 'Bride 41',
    },
    {
      src: bride42,
      alt: 'Bride 42',
    },
    {
      src: bride43,
      alt: 'Bride 43',
    },
    {
      src: bride44,
      alt: 'Bride 44',
    },
    {
      src: bride45,
      alt: 'Bride 45',
    },
    {
      src: bride46,
      alt: 'Bride 46',
    },
    {
      src: bride47,
      alt: 'Bride 47',
    },
    {
      src: bride48,
      alt: 'Bride 48',
    },
    {
      src: bride49,
      alt: 'Bride 49',
    },
    {
      src: bride50,
      alt: 'Bride 50',
    },
    {
      src: bride51,
      alt: 'Bride 51',
    },
    {
      src: bride52,
      alt: 'Bride 52',
    },
    {
      src: bride53,
      alt: 'Bride 53',
    },
    {
      src: bride54,
      alt: 'Bride 54',
    },
    {
      src: bride55,
      alt: 'Bride 55',
    },
    {
      src: bride56,
      alt: 'Bride 56',
    },
    {
      src: bride57,
      alt: 'Bride 57',
    },
    {
      src: bride58,
      alt: 'Bride 58',
    },
    {
      src: bride59,
      alt: 'Bride 59',
    },
    {
      src: bride60,
      alt: 'Bride 60',
    },
    {
      src: bride61,
      alt: 'Bride 61',
    },
    {
      src: bride62,
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
      src: henna1,
      alt: 'Henna Design 1',
    },
    {
      src: henna2,
      alt: 'Henna Design 2',
    },
    {
      src: henna3,
      alt: 'Henna Design 3',
    },
    {
      src: henna4,
      alt: 'Henna Design 4',
    },
    {
      src: henna5,
      alt: 'Henna Design 5',
    },
    {
      src: henna6,
      alt: 'Henna Design 6',
    },
    {
      src: henna28,
      alt: 'Henna Design 28',
    },
    {
      src: henna29,
      alt: 'Henna Design 29',
    },
    {
      src: henna9,
      alt: 'Henna Design 9',
    },
    {
      src: henna10,
      alt: 'Henna Design 10',
    },
    {
      src: henna11,
      alt: 'Henna Design 11',
    },
    {
      src: henna12,
      alt: 'Henna Design 12',
    },
    {
      src: henna13,
      alt: 'Henna Design 13',
    },
    {
      src: henna14,
      alt: 'Henna Design 14',
    },
    {
      src: henna15,
      alt: 'Henna Design 15',
    },
    {
      src: henna16,
      alt: 'Henna Design 16',
    },
    {
      src: henna17,
      alt: 'Henna Design 17',
    },
    {
      src: henna18,
      alt: 'Henna Design 18',
    },
    {
      src: henna19,
      alt: 'Henna Design 19',
    },
    {
      src: henna20,
      alt: 'Henna Design 20',
    },
    {
      src: henna21,
      alt: 'Henna Design 21',
    },
    {
      src: henna22,
      alt: 'Henna Design 22',
    },
    {
      src: henna23,
      alt: 'Henna Design 23',
    },
    {
      src: henna24,
      alt: 'Henna Design 24',
    },
    {
      src: henna30,
      alt: 'Henna Design 30',
    },

     {
      src: henna31,
      alt: 'Henna Design 31',
    },
    {
      src: henna26,
      alt: 'Henna Design 26',
    },
    {
      src: henna27,
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
      src: nail1,
      alt: 'Nail Art 1',
    },
    {
      src: nail2,
      alt: 'Nail Art 2',
    },
    {
      src: nail3,
      alt: 'Nail Art 3',
    },
    {
      src: nail4,
      alt: 'Nail Art 4',
    },
    {
      src: nail5,
      alt: 'Nail Art 5',
    },
    {
      src: nail6,
      alt: 'Nail Art 6',
    },
    {
      src: nail7,
      alt: 'Nail Art 7',
    },
    {
      src: nail8,
      alt: 'Nail Art 8',
    },
    {
      src: nail9,
      alt: 'Nail Art 9',
    },
    {
      src: nail10,
      alt: 'Nail Art 10',
    },
    {
      src: nail11,
      alt: 'Nail Art 11',
    },
    {
      src: nail12,
      alt: 'Nail Art 12',
    },
    {
      src: nail13,
      alt: 'Nail Art 13',
    },
    {
      src: nail14,
      alt: 'Nail Art 14',
    },
    {
      src: nail15,
      alt: 'Nail Art 15',
    },
    {
      src: nail16,
      alt: 'Nail Art 16',
    },
    {
      src: nail17,
      alt: 'Nail Art 17',
    },
    {
      src: nail18,
      alt: 'Nail Art 18',
    },
    {
      src: nail19,
      alt: 'Nail Art 19',
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
                    
                    <div className="overflow-hidden rounded-lg bg-kumkum-ink/5 md:aspect-[4/5]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-auto md:h-full object-contain transition-transform duration-[2s] md:group-hover:scale-105" />
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