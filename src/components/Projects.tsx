import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Laptop, Smartphone, Terminal, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  context: string;
  badgeIcon: React.ReactNode;
  features: string[];
  githubUrl: string;
  category: string;
  visualSnippet: React.ReactNode;
}

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const projectsList: Project[] = [
    {
      title: 'Orion',
      context: 'Hackathon Project (CodeNyx)',
      badgeIcon: <Award className="w-4 h-4 text-purple-400" />,
      category: 'Simulations & Decisions',
      features: [
        'Built in a grueling, sleepless 36-hour sprint with complete strangers.',
        'Acted as Backend Lead & Product Ideation.',
        'Designed to help young social entrepreneurs make decisions through interactive simulations.',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-purple-950/20 border border-purple-500/20 flex flex-col justify-around p-3 font-mono text-[10px] text-purple-300 overflow-hidden">
          <div className="flex justify-between border-b border-purple-500/10 pb-1">
            <span>[ORION_SIMULATION]</span>
            <span className="text-emerald-400 font-bold">● ACTIVE</span>
          </div>
          <div className="space-y-1">
            <div>&gt; Loading economic simulation data...</div>
            <div>&gt; Processing entrepreneur agent weights...</div>
            <div className="text-cyan-400">&gt; Score: +84% stability (Decision Node #14)</div>
          </div>
          <div className="w-full bg-purple-900/40 rounded h-1.5 overflow-hidden">
            <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>
        </div>
      ),
    },
    {
      title: 'AI-Agent (Jarvis)',
      context: 'Autonomous AI Desktop Assistant',
      badgeIcon: <Terminal className="w-4 h-4 text-cyan-400" />,
      category: 'Local LLM Architecture',
      features: [
        'Local-first desktop assistant running on Windows.',
        'Features screen understanding and real-time voice interaction.',
        'Deep exploration into local LLM agent architectures and UI inspection.',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex flex-col justify-around p-3 font-mono text-[10px] text-cyan-300 overflow-hidden">
          <div className="flex justify-between border-b border-cyan-500/10 pb-1">
            <span>[JARVIS_AGENT_CORE]</span>
            <span className="text-purple-400 font-bold">● IDLE</span>
          </div>
          <div className="space-y-1">
            <div>&gt; Listening for "Hey Jarvis"...</div>
            <div className="text-purple-400">&gt; Frame buffer inspect: bounding_box(x:120, y:300)</div>
            <div>&gt; UI Element: Clickable button: "Send"</div>
          </div>
          <div className="flex gap-2">
            <span className="px-1.5 py-0.5 rounded bg-cyan-900/50">Llama3-8B</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-900/50">Whisper-Local</span>
          </div>
        </div>
      ),
    },
    {
      title: 'AI-Doc-Converter',
      context: 'AI Codebase Tooling',
      badgeIcon: <Code className="w-4 h-4 text-indigo-400" />,
      category: 'AST Analysis & LLMs',
      features: [
        'Automatically analyzes codebases using Abstract Syntax Tree (AST) analysis.',
        'Generates structural, comprehensive technical documentation via local LLMs.',
        'Blends AI capabilities seamlessly into developer software engineering workflows.',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex flex-col p-3 font-mono text-[10px] text-indigo-300 overflow-hidden">
          <div className="text-slate-400 border-b border-indigo-500/10 pb-1 flex justify-between">
            <span>ast_parser.py</span>
            <span className="text-indigo-400">AST_BUILD</span>
          </div>
          <pre className="text-[9px] mt-2 text-slate-400 overflow-hidden">
{`def traverse(node):
  if isinstance(node, ast.FunctionDef):
    doc = generate_doc(node.name)
    inject_docstring(node, doc)
  return node`}
          </pre>
        </div>
      ),
    },
    {
      title: 'FestFlow',
      context: 'Event Management System',
      badgeIcon: <Laptop className="w-4 h-4 text-emerald-400" />,
      category: 'Full-Lifecycle App',
      features: [
        'Full-scale client-server system featuring role-based access control.',
        'Secure QR code event ticketing and real-time attendance verification.',
        'Powered by a robust Flutter frontend and Firebase Firestore backend (5-month build).',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-center p-3 relative overflow-hidden">
          <div className="w-20 h-28 rounded-lg border border-emerald-500/30 bg-[#0d1612] p-1 flex flex-col justify-between text-[6px] text-emerald-300 shadow-md">
            <div className="border-b border-emerald-500/10 pb-0.5 text-center text-white font-bold font-sans">FestFlow</div>
            <div className="my-auto flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-white p-0.5 flex items-center justify-center rounded">
                {/* Simulated QR Code */}
                <div className="w-full h-full bg-slate-900 grid grid-cols-3 gap-0.5 p-0.5">
                  <div className="bg-white"></div><div className="bg-slate-900"></div><div className="bg-white"></div>
                  <div className="bg-slate-900"></div><div className="bg-white"></div><div className="bg-white"></div>
                  <div className="bg-white"></div><div className="bg-slate-900"></div><div className="bg-slate-900"></div>
                </div>
              </div>
              <span className="text-[5px]">Scan to check-in</span>
            </div>
            <div className="text-center bg-emerald-500/20 text-emerald-300 py-0.5 rounded text-[5px]">ADMIN ACCESS</div>
          </div>
          <div className="ml-4 flex-1 space-y-1 text-slate-300 font-sans text-[9px]">
            <div className="text-white font-semibold">FestFlow Mobile</div>
            <div>• Offline cache ready</div>
            <div className="text-emerald-400 font-bold">• 124 checked in</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Chit-Tracker',
      context: 'FinTech Mobile App',
      badgeIcon: <Smartphone className="w-4 h-4 text-pink-400" />,
      category: 'Offline-First Mobile',
      features: [
        'Offline-first app architecture with seamless Firestore cloud synchronization.',
        'Generates detailed PDF reporting for financial records.',
        'Handles complex payment tracking analytics and automated balance sheets.',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-pink-950/20 border border-pink-500/20 flex p-3 relative overflow-hidden">
          <div className="w-20 h-28 rounded-lg border border-pink-500/30 bg-[#160d12] p-1 flex flex-col justify-between text-[6px] text-pink-300 shadow-md">
            <div className="border-b border-pink-500/10 pb-0.5 text-center text-white font-bold font-sans">ChitTracker</div>
            <div className="space-y-1 my-1">
              <div className="flex justify-between text-slate-400"><span>Paid:</span><span className="text-emerald-400">$2,400</span></div>
              <div className="flex justify-between text-slate-400"><span>Owed:</span><span className="text-pink-400">$600</span></div>
              <div className="w-full bg-slate-800 rounded-[2px] h-1 overflow-hidden">
                <div className="w-4/5 h-full bg-pink-500" />
              </div>
            </div>
            <div className="text-center bg-pink-500/20 text-pink-300 py-0.5 rounded text-[4px]">SYNC: 3s ago</div>
          </div>
          <div className="ml-4 flex-1 flex flex-col justify-center gap-1.5 font-mono text-[9px] text-slate-300">
            <div className="text-white font-sans font-semibold">Payment Analytics</div>
            <div className="text-[8px] bg-slate-900/50 p-1 rounded border border-white/5">
              <span>PDF Report: Generated</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Metal Wheels',
      context: 'Web Automobile Showcase',
      badgeIcon: <Laptop className="w-4 h-4 text-orange-400" />,
      category: 'Vanilla CSS Design UI',
      features: [
        'Premium automobile showcase built entirely with pure HTML/CSS without AI tools.',
        'The foundation of UI layout and custom CSS styling journey (3-week build).',
        'Implements advanced layouts, hover states, and smooth transitions natively.',
      ],
      githubUrl: 'https://github.com/kotojupreetham',
      visualSnippet: (
        <div className="w-full h-32 rounded-lg bg-orange-950/20 border border-orange-500/20 flex flex-col justify-between p-3 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="text-white font-black text-xs italic tracking-wider">MW / SPEED</span>
            <span className="text-[8px] text-slate-400">PURE HTML/CSS</span>
          </div>
          <div className="relative flex items-center justify-center my-auto">
            {/* Minimalist modern car layout */}
            <div className="w-24 h-6 bg-slate-900/90 border border-orange-500/50 rounded-lg relative">
              <div className="absolute top-1 left-2 w-4 h-2 bg-orange-500/40 rounded-full" />
              <div className="absolute bottom-[-4px] left-3 w-4 h-4 bg-orange-500 rounded-full border border-black" />
              <div className="absolute bottom-[-4px] right-3 w-4 h-4 bg-orange-500 rounded-full border border-black" />
            </div>
          </div>
          <div className="flex justify-between text-[8px] text-orange-400">
            <span>&lt; Showcase UI &gt;</span>
            <span>Est. 2024</span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressLineRef.current;
    if (!container || !progress) return;

    // Timeline line progress animation
    gsap.fromTo(
      progress,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 30%',
          end: 'bottom 80%',
          scrub: true,
        },
      }
    );

    // Card animations - fade & slide in
    const cards = container.querySelectorAll('.timeline-item');
    cards.forEach((card) => {
      const isLeft = card.classList.contains('timeline-left');
      
      gsap.fromTo(
        card.querySelector('.project-card-wrapper'),
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Pulse timeline indicator node
      gsap.fromTo(
        card.querySelector('.timeline-node'),
        { scale: 0.5, backgroundColor: 'rgba(255,255,255,0.1)' },
        {
          scale: 1.2,
          backgroundColor: '#a855f7',
          boxShadow: '0 0 12px rgba(168, 85, 247, 0.8)',
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
          Featured <span className="text-purple-500">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4 mb-4" />
        <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
          A track record of hackathons, local AI integrations, and full-lifecycle software builds.
        </p>
      </div>

      <div className="relative">
        
        {/* Central vertical line track */}
        <div
          ref={lineRef}
          className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-800"
        >
          {/* Glowing progress line overlay */}
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-purple-500 to-cyan-500 timeline-glow rounded-full"
            style={{ willChange: 'height' }}
          />
        </div>

        {/* Projects Timeline Stack */}
        <div className="space-y-12 md:space-y-16">
          {projectsList.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`timeline-item flex flex-col md:flex-row items-stretch w-full relative ${
                  isEven ? 'timeline-left md:flex-row-reverse' : 'timeline-right'
                }`}
              >
                
                {/* Timeline node dot indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20">
                  <div className="timeline-node w-3.5 h-3.5 rounded-full border border-slate-700 bg-[#0a0a0c] transition-all duration-300" />
                </div>

                {/* Left/Right content split card wrapper */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                  <div className="project-card-wrapper transition-all duration-300">
                    <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-4 hover:border-purple-500/20 group relative overflow-hidden interactive-card">
                      
                      {/* Top Context Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                          {project.badgeIcon}
                          <span>{project.context}</span>
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-purple-400 uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Interactive Visual Graphic */}
                      {project.visualSnippet}

                      {/* Features Bullet List */}
                      <ul className="space-y-2 text-xs text-slate-400 font-light leading-relaxed">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-white/5 flex gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          <span>GitHub</span>
                        </a>
                      </div>

                      {/* Ambient card lights */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Empty block to balance grid on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
