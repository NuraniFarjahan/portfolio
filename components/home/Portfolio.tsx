'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import chatAppImg from "@/public/chat.png"
import blogAppImg from "@/public/blog.png"

const categories = ['All', 'Landing Page', 'E-commerce', 'Social Network', 'Chat App', 'Dashboard'];

const projects = [
  {
    id: 1,
    title: 'Vibble Chat -- Real-time Chat Application',
    category: 'Chat App',
    image: chatAppImg,
    description: 'Real-time chat application built with MERN stack, featuring user authentication, private messaging, and group chats using Socket.IO for seamless communication.',
    link: 'https://vibble-chat.vercel.app/'
  },
  {
    id: 2,
    title: 'Blog App -- Blogging Platform',
    category: 'Social Network',
    image: blogAppImg,
    description: 'A full-featured blogging platform developed with MERN stack, allowing users to create, edit, and share blog posts with rich text formatting and image uploads.',
    link: 'https://blog-app-psi-gray.vercel.app/'
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="project" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium">
            Check out my latest <br />
            <span className="text-primary italic">Projects</span>
          </h2>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all self-start"
        >
          See All
        </motion.button>
      </div>

      {/* Categories Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-16 justify-center"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab(cat);
              if (activeTab === cat && filteredProjects.length > 0) {
                setSelectedProject(filteredProjects[0]);
              }
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden group bg-gray-200">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={idx === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Info - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold line-clamp-2">{project.title}</h3>
                </div>

                {/* Arrow Icon - Top Right */}
                <motion.div 
                  className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowUpRight className="text-black w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Featured Project Detail */}
      {selectedProject && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-8 md:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-[16px] overflow-hidden md:col-span-1"
              >
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Project Details */}
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <motion.a
                  href={selectedProject.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors group"
                >
                  View Project
                  <motion.div whileHover={{ rotate: 45 }}>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Pagination Dots */}
      {filteredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-2 justify-center mt-12"
        >
          {filteredProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`h-2 rounded-full transition-all ${
                selectedProject.id === project.id ? 'bg-primary w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
