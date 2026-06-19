import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      url: 'https://github.com/kotojupreetham',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      url: 'https://linkedin.com/in/kotojupreetham',
    },
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      url: 'https://instagram.com/kotojupreetham',
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#050507] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-16 relative z-10">
        
        {/* Cinematic CTA */}
        <div className="text-center space-y-6 max-w-3xl">
          <h2 
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Have an idea?<br />
            <span className="text-gradient-purple-cyan glow-text-purple">Let's build the future</span><br />
            of the web together.
          </h2>
          
          <div className="pt-8">
            <a
              href="mailto:kotojupreetham@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-white font-semibold transition-all hover:bg-purple-950/20 shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] interactive-card group"
            >
              <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>kotojupreetham@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Contact Terminal Window */}
        <div className="w-full max-w-2xl rounded-2xl glass-card text-left border border-white/5 overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-white/5 border-b border-white/5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[10px] text-slate-500 tracking-wide">
              ~/preetham — contact.sh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-600 font-semibold">&gt;</span>
              <span className="text-cyan-400 font-semibold">email</span>
              <span className="text-slate-400">➔</span>
              <a href="mailto:kotojupreetham@gmail.com" className="text-slate-300 hover:text-white transition-colors border-b border-dashed border-slate-700 hover:border-white">
                kotojupreetham@gmail.com
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-600 font-semibold">&gt;</span>
              <span className="text-cyan-400 font-semibold">github</span>
              <span className="text-slate-400">➔</span>
              <a href="https://github.com/kotojupreetham" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors border-b border-dashed border-slate-700 hover:border-white">
                github.com/kotojupreetham
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-600 font-semibold">&gt;</span>
              <span className="text-cyan-400 font-semibold">linkedin</span>
              <span className="text-slate-400">➔</span>
              <a href="https://linkedin.com/in/kotojupreetham" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors border-b border-dashed border-slate-700 hover:border-white">
                linkedin.com/in/kotojupreetham
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-600 font-semibold">&gt;</span>
              <span className="text-cyan-400 font-semibold">instagram</span>
              <span className="text-slate-400">➔</span>
              <a href="https://instagram.com/preetham_kotoju" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors border-b border-dashed border-slate-700 hover:border-white">
                instagram.com/preetham_kotoju
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom details */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-light">
          
          {/* Copyright/Author */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-400 text-sm tracking-tight">Preetham Chary</p>
            <p>© {new Date().getFullYear()} • Handcrafted in Hyderabad, India</p>
          </div>

          {/* Social Matrix */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all interactive-card"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={handleBackToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/10 transition-all group interactive-card"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};
