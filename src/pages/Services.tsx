import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Clock, 
  Sparkles, 
  Droplets, 
  Leaf, 
  Wind, 
  ArrowRight, 
  ChevronRight,
  Star
} from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceModal = ({ service, isOpen, onClose }: { service: Service | null, isOpen: boolean, onClose: () => void }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl glass rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="grid md:grid-cols-2 max-h-[85vh] md:max-h-[80vh] overflow-y-auto">
              <div className="relative h-64 md:h-auto shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent md:hidden" />
              </div>

              <div className="p-6 md:p-12 flex flex-col">
                <div className="mb-8">
                  <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">{service.category}</span>
                  <h2 className="text-3xl md:text-5xl font-serif mb-4 text-gold-gradient">{service.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/50 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span>Premium Therapy</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <Leaf className="w-4 h-4" /> The Essence
                    </h4>
                    <p className="text-white/70 leading-relaxed font-light italic text-sm md:text-base">
                      "{service.description}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Key Benefits
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 md:gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                          <ChevronRight className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gold uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <Droplets className="w-4 h-4" /> The Process
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                      {service.process}
                    </p>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gold/10 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/919997115495?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20${encodeURIComponent(service.title)}%20at%20Arogya%20Spa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex-1 px-8 py-4 bg-gold text-dark font-bold uppercase tracking-widest text-xs text-center hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                  >
                    Book This Service
                  </a>
                  <button 
                    onClick={onClose}
                    className="flex-1 px-8 py-4 border border-gold/30 text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold/5 transition-all duration-300"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'Ayurvedic Therapy',
    'Basti Treatments',
    'Massage Therapies',
    'Advanced Massage',
    'Ayurvedic Packages',
    'Facial Treatments',
    'Threading',
    'Waxing',
    'Spa Services',
    'Manicure & Pedicure'
  ];

  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Ayurvedic Therapy']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32">
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.5em] text-sm mb-4 block">Our Services</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Spa <span className="italic">Menu</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Explore our comprehensive range of traditional and modern wellness services.
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => {
              const categoryServices = SERVICES.filter(s => s.category === category);
              const isExpanded = expandedCategories.includes(category);

              return (
                <div key={category} className="glass rounded-[2rem] overflow-hidden border border-gold/10">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
                  >
                    <h3 className="text-2xl md:text-3xl font-serif text-gold">{category}</h3>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-6 h-6 text-gold" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {categoryServices.map((service, index) => (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleOpenModal(service)}
                              className="group glass rounded-2xl p-6 cursor-pointer hover:border-gold/40 transition-all duration-300"
                            >
                              <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                                  {service.icon}
                                </div>
                                <div className="text-right">
                                  <div className="text-gold font-serif text-lg">{service.price}</div>
                                  <div className="text-white/40 text-[10px] uppercase tracking-widest flex items-center gap-1 justify-end">
                                    <Clock className="w-3 h-3" /> {service.duration}
                                  </div>
                                </div>
                              </div>
                              <h4 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{service.title}</h4>
                              <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                                {service.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};
