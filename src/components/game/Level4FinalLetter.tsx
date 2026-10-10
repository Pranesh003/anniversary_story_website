import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Key, Lock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FINAL_LETTER_TEXT } from '../../data/gameData';

interface Level4Props {
  onEnterStory: () => void;
}

export const Level4FinalLetter: React.FC<Level4Props> = ({ onEnterStory }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Unlock animation sequence
    const timer = setTimeout(() => {
      setUnlocked(true);
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.4 }
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!unlocked) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < FINAL_LETTER_TEXT.length) {
        setTypedText(FINAL_LETTER_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [unlocked]);

  return (
    <div className="max-w-2xl mx-auto py-2 px-2 text-center">
      {!unlocked ? (
        /* Unlocking Key Animation */
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-16 flex flex-col items-center justify-center space-y-4"
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            <Lock className="w-20 h-20 text-[#782E43] animate-pulse" />
            <motion.div
              animate={{ x: [40, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="absolute text-[#C5A46D]"
            >
              <Key className="w-12 h-12" />
            </motion.div>
          </div>
          <h3 className="font-serif-romantic text-2xl text-[#782E43] font-bold">
            Unlocking Pranesh's Heart for Swasthika...
          </h3>
        </motion.div>
      ) : (
        /* Final Revealed Letter & Photo */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF8F0]/95 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl border-2 border-[#C5A46D]/60 relative text-left"
        >
          {/* Header Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#782E43] text-[#FFF8F0] font-bold text-xs uppercase tracking-widest mb-3 border border-[#C5A46D]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>FINAL REVEAL — A MESSAGE FROM PRANESH</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            </div>

            <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-[#782E43]">
              For My Dearest Swasthika ❤️
            </h2>
          </div>

          {/* Real Photograph Frame */}
          <div className="my-6 max-w-sm mx-auto polaroid-card rounded-xl p-3 bg-white shadow-xl border border-[#D8A0A8]/40">
            <div className="aspect-4/3 overflow-hidden rounded-lg relative">
              <img
                src="/images/rotaract-memory-v10.jpg"
                alt="Pranesh & Swasthika"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-handwriting text-center text-xl text-[#782E43] mt-2 font-bold">
              The Day I Proposed to Her — September 26, 2024 ❤️
            </p>
          </div>

          {/* Handwritten Letter Content with Typewriter */}
          <div className="bg-[#F4E7D8]/60 p-6 rounded-xl border border-[#D8A0A8]/40 my-6 font-handwriting text-xl sm:text-2xl text-[#38272A] leading-relaxed whitespace-pre-line shadow-inner min-h-[200px]">
            {typedText}
          </div>

          {/* CTA Button to Enter Love Story */}
          <div className="text-center pt-4">
            <button
              onClick={onEnterStory}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#782E43] via-[#8C3A52] to-[#782E43] text-[#FFF8F0] font-bold text-base sm:text-lg hover:opacity-95 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3 mx-auto border-2 border-[#C5A46D]/60 animate-bounce cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-[#D8A0A8] text-[#D8A0A8]" />
              <span>ENTER OUR LOVE STORY ❤️</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
