'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate.',
    image: 'https://picsum.photos/seed/ui/600/400',
  },
  {
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate.',
    image: 'https://picsum.photos/seed/web/600/400',
  },
  {
    title: 'Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate.',
    image: 'https://picsum.photos/seed/landing/600/400',
  },
];

export default function Services() {
  return (
    <section id="service" className="bg-dark-bg text-white py-24 px-6 lg:px-20 rounded-[40px] mx-4 my-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
               My <span className="text-primary italic">Services</span>
             </h2>
          </div>
          <div className="max-w-sm">
             <p className="text-gray-400 text-sm leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-surface p-8 rounded-[32px] group hover:bg-primary transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-2xl font-display font-medium max-w-[120px]">{service.title}</h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-black group-hover:border-transparent transition-all">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Dots like in design */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((dot) => (
                  <div key={dot} className={`w-2 h-2 rounded-full ${dot === index + 1 ? 'bg-primary group-hover:bg-white' : 'bg-white/20'}`} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
