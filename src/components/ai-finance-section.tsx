'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bot, TrendingUp, Cpu, Sparkles, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Claude Whisperer',
    description: 'Speaks fluent prompt engineering. Models respond to him differently.',
  },
  {
    icon: TrendingUp,
    title: 'Market Oracle',
    description: 'Sees patterns where others see noise. Probably insider info (just kidding, SEC).',
  },
  {
    icon: Cpu,
    title: 'Neural Network Native',
    description: 'Brain optimized for parallel processing. Runs on caffeine and curiosity.',
  },
  {
    icon: BarChart3,
    title: 'Data Alchemist',
    description: 'Transforms spreadsheets into gold. Excel fears him.',
  },
];

export default function AIFinanceSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const orb1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Futuristic Background - Multiple parallax layers */}
      <motion.div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[128px]" style={{ y: orb1Y }} />
      <motion.div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-yellow-500/10 blur-[128px]" style={{ y: orb2Y }} />

      {/* Grid Pattern */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">AI + Finance Mode</span>
          </motion.div>
          
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Where{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Intelligence
              </span>
              <motion.div
                animate={{ y: [-2, 2, -2], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="absolute -right-8 -top-4 h-6 w-6 text-yellow-400" />
              </motion.div>
            </span>
            {' '}Meets Capital
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            The intersection of artificial intelligence and financial acumen. A dangerous combination.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-amber-500/30 hover:bg-white/10"
              >
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3">
                    <feature.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Terminal/Code Style Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-gray-400">pabo_brain.exe</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div>
                <p className="text-gray-500">// Initializing PABO neural network...</p>
                <p className="mt-2 text-amber-400">
                  <span className="text-orange-400">const</span> pabo = {'{'}
                </p>
                <p className="ml-4 text-white">
                  intelligence: <span className="text-yellow-400">&quot;artificial + natural&quot;</span>,
                </p>
                <p className="ml-4 text-white">
                  tradingSkills: <span className="text-orange-400">Infinity</span>,
                </p>
                <p className="ml-4 text-white">
                  claudeTokens: <span className="text-orange-400">9999999</span>,
                </p>
                <p className="ml-4 text-white">
                  humor: <span className="text-yellow-400">&quot;deploying...&quot;</span>,
                </p>
                <p className="ml-4 text-white">
                  riskManagement: <span className="text-yellow-400">&quot;what&apos;s that?&quot;</span>,
                </p>
                <p className="text-amber-400">{'}'}</p>
                <p className="mt-4 text-gray-500">// Output:</p>
                <p className="mt-1 text-green-400">✓ PABO loaded successfully</p>
                <p className="text-green-400">✓ Markets trembling</p>
                <p className="text-green-400">✓ AI models impressed</p>
                <span className="inline-block h-4 w-2 bg-amber-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
