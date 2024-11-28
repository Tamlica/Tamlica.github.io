import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/tamlica' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/tamlicamuhaimin/' },
              { Icon: Mail, href: 'mailto:tamlicamuhaimin@outlook.com' },
              { Icon: FileText, href: '/resume.pdf' }
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-600 hover:text-gray-900"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}