'use client';

import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Tech Solutions Inc., Dhaka',
    period: 'Jan 2020 - Dec 2021',
    role: 'Junior MERN Developer',
    description: 'Developed and maintained full-stack web applications using MongoDB, Express, React, and Node.js. Collaborated with the team to deliver scalable solutions and optimize database performance.',
  },
  {
    company: 'Digital Innovations Ltd., Dhaka',
    period: 'Jan 2022 - Present',
    role: 'Senior MERN Stack Developer',
    description: 'Leading development of complex enterprise applications. Architected RESTful APIs, implemented real-time features, and mentored junior developers on best practices.',
    active: true,
  },
  {
    company: 'Freelance Full-Stack Developer',
    period: 'Ongoing',
    role: 'Independent Contractor',
    description: '',
  },
];

export default function Experience() {
  return (
    <section id="resume" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-20">
        My <span className="text-primary italic">Work Experience</span>
      </h2>

      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative"
            >
              {/* Dot in the middle */}
              <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10 hidden md:block">
                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${
                  exp.active ? 'bg-black' : 'bg-primary'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Left Side: Company Info */}
              <div className="md:text-left">
                <h3 className="text-2xl font-display font-bold mb-2">{exp.company}</h3>
                <p className="text-gray-500 font-medium">{exp.period}</p>
              </div>

              {/* Right Side: Role Info */}
              <div className="md:text-left">
                <h3 className="text-2xl font-display font-bold mb-4">{exp.role}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
