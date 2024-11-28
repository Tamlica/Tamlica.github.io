import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/tamlica',
    color: 'hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tamlicamuhaimin/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/tamlicamuhaimin/',
    color: 'hover:text-red-500'
  }
];

const contactInfo = [
  {
    icon: Mail,
    text: 'tamlicamuhaimin@outlook.com',
    label: 'Email',
    href: 'mailto:tamlicamuhaimin@outlook.com'
  },
  {
    icon: Phone,
    text: '+62 852 7573 7705',
    label: 'Phone',
    href: 'tel:+6285275737705'
  },
  {
    icon: MapPin,
    text: 'Yogyakarta, D.I Yogyakarta',
    label: 'Location',
    href: 'https://maps.google.com/?q=Yogyakarta'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always excited to connect with fellow developers and potential collaborators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, text, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      <p className="text-gray-800 font-medium group-hover:text-purple-600 transition-colors">{text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Social Profiles</h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map(({ name, icon: Icon, href, color }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-purple-500 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <Icon size={24} className={`text-gray-600 ${color}`} />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-800">{name}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        View Profile
                        <ExternalLink size={14} className="ml-1" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}