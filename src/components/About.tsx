import { motion } from "framer-motion";
import { Code, Palette, Globe, Coffee } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing elegant, maintainable, and efficient code is my passion.",
    },
    {
      icon: Palette,
      title: "Design-Driven",
      description:
        "Creating beautiful and intuitive user experiences is my priority.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Working with diverse teams across different time zones and cultures.",
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Constantly exploring new technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I have experience in developing websites and web app with various
            frameworks such as VueJS, React, Django, Laravel, and NodeJS. I am
            familiar with REST API and I also have experience in using RDBMS
            databases or noSQL database such as MySQL, PostgreSQL, and MongoDB.
            I prefer to use the Python or Javascript programming language, but, I also
            interested to learn the best programming language on their own and
            required field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
