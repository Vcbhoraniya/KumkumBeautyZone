import { motion } from 'framer-motion';
const packages = [
{
  name: 'SILVER',
  price: '₹10,000',
  description: 'Essential bridal preparations for your special day.',
  features: [
  'Bridal Day Look',
  'Makeup & Hairstyle',
  'Bridal Jewellery',
  'Real Flower Arrangements']

},
{
  name: 'GOLDEN',
  price: '₹25,000',
  description: 'Complete bridal experience with multiple functions coverage.',
  features: [
  '4 Function Coverage',
  'Mandap Styling',
  'Sangeet or Haldi Makeup',
  'Bridal Day Look',
  'Makeup & Hairstyle',
  'Bridal Jewellery',
  'Real Flower Arrangements',
    '------Skincare Services------',
  'Facial',
  'Cream Wax',
  'Shiner',
  'Threading',
  'Mani Pedi Cure']

},
{
  name: 'PLATINUM',
  price: '₹30,000',
  description: 'Premium bridal package with professional skincare services.',
  features: [
  '4 Function Coverage',
  'Mandap Styling',
  'Sangeet or Haldi Makeup',
  'Bridal Day Look',
  'Bridal Jewellery',
  'Real Flower Arrangements',
  '------Skincare Services------',
  'Professional Facial',
  'Rica Wax',
  'Shiner',
  'Threading',
  'Crystal Mani Pedi Cure']

}];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-kumkum-parchmentLight">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 sm:gap-4 mb-12 md:mb-20 justify-center">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-gold font-medium">
            &mdash; 04 / Signature Experiences
          </span>
        </div>

        <div className="text-center mb-12 md:mb-24">
          <motion.h2
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
            }}
            className="text-3xl sm:text-5xl md:text-7xl font-light text-kumkum-ink">
            
            The{' '}
            <span className="font-heading italic text-kumkum-wine">
              Rituals
            </span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {packages.map((pkg, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
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
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 hairline-b first:hairline-t">
            
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading italic text-kumkum-wine mb-2 sm:mb-4">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-kumkum-inkLight font-light leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="md:w-1/3 mb-6 md:mb-0">
                <ul className="space-y-1 sm:space-y-2">
                  {pkg.features.map((feature, i) =>
                <li
                  key={i}
                  className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-ink font-medium flex items-center gap-2 sm:gap-3">
                  
                      <span className="w-1 h-1 bg-kumkum-gold rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                )}
                </ul>
              </div>

              <div className="md:w-1/6 text-left md:text-right">
                <span className="text-xl sm:text-2xl font-light text-kumkum-ink">
                  {pkg.price}
                </span>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-kumkum-wine hover:text-kumkum-ink transition-colors">
            
            <span className="border-b border-kumkum-wine/30 pb-1">
              Inquire about custom rituals
            </span>
          </a>
        </div>
      </div>
    </section>);

}