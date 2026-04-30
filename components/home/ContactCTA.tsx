'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle, Award, Star } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-display font-medium mb-12">
        Have an Amazing Project <br />
        Idea? <span className="text-primary italic">Let&apos;s Build It</span>
      </h2>

      <div className="relative mb-16">
        <div className="bg-[#FFF4ED] p-4 rounded-full flex items-center shadow-lg max-w-2xl mx-auto border border-primary/10">
          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center ml-4 shrink-0">
             <Mail className="text-primary w-6 h-6" />
          </div>
          <input 
            type="email" 
            placeholder="Enter Email Address" 
            className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 font-medium placeholder:text-gray-400"
          />
          <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-md">
            Send
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
         <div className="flex items-center gap-2">
            <Star className="text-black w-5 h-5 fill-black" />
            <span className="font-bold text-sm">4.9/5 Client Ratings</span>
         </div>
         <div className="flex items-center gap-2">
            <Award className="text-black w-5 h-5" />
            <span className="font-bold text-sm">MERN Stack Expert</span>
         </div>
         <div className="flex items-center gap-2">
            <CheckCircle className="text-black w-5 h-5" />
            <span className="font-bold text-sm">Full-Stack Developer</span>
         </div>
      </div>
    </section>
  );
}
