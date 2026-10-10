import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Volume2, VolumeX, BookOpen } from 'lucide-react';
import { STORY_CHAPTERS } from '../data/story';

interface ProgressIndicatorProps {
  onSelectChapter: (id: number) => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  onSelectChapter,
  isPlayingMusic,
  onToggleMusic
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChapterTitle, setActiveChapterTitle] = useState('Our Story');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Determine active chapter in viewport
      STORY_CHAPTERS.forEach((ch) => {
        const el = document.getElementById(`chapter-${ch.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveChapterTitle(`Chapter ${ch.chapterNumber}: ${ch.title}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#D8A0A8]/30 shadow-sm transition-all">
        {/* Scroll progress line */}
        <div
          className="h-1 bg-gradient-to-r from-[#D8A0A8] via-[#782E43] to-[#C5A46D] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Brand logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-full bg-[#782E43] text-[#FFF8F0] flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
              ❤️
            </div>
            <span className="font-serif-romantic font-bold text-base sm:text-lg text-[#782E43]">
              Pranesh & Swasthika
            </span>
          </div>

          {/* Current Active Chapter (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-xs text-[#38272A]/80 bg-[#F4E7D8] px-3 py-1 rounded-full border border-[#D8A0A8]/30">
            <BookOpen className="w-3.5 h-3.5 text-[#782E43]" />
            <span className="font-medium truncate max-w-[260px]">{activeChapterTitle}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleMusic}
              className="p-2 rounded-full bg-[#782E43]/10 text-[#782E43] hover:bg-[#782E43]/20 transition-colors"
              title={isPlayingMusic ? "Mute music" : "Play music"}
            >
              {isPlayingMusic ? (
                <Volume2 className="w-4 h-4 text-[#782E43] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#38272A]/50" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#782E43] text-[#FFF8F0] text-xs font-semibold hover:bg-[#8C3A52] transition-colors shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">Chapters</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Desktop Chapter Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#FFF8F0] h-full shadow-2xl p-6 overflow-y-auto border-l border-[#D8A0A8] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D8A0A8]/40 mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#782E43] fill-[#782E43]" />
                <h3 className="font-serif-romantic font-bold text-xl text-[#782E43]">
                  Story Chapters
                </h3>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-[#782E43] hover:bg-[#D8A0A8]/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 flex-1">
              {STORY_CHAPTERS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    onSelectChapter(ch.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 rounded-xl border border-[#D8A0A8]/30 hover:border-[#782E43] hover:bg-[#F4E7D8] transition-all flex items-center gap-3 group"
                >
                  <span className="w-7 h-7 rounded-full bg-[#782E43] text-[#FFF8F0] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {ch.chapterNumber}
                  </span>
                  <div>
                    <span className="block font-bold text-sm text-[#782E43] group-hover:text-[#8C3A52]">
                      {ch.title}
                    </span>
                    <span className="block text-[11px] text-[#38272A]/70 font-mono">
                      {ch.date}
                    </span>
                  </div>
                </button>
              ))}

              <button
                onClick={() => {
                  const galleryEl = document.getElementById('gallery');
                  if (galleryEl) galleryEl.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left p-3 rounded-xl bg-[#782E43] text-[#FFF8F0] font-semibold text-sm flex items-center justify-center gap-2 mt-4 shadow-md"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Jump to Memory Scrapbook</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#D8A0A8]/30 text-center text-xs text-[#782E43]/70 font-serif-romantic">
              Pranesh ❤️ Swasthika
            </div>
          </div>
        </div>
      )}
    </>
  );
};
