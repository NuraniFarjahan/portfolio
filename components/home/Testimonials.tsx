'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Karim Ahmed',
    role: 'CEO, TechStart Bangladesh',
    rating: 5,
    text: 'Nurani\'s MERN stack expertise helped us build a scalable e-commerce platform. Her attention to detail and problem-solving skills are exceptional. Highly recommended for any full-stack development project.',
    image: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    name: 'Fatima Khan',
    role: 'Founder, Digital Ventures',
    rating: 5,
    text: 'Working with Nurani was a game-changer for our project. She implemented real-time features and optimized our database efficiently. Her technical knowledge and communication are outstanding.',
    image: 'https://picsum.photos/seed/p2/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark-bg text-white py-24 px-6 lg:px-20 rounded-[40px] mx-4 my-20 overflow-hidden relative">
      {/* Decorative stars/dots */}
      <div className="absolute top-20 right-1/4 animate-pulse">
        <Star className="text-primary w-6 h-6 fill-primary" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
          Client Testimonials <br />
          About <span className="text-primary italic">My Work</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Hear from clients who have experienced my MERN stack development expertise. Their success is my success, and I'm proud of the impact I've made on their projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-dark-surface p-10 rounded-[32px] relative group"
          >
            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
              <Quote className="w-12 h-12 text-primary" />
            </div>

            <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                 <Image src={t.image} alt={t.name} width={60} height={60} className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                 <h4 className="font-bold text-lg">{t.name}</h4>
                 <p className="text-gray-400 text-xs">{t.role}</p>
                 <div className="flex gap-1 mt-1">
                   {[...Array(t.rating).keys()].map((star) => (
                     <Star key={star} className="w-3 h-3 fill-primary text-primary" />
                   ))}
                   <span className="text-xs ml-1 font-bold">5.0</span>
                 </div>
               </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed italic">
              &quot;{t.text}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
