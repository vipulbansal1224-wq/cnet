"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Play, 
  Pause, 
  Tv, 
  Maximize2, 
  Minimize2, 
  FastForward, 
  ChevronRight,
  Settings,
  X,
  Volume2
} from 'lucide-react';

export default function AutoKioskTour() {
  const router = useRouter();
  const pathname = usePathname();

  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const isUserInteracting = useRef(false);
  const userInteractionTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);

  // Presentation pages sequence
  const tourPages = [
    '/',
    '/about',
    '/courses',
    '/verify-certificate',
    '/online-paper',
    '/it-world',
    '/gallery',
    '/contact'
  ];

  // Pixel scroll step based on speed
  const getSpeedPx = () => {
    switch (speed) {
      case 'slow': return 1;
      case 'fast': return 2.5;
      default: return 1.5;
    }
  };

  // 1. Detect User Interaction to temporarily pause auto-scroll
  useEffect(() => {
    const handleUserInteraction = () => {
      isUserInteracting.current = true;
      if (userInteractionTimeout.current) {
        clearTimeout(userInteractionTimeout.current);
      }
      // Resume auto-tour after 12 seconds of inactivity
      userInteractionTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 12000);
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      if (userInteractionTimeout.current) clearTimeout(userInteractionTimeout.current);
    };
  }, []);

  // 2. Fullscreen Change Listener
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // 3. Smooth Auto-Scroll Engine & Next Page Transition
  useEffect(() => {
    if (!isPlaying) {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
      return;
    }

    // Reset countdown on new page
    setCountdown(null);

    // Initial wait on a new page (3 seconds) before starting downward glide
    const startDelay = setTimeout(() => {
      scrollInterval.current = setInterval(() => {
        if (!isPlaying || isUserInteracting.current) return;

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;

        // If reached bottom of current page
        if (currentScroll >= maxScroll - 8) {
          if (scrollInterval.current) clearInterval(scrollInterval.current);
          
          // Start 4-second countdown before navigating to next page
          let remaining = 4;
          setCountdown(remaining);

          const countTimer = setInterval(() => {
            remaining -= 1;
            if (remaining > 0) {
              setCountdown(remaining);
            } else {
              clearInterval(countTimer);
            }
          }, 1000);

          transitionTimer.current = setTimeout(() => {
            const currentIdx = tourPages.indexOf(pathname);
            const nextIdx = (currentIdx + 1) % tourPages.length;
            const nextPage = tourPages[nextIdx];
            window.scrollTo({ top: 0, behavior: 'instant' as any });
            router.push(nextPage);
          }, 4000);

          return;
        }

        // Smooth downward scrolling step
        window.scrollBy({ top: getSpeedPx(), behavior: 'smooth' });
      }, 40); // 25 updates per second
    }, 2500);

    return () => {
      clearTimeout(startDelay);
      if (scrollInterval.current) clearInterval(scrollInterval.current);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [isPlaying, pathname, speed, router]);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Next Page Immediate Trigger
  const goToNextPage = () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    const currentIdx = tourPages.indexOf(pathname);
    const nextIdx = (currentIdx + 1) % tourPages.length;
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    router.push(tourPages[nextIdx]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden select-none font-sans">
      {/* Countdown Toast Banner if transitioning */}
      {countdown !== null && (
        <div className="mb-2 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-4 py-2 rounded-2xl shadow-2xl border-2 border-amber-400 text-xs flex items-center gap-2 animate-bounce">
          <Tv className="w-4 h-4 text-amber-400" />
          <span>Opening Next Page in <strong>{countdown}s</strong>...</span>
        </div>
      )}

      {/* Main Kiosk Controller Bar */}
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className="bg-slate-900/90 text-white p-3 rounded-full shadow-2xl border border-slate-700 hover:bg-slate-800 transition flex items-center gap-2"
          title="Open TV Screen Auto-Tour Menu"
        >
          <Tv className="w-5 h-5 text-amber-400 animate-pulse" />
          <span className="text-xs font-bold pr-1">TV Mode</span>
        </button>
      ) : (
        <div className="bg-slate-950/95 text-white p-3 sm:p-4 rounded-3xl shadow-2xl border-2 border-amber-400/80 backdrop-blur-xl flex flex-col gap-2.5 max-w-xs animate-in zoom-in-95 duration-200">
          
          {/* Header Row */}
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 font-black text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'animate-ping bg-emerald-400' : 'bg-slate-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-500' : 'bg-slate-500'}`}></span>
              </span>
              <span>TV AUTO-DISPLAY MODE</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMinimized(true)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
                title="Minimize Controller"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-2 text-xs">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition shadow ${
                isPlaying 
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
            </button>

            {/* Speed Toggle */}
            <button
              onClick={() => {
                if (speed === 'slow') setSpeed('normal');
                else if (speed === 'normal') setSpeed('fast');
                else setSpeed('slow');
              }}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-semibold"
              title="Change Auto-Scroll Speed"
            >
              Speed: <strong className="text-amber-400 uppercase">{speed}</strong>
            </button>

            {/* Next Page Button */}
            <button
              onClick={goToNextPage}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              title="Skip to Next Page"
            >
              <ChevronRight className="w-4 h-4 text-blue-400" />
            </button>

            {/* Fullscreen Big Screen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow"
              title="Toggle Fullscreen (Big Screen TV Mode)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="text-[10px] text-slate-400 text-center pt-0.5">
            Auto-tours through all pages continuously • Ideal for Smart TV &amp; Lab displays
          </div>

        </div>
      )}
    </div>
  );
}
