import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Heart, Quote, Image as ImageIcon } from 'lucide-react';
import type { StoryChapterData } from '../data/story';

interface StoryChapterProps {
  chapter: StoryChapterData;
  index: number;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({ chapter }) => {
  const [imgError, setImgError] = useState(false);

  // Theme-based class mappings
  const themeStyles = {
    cream: 'bg-[#FFF8F0] text-[#38272A] border-[#D8A0A8]/20',
    scrapbook: 'bg-[#F4E7D8] text-[#38272A] border-[#C5A46D]/30 paper-texture',
    rose: 'bg-gradient-to-b from-[#FFF8F0] via-[#FDF0F2] to-[#FFF8F0] text-[#38272A] border-[#D8A0A8]/40',
    midnight: 'bg-[#15182D] text-[#F4E7D8] border-[#383D60] shadow-2xl',
    gold: 'bg-gradient-to-b from-[#FFF8F0] via-[#FAF3E6] to-[#FFF8F0] text-[#38272A] border-[#C5A46D]/40',
    sunset: 'bg-gradient-to-b from-[#FFF8F0] via-[#FCECE5] to-[#FFF8F0] text-[#38272A] border-[#D8A0A8]/30'
  };

  const isDark = chapter.theme === 'midnight';

  return (
    <section
      id={`chapter-${chapter.id}`}
      className={`relative py-16 sm:py-24 px-4 sm:px-8 border-b ${themeStyles[chapter.theme]} transition-colors duration-500 overflow-hidden`}
    >
      {/* Dark theme starry night overlay */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-yellow-100 rounded-full animate-pulse" />
          <div className="absolute bottom-12 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-100 rounded-full blur-[1px] animate-pulse" />
          {/* Crescent Moon */}
          <div className="absolute top-8 right-8 w-16 h-16 rounded-full shadow-inner shadow-yellow-200/50 border-r-4 border-b-4 border-yellow-100/80 opacity-70" />
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Chapter {chapter.chapterNumber} — {chapter.badge}</span>
          </div>

          <h2 className={`font-serif-romantic text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 ${isDark ? 'text-[#F4E7D8] glow-text-rose' : 'text-[#782E43]'}`}>
            {chapter.title}
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#C5A46D] mb-4">
            {chapter.subtitle}
          </p>

          <div className={`flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium ${isDark ? 'text-[#D8A0A8]' : 'text-[#782E43]/80'}`}>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/5 border border-current/10">
              <Calendar className="w-4 h-4 text-[#C5A46D]" />
              <span>{chapter.date}</span>
            </div>
            {chapter.location && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/5 border border-current/10">
                <MapPin className="w-4 h-4 text-[#D8A0A8]" />
                <span>{chapter.location}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed ${isDark ? 'text-[#F4E7D8]/90' : 'text-[#38272A]/90'}`}
          >
            {chapter.content.map((paragraph, pIdx) => {
              const isSpecialCallout = paragraph.startsWith('"I love you') || paragraph.startsWith('"I LOVE YOU');
              return (
                <p
                  key={pIdx}
                  className={isSpecialCallout ? 'font-serif-romantic text-2xl sm:text-3xl font-bold text-[#782E43] p-4 bg-[#D8A0A8]/20 rounded-xl border-l-4 border-[#782E43]' : ''}
                >
                  {paragraph}
                </p>
              );
            })}

            {/* Highlight quote block */}
            {chapter.highlightText && (
              <div className={`my-6 p-6 rounded-2xl relative border ${isDark ? 'bg-[#1E233D] border-[#C5A46D]/40 text-[#F4E7D8]' : 'bg-[#FFF8F0] border-[#D8A0A8]/50 text-[#782E43] shadow-md'}`}>
                <Quote className="w-8 h-8 text-[#C5A46D]/30 absolute top-3 left-3" />
                <p className="relative z-10 font-serif-romantic text-xl sm:text-2xl italic pl-6 font-semibold">
                  "{chapter.highlightText}"
                </p>
              </div>
            )}

            {/* Handwritten note annotation */}
            {chapter.handwrittenCaption && (
              <div className="pt-2 flex items-start gap-2">
                <Heart className="w-5 h-5 text-[#D8A0A8] fill-[#D8A0A8] shrink-0 mt-1" />
                <p className="font-handwriting text-2xl sm:text-3xl text-[#782E43] transform -rotate-1">
                  ~ {chapter.handwrittenCaption}
                </p>
              </div>
            )}
          </motion.div>

          {/* Polaroid Image Frame Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="polaroid-card w-full max-w-sm rounded-lg transform rotate-0 transition-transform duration-300">
              <div className="relative aspect-4/3 w-full bg-[#F4E7D8] rounded overflow-hidden shadow-inner group">
                {!imgError ? (
                  <img
                    src={chapter.defaultImageUrl}
                    alt={chapter.imageCaption}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F4E7D8] text-[#782E43]">
                    <ImageIcon className="w-12 h-12 text-[#D8A0A8] mb-2 animate-bounce" />
                    <span className="font-semibold text-sm">Photograph Placeholder</span>
                    <span className="text-xs text-[#38272A]/60 mt-1">
                      Replace with: <code className="bg-[#FFF8F0] px-1.5 py-0.5 rounded text-[#782E43] font-mono">{chapter.imagePlaceholderName}</code>
                    </span>
                  </div>
                )}
                {/* Vintage Date Overlay Badge */}
                <div className="absolute bottom-2 left-2 bg-[#38272A]/80 text-[#FFF8F0] text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                  {chapter.date}
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-handwriting text-xl text-[#38272A] leading-snug">
                  {chapter.imageCaption}
                </p>
                <p className="text-[10px] text-[#782E43]/60 uppercase tracking-widest mt-1 font-mono">
                  [ {chapter.imagePlaceholderName} ]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
