import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Instagram, Phone, MapPin } from 'lucide-react';
import { REVIEWS, GALLERY_IMAGES } from '../constants';

export const Reviews = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.5em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Voices of <span className="italic">Healing</span></h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <span className="text-white/60 text-lg font-serif">4.9 / 5.0 on Google</span>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Read about the transformative experiences of our guests who have 
              embarked on their healing journey with us in Rishikesh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-12 rounded-[2.5rem] relative group hover:border-gold/40 transition-all duration-500"
              >
                <Quote className="absolute top-10 right-10 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
                <div className="flex text-gold mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 text-lg font-serif italic mb-10 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs">{review.name}</h4>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest">Verified Guest</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Experience the <span className="italic">Sanctuary</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-3xl overflow-hidden glass group"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
