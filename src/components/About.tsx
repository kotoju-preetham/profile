import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Monitor, Cloud, Sparkles, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
}

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      skills: ['Python', 'Java', 'JavaScript', 'SQL'],
      colorClass: 'group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    },
    {
      title: 'Frontend',
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      skills: ['HTML', 'CSS', 'GSAP', 'React', 'Tailwind'],
      colorClass: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    },
    {
      title: 'Mobile & Cloud',
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      skills: ['Flutter', 'AWS', 'Firebase', 'Node.js'],
      colorClass: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    },
    {
      title: 'Currently Exploring',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      skills: ['Deep Learning', 'Blender 3D', 'Advanced DSA'],
      colorClass: 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    },
  ];

  useEffect(() => {
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!leftCol || !rightCol) return;

    // Slide-in fade anims for Left Column elements
    gsap.fromTo(
      leftCol.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftCol,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Grid card staggered reveals
    const cards = rightCol.querySelectorAll('.skill-card');
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightCol,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Parallax Hexagon */}
      <div 
        className="absolute top-[10%] right-[-30px] opacity-[0.06] pointer-events-none z-0 hidden lg:block animate-[spin_50s_linear_infinite]"
        style={{ transformOrigin: 'center' }}
      >
        <svg viewBox="0 0 100 100" width="220" height="220">
          <polygon points="50,4 96,27 96,73 50,96 4,73 4,27" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column - Bio & Education */}
        <div ref={leftColRef} className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            About <span className="text-purple-500">&</span> Core Stack
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Hi, I'm <strong className="text-white font-semibold">Preetham</strong>. I'm a Computer Science student at <span className="text-purple-400 font-medium">CVR College of Engineering</span> building practical applications that combine functionality, creativity, and user experience.
          </p>
          
          <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2">
            <h3 className="font-semibold text-slate-400 tracking-wide text-[10px] font-mono uppercase">Philosophy</h3>
            <p className="text-slate-300 font-serif italic text-base leading-relaxed">
              "Learn. Build. Improve. Repeat."
            </p>
          </div>

          {/* Education Card */}
          <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-3 interactive-card hover:border-cyan-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/5 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-slate-400 tracking-wide text-[10px] font-mono uppercase">Education</h3>
            </div>
            <div>
              <h4 className="font-bold text-white text-base leading-snug">B.Tech, Computer Science & Engineering</h4>
              <p className="text-sm text-purple-400 font-medium">CVR College of Engineering</p>
              <p className="text-xs text-slate-400 font-light mt-0.5">Hyderabad, India</p>
            </div>
            <div className="pt-1">
              <span className="inline-block text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full font-mono">
                Expected graduation — 2027
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Skill Grid */}
        <div
          ref={rightColRef}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`skill-card group p-6 rounded-2xl glass-card flex flex-col justify-between transition-all duration-300 interactive-card ${cat.colorClass}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-white/5 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-white tracking-wide text-base">{cat.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full glass-badge text-slate-300 font-medium group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
