import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, Volume2, VolumeX, Lock, Key } from 'lucide-react';
import { Level1HiddenHeart } from './Level1HiddenHeart';
import { Level2StoryQuiz } from './Level2StoryQuiz';
import { Level3HeartPuzzle } from './Level3HeartPuzzle';
import { Level4FinalLetter } from './Level4FinalLetter';

interface GameProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterStory: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const UnlockMyHeartGame: React.FC<GameProps> = ({
  isOpen,
  onClose,
  onEnterStory,
  isPlayingMusic,
  onToggleMusic
}) => {
  // Level: 0 = Start, 1 = Hidden Heart, 2 = Quiz, 3 = Puzzle, 4 = Final Letter
  const [level, setLevel] = useState<number>(0);
  const [, setQuizScore] = useState<number>(0);

  if (!isOpen) return null;

  const handleNextLevel = () => {
    setLevel(prev => Math.min(4, prev + 1));
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setLevel(3);
  };

  const levels = [
    { title: "Start", step: 0 },
    { title: "Hidden Heart", step: 1 },
    { title: "Story Quiz", step: 2 },
    { title: "Repair Heart", step: 3 },
    { title: "Final Surprise", step: 4 }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#38272A]/90 backdrop-blur-xl flex flex-col justify-between overflow-y-auto"
      >
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-20 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#D8A0A8]/30 px-4 py-3 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            {/* Title */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#782E43] text-[#FFF8F0] flex items-center justify-center text-sm shadow">
                💗
              </div>
              <span className="font-serif-romantic font-bold text-lg text-[#782E43]">
                UNLOCK MY HEART
              </span>
            </div>

            {/* Level Stepper Bar */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold">
              {levels.map((lvl) => (
                <div
                  key={lvl.step}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all ${
                    level === lvl.step
                      ? "bg-[#782E43] text-[#FFF8F0] border-[#C5A46D] shadow"
                      : level > lvl.step
                      ? "bg-[#C5A46D]/20 text-[#782E43] border-[#C5A46D]/40"
                      : "bg-[#FFF8F0]/50 text-[#38272A]/40 border-transparent"
                  }`}
                >
                  {level > lvl.step ? (
                    <Heart className="w-3 h-3 fill-[#782E43] text-[#782E43]" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-current" />
                  )}
                  <span>{lvl.title}</span>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleMusic}
                className="p-2 rounded-full bg-[#782E43]/10 text-[#782E43] hover:bg-[#782E43]/20 transition-colors cursor-pointer"
                title={isPlayingMusic ? "Mute Music" : "Play Music"}
              >
                {isPlayingMusic ? (
                  <Volume2 className="w-4 h-4 text-[#782E43] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-[#38272A]/50" />
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#782E43]/10 text-[#782E43] hover:bg-[#782E43]/20 transition-colors cursor-pointer"
                title="Skip to Story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 py-8 px-4 flex items-center justify-center">
          <div className="w-full max-w-3xl">
            {/* Level 0 — Start Screen */}
            {level === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FFF8F0]/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#D8A0A8]/60 text-center max-w-xl mx-auto"
              >
                {/* Heart Lock Graphic */}
                <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center bg-[#782E43]/10 rounded-full border border-[#D8A0A8]/40 shadow-inner">
                  <Lock className="w-14 h-14 text-[#782E43] animate-pulse" />
                  <Key className="w-8 h-8 text-[#C5A46D] absolute -bottom-1 -right-1 animate-bounce" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>A Romantic Challenge for Swasthika</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                </div>

                <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#782E43] mb-3">
                  Hey, my Swasthika ❤️
                </h2>

                <p className="font-handwriting text-2xl sm:text-3xl text-[#38272A]/90 mb-8 leading-relaxed">
                  "Before I show you our two-year love story, I have a tiny challenge for you. Are you ready to unlock my heart?"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleNextLevel}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#782E43] text-[#FFF8F0] font-bold text-base shadow-xl hover:bg-[#8C3A52] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A46D]/40"
                  >
                    <Heart className="w-5 h-5 fill-[#D8A0A8] text-[#D8A0A8]" />
                    <span>Let's Play ❤️</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Level 1 — Hidden Heart */}
            {level === 1 && (
              <Level1HiddenHeart onComplete={handleNextLevel} />
            )}

            {/* Level 2 — Story Quiz */}
            {level === 2 && (
              <Level2StoryQuiz onComplete={handleQuizComplete} />
            )}

            {/* Level 3 — Heart Puzzle */}
            {level === 3 && (
              <Level3HeartPuzzle onComplete={handleNextLevel} />
            )}

            {/* Level 4 — Final Letter & Reveal */}
            {level === 4 && (
              <Level4FinalLetter onEnterStory={onEnterStory} />
            )}
          </div>
        </main>

        {/* Bottom Footer Note */}
        <footer className="py-4 text-center text-xs text-[#FFF8F0]/70 border-t border-[#FFF8F0]/10">
          <span>Made with all my love for Swasthika — Pranesh ❤️</span>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};
