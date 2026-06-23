import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export function BookingContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message with proper formatting
    const message = `*Booking Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}`;
    
    // WhatsApp number with India country code (91) + phone number
    // Format: 91 + 8128911426 = 918128911426
    const whatsappNumber = '918128911426';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form first
    (e.target as HTMLFormElement).reset();
    setFormData({ name: '', phone: '', service: '', date: '', time: '' });

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      toast.success('Opening WhatsApp', {
        description: 'Your appointment details are ready to send.'
      });
    }, 300);
  };
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
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
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-5">
            
            <div className="flex items-center gap-2 sm:gap-4 mb-8 md:mb-12">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-gold font-medium">
                &mdash; 06 / Connect
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-kumkum-ink mb-12 md:mb-16">
              Visit the <br />
              <span className="font-heading italic text-kumkum-wine">
                Parlour
              </span>
            </h2>

            <div className="space-y-8 md:space-y-10">
              <div className="hairline-b pb-4 md:pb-6">
                <h4 className="text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2 md:mb-3">
                  Location
                </h4>
                <p className="text-base md:text-lg font-light text-kumkum-ink">
                  Tankara,Neknam
                  <br />
                  Jin plote...<br/>if you want to visit us, please call us.
                </p>
              </div>

              <div className="hairline-b pb-4 md:pb-6">
                <h4 className="text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2 md:mb-3">
                  Contact
                </h4>
                <div className="space-y-2 mb-4">
                  <a 
                    href="tel:+918128911426"
                    className="text-base md:text-lg font-light text-kumkum-ink hover:text-kumkum-wine transition-colors cursor-pointer block">
                    +91 81289 11426
                  </a>
                  <p className="text-xs md:text-sm font-light text-kumkum-inkLight">
                    (Click to call directly)
                  </p>
                </div>
                <a 
                  href="https://wa.me/918128911426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-light text-kumkum-ink mb-4 hover:text-kumkum-wine transition-colors cursor-pointer block">
                  💬 WhatsApp: +91 81289 11426
                </a>
                <a 
                  href="https://www.instagram.com/kumkumbeautyparlour__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-light text-kumkum-ink hover:text-kumkum-wine transition-colors cursor-pointer block">
                  @kumkumbeautyparlour__
                </a>
              </div>

              
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
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
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-7 lg:pt-24">
            
            <div className="bg-kumkum-parchmentLight p-6 md:p-16 border border-kumkum-gold/20">
              <h3 className="text-2xl md:text-3xl font-heading italic text-kumkum-wine mb-8 md:mb-10">
                Reserve an Appointment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2">
                      
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-kumkum-ink/20 py-2 focus:outline-none focus:border-kumkum-wine transition-colors text-kumkum-ink placeholder:text-kumkum-ink/30"
                      placeholder="Jane Doe" />
                    
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2">
                      
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-kumkum-ink/20 py-2 focus:outline-none focus:border-kumkum-wine transition-colors text-kumkum-ink placeholder:text-kumkum-ink/30"
                      placeholder="(555) 000-0000" />
                    
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="service"
                    className="block text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2">
                    
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-kumkum-ink/20 py-2 focus:outline-none focus:border-kumkum-wine transition-colors text-kumkum-ink appearance-none rounded-none">
                    
                    <option value="" disabled selected>
                      Select a service...
                    </option>
                    <option value="Hair Styling & Mackeup">Hair Styling & Mackeup</option>
                    <option value="Bridal & Ceremonial">Bridal & Ceremonial</option>
                    <option value="Mehndi & Henna">Mehndi & Henna</option>
                    <option value="Nail Art">Nail Art</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="relative">
                    <label
                      htmlFor="date"
                      className="block text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2">
                      
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-kumkum-ink/20 py-2 focus:outline-none focus:border-kumkum-wine transition-colors text-kumkum-ink" />
                    
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="time"
                      className="block text-[10px] uppercase tracking-widest text-kumkum-inkLight font-medium mb-2">
                      
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-kumkum-ink/20 py-2 focus:outline-none focus:border-kumkum-wine transition-colors text-kumkum-ink appearance-none rounded-none">
                      
                      <option value="" disabled selected>
                        Select time...
                      </option>
                      <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                      <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                      <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-widest font-medium text-kumkum-wine disabled:opacity-50">
                    
                    <span className="border-b border-kumkum-wine/30 pb-1 transition-colors group-hover:border-kumkum-wine">
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-2"
                      strokeWidth={1} />
                    
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}