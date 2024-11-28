import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2021 - Present',
    role: 'Full Stack Engineer',
    company: 'PT. Teknologi Kode Indonesia (TLab)',
    description: 'Building backends for mobile and web applications in Django and frontend applications using VueJS',
    achievements: [
      'Adding new functionalities to an existing Web Application (Django, VueJS)',
      'Maintaining and fixing bugs for various Web Applications',
      'Creating Python script (Unit Testing, Bot, Web Scrapping)',
      'Version control system (Git, Github, GitLab)'
    ]
  },
  {
    period: '2020 - 2022',
    role: 'Head Programmer / Owner',
    company: 'Projek.do',
    description: 'Projek.do is a team of friends an colleagues to develop website or microcontroller projects',
    achievements: [
      'Developing an online flight and hotel booking website (Laravel)',
      'Building backends for coffee shop mobile applications (Laravel, PHP)',
      'Building microcontroller projects using Arduino',
      'Create an IoT microcontroller projects that synchronises device and mobile applications (Arduino, Wemos, BLYNK app, Telegram Bot)'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-purple-600 text-white p-6 md:w-64 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold">{exp.period}</p>
                    <p className="text-purple-200 mt-1">{exp.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}