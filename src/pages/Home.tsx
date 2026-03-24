import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Droplets, 
  Clock, 
  Star, 
  ChevronRight,
  MapPin,
  Phone,
  Instagram,
  Navigation,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS, GALLERY_IMAGES } from '../constants';
import { BookingForm } from '../components/BookingForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-32">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a]/90 via-[#1a0f0a]/60 to-dark" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <span className="font-cursive text-gold-light text-2xl md:text-4xl mb-4 md:mb-6 block">Indulge in luxury & tranquility</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
              Find Your Inner <br />
              <span className="italic text-gold-gradient">Tranquility</span>
            </h1>
            <p className="text-white/70 max-w-xl text-lg mb-12 font-light leading-relaxed">
              Experience the ancient wisdom of Ayurveda in the heart of Rishikesh. 
              Located near the sacred Ganga, we offer healing therapies for your body, mind, and soul.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link 
                to="/#book" 
                className="group px-10 py-4 bg-gold text-dark font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-gold-light transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-4 border border-white/20 hover:border-gold text-white uppercase tracking-widest text-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass p-8 rounded-[2.5rem] border border-gold/20 shadow-2xl">
              <h3 className="text-2xl font-serif text-gold mb-6 text-center">Quick Appointment</h3>
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-dark relative overflow-hidden">
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
                <span className="italic">by the Holy Ganga</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Kalptaru Ayurvedshala is more than just a spa; it's a sanctuary for authentic Ayurvedic healing. 
                Nestled near Ram Jhula and Ganga Beach in Rishikesh, we bring centuries-old traditions to life 
                through professional therapists and pure herbal oils.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Professional & Certified Therapists",
                  "Authentic Homemade Herbal Oils",
                  "Calm & Peaceful Environment",
                  "Located in the Heart of Rishikesh"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-white/80 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="text-gold uppercase tracking-widest text-sm font-bold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-all">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-dark-soft">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Featured</span>
              <h2 className="text-3xl md:text-5xl font-serif">Popular <span className="italic">Services</span></h2>
            </div>
            <Link to="/services" className="hidden sm:flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold hover:gap-4 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <Link to="/services" key={service.title} className="group glass rounded-3xl overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-6">{service.description}</p>
                  <div className="text-xs uppercase tracking-widest text-gold flex items-center gap-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 sm:hidden">
            <Link to="/services" className="w-full py-4 border border-gold/30 text-gold uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 hover:bg-gold hover:text-dark transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.5em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Voices of <span className="italic">Healing</span></h2>
            <div className="flex items-center justify-center gap-4">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-white/60 font-serif">4.9 / 5.0 on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {REVIEWS.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[2.5rem] relative group"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-gold/10" />
                <div className="flex text-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-white/80 font-serif italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">{review.name}</h4>
                    <span className="text-white/40 text-[8px] uppercase tracking-widest">Verified Guest</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/reviews" className="text-gold uppercase tracking-widest text-sm font-bold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-all">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-24 bg-dark-soft">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Reservations</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Begin Your <span className="italic">Journey</span></h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                Book your session today and experience the transformative power of authentic Ayurveda. 
                Our team will confirm your appointment within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs">Opening Hours</h4>
                    <span className="text-white/40 text-sm">Daily: 9:00 AM - 9:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs">Premium Experience</h4>
                    <span className="text-white/40 text-sm">Professional Therapists & Pure Oils</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-gold/20">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Summary */}
      <section id="gallery" className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Experience the <span className="italic">Sanctuary</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 4).map((img, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden glass group">
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="text-gold uppercase tracking-widest text-xs font-bold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-all">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-dark-soft">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="glass p-12 rounded-[2.5rem] border border-gold/20">
                <h3 className="text-3xl font-serif mb-10 text-gold-gradient">Visit Our Sanctuary</h3>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Address</h4>
                      <p className="text-white/60 text-lg leading-relaxed font-light">
                        Ram Jhula, near Police Station, <br />
                        Swarg Ashram, Rishikesh, <br />
                        Uttarakhand – 249304
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Phone</h4>
                      <p className="text-white/60 text-lg font-light">099973 89985</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-12 border-t border-gold/10">
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

              <div className="glass p-10 rounded-3xl flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Follow Us</h4>
                    <span className="text-gold text-sm">@kalptaru_ayurvedshala</span>
                  </div>
                </div>
                <ChevronRight className="text-gold w-6 h-6" />
              </div>
            </div>

            <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-gold/20 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.261448839446!2d78.3121!3d30.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjIiTiA3OMKwMTgnNDMuNiJF!5e0!3m2!1sen!2sin!4v1647850000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
