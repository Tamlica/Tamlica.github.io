import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 bg-[#fafafa]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, rgba(147, 51, 234, ${Math.random() * 0.1}) 0%, rgba(59, 130, 246, ${Math.random() * 0.1}) 100%)`,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, Math.random() * 360, 0],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="inline-block">
              <Code2 className="w-16 h-16 mb-6 mx-auto text-purple-600" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-purple-200 rounded-full"
                style={{ width: '4rem', height: '4rem', top: 0, left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Tamlica Muhaimin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Crafting digital experiences through elegant code and innovative design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { Icon: Github, href: 'https://github.com/tamlica', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/tamlicamuhaimin', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:tamlicamuhaimin@outlook.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Icon className="text-gray-600" size={20} />
                <span className="text-gray-600 font-medium">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-gray-100"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
}