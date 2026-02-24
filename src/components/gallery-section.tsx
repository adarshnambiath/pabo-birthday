
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  span: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    alt: 'Gym workout',
    category: 'Gym',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    alt: 'Fitness training',
    category: 'Gym',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    alt: 'Fun times',
    category: 'Funny',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    alt: 'Group moments',
    category: 'Memories',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    alt: 'Couple moment',
    category: 'Couple',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    alt: 'Gym session',
    category: 'Gym',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80',
    alt: 'Romantic walk',
    category: 'Couple',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    alt: 'Fun group photo',
    category: 'Funny',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80',
    alt: 'Weightlifting',
    category: 'Gym',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    alt: 'Memories together',
    category: 'Memories',
    span: 'col-span-2 row-span-1',
  },
];

const categories = ['All', 'Gym', 'Couple', 'Funny', 'Memories'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,146,60,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            The{' '}
            <span className="bg-gradient-to-r from-white via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Moments captured. Memories preserved. Placeholder images until the real ones arrive.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 transition-opacity duration-200 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-200 ${
                  hoveredId === item.id
                    ? 'border-white/30 shadow-[0_0_30px_rgba(251,146,60,0.3)]'
                    : 'border-transparent'
                }`}
              />

              {/* Category Badge */}
              <div
                className={`absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 ${
                  hoveredId === item.id
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {item.category}
              </div>

              {/* Placeholder Notice */}
              <div
                className={`absolute right-4 top-4 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 ${
                  hoveredId === item.id
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
              >
                Placeholder
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          📸 Replace these Unsplash placeholders with actual photos of Pabo&apos;s adventures!
        </motion.p>
      </div>
    </section>
  );
}
