import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'glass py-3 md:py-4 shadow-2xl' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col z-[70] group">
          <span className="text-xl md:text-2xl font-decorative text-beige-warm tracking-[0.1em] lowercase leading-tight drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(230,211,163,0.4)] transition-all duration-500">
            arogya spa
          </span>
          <span className="text-[7px] md:text-[9px] font-forum text-beige-soft/80 uppercase tracking-[0.3em] mt-0.5">
            Luxury Day Spa
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group ${location.pathname === link.href ? 'text-gold' : 'text-white/80 hover:text-gold'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.href ? 'w-full' : ''}`} />
            </Link>
          ))}
          <a 
            href="https://wa.me/919997115495?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service%20at%20Arogya%20Spa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold z-[70] p-4 -mr-4 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="relative w-6 h-6"
          >
            <motion.span
              className="absolute block h-0.5 w-6 bg-current"
              variants={{
                closed: { top: 4 },
                open: { top: 12, rotate: 45 }
              }}
            />
            <motion.span
              className="absolute block h-0.5 w-6 bg-current"
              variants={{
                closed: { top: 12, opacity: 1 },
                open: { opacity: 0 }
              }}
            />
            <motion.span
              className="absolute block h-0.5 w-6 bg-current"
              variants={{
                closed: { top: 20 },
                open: { top: 12, rotate: -45 }
              }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-dark/98 backdrop-blur-xl z-50 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-start pt-32 pb-10 px-10 space-y-6">
              <motion.div variants={itemVariants} className="text-[10px] uppercase tracking-[0.4em] text-gold/50 mb-2">Navigation</motion.div>
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-serif tracking-tight transition-colors ${location.pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-4">
                <a 
                  href="https://wa.me/919997115495?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service%20at%20Arogya%20Spa."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block w-full text-center px-6 py-4 border border-gold text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-dark transition-all"
                >
                  Book Appointment
                </a>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="p-10 border-t border-white/5 bg-white/5 space-y-6"
            >
              <div className="flex items-center gap-4 text-white/60">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm tracking-widest">+91 99971 15495</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm tracking-widest uppercase">Rishikesh, Uttarakhand</span>
              </div>
              <div className="flex gap-6 pt-2">
                <a href="https://instagram.com" className="text-gold hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="tel:+919997115495" className="text-gold hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col mb-8 group">
              <span className="text-3xl font-decorative text-beige-warm tracking-[0.1em] lowercase leading-tight drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(230,211,163,0.4)] transition-all duration-500">
                arogya spa
              </span>
              <span className="text-[10px] font-forum text-beige-soft/80 uppercase tracking-[0.3em] mt-1">
                Luxury Day Spa
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8">
              Authentic Ayurvedic healing in the heart of Rishikesh. 
              Restoring balance to your life through ancient wisdom.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+919997115495" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-gold w-5 h-5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Opp Tapovan Resort Laxman Jhula Parking, <br />
                  Tapovan, Rishikesh, <br />
                  Uttarakhand 249192, India
                </span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold w-5 h-5 shrink-0" />
                <span className="text-white/70 text-sm">+91 99971 15495</span>
              </div>
              <div className="flex gap-4">
                <Clock className="text-gold w-5 h-5 shrink-0" />
                <span className="text-white/70 text-sm">Open Daily: 9 AM - 9 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Location', href: '/location' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-8">Location</h4>
            <div className="rounded-xl overflow-hidden h-48 border border-gold/10 grayscale hover:grayscale-0 transition-all duration-700">
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
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest">Google Plus Code: 48F8+6V Rishikesh</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            © 2026 Arogya Spa. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] uppercase tracking-widest">
            <Link to="#" className="hover:text-gold">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
