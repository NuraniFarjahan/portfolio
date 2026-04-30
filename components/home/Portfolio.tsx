'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = ['E-Commerce', 'Social Network', 'Real Estate', 'Dashboard', 'Chat App'];

const projects = [
  {
    id: 1,
    title: 'TechMart - E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/food/800/600',
    description: 'Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard. Built with React for responsive UI, Node.js for API, and MongoDB for data management.'
  },
  {
    id: 2,
    title: 'ConnectHub - Social Network App',
    category: 'Social Network',
    image: 'https://picsum.photos/seed/home/800/600',
    description: 'Social networking application with user profiles, real-time messaging, and post sharing features using WebSocket for live updates.'
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Landing Page');

  return (
    <section id="project" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-medium">
          Check out my latest <br />
          <span className="text-primary italic">Projects</span>
        </h2>
        <button className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all self-start">
          See All
        </button>
      </div>

      {/* Grid of images from design top part */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden group">
          <Image src="https://picsum.photos/seed/proj1/1000/600" alt="Portfolio 1" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-4xl font-bold font-display opacity-80">TechMart</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="text-black" />
          </div>
        </div>
        <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden group">
          <Image src="https://picsum.photos/seed/proj2/1000/600" alt="Portfolio 2" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-4xl font-bold font-display opacity-80">ConnectHub</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="text-black" />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === cat 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Project Detail */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6">
           <h3 className="text-3xl font-display font-bold">{projects[0].title}</h3>
           <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
             <ArrowUpRight className="w-5 h-5" />
           </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          {projects[0].description}
        </p>
        
        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-10 h-2 rounded-full ${i === 1 ? 'bg-primary' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
