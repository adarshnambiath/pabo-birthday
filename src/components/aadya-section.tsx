'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Stars } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  startY: number;
  duration: number;
  delay: number;
}

function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newHearts = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      startY: 100 + Math.random() * 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-500/20"
          style={{ left: `${heart.x}%` }}
          initial={{ y: '100vh' }}
          animate={{
            y: '-10vh',
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <Heart className="h-4 w-4 fill-current sm:h-6 sm:w-6" />
        </motion.div>
      ))}
    </div>
  );
}

export default function AadyaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Romantic Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      {/* Floating Hearts */}
      <FloatingHearts />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2"
          >
            <Heart className="h-4 w-4 fill-pink-400 text-pink-400" />
            <span className="text-sm font-medium text-pink-400">His Better Half</span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Pabo{' '}
            <span className="inline-flex items-center">
              <Heart className="mx-2 h-8 w-8 fill-pink-500 text-pink-500 sm:h-12 sm:w-12" />
            </span>{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Aadya
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl">
              {/* Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 opacity-50 blur-lg" />
              
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/photos/couple.jpg"
                  alt="Pabo and Aadya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 -top-4 rounded-2xl border border-pink-500/30 bg-black/80 p-3 backdrop-blur-sm"
              >
                <Stars className="h-6 w-6 text-pink-400" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-rose-500/30 bg-black/80 p-3 backdrop-blur-sm"
              >
                <Sparkles className="h-6 w-6 text-rose-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5" />
                <p className="relative text-lg leading-relaxed text-gray-300">
                  Beside every great man is someone rolling their eyes at his jokes.{' '}
                  <span className="text-pink-400">Aadya</span> is that person — the one who keeps
                  Pabo grounded while he&apos;s busy trying to optimize the universe.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5" />
                <p className="relative text-lg leading-relaxed text-gray-300">
                  She&apos;s the calm to his chaos, the logic to his &quot;let me just try one more
                  trading strategy,&quot; and probably the only person who can out-debate him (but
                  don&apos;t tell him that).
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-rose-500/10 p-6 backdrop-blur-sm"
              >
                <p className="text-center text-xl font-medium text-white">
                  &quot;She&apos;s not just my better half.
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    She&apos;s my best half.&quot;
                  </span>
                </p>
                <p className="mt-2 text-center text-sm text-gray-500">— Pabo, probably</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
