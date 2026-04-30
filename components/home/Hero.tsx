'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden px-6 lg:px-20 flex flex-col items-center">
      {/* Decorative Arches/Shapes */}
      <div className="absolute top-1/4 left-1/4 -z-10 opacity-10">
        <div className="w-[600px] h-[600px] border-2 border-primary rounded-full" />
      </div>
      
      {/* Badge */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6"
      >
        <span className="text-gray-800 font-medium">Hello!</span>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-center leading-tight mb-12"
      >
        I&apos;m <span className="text-primary italic">Nurani Farjahan</span>, <br />
        MERN Stack Developer
      </motion.h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4">
        {/* Left Stats/Quote */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="relative">
             <span className="text-5xl text-gray-300 font-serif absolute -top-4 -left-2">&quot;</span>
             <p className="text-gray-600 max-w-[240px] relative z-10 pl-2">
               Nurani&apos;s expertise in MERN stack development transformed our application. Highly Recommended
             </p>
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center"
        >
           {/* Custom Arch Frame */}
           <div className="relative w-72 h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[500px]">
             <div className="absolute inset-0 bg-primary rounded-t-full -bottom-10" />
             <div className="absolute inset-2 bg-[#f4a261] rounded-t-full flex items-end justify-center overflow-hidden">
               {/* Using a placeholder for the person image */}
               <Image 
                 src="https://picsum.photos/seed/jenny/800/1000" 
                 alt="Nurani Farjahan"
                 fill
                 className="object-cover object-top"
                 referrerPolicy="no-referrer"
               />
             </div>
           </div>

           {/* Call to Actions floating on image bg area */}
           <div className="absolute bottom-[-20px] flex gap-4 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/10">
              <button className="flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-all group">
                Portfolio <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all">
                Hire me
              </button>
           </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-end gap-6 text-right"
        >
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <div>
            <h3 className="text-4xl font-display font-bold">4+ Years</h3>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">MERN Development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
