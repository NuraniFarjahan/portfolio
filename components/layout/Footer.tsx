'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-24 pb-10 px-6 lg:px-20 rounded-t-[60px] mx-4 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-24">
          <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter">
            Lets Connect there
          </h2>
          <button className="bg-primary hover:bg-opacity-90 text-white font-bold px-10 py-5 rounded-full flex items-center gap-3 transition-all shrink-0">
            Hire me <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-20 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">NF</span>
              </div>
              <span className="text-white font-bold tracking-wider text-xl">NURANI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full-Stack MERN Developer specializing in scalable web applications. I build modern, efficient, and user-friendly solutions for your business needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-8">Navigation</h4>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <Link href="#" className="hover:text-primary transition-colors">Home</Link>
              <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="#service" className="hover:text-primary transition-colors">Service</Link>
              <Link href="#resume" className="hover:text-primary transition-colors">Resume</Link>
              <Link href="#project" className="hover:text-primary transition-colors">Project</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-8">Contact</h4>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <p>+88 01XXXXXXXXX</p>
              <p>nurani@example.com</p>
              <p>nurani-dev.com</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-8">Get the latest information</h4>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
           <p>Copyright© 2024 Nurani Farjahan. All Rights Reserved.</p>
           <div className="flex gap-8">
             <Link href="#" className="hover:text-white transition-colors">User Terms & Conditions</Link>
             <span>|</span>
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
