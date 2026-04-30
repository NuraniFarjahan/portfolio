'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const bannerItems = [
  'React Development',
  'Node.js Backend',
  'MongoDB Database',
  'API Design',
  'Full Stack Development',
  'React Development',
  'Node.js Backend',
  'MongoDB Database',
  'API Design',
  'Full Stack Development',
];

export default function MovingBanner() {
  return (
    <div className="bg-primary py-6 overflow-hidden border-y border-white/10 select-none">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-10 items-center"
      >
        {bannerItems.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <span className="text-white text-3xl md:text-5xl font-display font-medium uppercase tracking-tighter">
              {item}
            </span>
            <Sparkles className="text-white/40 w-10 h-10 group-hover:scale-125 transition-transform" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
