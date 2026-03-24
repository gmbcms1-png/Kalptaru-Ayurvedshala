import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Star, Navigation } from 'lucide-react';

export const Location = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.5em] text-sm mb-4 block">Visit Us</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Our <span className="italic">Sanctuary</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Find us in the heart of Rishikesh, near the holy Ganga. 
              A peaceful retreat away from the hustle and bustle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-12"
            >
              <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-gold/20">
                <h3 className="text-2xl md:text-3xl font-serif mb-8 md:mb-10 text-gold-gradient">Contact Information</h3>
                <div className="space-y-8 md:space-y-10">
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3">Address</h4>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                        Ram Jhula, near Police Station, <br />
                        Swarg Ashram, Rishikesh, <br />
                        Uttarakhand – 249304
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3">Phone</h4>
                      <p className="text-white/60 text-base md:text-lg font-light">099973 89985</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3">Hours</h4>
                      <p className="text-white/60 text-base md:text-lg font-light">Open Daily: 9 AM - 9 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-gold/10">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Kalptaru+Ayurvedshala+Rishikesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gold text-dark font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="glass p-6 md:p-10 rounded-3xl flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center text-gold">
                    <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1">Follow Our Journey</h4>
                    <span className="text-gold text-xs md:text-sm">@kalptaru_ayurvedshala</span>
                  </div>
                </div>
                <ChevronRight className="text-gold w-5 h-5 md:w-6 md:h-6" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-gold/20 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.261448839446!2d78.3121!3d30.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjIiTiA3OMKwMTgnNDMuNiJF!5e0!3m2!1sen!2sin!4v1647850000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
