'use client';

import { motion, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  suffix?: string;
  gradient: string;
  delay: number;
  isNumber?: boolean;
  numValue?: number;
}

function StatCard({ label, value, suffix = '', gradient, delay, isNumber = false, numValue = 0 }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(isNumber ? '0' : value);

  useEffect(() => {
    if (isInView && isNumber && numValue > 0) {
      const controls = animate(0, numValue, {
        duration: 2,
        delay: delay,
        onUpdate(value) {
          setDisplayValue(Math.floor(value).toString());
        },
      });
      return () => controls.stop();
    }
  }, [isInView, isNumber, numValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm"
    >
      {/* Animated Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-30`} style={{ padding: '1px' }} />

      {/* Content */}
      <div className="relative z-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">
          {label}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-4xl font-black text-transparent sm:text-5xl`}>
            {isNumber ? displayValue : value}
          </span>
          {suffix && (
            <span className="text-xl font-semibold text-gray-500">{suffix}</span>
          )}
        </div>
      </div>

      {/* Corner Glow */}
      <div className={`absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-r ${gradient} opacity-20 blur-2xl`} />
    </motion.div>
  );
}

const stats = [
  {
    label: 'Bench Press',
    value: '225',
    suffix: 'kg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    label: 'Sleep Schedule',
    value: '12 hrs',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    label: 'AI Usage',
    value: 'Anti AI',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    label: 'Ladies Man',
    value: 'only likes Aadya',
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    label: 'Gym Sessions',
    value: 'does not miss a day',
    suffix: '/yr',
    gradient: 'from-yellow-500 to-orange-500',
    isNumber: true,
    numValue: 365,
  },
  {
    label: 'Claude Usage',
    value: 'addicted',
    suffix: '+',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Background Grid - Parallax */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" 
      />
      
      {/* Radial Gradient - Parallax */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.1),transparent_50%)]" 
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
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            The{' '}
            <span className="bg-gradient-to-r from-white via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Stats
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Numbers don&apos;t lie. But these might be slightly exaggerated.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              gradient={stat.gradient}
              delay={index * 0.1}
              isNumber={stat.isNumber}
              numValue={stat.numValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
