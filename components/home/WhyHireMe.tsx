'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function WhyHireMe() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex-1"
      >
        <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] overflow-hidden">
           <Image 
             src="https://picsum.photos/seed/jenny2/800/1000" 
             alt="Jenny Working" 
             fill
             className="object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
        {/* Floating background circle */}
        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[#f4a261] rounded-full opacity-30" />
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h2 className="text-5xl md:text-6xl font-display font-medium mb-8">
          Why <span className="text-primary italic">Hire me</span>?
        </h2>
        <p className="text-gray-500 mb-12 text-sm leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-4xl font-display font-bold mb-1">450+</h3>
            <p className="text-gray-400 text-sm">Project Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-display font-bold mb-1">450+</h3>
            <p className="text-gray-400 text-sm">Project Completed</p>
          </div>
        </div>

        <button className="px-10 py-4 rounded-full border border-gray-300 font-bold hover:bg-black hover:text-white hover:border-black transition-all">
          Hire me
        </button>
      </motion.div>
    </section>
  );
}
