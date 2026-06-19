import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Split title text into individual characters for cinematic stagger
    const textContent = title.textContent || '';
    title.innerHTML = '';
    
    // Wrap each character (including space) in a span
    textContent.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      title.appendChild(span);
    });

    const chars = title.querySelectorAll('span');
    const metaDivs = metaRef.current ? metaRef.current.querySelectorAll('div') : [];

    // Create GSAP Timeline for cinematic entry
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(tagRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
    })
    .fromTo(terminalRef.current, 
      { opacity: 0, y: 50, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 }, 
      '-=0.8'
    )
    .fromTo(promptRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.6 },
      '-=0.6'
    )
    .to(chars, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      stagger: 0.04,
      duration: 1.0,
      transformOrigin: '50% 50% -50px',
    }, '-=0.4')
    .to(headlineRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, '-=0.6')
    .to(subheadlineRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, '-=0.6')
    .fromTo(metaDivs,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
      '-=0.6'
    )
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, '-=0.6');

  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-12 overflow-hidden"
    >
      <div className="z-10 text-center max-w-4xl flex flex-col items-center w-full">
        
        {/* Glow Tag */}
        <div
          ref={tagRef}
          className="opacity-0 translate-y-4 mb-8 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase glow-btn-purple"
        >
          ⚡ Available for Projects
        </div>

        {/* Terminal Window Card */}
        <div
          ref={terminalRef}
          className="w-full max-w-3xl rounded-2xl glass-card text-left border border-white/5 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] mb-10"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-white/5 border-b border-white/5 select-none">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[11px] text-slate-500 tracking-wide">
              ~/preetham — whoami
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-10 font-mono">
            {/* Prompt input */}
            <div ref={promptRef} className="text-sm sm:text-base text-slate-400 mb-6 opacity-0">
              <span className="text-cyan-400 font-semibold">preetham@cvr</span>:
              <span className="text-purple-400 font-semibold">~</span>$ whoami
            </div>

            {/* Terminal Output Header (Staggered Title) */}
            <div className="term-out">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase select-none perspective-1000"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Preetham Chary
              </h1>
              
              {/* Pulsing Coder Cursor */}
              <span className="inline-block w-2.5 h-8 bg-purple-500 ml-2 animate-[pulse_1s_infinite] align-middle shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </div>

            {/* Headline */}
            <p
              ref={headlineRef}
              className="opacity-0 translate-y-6 text-lg sm:text-2xl font-sans font-semibold tracking-tight text-gradient mb-4 leading-snug"
            >
              Building Software, Exploring AI, & Crafting Interactive Digital Experiences.
            </p>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="opacity-0 translate-y-6 text-sm sm:text-base font-sans text-slate-400 leading-relaxed mb-8 font-light"
            >
              Final-year Computer Science student focused on full-stack development, AI-powered applications, and immersive web experiences.
            </p>

            {/* Code Metadata Footer Grid */}
            <div
              ref={metaRef}
              className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500 font-mono"
            >
              <div>
                role: <span className="text-cyan-400 font-medium">final-year CS @ CVR</span>
              </div>
              <div>
                grad: <span className="text-purple-400 font-medium">2027</span>
              </div>
              <div>
                focus: <span className="text-emerald-400 font-medium">full-stack · AI · 3D web</span>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5 interactive-card"
          >
            View Work
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-slate-700 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-all transform hover:-translate-y-0.5 gap-2 interactive-card"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Visual Ambient Light glow bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
