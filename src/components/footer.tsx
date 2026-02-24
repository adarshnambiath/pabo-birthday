'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-8">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
            <span>and</span>
            <Code className="h-4 w-4 text-cyan-400" />
            <span>for the legend himself</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-sm font-medium text-transparent">
              PABO BIRTHDAY EXPERIENCE™ 2026
            </span>
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>

          <p className="text-xs text-gray-600">
            Powered by Next.js, Tailwind, shadcn/ui, and an unhealthy amount of gradients
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
