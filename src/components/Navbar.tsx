import React from 'react';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl">
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/5">
        {/* Name / Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white hover:text-purple-400 transition-colors">
          Preetham<span className="text-purple-500 font-extrabold">.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-purple-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline">Available for Projects</span>
          <span className="sm:hidden">Available</span>
        </div>
      </nav>
    </header>
  );
};
