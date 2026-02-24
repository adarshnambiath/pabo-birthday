
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const categories = ['All', 'Gym', 'Couple', 'Funny', 'Memories'];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [shuffledItems, setShuffledItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await fetch('/api/photos');
        const photos = await response.json();
        
        const items: GalleryItem[] = photos.map((photo: { src: string; category: string; alt: string }, index: number) => ({
          id: index + 1,
          src: photo.src,
          alt: photo.alt,
          category: photo.category,
        }));
        
        setGalleryItems(items);
        setShuffledItems(shuffleArray(items));
      } catch (error) {
        console.error('Error loading photos:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadPhotos();
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? shuffledItems
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
            Moments captured. Memories preserved forever.
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

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
          </div>
        )}

        {/* Empty State */}
        {!loading && galleryItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400">No photos yet! Add photos to the folders in <code className="rounded bg-white/10 px-2 py-1">public/photos/</code></p>
          </div>
        )}

        {/* Photo Grid */}
        {!loading && galleryItems.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl"
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
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Photo count */}
        {!loading && galleryItems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            📸 {galleryItems.length} photos loaded
          </motion.p>
        )}
      </div>
    </section>
  );
}
