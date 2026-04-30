'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
    tag: 'UI/UX Design',
    author: 'Jayesh Patil',
    date: '10 Nov, 2023',
    image: 'https://picsum.photos/seed/blog1/800/600',
  },
  {
    title: 'Sugee: Loan Management System for Rural Sector.',
    tag: 'App Design',
    author: 'Jayesh Patil',
    date: '09 Oct, 2023',
    image: 'https://picsum.photos/seed/blog2/800/600',
    color: '#00845B'
  },
  {
    title: 'Cinetrade: Innovative way to invest in Digital Media',
    tag: 'App Design',
    author: 'Jayesh Patil',
    date: '13 Aug, 2023',
    image: 'https://picsum.photos/seed/blog3/800/600',
  },
];

export default function Blog() {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-medium">
          From my <br />
          <span className="text-primary italic">blog post</span>
        </h2>
        <button className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className={`relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6 p-6 ${blog.color ? '' : 'bg-[#EBF1FF]'}`} style={blog.color ? { backgroundColor: blog.color } : {}}>
               <Image 
                 src={blog.image} 
                 alt={blog.title} 
                 fill 
                 className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-6 right-6 w-14 h-14 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                 <ArrowUpRight />
               </div>
               
               {/* Custom Tag in Card */}
               <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                 <span className="text-white text-xs font-bold">{blog.tag}</span>
               </div>
            </div>

            <div className="flex gap-4 items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
              <span>● {blog.author}</span>
              <span>● {blog.date}</span>
            </div>

            <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">
              {blog.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
