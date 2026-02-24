'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const EnergyBeam = dynamic(() => import('@/components/ui/energy-beam'), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-black" />,
});

const headlines = [
  "Built Different.",
  "Optimized Human.",
  "Powered by Gains & GPT.",
  "Finance Mode: Activated.",
  "Maximum Efficiency Protocol.",
];

export default function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Energy Beam Background */}
      <div className="absolute inset-0 z-0">
        <EnergyBeam className="opacity-80" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
        {/* Badge */}
        <div className={`mb-6 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            Birthday Protocol Initiated
          </span>
        </div>

        {/* Main Name */}
        <h1 className={`relative mb-4 text-center transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <span className="block text-8xl font-black tracking-tighter text-white sm:text-9xl md:text-[12rem] lg:text-[16rem]">
            PABO
          </span>
          {/* Glow effect - using CSS only */}
          <span className="absolute inset-0 -z-10 blur-3xl">
            <span className="block text-8xl font-black tracking-tighter text-orange-500/40 sm:text-9xl md:text-[12rem] lg:text-[16rem]">
              PABO
            </span>
          </span>
        </h1>

        {/* Headlines - simple CSS transition */}
        <div className={`mb-8 h-12 transition-opacity duration-700 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p
            key={currentHeadline}
            className="animate-fade-in bg-gradient-to-r from-white via-yellow-300 to-orange-500 bg-clip-text text-center text-2xl font-medium text-transparent sm:text-3xl md:text-4xl"
          >
            {headlines[currentHeadline]}
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            onClick={scrollToContent}
            size="lg"
            className="group relative overflow-hidden rounded-full border border-amber-500/50 bg-black/50 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/20 hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]"
          >
            <span className="relative z-10">Enter the Experience</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="animate-bounce cursor-pointer text-white/50 hover:text-white/80"
            onClick={scrollToContent}
          >
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
