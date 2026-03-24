import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const featuredServices = SERVICES.slice(0, 6);

  const handleBookNow = (title: string) => {
    const bookingForm = document.getElementById('book');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
      // We can also update the form via URL param without reload if we want, 
      // but the BookingForm useEffect will only run on mount.
      // Let's just use the URL param and window.history.pushState
      const url = new URL(window.location.href);
      url.searchParams.set('service', title);
      window.history.pushState({}, '', url);
      // Trigger a custom event or just let the user select it if they scroll.
      // Actually, let's just update the URL and the form will pick it up if we use a custom hook or just check periodically.
      // Or better, just dispatch a custom event.
      window.dispatchEvent(new CustomEvent('setBookingService', { detail: title }));
    }
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-32 bg-warm-sand text-ayurvedic-green overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Authentic Ayurvedic Experiences</h2>
          <p className="text-ayurvedic-green/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Traditional healing services designed to restore balance, relax the mind, and rejuvenate the body.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white rounded-[20px] overflow-hidden shadow-soft cursor-pointer transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ayurvedic-green/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm uppercase tracking-widest">
                    View Details
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-soft-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-ayurvedic-green/60 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => handleBookNow("Ayurvedic Massage")}
            className="px-12 py-5 bg-ayurvedic-green text-warm-sand rounded-full font-bold uppercase tracking-widest text-sm hover:bg-ayurvedic-green/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Book Your Experience
          </button>
        </div>
      </div>

      {/* Modal / Sliding Panel */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-ayurvedic-green/40 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-warm-sand rounded-t-[32px] sm:rounded-[32px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-ayurvedic-green hover:bg-white/40 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-full relative">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-sand via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="p-8 md:p-16">
                  <span className="text-soft-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{selectedService.category}</span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{selectedService.title}</h2>
                  
                  <p className="text-ayurvedic-green/80 text-lg font-light leading-relaxed mb-10">
                    {selectedService.longDescription || selectedService.description}
                  </p>

                  <div className="space-y-10 mb-12">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-soft-gold">Key Benefits</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedService.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 text-ayurvedic-green/70">
                            <div className="w-5 h-5 rounded-full bg-soft-gold/20 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-soft-gold" />
                            </div>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-12">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold mb-4 text-soft-gold">Duration</h4>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-ayurvedic-green/5 rounded-full text-sm font-medium">
                            {selectedService.duration}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold mb-4 text-soft-gold">Investment</h4>
                        <span className="text-2xl font-serif">{selectedService.price}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleBookNow(selectedService.title)}
                    className="w-full py-5 bg-ayurvedic-green text-warm-sand rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-ayurvedic-green/90 transition-all shadow-lg"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
