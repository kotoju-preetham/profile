import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Sparkles, Brain, ShieldCheck, Cpu, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

interface Credential {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  detail: string;
}

export const ServicesCertifications: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      title: 'Full-Stack & Mobile Development',
      description: 'Building responsive apps with robust architectures, structured databases, and real-time syncing using Flutter and Firebase.',
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      tags: ['Flutter', 'Firebase', 'Node.js', 'SQL'],
    },
    {
      title: 'Creative Frontend Engineering',
      description: 'Crafting immersive digital spaces using custom animations, glassmorphic layouts, and high-performance physics-based micro-interactions.',
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      tags: ['GSAP', 'React', 'Tailwind', 'Canvas 2D'],
    },
    {
      title: 'AI Agent & Tool Integration',
      description: 'Integrating local LLMs into offline workflows, building screen understanding assistants, and automating AST codebase analysis.',
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      tags: ['Local LLMs', 'Agentic Workflows', 'Python', 'LangChain'],
    },
  ];

  const credentials: Credential[] = [
    {
      title: 'AWS Cloud Fundamentals Exploration',
      issuer: 'Amazon Web Services (AWS)',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      detail: 'Core Cloud Architecture, Serverless Workflows, IAM Policies, and Database Hosting.',
    },
    {
      title: 'NPTEL Java Certification',
      issuer: 'National Programme on Technology Enhanced Learning',
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      detail: 'Object-Oriented Programming, Exception Handling, Collections Framework, and Multithreading.',
    },
    {
      title: 'E-Box (C, Java, Python with Data Structures)',
      issuer: 'E-Box Academy',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      detail: 'Advanced algorithms, complex data structures design, and dynamic programming challenges.',
    },
  ];

  useEffect(() => {
    // Services cards entry stagger
    const servicesContainer = servicesRef.current;
    if (servicesContainer) {
      const cards = servicesContainer.querySelectorAll('.service-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesContainer,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Credentials entry slide-up
    const certsContainer = certsRef.current;
    if (certsContainer) {
      const items = certsContainer.querySelectorAll('.cert-item');
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: certsContainer,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/5 relative"
    >
      {/* Background glow circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Services Grid Section */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Services & <span className="text-purple-500">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Professional capabilities bridging system design, interactive frontend, and AI integrations.
          </p>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group p-6 rounded-2xl glass-card border border-white/5 flex flex-col justify-between h-full transition-all duration-300 interactive-card hover:border-purple-500/20"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-white/5 w-fit flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 pt-6">
                {service.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-0.5 rounded-full glass-badge text-[10px] text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials Section */}
      <div className="pt-8">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider text-center md:text-left">
            Credentials & Certifications
          </h3>
          <div className="h-1 w-16 bg-purple-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div
          ref={certsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="cert-item p-5 rounded-2xl glass-card border border-white/5 flex gap-4 items-start interactive-card hover:border-cyan-500/20"
            >
              <div className="p-2.5 rounded-xl bg-white/5 flex items-center justify-center">
                {cred.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm leading-snug tracking-tight">
                  {cred.title}
                </h4>
                <p className="text-xs text-purple-400 font-medium tracking-wide">
                  {cred.issuer}
                </p>
                <p className="text-[11px] text-slate-400 font-light leading-normal pt-1">
                  {cred.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
