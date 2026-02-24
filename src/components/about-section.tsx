'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Brain, TrendingUp, BookOpen, Laugh } from 'lucide-react';

const traits = [
  {
    icon: Dumbbell,
    title: 'Gym Rat',
    description: 'Protein shake philosopher. Never skips leg day (allegedly).',
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/50',
  },
  {
    icon: Brain,
    title: 'AI Overlord',
    description: 'Claude enthusiast. Probably has more tokens than social interactions.',
    gradient: 'from-yellow-400 to-orange-500',
    glow: 'shadow-yellow-500/50',
  },
  {
    icon: TrendingUp,
    title: 'Finance Brain',
    description: 'Portfolio optimizer. Thinks in compound interest.',
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'shadow-amber-500/50',
  },
  {
    icon: BookOpen,
    title: 'Economic Philosopher',
    description: 'Supply and demand? More like supply and command.',
    gradient: 'from-orange-400 to-amber-500',
    glow: 'shadow-orange-500/50',
  },
  {
    icon: Laugh,
    title: 'Professional Funny Guy',
    description: 'Wit sharper than market volatility. ROI on jokes: immeasurable.',
    gradient: 'from-yellow-500 to-orange-600',
    glow: 'shadow-yellow-500/50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              PABO
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            A rare specimen. Part human, part algorithm. 100% legend.
          </p>
        </motion.div>

        {/* Traits Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${trait.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* Icon */}
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${trait.gradient} p-3`}
              >
                <trait.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {trait.title}
              </h3>
              <p className="text-gray-400">{trait.description}</p>

              {/* Corner Accent */}
              <div
                className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-r ${trait.gradient} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
