import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, Linkedin, Mail, ExternalLink, Monitor, Palette, Layout } from 'lucide-react';

function App() {
  const headerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header/Hero Section */}
      <header ref={headerRef} className="min-h-screen flex items-center justify-center relative px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-400 font-mono hero-text"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-6xl md:text-7xl font-bold hero-text">
              Bikram Dhami
            </h1>
            <h2 className="text-4xl md:text-5xl text-gray-400 font-light hero-text">
              UX/UI Designer
            </h2>
            <p className="max-w-2xl text-xl text-gray-300 hero-text">
              I craft intuitive digital experiences that blend creativity with functionality.
              Specializing in user-centered design solutions that make an impact.
            </p>
            <div className="flex gap-4 hero-text">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                View my work
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8 text-blue-400" />,
                title: "UI Design",
                description: "Creating beautiful, intuitive interfaces that users love to interact with."
              },
              {
                icon: <Palette className="w-8 h-8 text-purple-400" />,
                title: "UX Design",
                description: "Crafting seamless user experiences through research and testing."
              },
              {
                icon: <Layout className="w-8 h-8 text-green-400" />,
                title: "Prototyping",
                description: "Building interactive prototypes that bring designs to life."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700/50 transition-colors"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Redesign",
                description: "A complete overhaul of an e-commerce platform focusing on conversion optimization",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Banking App",
                description: "Modern banking application with focus on accessibility and user experience",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Mail className="w-6 h-6" />, href: "mailto:contact@bikramdhami.com" },
              { icon: <Github className="w-6 h-6" />, href: "https://github.com/bikramdhami" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/bikramdhami" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;