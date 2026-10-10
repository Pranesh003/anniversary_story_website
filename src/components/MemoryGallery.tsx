import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, MapPin, Calendar, Sparkles } from 'lucide-react';
import { MEMORIES, MEMORY_CATEGORIES } from '../data/memories';
import type { MemoryItem } from '../data/memories';
import { RelationshipCounter } from './RelationshipCounter';

export const MemoryGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMemory, setActiveMemory] = useState<MemoryItem | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredMemories = selectedCategory === 'all'
    ? MEMORIES
    : MEMORIES.filter(m => m.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleNextMemory = () => {
    if (!activeMemory) return;
    const currentIndex = filteredMemories.findIndex(m => m.id === activeMemory.id);
    const nextIndex = (currentIndex + 1) % filteredMemories.length;
    setActiveMemory(filteredMemories[nextIndex]);
  };

  const handlePrevMemory = () => {
    if (!activeMemory) return;
    const currentIndex = filteredMemories.findIndex(m => m.id === activeMemory.id);
    const prevIndex = (currentIndex - 1 + filteredMemories.length) % filteredMemories.length;
    setActiveMemory(filteredMemories[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-8 bg-[#F4E7D8] paper-texture relative border-t border-[#D8A0A8]/30">
      <div className="max-w-6xl mx-auto">
        {/* Live Relationship Counter */}
        <RelationshipCounter />

        {/* Gallery Header */}
        <div className="text-center mt-16 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Chapter 09 — Our Scrapbook</span>
          </div>

          <h2 className="font-serif-romantic text-4xl sm:text-6xl font-bold text-[#782E43] mb-3">
            Two Years, A Thousand Memories
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#38272A]/80 max-w-2xl mx-auto">
            Click any picture to open our full-screen memory album with dates and notes ❤️
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MEMORY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#782E43] text-[#FFF8F0] shadow-md scale-105'
                  : 'bg-[#FFF8F0]/80 text-[#782E43] hover:bg-[#FFF8F0] border border-[#D8A0A8]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Memories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredMemories.map((mem, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={mem.id}
              onClick={() => setActiveMemory(mem)}
              className="polaroid-card cursor-pointer rounded-lg group"
            >
              <div className="relative aspect-4/3 w-full bg-[#E8D5C4] rounded overflow-hidden shadow-inner">
                {!imgErrors[mem.id] ? (
                  <img
                    src={mem.imageUrl}
                    alt={mem.title}
                    onError={() => handleImageError(mem.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#E8D5C4]">
                    <ImageIcon className="w-8 h-8 text-[#782E43] mb-1" />
                    <span className="text-xs font-semibold text-[#782E43]">{mem.title}</span>
                    <span className="text-[10px] text-[#38272A]/70 font-mono mt-1">
                      {mem.placeholderName}
                    </span>
                  </div>
                )}
                {/* Date Badge */}
                <div className="absolute top-2 right-2 bg-[#38272A]/80 text-[#FFF8F0] text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                  {mem.date}
                </div>
              </div>

              <div className="mt-3 text-center">
                <h4 className="font-serif-romantic text-lg font-bold text-[#782E43] group-hover:text-[#8C3A52] transition-colors">
                  {mem.title}
                </h4>
                <p className="text-xs text-[#38272A]/80 line-clamp-2 mt-1">
                  {mem.caption}
                </p>
                {mem.handwrittenNote && (
                  <p className="font-handwriting text-xl text-[#C5A46D] mt-1.5">
                    "{mem.handwrittenNote}"
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeMemory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveMemory(null)}
            >
              <div
                className="relative max-w-3xl w-full bg-[#FFF8F0] rounded-2xl p-6 shadow-2xl border border-[#D8A0A8] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveMemory(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#782E43] text-[#FFF8F0] flex items-center justify-center hover:bg-[#8C3A52] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevMemory}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 text-[#782E43] flex items-center justify-center hover:bg-white shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextMemory}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 text-[#782E43] flex items-center justify-center hover:bg-white shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Lightbox Content */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-h-[60vh] aspect-16/10 rounded-xl overflow-hidden bg-black/5 mb-4">
                    {!imgErrors[activeMemory.id] ? (
                      <img
                        src={activeMemory.imageUrl}
                        alt={activeMemory.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F4E7D8]">
                        <ImageIcon className="w-16 h-16 text-[#782E43] mb-2" />
                        <h4 className="font-serif-romantic text-2xl font-bold text-[#782E43]">
                          {activeMemory.title}
                        </h4>
                        <span className="text-xs text-[#38272A]/70 font-mono mt-2">
                          Add your real photograph: <code className="bg-[#FFF8F0] px-2 py-1 rounded">{activeMemory.placeholderName}</code>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-center max-w-xl">
                    <div className="flex items-center justify-center gap-3 text-xs text-[#782E43] mb-1 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" />
                        {activeMemory.date}
                      </span>
                      {activeMemory.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D8A0A8]" />
                          {activeMemory.location}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-romantic text-2xl font-bold text-[#782E43] mb-2">
                      {activeMemory.title}
                    </h3>

                    <p className="text-sm text-[#38272A] leading-relaxed mb-3">
                      {activeMemory.caption}
                    </p>

                    {activeMemory.handwrittenNote && (
                      <p className="font-handwriting text-2xl text-[#C5A46D]">
                        "{activeMemory.handwrittenNote}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
