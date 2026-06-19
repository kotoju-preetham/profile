import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Enable custom cursor styles on body (hides default cursor)
    document.body.classList.add('custom-cursor-enabled');

    const mouse = { x: 0, y: 0 };
    
    // Store cursor position and animate with GSAP quickTo for performance
    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    
    const xRingTo = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' });
    const yRingTo = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      xDotTo(mouse.x);
      yDotTo(mouse.y);
      
      xRingTo(mouse.x);
      yRingTo(mouse.y);
    };

    // Hover effects for links, buttons, and card elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target or parent is interactive
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') || 
        target.closest('.interactive-card');

      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: 'rgba(168, 85, 247, 0.08)',
          borderColor: 'rgba(34, 211, 238, 0.6)',
          borderWidth: '1.5px',
          duration: 0.3
        });
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: '#22d3ee', // Cyan glow
          duration: 0.3
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(168, 85, 247, 0.4)',
          borderWidth: '1px',
          duration: 0.3
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#a855f7', // Purple dot
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/40 pointer-events-none z-50 hidden lg:block"
        style={{ willChange: 'transform' }}
      />
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 pointer-events-none z-50 shadow-[0_0_10px_rgba(168,85,247,0.8)] hidden lg:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
