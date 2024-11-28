import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}