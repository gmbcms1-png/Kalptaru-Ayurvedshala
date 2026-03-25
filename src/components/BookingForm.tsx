import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  User,
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';
import { format } from 'date-fns';
import { SERVICES } from '../constants';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }

    const handleSetService = (e: any) => {
      if (e.detail) {
        setFormData(prev => ({ ...prev, service: e.detail }));
      }
    };

    window.addEventListener('setBookingService', handleSetService);
    return () => window.removeEventListener('setBookingService', handleSetService);
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const formattedMessage = `Hello, I would like to book a therapy.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}${formData.message ? `%0AMessage: ${formData.message}` : ''}%0A%0APlease confirm my appointment.`;
      
      window.open(`https://wa.me/919997115495?text=${formattedMessage}`, '_blank');
    }, 1000);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-24 h-24 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center text-[#8A9A5B] mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-4xl font-serif text-white mb-4">Namaste, {formData.name}!</h3>
        <p className="text-white/60 text-lg mb-8">Your booking request has been initiated via WhatsApp. We will confirm your appointment shortly.</p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
          }}
          className="px-10 py-4 border border-gold text-gold uppercase tracking-widest text-xs hover:bg-gold hover:text-dark transition-all"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleBooking} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <User className="w-3 h-3 text-gold" /> Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/20 shadow-inner text-base"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <Phone className="w-3 h-3 text-gold" /> Phone / WhatsApp
            </label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone"
              className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/20 shadow-inner text-base"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <Mail className="w-3 h-3 text-gold" /> Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/20 shadow-inner text-base"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-gold" /> Select Service
            </label>
            <div className="relative">
              <select
                required
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all appearance-none shadow-inner text-base"
              >
                <option value="" disabled className="bg-dark">Choose a service</option>
                {SERVICES.map(s => (
                  <option key={s.title} value={s.title} className="bg-dark">{s.title}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <CalendarIcon className="w-3 h-3 text-gold" /> Preferred Date
            </label>
            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={format(new Date(), 'yyyy-MM-dd')}
              className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all [color-scheme:dark] shadow-inner text-base"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <Clock className="w-3 h-3 text-gold" /> Preferred Time
            </label>
            <div className="relative">
              <select
                required
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 md:py-4 text-white focus:border-gold outline-none transition-all appearance-none shadow-inner text-base"
              >
                <option value="" disabled className="bg-dark">Select time</option>
                {timeSlots.map(t => (
                  <option key={t} value={t} className="bg-dark">{t}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[#F5F5DC]/60 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any special requests or health concerns?"
            rows={3}
            className="w-full bg-white/5 border border-gold/10 rounded-2xl px-5 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/20 shadow-inner resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 mt-4 rounded-2xl shadow-xl shadow-[#8A9A5B]/20 group"
        >
          {isSubmitting ? "Processing..." : "Confirm & Open WhatsApp"}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
};
