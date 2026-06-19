import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const tags = [
    'Software Engineering',
    'Artificial Intelligence',
    'Deep Learning',
    'Interactive Web Experiences',
    '3D Digital Worlds',
    'Product Development',
  ];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Slide-in fade anim
    gsap.fromTo(
      card,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Parallax Circle Shape */}
      <div 
        className="absolute bottom-[-20px] left-[-30px] opacity-[0.05] pointer-events-none z-0 hidden lg:block animate-[pulse_6s_ease-in-out_infinite]"
        style={{ transformOrigin: 'center' }}
      >
        <svg viewBox="0 0 100 100" width="160" height="160">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#F2A93B" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-purple-400 letter-spacing-0.08em mb-2">
            // career vision
          </div>
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight">
            Where this is headed
          </h2>
          <div className="h-1 w-16 bg-purple-500 rounded-full mt-3" />
        </div>

        {/* Vision Card */}
        <div
          ref={cardRef}
          className="p-8 sm:p-12 rounded-3xl glass-card border border-white/5 relative overflow-hidden group interactive-card hover:border-purple-500/20"
        >
          {/* Big Floating ASCII code prompt background */}
          <div className="absolute right-8 bottom-2 font-sans font-black text-9xl text-white/[0.015] select-none pointer-events-none transition-all duration-500 group-hover:scale-105">
            &gt;_
          </div>

          <div className="max-w-3xl space-y-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <span className="font-mono text-xs text-slate-500">MISSION STATEMENT</span>
            </div>

            <p className="text-xl sm:text-2xl text-slate-100 font-light leading-relaxed">
              Aspiring to build <strong className="text-white font-medium">scalable applications</strong>, AI-powered tools, and <strong className="text-white font-medium">immersive digital experiences</strong> — software engineering that combines functionality, intelligence, and craft.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs text-purple-400 border border-purple-500/20 px-4 py-1.5 rounded-full bg-purple-500/5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
