import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowDown, Play, Volume2, VolumeX, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OpeningLetterProps {
  onStartJourney: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onOpenGame?: () => void;
}

export const OpeningLetter: React.FC<OpeningLetterProps> = ({
  onStartJourney,
  isPlayingMusic,
  onToggleMusic,
  onOpenGame
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [letterRevealed, setLetterRevealed] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    // Trigger celebratory rose confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D8A0A8', '#782E43', '#C5A46D', '#FFF8F0']
    });
    setTimeout(() => {
      setLetterRevealed(true);
    }, 800);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 paper-texture overflow-hidden select-none">
      {/* Subtle floating heart background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D8A0A8]"
            initial={{
              x: Math.random() * 100 + '%',
              y: '110%',
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.2
            }}
            animate={{
              y: '-10%',
              opacity: [0.2, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Music Quick Control Toggle */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={onToggleMusic}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#38272A]/80 text-[#F4E7D8] text-xs backdrop-blur-md border border-[#D8A0A8]/40 hover:border-[#D8A0A8] transition-all shadow-md"
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-[#D8A0A8] animate-bounce" />
              <span>Playing Romantic Music</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#C5A46D]" />
              <span>Play Music</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center justify-center my-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="sealed-envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
              className="w-full flex flex-col items-center"
            >
              {/* Sealed Envelope Visual */}
              <div
                onClick={handleOpenEnvelope}
                className="group relative cursor-pointer w-full max-w-md bg-gradient-to-b from-[#F4E7D8] to-[#E8D5C4] rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-[#D8A0A8]/40 hover:border-[#782E43]/60 transition-all transform hover:-translate-y-2 hover:shadow-3xl"
              >
                {/* Envelope Top Flap Simulation */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#E8D5C4] to-[#D8C2B0] rounded-t-2xl border-b border-[#D8A0A8]/30 flex items-center justify-center">
                  {/* Wax Seal */}
                  <div className="w-16 h-16 rounded-full bg-[#782E43] border-4 border-[#C5A46D] shadow-lg flex items-center justify-center text-[#F4E7D8] font-bold text-xl group-hover:scale-110 transition-transform">
                    ❤️
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <span className="inline-block text-xs uppercase tracking-widest text-[#782E43]/80 font-bold mb-2">
                    CONFIDENTIAL & PERSONAL
                  </span>
                  <h1 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#782E43] mb-3">
                    For my Swasthika ❤️
                  </h1>
                  <p className="font-handwriting text-xl sm:text-2xl text-[#38272A]/80 leading-relaxed mb-6">
                    "I have a story to tell you.<br />
                    A story that started before you even knew it."
                  </p>

                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#782E43] text-[#FFF8F0] font-medium text-sm sm:text-base shadow-lg group-hover:bg-[#8C3A52] transition-colors">
                    <Mail className="w-4 h-4 text-[#D8A0A8]" />
                    <span>Open Your Letter</span>
                    <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                </div>

                {/* Subtle hint */}
                <p className="text-xs text-[#38272A]/50 mt-4 italic">
                  Tap seal to open
                </p>
              </div>

              {/* Direct Skip option */}
              <button
                onClick={onStartJourney}
                className="mt-8 text-xs text-[#782E43]/70 underline hover:text-[#782E43] transition-colors"
              >
                Skip intro & view full timeline
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="opened-letter"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-[#FFF8F0] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D8A0A8]/50 text-center relative"
            >
              {/* Decorative Header */}
              <div className="flex justify-center mb-4 text-[#782E43]">
                <Heart className="w-8 h-8 fill-[#782E43] animate-pulse" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold">
                OUR STORY — PRANESH & SWASTHIKA
              </span>

              <h2 className="font-serif-romantic text-3xl sm:text-5xl font-bold text-[#782E43] mt-2 mb-1">
                Pranesh & Swasthika
              </h2>

              <p className="text-sm text-[#782E43]/80 font-medium mb-6">
                September 19, 2023 — Forever begins with a memory.
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-[#D8A0A8] to-transparent my-6" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: letterRevealed ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 text-[#38272A] font-handwriting text-xl sm:text-2xl leading-relaxed text-left max-w-xl mx-auto"
              >
                <p>My Dearest Swasthika,</p>
                <p>
                  Before you scroll through these pages, I want you to take a breath and travel back in time with me.
                </p>
                <p>
                  From the moment I first saw you in college on September 19, 2023, to the nervous rotaract club confession, our 3 AM late-night talks, and our second anniversary on October 11, 2026...
                </p>
                <p className="text-[#782E43] font-bold">
                  Every scroll is a chapter of us. Every memory belongs to you.
                </p>
              </motion.div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#D8A0A8] to-transparent my-6" />

              {/* Begin Journey & Game CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                {onOpenGame && (
                  <button
                    onClick={onOpenGame}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A46D] text-[#38272A] font-bold text-base sm:text-lg shadow-xl hover:bg-[#D8A0A8] hover:scale-105 transition-all border border-[#782E43]/30 animate-pulse cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-[#782E43]" />
                    <span>Play "Unlock My Heart" Game 💗</span>
                  </button>
                )}

                <button
                  onClick={onStartJourney}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#782E43] to-[#8C3A52] text-[#FFF8F0] font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Begin Our Journey</span>
                  <ArrowDown className="w-5 h-5 animate-bounce text-[#D8A0A8]" />
                </button>

                {!isPlayingMusic && (
                  <button
                    onClick={onToggleMusic}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#782E43] text-[#782E43] hover:bg-[#782E43] hover:text-[#FFF8F0] font-medium text-sm transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    <span>Play Background Music</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Tagline */}
      <div className="relative z-10 text-center text-xs text-[#782E43]/60 mt-8 font-serif-romantic">
        "One first sight. One friendship. One confession. A thousand memories. One love."
      </div>
    </section>
  );
};
