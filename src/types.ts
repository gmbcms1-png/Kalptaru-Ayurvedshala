import React from 'react';

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  process: string;
  duration: string;
  icon: React.ReactNode;
  image: string;
  category: string;
  price?: string;
  longDescription?: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}
