import React from 'react';
import { Droplets, Leaf, Wind, Sparkles } from 'lucide-react';
import { Service, Review } from './types';

export const SERVICES: Service[] = [
  // Ayurvedic Therapy
  {
    title: "Shirodhara",
    description: "A unique Ayurvedic therapy involving a continuous stream of warm, herb-infused oil poured onto the forehead to induce deep relaxation.",
    longDescription: "One of the most profound Ayurvedic treatments, Shirodhara involves a continuous stream of warm oil poured onto the forehead. It targets the nervous system directly, inducing a state of deep relaxation and mental clarity. Perfect for relieving stress, anxiety, and improving sleep quality.",
    benefits: ["Calms the nervous system", "Improves sleep", "Reduces stress"],
    process: "Warm oil is poured in a rhythmic motion across the forehead.",
    duration: "45 mins",
    price: "₹1800",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Therapy'
  },
  {
    title: "Special Shirodhara",
    description: "An extended version of the traditional Shirodhara for deeper meditative rest and neurological relaxation.",
    longDescription: "An extended version of the traditional Shirodhara for deeper meditative rest and neurological relaxation. This treatment is designed to provide a more intense and lasting effect on the nervous system, helping to balance the Vata dosha and promote profound mental peace.",
    benefits: ["Deep meditative rest", "Profound relaxation", "Balances Vata dosha"],
    process: "Extended rhythmic flow of warm medicated oil on the forehead.",
    duration: "60 mins",
    price: "₹2500",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Therapy'
  },
  // Basti Treatments
  {
    title: "Hridaya Basti",
    description: "A specialized treatment for the heart region using warm medicated oil.",
    benefits: ["Strengthens heart muscles", "Relieves emotional stress"],
    process: "A pool of warm oil is kept over the heart region using a dough ring.",
    duration: "30 mins",
    price: "₹1000",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  {
    title: "Nasyam",
    description: "Administration of medicated oil through the nostrils to clear the head and neck region.",
    benefits: ["Clears sinuses", "Improves mental clarity"],
    process: "Drops of herbal oil are administered into each nostril.",
    duration: "30 mins",
    price: "₹1000",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  {
    title: "Nabhi Basti",
    description: "Treatment centered around the navel to balance the digestive fire.",
    benefits: ["Improves digestion", "Balances energy"],
    process: "Warm oil is pooled around the navel area.",
    duration: "30 mins",
    price: "₹1000",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  {
    title: "Netra Basti",
    description: "A rejuvenating treatment for the eyes using medicated ghee.",
    benefits: ["Relieves eye strain", "Improves vision"],
    process: "Eyes are bathed in warm medicated ghee.",
    duration: "30 mins",
    price: "₹1000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  {
    title: "Janu Basti",
    description: "Targeted treatment for knee pain and stiffness.",
    benefits: ["Relieves knee pain", "Improves mobility"],
    process: "Warm oil is pooled over the knee joints.",
    duration: "40 mins",
    price: "₹1200",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  {
    title: "Kati Basti",
    description: "Specialized treatment for lower back pain.",
    benefits: ["Relieves back pain", "Strengthens spine"],
    process: "Warm oil is pooled over the lower back region.",
    duration: "30 mins",
    price: "₹1000",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Basti Treatments'
  },
  // Massage Therapies
  {
    title: "Head Massage",
    description: "Soothing massage focusing on the scalp, neck, and shoulders.",
    benefits: ["Relieves tension", "Promotes hair health"],
    process: "Rhythmic massage of the head and scalp with herbal oils.",
    duration: "30 min",
    price: "₹500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Back Massage",
    description: "Focused massage to release tension in the back muscles.",
    benefits: ["Relieves back ache", "Reduces stress"],
    process: "Deep tissue massage of the back area.",
    duration: "30 min",
    price: "₹800",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Foot Massage",
    description: "Relaxing massage for the feet and lower legs.",
    benefits: ["Improves circulation", "Relaxes the whole body"],
    process: "Pressure point massage on the feet.",
    duration: "30 min",
    price: "₹700",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Reflexology",
    description: "Therapeutic massage focusing on reflex points in the feet.",
    benefits: ["Balances energy", "Relieves pain"],
    process: "Targeted pressure on specific reflex zones.",
    duration: "40 min",
    price: "₹1000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Ayurvedic Massage",
    description: "Traditional full body massage with warm herbal oils.",
    benefits: ["Detoxifies", "Rejuvenates"],
    process: "Rhythmic full body massage.",
    duration: "60 min",
    price: "₹1500",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Cream Massage",
    description: "Nourishing full body massage using rich herbal creams.",
    benefits: ["Deeply moisturizes", "Softens skin"],
    process: "Full body massage with herbal cream.",
    duration: "60 min",
    price: "₹1800",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  {
    title: "Signature Massage",
    description: "Our exclusive blend of techniques for ultimate rejuvenation.",
    benefits: ["Total relaxation", "Unique experience"],
    process: "Customized blend of various massage styles.",
    duration: "90 min",
    price: "₹3000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Massage Therapies'
  },
  // Advanced Massage
  {
    title: "Four Hands Ayurvedic Massage",
    description: "A synchronized massage performed by two therapists for deep healing.",
    benefits: ["Deeply relaxing", "Balances both sides of the body"],
    process: "Two therapists work in harmony on the body.",
    duration: "60 min",
    price: "₹3000",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Advanced Massage'
  },
  {
    title: "Swedish Massage",
    description: "Classic relaxation massage using long, gliding strokes.",
    benefits: ["Relieves tension", "Improves circulation"],
    process: "Gentle to firm pressure with long strokes.",
    duration: "60 min",
    price: "₹1800",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Advanced Massage'
  },
  {
    title: "Deep Tissue Massage",
    description: "Massage focusing on the deeper layers of muscle tissue.",
    benefits: ["Relieves chronic pain", "Breaks down knots"],
    process: "Slow, deep strokes with firm pressure.",
    duration: "60 min",
    price: "₹2000",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Advanced Massage'
  },
  {
    title: "Marma Massage",
    description: "Massage focusing on vital energy points (Marmas) of the body.",
    benefits: ["Balances energy flow", "Releases blockages"],
    process: "Targeted pressure on Marma points.",
    duration: "60 min",
    price: "₹2400",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Advanced Massage'
  },
  // Ayurvedic Packages
  {
    title: "Ayurvedic Massage + Shirodhara + Facial",
    description: "A comprehensive rejuvenation package for body, mind, and face.",
    benefits: ["Total rejuvenation", "Complete detox"],
    process: "Sequential combination of three major therapies.",
    duration: "2 hr 30 min",
    price: "₹4000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  {
    title: "Shirodhara + Foot Massage",
    description: "A relaxing combination focusing on the head and feet.",
    benefits: ["Deep relaxation", "Grounding"],
    process: "Shirodhara followed by a therapeutic foot massage.",
    duration: "80 min",
    price: "₹1800",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  {
    title: "Four Hand Massage + Shirodhara",
    description: "Ultimate luxury package with synchronized massage and Shirodhara.",
    benefits: ["Maximum relaxation", "Profound healing"],
    process: "Four hand massage followed by Shirodhara.",
    duration: "90 min",
    price: "₹3500",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  {
    title: "Head Neck Shoulder Massage",
    description: "Targeted relief for the most common areas of tension.",
    benefits: ["Relieves headaches", "Eases shoulder stiffness"],
    process: "Focused massage on the upper body.",
    duration: "45 min",
    price: "₹1000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  {
    title: "Patra Pinda Swedana",
    description: "Massage using warm herbal boluses (potlis).",
    benefits: ["Relieves joint pain", "Reduces inflammation"],
    process: "Massage with heated herbal bundles.",
    duration: "60 min",
    price: "₹2000",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  {
    title: "Udvartanam",
    description: "Dry herbal powder massage for weight management and skin toning.",
    benefits: ["Reduces fat", "Exfoliates skin"],
    process: "Vigorous dry massage with herbal powders.",
    duration: "90 min",
    price: "₹2000",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Ayurvedic Packages'
  },
  // Facial Treatments
  {
    title: "Facial Mask",
    description: "A quick herbal mask to refresh and glow.",
    benefits: ["Instant glow", "Refreshes skin"],
    process: "Application of a natural herbal mask.",
    duration: "30 min",
    price: "₹700",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  {
    title: "Oil Facial",
    description: "Deeply nourishing facial using medicated oils.",
    benefits: ["Nourishes skin", "Reduces dryness"],
    process: "Facial massage with herbal oils.",
    duration: "45 min",
    price: "₹2000",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  {
    title: "Cleansing",
    description: "Deep cleansing facial to remove impurities.",
    benefits: ["Clears pores", "Refreshes face"],
    process: "Deep cleaning with natural cleansers.",
    duration: "30 min",
    price: "₹1000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  {
    title: "Milk Cream Facial",
    description: "Gentle facial using fresh milk cream for soft skin.",
    benefits: ["Softens skin", "Brightens complexion"],
    process: "Facial massage with fresh milk cream.",
    duration: "60 min",
    price: "₹1500",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  {
    title: "Cream Facial",
    description: "Nourishing facial with herbal creams.",
    benefits: ["Moisturizes", "Smooths skin"],
    process: "Facial massage with herbal cream.",
    duration: "45 min",
    price: "₹1500",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  {
    title: "Fruit Facial",
    description: "Natural facial using fresh fruit extracts.",
    benefits: ["Natural vitamins", "Glowing skin"],
    process: "Facial with fresh fruit pulps.",
    duration: "60 min",
    price: "₹2000",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Facial Treatments'
  },
  // Threading
  {
    title: "Eyebrows",
    description: "Precise eyebrow shaping.",
    benefits: ["Defined look"],
    process: "Threading technique.",
    duration: "10 min",
    price: "₹150",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Threading'
  },
  {
    title: "Chin",
    description: "Hair removal for the chin area.",
    benefits: ["Smooth skin"],
    process: "Threading technique.",
    duration: "5 min",
    price: "₹100",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Threading'
  },
  {
    title: "Upper Lips",
    description: "Hair removal for the upper lip area.",
    benefits: ["Smooth skin"],
    process: "Threading technique.",
    duration: "5 min",
    price: "₹100",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Threading'
  },
  // Waxing
  {
    title: "Under Arms",
    description: "Effective hair removal for underarms.",
    benefits: ["Long lasting smoothness"],
    process: "Waxing technique.",
    duration: "15 min",
    price: "₹500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Waxing'
  },
  {
    title: "Body Wax",
    description: "Full body hair removal.",
    benefits: ["Smooth body skin"],
    process: "Full body waxing.",
    duration: "2 hr",
    price: "₹4000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Waxing'
  },
  {
    title: "Legs",
    description: "Hair removal for full legs.",
    benefits: ["Smooth legs"],
    process: "Leg waxing.",
    duration: "45 min",
    price: "₹1500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Waxing'
  },
  {
    title: "Arms",
    description: "Hair removal for full arms.",
    benefits: ["Smooth arms"],
    process: "Arm waxing.",
    duration: "30 min",
    price: "₹800",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: 'Waxing'
  },
  // Spa Services
  {
    title: "Natural Body Polish",
    description: "Deep exfoliation and skin polishing using natural ingredients.",
    benefits: ["Glowing skin", "Removes dead cells"],
    process: "Full body scrub and polish.",
    duration: "90 min",
    price: "₹3000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: 'Spa Services'
  },
  // Manicure & Pedicure
  {
    title: "Ayurvedic Manicure",
    description: "Hand treatment using Ayurvedic herbs and oils.",
    benefits: ["Nourished hands", "Healthy nails"],
    process: "Herbal hand soak and massage.",
    duration: "45 min",
    price: "₹1200",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    category: 'Manicure & Pedicure'
  },
  {
    title: "Ayurvedic Pedicure",
    description: "Foot treatment using Ayurvedic herbs and oils.",
    benefits: ["Soft feet", "Relieves tiredness"],
    process: "Herbal foot soak and massage.",
    duration: "60 min",
    price: "₹2000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    category: 'Manicure & Pedicure'
  },
  {
    title: "Simple Manicure",
    description: "Basic hand and nail care.",
    benefits: ["Clean nails"],
    process: "Standard manicure procedure.",
    duration: "30 min",
    price: "₹1000",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    category: 'Manicure & Pedicure'
  },
  {
    title: "Simple Pedicure",
    description: "Basic foot and nail care.",
    benefits: ["Clean feet"],
    process: "Standard pedicure procedure.",
    duration: "45 min",
    price: "₹1500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    category: 'Manicure & Pedicure'
  },
  {
    title: "Ayurvedic Manicure + Pedicure",
    description: "Combined Ayurvedic treatment for both hands and feet.",
    benefits: ["Total hand & foot care"],
    process: "Sequential Ayurvedic manicure and pedicure.",
    duration: "100 min",
    price: "₹2500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800",
    category: 'Manicure & Pedicure'
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Margaux Balard",
    text: "One of the best Ayurvedic services I've had in India. Clean space, attentive staff, and great location.",
    rating: 5
  },
  {
    name: "Brian Bird",
    text: "Great massages with many options. Talented therapists and lovely owner.",
    rating: 5
  },
  {
    name: "Disha Hirpara",
    text: "Very relaxing experience. The location by Ganga Beach adds to the calm atmosphere.",
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
