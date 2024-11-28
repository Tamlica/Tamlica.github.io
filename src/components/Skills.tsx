import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  'Backend': ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
  'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Agile', 'Mentoring']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}