'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, PartyPopper, Gift, Cake, Star } from 'lucide-react';

const Confetti = () => {
  const colors = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
  const [particles, setParticles] = useState<Array<{ id: number; x: number; color: string; delay: number; duration: number; drift: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      drift: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: [1, 1, 0],
            rotate: 360,
            x: [0, particle.drift, particle.drift * 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default function BirthdayMessageSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-24 sm:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-500/20 blur-[200px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[200px]" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-pink-500/15 blur-[180px]" style={{ animationDelay: '2s' }} />
      </div>

      {/* Confetti */}
      <Confetti />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="text-center"
        >
          {/* Floating Icons */}
          <div className="mb-8 flex justify-center gap-4">
            {[PartyPopper, Cake, Gift, Star, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                >
                  <Icon className="h-6 w-6 text-cyan-400 sm:h-8 sm:w-8" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Main Birthday Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <h2 className="mb-2 text-2xl font-medium text-gray-400 sm:text-3xl">Happy Birthday</h2>
            <div className="relative mb-8">
              <motion.h1
                className="text-6xl font-black tracking-tighter text-white sm:text-8xl md:text-9xl"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(6,182,212,0.5)',
                    '0 0 40px rgba(168,85,247,0.5)',
                    '0 0 20px rgba(236,72,153,0.5)',
                    '0 0 40px rgba(6,182,212,0.5)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                PABO
              </motion.h1>
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 blur-3xl">
                <span className="block text-6xl font-black tracking-tighter text-cyan-500/30 sm:text-8xl md:text-9xl">
                  PABO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Birthday Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-lg" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
              
              <div className="relative space-y-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
                <p>
                  To the guy who treats every day like it&apos;s leg day, every conversation like a
                  chance to mention Claude, and every spreadsheet like a work of art...
                </p>
                <p>
                  May your <span className="text-cyan-400">gains</span> be infinite, your{' '}
                  <span className="text-purple-400">portfolios</span> forever green, and your{' '}
                  <span className="text-pink-400">API calls</span> always successful.
                </p>
                <p className="text-xl font-medium text-white sm:text-2xl">
                  Here&apos;s to another year of being{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    absolutely legendary.
                  </span>
                </p>
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-8 border-t border-white/10 pt-6"
              >
                <p className="text-gray-500">With love, admiration, and fear</p>
                <p className="mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl font-semibold text-transparent">
                  Your Friends 🎉
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-medium text-white">2026 Edition</span>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
