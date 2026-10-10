import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { STORY_CHAPTERS } from '../data/story';

interface TimelineProps {
  activeChapterId?: number;
  onSelectChapter: (id: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onSelectChapter }) => {
  return (
    <div className="py-12 px-4 sm:px-8 bg-[#FFF8F0] border-y border-[#D8A0A8]/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-bold">
            TIMELINE OF OUR LOVE
          </span>
          <h3 className="font-serif-romantic text-3xl sm:text-4xl text-[#782E43] font-bold mt-1">
            Every Milestone from Day One
          </h3>
          <p className="font-handwriting text-xl text-[#38272A]/70 mt-1">
            Click any moment to jump directly into our story
          </p>
        </div>

        {/* Horizontal scrollable timeline chips for mobile / desktop */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#D8A0A8] justify-start md:justify-center">
          {STORY_CHAPTERS.map((ch) => (
            <motion.button
              key={ch.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectChapter(ch.id)}
              className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FFF8F0] border border-[#D8A0A8] hover:border-[#782E43] hover:bg-[#782E43] hover:text-[#FFF8F0] text-[#782E43] transition-all shadow-sm group"
            >
              <span className="w-6 h-6 rounded-full bg-[#782E43]/10 group-hover:bg-[#FFF8F0]/20 flex items-center justify-center text-xs font-bold font-mono">
                {ch.chapterNumber}
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold truncate max-w-[120px]">
                  {ch.title}
                </span>
                <span className="block text-[10px] opacity-75 font-mono">
                  {ch.date}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
