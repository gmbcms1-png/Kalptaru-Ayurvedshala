import React from 'react';
import { Droplets, Leaf, Wind, Sparkles } from 'lucide-react';
import { Service, Review } from './types';

export const SERVICES: Service[] = [
  {
    title: "Full Body Massage",
    description: "A complete relaxation experience for your entire body using natural oils.",
    longDescription: "Our Full Body Massage is designed to relieve tension from head to toe. Using premium natural oils and expert techniques, this therapy improves circulation, reduces stress, and leaves you feeling completely rejuvenated.",
    benefits: ["Total body relaxation", "Improves blood circulation", "Reduces stress"],
    process: "Smooth, flowing strokes across the entire body.",
    duration: "60 mins",
    price: "₹1500",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapy'
  },
  {
    title: "Deep Tissue Massage",
    description: "Intense massage focusing on the deeper layers of muscle tissue.",
    longDescription: "Perfect for post-trek relaxation in Rishikesh. This massage targets chronic tension in muscles that lie far below the surface. Slow strokes and deep pressure help break down knots and relieve severe tension.",
    benefits: ["Relieves chronic muscle pain", "Breaks down knots", "Improves mobility"],
    process: "Slow, deep strokes with firm pressure.",
    duration: "60 mins",
    price: "₹2000",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapy'
  },
  {
    title: "Aromatherapy Massage",
    description: "A holistic healing treatment that uses natural plant extracts to promote health and well-being.",
    longDescription: "Experience the soothing power of essential oils. This therapy combines gentle massage techniques with the therapeutic properties of custom-blended aromatic oils to enhance both physical and emotional health.",
    benefits: ["Enhances mood", "Relieves anxiety", "Promotes deep sleep"],
    process: "Gentle massage using aromatic essential oils.",
    duration: "60 mins",
    price: "₹1800",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapy'
  },
  {
    title: "Ayurvedic Massage Therapy",
    description: "Traditional healing massage using warm, herb-infused Ayurvedic oils.",
    longDescription: "Rooted in ancient Indian medicine, this therapy uses warm herbal oils specific to your dosha. It deeply nourishes the skin, detoxifies the body, and restores the balance of vital energies.",
    benefits: ["Detoxifies the body", "Nourishes skin", "Balances energy"],
    process: "Rhythmic massage with warm herbal oils.",
    duration: "60 mins",
    price: "₹1800",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Therapy'
  },
  {
    title: "Stress Relief Therapy",
    description: "Targeted therapy to melt away mental and physical stress.",
    longDescription: "A specialized treatment focusing on areas where stress typically accumulates: the head, neck, and shoulders. This therapy uses calming techniques to soothe the nervous system and clear the mind.",
    benefits: ["Reduces mental fatigue", "Eases tension headaches", "Calms the mind"],
    process: "Focused massage on stress-prone areas.",
    duration: "45 mins",
    price: "₹1200",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Wellness Therapy'
  },
  {
    title: "Muscle Relaxation Therapy",
    description: "Designed to soothe tired, aching muscles after a long day.",
    longDescription: "Ideal for those who have been exploring the Himalayas. This therapy uses a combination of gentle stretching and soothing massage strokes to release lactic acid buildup and relax tight muscles.",
    benefits: ["Soothes aching muscles", "Improves flexibility", "Speeds up recovery"],
    process: "Combination of stretching and soothing strokes.",
    duration: "60 mins",
    price: "₹1500",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Wellness Therapy'
  },
  {
    title: "Body Relaxation Massage",
    description: "A gentle, flowing massage designed purely for ultimate relaxation.",
    longDescription: "Escape the hustle and bustle with this deeply calming massage. Using light to medium pressure, our therapists will help you drift into a state of complete tranquility in our peaceful spa environment.",
    benefits: ["Induces deep relaxation", "Improves mood", "Promotes peaceful sleep"],
    process: "Gentle, flowing strokes with light to medium pressure.",
    duration: "60 mins",
    price: "₹1500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapy'
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Sarah Jenkins",
    text: "The best spa in Rishikesh! The deep tissue massage was exactly what I needed after my trek. Very clean and professional.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    text: "Arogya Spa offers a truly luxury experience in Tapovan. The Ayurvedic massage therapy was incredibly relaxing.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    text: "Peaceful Himalayan ambiance and highly skilled therapists. Highly recommend their stress relief therapy.",
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
];
