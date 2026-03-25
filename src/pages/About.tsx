import React from 'react';
import { motion } from 'motion/react';
import { Star, ChevronRight, Sparkles, Droplets } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ayurvedic Service" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-xl hidden lg:block">
                <div className="text-4xl font-serif text-gold mb-1">4.9</div>
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60">715+ Google Reviews</div>
              </div>
            </motion.div>

            {/* Mobile Rating Box */}
            <div className="lg:hidden glass p-6 rounded-xl mt-8 flex items-center justify-between">
              <div>
                <div className="text-3xl font-serif text-gold mb-1">4.9</div>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-white/60">715+ Google Reviews</div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-gold mt-1">Verified Excellence</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
              <span className="font-cursive text-gold-light text-2xl mb-4 block">A legacy of healing</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Healing Traditions <br />
                <span className="italic">in Peaceful Tapovan</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Arogya Spa is one of the most trusted wellness spas in Rishikesh located in the peaceful Tapovan area near Laxman Jhula. The spa offers relaxing therapies designed to reduce stress, relieve muscle pain, and restore energy using natural oils and holistic techniques. Visitors can enjoy a calm and hygienic environment with soothing music, relaxing aroma, and professional therapists. Whether you are a tourist visiting Rishikesh or a local resident looking for relaxation, Arogya Spa provides a perfect escape for body and mind.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Professional massage therapists",
                  "Clean and hygienic spa rooms",
                  "Peaceful Himalayan ambiance",
                  "Affordable luxury spa services",
                  "Perfect for post-trek relaxation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-white/80 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-gold">9 AM - 9 PM</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Open Daily</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-gold">Rishikesh</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Uttarakhand</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-dark-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Ancient Wisdom for <span className="italic">Modern Life</span></h2>
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                <div className="glass p-8 md:p-10 rounded-3xl">
                  <Sparkles className="text-gold w-10 h-10 mb-6" />
                  <h3 className="text-xl md:text-2xl font-serif mb-4">Holistic Balance</h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    We believe that health is not just the absence of disease, but a state of complete physical, 
                    mental, and spiritual well-being. Our services are designed to restore the balance of the three Doshas.
                  </p>
                </div>
                <div className="glass p-8 md:p-10 rounded-3xl">
                  <Droplets className="text-gold w-10 h-10 mb-6" />
                  <h3 className="text-xl md:text-2xl font-serif mb-4">Pure Ingredients</h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    Every oil and herb used in our therapies is carefully selected and prepared according to traditional 
                    Ayurvedic methods, ensuring the highest potency and purity for your healing journey.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};
